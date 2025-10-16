import {test,expect} from "@playwright/test"

test("Sample test for testinfo", async function({page},testInfo)
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    console.log(testInfo.status);
    console.log(testInfo.title);
    console.log(testInfo.duration);
    console.log(testInfo.expectedStatus);
    
})