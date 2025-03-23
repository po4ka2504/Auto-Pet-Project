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
p


//locator.selectOption()	Select option in the drop down*/



 /*

locator.uncheck()	Uncheck the input checkbox
locator.hover()	Hover mouse over the element
locator.fill()	Fill the form field, input text
locator.focus()	Focus the element
locator.press()	Press single key
locator.setInputFiles()	Pick files to upload
*/


})