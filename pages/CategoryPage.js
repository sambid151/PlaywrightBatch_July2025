import { BasePage } from "./BasePage";

export class CategoryPage extends BasePage
{

    constructor(page)
    {
        super(page)
        this.page=page
        this.addNewCategory=page.locator("//button[normalize-space()='Add New Category']")
        this.deleteConfirmation=page.locator("//button[@class='action-btn'][normalize-space()='Delete']")

    }

    async ClickOnAddNewCategory()
    {

      await this.addNewCategory.click();
    }

    async verifyCategoryIsPresent(categoryName)
    {
        return this.page.locator(`//td[normalize-space()='${categoryName}']`)
    }
    async deleteCategory(categoryName)
    {
        await this.page.locator(`//td[normalize-space()='${categoryName}']//following::button[1]`).click()
        await this.deleteConfirmation.click()

    }
    async deleteCategoryIfPresent(categoryName)
    {
        const categoryLocator = this.page.locator(`//td[normalize-space()='${categoryName}']`)
        const count= await categoryLocator.count()
        if(count>0){
            deleteCategory(categoryName);
             await this.page.waitForTimeout(1000)
        }else{
            console.log(`category ${categoryName} not present before`);
        }



    }




}