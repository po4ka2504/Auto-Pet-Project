import  {test,expect} from '@playwright/test'

test.describe(`Profile user tests`,()=>{
    test.beforeEach(async({page})=>{
      const NavigationToTheResource = await page.goto(`http://opencart.qatestlab.net/`)
      NavigationToTheResource;
     await expect (page).toHaveTitle(`Best Friends`)
    })
    test(`user Profile Edit`, async({page})=>{
  
      const myAccountBar = page.getByRole(`link`,{name:`My Account`})
      
      await myAccountBar.click()
      await page.getByRole(`link`,{name:`Edit your account information`}).click()
      
      const profileTextBoxName = page.getByRole(`textbox`,{name:`first name`})
      
      await profileTextBoxName.clear()
      await profileTextBoxName.fill(`Tester125`)
      await page.getByText(`Continue`).click()
      await page.getByRole(`link`,{name:`Edit your account information`}).click()
      
      await expect(profileTextBoxName).toHaveValue(`Tester125`)
      })
    
  })