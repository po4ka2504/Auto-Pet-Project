import  {test,expect} from '@playwright/test'
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
      
       UserProfileEdit.EditYourAccountInformationLink.click()

       UserProfileEdit.EditInformationFistName.click({clickCount:2})
       UserProfileEdit.EditInformationFistName.fill(`Tester125`)
    
      //  UserProfileEdit.EditInformationLastName.click()
      //  UserProfileEdit.EditInformationLastName.fill(`Test Last Name`)
  
      // UserProfileEdit.EditInformationEmail.click({ timeout: 5000 })
      // UserProfileEdit.EditInformationEmail.fill(`validtestmail@mail.com`)
      // UserProfileEdit.EditInformationTelephone.click({ timeout: 5000 })
      // UserProfileEdit.EditInformationTelephone.fill(`9379992`)

       //finish
    
      UserProfileEdit.ButtonContinue.click()
      UserProfileEdit.EditYourAccountInformationLink.click()
      

      await page.waitForLoadState('networkidle')
      await expect(UserProfileEdit.EditInformationFistName).toHaveValue(`Tester125`)
      // await expect(UserProfileEdit.EditInformationLastName).toHaveValue(`Test Last Name`)
      // await expect(UserProfileEdit.EditInformationEmail).toHaveValue(`validtestmail@mail.com`)
      // await expect(UserProfileEdit.EditInformationTelephone).toHaveValue(`9379992`)  
    })
    
  })