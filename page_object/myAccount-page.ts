import {expect, type Locator, type Page} from '@playwright/test';

export class myAccount {
    readonly page: Page;
    readonly EditYourAccountInformationLink: Locator;
    readonly EditInformationFistName: Locator;
    readonly ButtonContinue: Locator;
    readonly EditInformationLastName: Locator;
    readonly EditInformationEmail: Locator;
    readonly EditInformationTelephone: Locator;

constructor(page:Page){
    this.page = page;
    this.EditYourAccountInformationLink = page.getByRole(`link`,{name:`Edit your account information`});
    this.EditInformationFistName = page.getByRole('textbox', { name: 'First Name *' })
    this.ButtonContinue = page.getByRole('button', { name: 'Continue' })
    this.EditInformationLastName = page.getByRole('textbox', { name: 'Last Name*' })
    this.EditInformationEmail = page.getByRole('textbox', { name: 'E-Mail*' })
    this.EditInformationTelephone = page.getByRole('textbox', { name: 'Telephone*' })   
}
    async startPage(){
        await this.page.goto(`http://opencart.qatestlab.net/`);
    }

    async emailinput(){
        const timestamp = Date.now();
        const uniqueEmail= `test_usser_${timestamp}@test.com`;
        console.log(`using unique email:${uniqueEmail}`);
        
    }
}
