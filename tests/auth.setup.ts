import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../auth.json');

setup('authenticate', async ({ page }) => {
    await page.goto(`http://opencart.qatestlab.net/`)
   
        const topLinksMyaccount = await page.locator('#top-links').getByText('My Account').click() //found by using locators identifier 
        topLinksMyaccount;
        const topLinksMyAccountRegister = await page.getByRole(`link`,{name:`Register`}).click()
        topLinksMyAccountRegister;
       
        const registerName = page.getByPlaceholder(`First Name`)
        await registerName.fill(`New User`)
        const registerLastName = page.getByPlaceholder(`Last Name`)
       
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

  await page.context().storageState({ path: authFile });
});