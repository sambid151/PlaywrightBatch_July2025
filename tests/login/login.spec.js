import {test} from "../../fixtures/auth.fixture.js"
import { LoginPage } from '../../pages/LoginPage.js'
import { CoursesPage } from "../../pages/CoursesPage.js"
import { HomePage } from "../../pages/HomePage.js"   


test.describe("Login Tests for manage courses",async()=>{
    let loginPage
    let manageCoursesPage
    let homePage

    test.beforeEach(async({page})=>
    {
        loginPage=new LoginPage(page)
        manageCoursesPage=new CoursesPage(page)
        homePage=new HomePage(page)
    })

test.skip("Login Scenario with hard coded data",async function({page,loginPage})
{
    //if dont want to use fixture , remove loginpage param 
    //if want to consume fixture use loginpage param
    await page.waitForTimeout(2000)
    
})
test("Login Scenario with json data",async function({page,loginPageJson})
{
    //if dont want to use fixture , remove loginpage param 
    //if want to consume fixture use loginpage param
    await manageCoursesPage.clickManage()
    await manageCoursesPage.clickManageCourses()
    //const manageCoursesPage = new ManageCoursesPage(page)
    await manageCoursesPage.clickAddNewCourse()
    await manageCoursesPage.uploadThumbnail("./testdata/thumbnail_Snap.png")
    //write course with unique name
    const uniqueCourseName=`Cypress with Playwright ${Date.now()}`
    await manageCoursesPage.enterCourseName(uniqueCourseName)
    await manageCoursesPage.enterDescription("This is a course for cypress with playwright")
    await manageCoursesPage.enterInstructorName("Sambid Mohanty")
    await manageCoursesPage.enterPrice("1000")
    await manageCoursesPage.clickSelectCategory()
    //await manageCoursesPage.clickCypressButton()
    await manageCoursesPage.clickSaveButton()
    await page.waitForTimeout(5000)
    
})

test.skip("Login Scenario without fixture",async function({page})
{
    const loginPage=new LoginPage(page)

    await loginPage.gotoURL()

    await loginPage.fillEmail("admin@email.com")

    await loginPage.fillPassword("admin@123")

    await loginPage.submit()
    await page.pause();
    
})

})
