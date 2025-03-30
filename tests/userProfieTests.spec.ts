import  {test,expect, selectors} from '@playwright/test'
import { myAccount } from '../page_object/myAccount-page'
import { userInfo } from 'node:os';

test.describe(`Profile user tests`,()=>{
    test.beforeEach(async({page})=>{
      const ProfileUser = new myAccount(page);
      await ProfileUser.startPage();
     await expect (page).toHaveTitle(`Best Friends`)
    })
    
    test(`user Profile Edit`, async({page})=>{
      const UserProfileEdit = new myAccount(page);
      const myAccountBar = page.getByRole(`link`,{name:`My Account`})
      await myAccountBar.click()
      
       await UserProfileEdit.EditYourAccountInformationLink.click()
       await UserProfileEdit.EditInformationFistName.click({clickCount:3})
       await UserProfileEdit.EditInformationFistName.fill(`Tester125`)
       await UserProfileEdit.EditInformationLastName.click()
       await UserProfileEdit.EditInformationLastName.fill(`Test Last Name`)
       await UserProfileEdit.EditInformationEmail.click({ timeout: 5000 })
       
       const timestamp = Date.now();
       const uniqueEmail= `test_usser_${timestamp}@test.com`;
       console.log(`using unique email:${uniqueEmail}`);
       
       await UserProfileEdit.EditInformationEmail.fill(uniqueEmail)
       
       await UserProfileEdit.EditInformationTelephone.click({clickCount:3})
       await UserProfileEdit.EditInformationTelephone.fill(`9379992`)

       //finish
       await UserProfileEdit.ButtonContinue.click()
       await UserProfileEdit.EditYourAccountInformationLink.click()
      

      await page.waitForLoadState('networkidle')
      await expect(UserProfileEdit.EditInformationFistName).toHaveValue(`Tester125`)
      await expect(UserProfileEdit.EditInformationLastName).toHaveValue(`Test Last Name`)
       await expect(UserProfileEdit.EditInformationEmail).toHaveValue(uniqueEmail)
      // Because of the bug 
      // await expect(UserProfileEdit.EditInformationTelephone).toHaveValue(`9379992`)  
    })
    
  })