import {test,expect} from '@playwright/test'



test (`navigate to the web page`, async({page})=>{
    const NavigationToTheResource = await page.goto(`http://opencart.qatestlab.net/`)

    NavigationToTheResource;

 await expect (page).toHaveTitle(`Best Friends`)
 
})

test (`perform basic action`, async({page})=>{
    const NavigationToTheResource = await page.goto(`http://opencart.qatestlab.net/`)

    NavigationToTheResource;
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


await registerEmail.fill(`valid_email@test.com`)

const registerTelephone = page.getByLabel(`telephone`)
const validphone = `123321111`
await registerTelephone.fill(validphone)

// locator.press()	Press single key
const regiterPassword = page.getByPlaceholder(`Password`)
const validPass = `test_12345`

await regiterPassword.fill(validPass)



const regiterPasswordConfirm = page.getByRole(`textbox`,{name:`Password Confirm`)

await regiterPasswordConfirm.fill(validPass)

/*

locator.uncheck()	Uncheck the input checkbox
locator.hover()	Hover mouse over the element
locator.focus()	Focus the element
locator.press()	Press single key
locator.setInputFiles()	Pick files to upload
*/


})