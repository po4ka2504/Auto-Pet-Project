import  {test,expect} from '@playwright/test'



test.describe(`happy path+critical logic`,() =>{
  test.beforeEach(async({page})=>{
    const NavigationToTheResource = await page.goto(`http://opencart.qatestlab.net/`)
    NavigationToTheResource;
   await expect (page).toHaveTitle(`Best Friends`)
  })

test.skip (`user creation `, async({page})=>{
//locator.click()	Click the element
const topLinksMyaccount = await page.locator('#top-links').getByText('My Account').click() //found by using locators identifier 
topLinksMyaccount;
const topLinksMyAccountRegister = await page.getByRole(`link`,{name:`Register`}).click()
topLinksMyAccountRegister;
//locator.fill()	Fill the form field, input text
const registerName = page.getByPlaceholder(`First Name`)
await registerName.fill(`New User`)
const registerLastName = page.getByPlaceholder(`Last Name`)
//await registerLastName.fill(`New User Last name`) bug with input fielt 
await registerLastName.fill(`123`)
const registerEmail = page.getByPlaceholder(`E-Mail`).first()

function generateUniqueValidEmail() {
    const timestamp = new Date().getTime();
    return `user_${timestamp}@test.com`;
  }
  let generateUniqueValidEmailValue =generateUniqueValidEmail()

  await registerEmail.fill(generateUniqueValidEmailValue)

const registerTelephone = page.getByLabel(`telephone`)
const validphone = `123321111`
await registerTelephone.fill(validphone)
const regiterPassword = page.getByPlaceholder(`Password`)
const validPass = `test_12345`
await regiterPassword.fill(validPass)
const regiterPasswordConfirm = page.getByRole(`textbox`,{name:`Password Confirm`})
await regiterPasswordConfirm.fill(validPass)

const registerNewsleterYes = page.getByText('Yes', { exact: true })
const registerNewsleterNo = page.getByText('No', { exact: true })

await registerNewsleterYes.check()
await registerNewsleterNo.check()
await registerNewsleterYes.check()

const registerRadio = page.getByRole(`radio`)

await registerRadio.click()

const registerButton = page.getByRole(`button`,{name:`Continue`})

await registerButton.click()

const finalScreen =page.getByText('Account Success Your Account')
await expect(finalScreen).toContainText(`Your Account Has Been Created!`)
/*
// locator.press()	Press single key
locator.uncheck()	Uncheck the input checkbox
locator.hover()	Hover mouse over the element
locator.focus()	Focus the element
locator.press()	Press single key
locator.setInputFiles()	Pick files to upload
*/
})

test(`check the category`, async({page})=>{

 const dogsLinkLocator= page.getByRole('link', { name: ' Dogs' })
 
 await dogsLinkLocator.hover()

// Now you can interact with it
const hoverMenu = page.getByRole('list').filter({ hasText: 'Accessories Food Clothes' }).nth(1)
await  expect(hoverMenu).toBeVisible()
})
})


