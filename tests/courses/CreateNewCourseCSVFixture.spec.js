import {test} from "../../fixtures/auth.fixture.js"
import { LoginPage } from '../../pages/LoginPage.js'
import { CoursesPage } from "../../pages/CoursesPage.js"
import { HomePage } from "../../pages/HomePage.js"
import { expect } from "@playwright/test";


test.describe("Login Tests for manage courses",async()=>{

    let loginPage
    let coursePage
    let homePage
    test.beforeEach(async({page})=>
    {
        loginPage=new LoginPage(page)
        coursePage=new CoursesPage(page)
        homePage=new HomePage(page)
    })

    test("Login Scenario with json data",async function({page,loginPageJson,courseCreationJSON})
    {
    console.log("Course Data from Fixture: ", courseCreationJSON); 
    await coursePage.clickManage()
    await coursePage.clickManageCourses()
    //const manageCoursesPage = new ManageCoursesPage(page)
    await coursePage.clickAddNewCourse()
    await coursePage.uploadThumbnail("./testdata/thumbnail_Snap.png")
    //write course with unique name with timestamp
    const uniqueCourseName=`Cypress with Playwright ${Date.now()}`
    await coursePage.enterCourseName(uniqueCourseName)
    await coursePage.enterDescription(courseCreationJSON.description)
    await coursePage.enterInstructorName(courseCreationJSON.instructorname)
    await coursePage.enterPrice(courseCreationJSON.courseFees)
    await coursePage.clickSelectCategory()
    await coursePage.clickSaveButton()
    await expect(await coursePage.isCoursePresent(uniqueCourseName)).toBeVisible();
    await coursePage.deleteCourse(uniqueCourseName);
    await expect(await coursePage.isCoursePresent(uniqueCourseName)).not.toBeVisible();
    await homePage.clickMenu()
    await homePage.clickLogout()
    await expect(page).toHaveURL(/.*login/);
    
    })



})