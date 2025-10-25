import {test,expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage.js"


test.describe("All Negative Scenarios",()=>
{
    let loginPage;

    test.beforeEach(async function({page})
    {

    loginPage=new LoginPage(page)

    await loginPage.gotoURL()

    })

    test("Error message validation - without username and password",async function({page})
 {
   
    await loginPage.submit()

    await expect(page.locator(".errorMessage")).toContainText("Email and Password is required")
    
})

test("Error message validation - With username and without password",async function({page})
{
   
   await loginPage.fillEmail("admin@email.com")

    await  loginPage.submit()

    await expect(page.locator(".errorMessage")).toContainText("Password is required")
    
})

test("Error message validation - Without username and with password",async function({page})
{
  
   await loginPage.fillPassword("admin@124")

    await loginPage.submit()

    await expect(page.locator(".errorMessage")).toContainText("Email is required")
    
})

test("Error message validation - Invalid username and Invalid password",async function({page})
{
    await loginPage.fillEmail("adminasdasdasdasd@email.com")

    await loginPage.fillPassword("admin@124asdasdasd")

    await loginPage.submit()

    await expect(page.locator(".errorMessage")).toContainText("Email and Password Doesn't match")
    
})

})



