import {test,expect} from "../../fixtures/auth.fixture.js"
import {CoursesPage} from "../../pages/CoursesPage.js"
import { CategoryPage } from "../../pages/CategoryPage.js"; 
import { HomePage } from "../../pages/HomePage.js";


test("Verify User should be able to create Category",async function({page,context,loginPage}) 
{
    const categoryName=`AWS_${Date.now()}`
    const coursePage = new CoursesPage(page);
    const homePage=new HomePage(page)

    const openManagecategoryPage=()=>coursePage.clickonManageCategory();
    const newPage=await coursePage.waitForNewPage(context,openManagecategoryPage)
    const categoryPage=new CategoryPage(newPage)
    await categoryPage.acceptAlerts(newPage,"accept",categoryName)
    await categoryPage.ClickOnAddNewCategory();
    await expect(await categoryPage.verifyCategoryIsPresent(categoryName)).toBeVisible();
    await categoryPage.deleteCategory(categoryName);
    await expect(await categoryPage.verifyCategoryIsPresent(categoryName)).not.toBeVisible();
    await newPage.close()
    await page.bringToFront()
    await homePage.logoutFromApp();
})