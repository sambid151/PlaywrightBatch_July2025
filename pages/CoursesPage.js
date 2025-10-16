import { BasePage } from "./BasePage"

export class CoursesPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page=page
        //add locator for //span[normalize-space()='Manage']
        this.manageLocator=page.locator("//span[normalize-space()='Manage']")
        //add locator for //a[normalize-space()='Manage Courses']
        this.manageCoursesLocator=page.locator("//a[normalize-space()='Manage Courses']")
        this.manageCategory=page.locator("//a[normalize-space()='Manage Categories']")
        //add locator for //button[normalize-space()='Add New Course']
        this.addNewCourseBtn=page.locator("//button[normalize-space()='Add New Course']")
        //add locator for //input[@id='thumbnail']
        this.thumbnailInput=page.locator("//input[@id='thumbnail']")
        // add locator for coursename //input[@id='name']
        this.courseNameInput=page.locator("//input[@id='name']")
        //add locator for //textarea[@id='description']
        this.descriptionInput=page.locator("//textarea[@id='description']")
        //add locator for //input[@id='instructorNameId']
        this.instructorNameInput=page.locator("//input[@id='instructorNameId']")
        //add locator for //input[@id='price']
        this.priceInput=page.locator("//input[@id='price']")
        // add locator for //div[normalize-space()='Select Category']
        this.selectCategoryDiv=page.locator("//div[normalize-space()='Select Category']") 
        // add locator for //button[normalize-space()='Cypress']  
        this.cypressButton=page.locator("//button[normalize-space()='SQL']")

    }

    async clickManage()
    {
        await this.manageLocator.click()
    }
    //write a method for clicking on Manage Courses link
    async clickManageCourses()
    {
        await this.manageCoursesLocator.click()
    }

    async clickonManageCategory(){
        await this.manageLocator.hover();
        await this.page.waitForTimeout(1000)
        await this.manageCategory.click();
    }

    //write a method for clicking on Add New Course button
    async clickAddNewCourse()
    {
        await this.addNewCourseBtn.click()
    }
    //write a method for uploading thumbnail image
    async uploadThumbnail(filePath)
    {
        await this.thumbnailInput.setInputFiles(filePath)
    }
    //write a method for entering course name
    async enterCourseName(courseName)
    {
        await this.courseNameInput.fill(courseName)
    }
    //write a method for entering description
    async enterDescription(description)
    {
        await this.descriptionInput.fill(description)
    }
    //write a method for entering instructor name
    async enterInstructorName(instructorName)
    {
        await this.instructorNameInput.fill(instructorName)
    }
    //write a method to clear existing price and entering price
    async enterPrice(price)
    {
        await this.priceInput.fill('')
        await this.priceInput.fill(price)
    }
    //write method to click on select category dropdown
    async clickSelectCategory()
    {
        await this.selectCategoryDiv.click()
        await this.cypressButton.click()
    }
    //write method to click on save button
    async clickSaveButton()
    {
        await this.page.locator("//button[normalize-space()='Save']").click()
    }
    // function to take course name as parameter and verify course is present in the list
   async isCoursePresent(courseName)
   {
       return await this.page.locator(`//td[normalize-space()='${courseName}']`)
   }
   //function to check if course is present click on delete button
   async deleteCourse(courseName)
   {
       const courseRow=this.page.locator(`//td[normalize-space()='${courseName}']`)
       if(await courseRow.isVisible())
       {
           await this.page.locator(`//td[normalize-space()='${courseName}']/following-sibling::td/button`).click()
           //await this.page.locator("//button[normalize-space()='Yes, Delete it!']").click()
       }
   }


}