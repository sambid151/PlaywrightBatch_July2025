import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage{

    constructor(page) {
        super(page)
        this.page = page;
        //add a locator with this xpath //input[@id='name'] and name it as usernameInput
        this.usernameInput = page.locator("//input[@id='name']");
        // add a locator with this xpath //input[@id='email'] and name it as emailInput
        this.emailInput = page.locator("//input[@id='email']");
        // add a locator with this xpath //input[@id='password'] and name it as passwordInput
        this.passwordInput = page.locator("//input[@id='password']");
        // add a locator for checkboxes //input[@type='checkbox'] and name it as termsCheckbox
        this.interest=page.locator("//label[@class='interest']")
        // add a locator for //input[@type='radio'] and name it as gender
        this.gender = page.locator("//input[@type='radio']");
        // add a locator for //select[@id='state'] and name it as state
        this.state = page.locator("//select[@id='state']");
        // add a locator for //select[@id='hobbies'] and name it as hobbies
        this.hobbies = page.locator("//select[@id='hobbies']");
        //locator for //button[normalize-space()='Sign up'] and name it as signUpButton
        this.signUpButton=page.locator("//button[normalize-space()='Sign up']")

    }

    //write a method for enter username for usernameInput field and takes username as parameter
    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }   
    //write a method for enter email for emailInput field and takes email as parameter
    async enterEmail(email) {
        await this.emailInput.fill(email);

    }
    //write a method for enter password for passwordInput field and takes password as parameter
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }
    //write a method for select interest checkboxes and takes interestValue as parameter using for loop and check the checkbox   
  async selectInterest(interestValue)
    {
        await this.interest.check(interestValue)
    }
    //Selects a checkbox by its label text
       async selectInterestByLabel(labelText) {
        const checkboxes = await this.page.locator("//label[@class='interest']").all();
        for (const checkbox of checkboxes) {
            const text = await checkbox.textContent();
            if (text.trim() === labelText) {
                await checkbox.click();
                break;
            }
        }
    }

    // write a method for gender which takes gender as an argument run a loop and select respective gender
    async selectGender(gender) {
        const radios = await this.gender.all();
        for (const radio of radios) {
            const value = await radio.getAttribute('value');
            if (value === gender) {
                await radio.check();
                break;
            }
        }
    }

    // write a method for select state from dropdown and takes stateValue as parameter
    async selectState(stateValue) {
        await this.state.selectOption(stateValue);
    }
    // write a method for select hobbies from dropdown and takes hobbiesValue as parameter
    async selectHobbies(hobbiesValue) {
        await this.hobbies.selectOption(hobbiesValue);
    }
    // write a method for click on signUpButton
    async clickSignUpButton() {
        await this.signUpButton.click();
    }

}