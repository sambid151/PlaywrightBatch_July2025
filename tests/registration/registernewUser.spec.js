import { test,expect } from '@playwright/test'
import { RegistrationPage } from '../../pages/RegistrationPage'
import { LoginPage } from '../../pages/LoginPage'
import registrationData from '../../testdata/registration.json'

test('should register multiple users from JSON data', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const registrationPage = new RegistrationPage(page)
    
    // Loop through all users in the JSON file
    for (const userData of registrationData) {
        // Navigate to login page and click signup for each user
        await loginPage.gotoURL()
        
        await loginPage.clickNewUserSignup()
        
        // Fill in registration form
        await registrationPage.enterUsername(userData.name)

        const uniqueEmail = `${userData.email.split('@')[0]}_${Date.now()}@${userData.email.split('@')[1]}`

        await registrationPage.enterEmail(uniqueEmail)

        await registrationPage.enterPassword(userData.password)

        await registrationPage.selectInterestByLabel(userData.interest)

        await registrationPage.selectGender(userData.gender)
        
        await registrationPage.selectState(userData.state)
        
        // Select multiple hobbies
        for (const hobby of userData.hobbies) {
            await registrationPage.selectHobbies(hobby)
        }
        
        // Submit the form
        await registrationPage.clickSignUpButton()

        // verify msg with this method getSuccessMessageText
        const successMsg = await loginPage.getSuccessMessageText()

        console.log("Success Message: ", successMsg);
        
        
        expect(successMsg).toContain('Signup successfully, Please login!')
    }
})
