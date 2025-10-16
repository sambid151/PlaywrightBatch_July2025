import { BasePage } from "./BasePage"

export class HomePage extends BasePage
{
    constructor(page){
        super(page)
        this.page=page
        this.menuButton=page.locator("//img[@alt='menu']")
        this.logoutButton=page.locator("//button[normalize-space()='Sign out']")
    }

    async clickMenu()
    {
        await this.menuButton.click()
    }
    async clickLogout()
    {
        await this.logoutButton.click()
    }
    async logoutFromApp(){
        await this.clickMenu()
        await this.logoutButton.waitFor({state:'visible',timeout:5000})
        await this.clickLogout()
    }

}