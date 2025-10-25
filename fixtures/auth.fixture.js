import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { readJson } from "../utils/readjson.js";
import {readCSV} from "../utils/readcsv.js"
import { readExcel } from "../utils/readexcel.js";



export const test = base.extend(

    {
        loginPage:async({page},use)=>
        {
            console.log("Running Loginpage Fixture");
              const loginPage = new LoginPage(page)
               await loginPage.gotoURL()
               await loginPage.fillEmail("admin@email.com")
               await loginPage.fillPassword("admin@123")
               await loginPage.submit()    
               await use(loginPage)
               console.log("Running after test");                  
        },
        loginPageJson:async({page},use)=>
        {
            console.log("Running Loginpage Fixture before using json");
            const data = readJson("./testdata/user.json")
              const loginPage = new LoginPage(page)
               await loginPage.gotoURL()
               await loginPage.fillEmail(data.username)
               await loginPage.fillPassword(data.password)
               await loginPage.submit()    
               await use(loginPage)
               console.log("Running after test for JSON file");                  
        },
        loginPageCSV:async({page},use)=>
        {
            console.log("Running Loginpage Fixture before using CSV");
              const data = readCSV("./testdata/user.csv")
              console.log("data for login Fixture"+JSON.stringify(data[0]));
              const loginPage = new LoginPage(page)
               await loginPage.gotoURL()
               await loginPage.fillEmail(data[0].username)
               await loginPage.fillPassword(data[0].password)
               await loginPage.submit()    
               await use(loginPage)
               console.log("Running after test for CSV file");                  
        },
         loginPageExcel:async({page},use)=>
        {
            console.log("Running Loginpage Fixture before using excel");
              const data = readExcel("./testdata/user.xlsx","Sheet1")
              console.log("data for login Fixture"+JSON.stringify(data[0]));
              const loginPage = new LoginPage(page)
               await loginPage.gotoURL()
               await loginPage.fillEmail(data[0].username)
               await loginPage.fillPassword(data[0].password)
               await loginPage.submit()    
               await use(loginPage)
               console.log("Running after test for excel file");                  
        },
        courseCreationJSON:async({page},use)=>
        {
            console.log("Running New Course Fixture using json");
            const data = readJson("./testdata/course.json")
            await use(data)
            console.log("Running after test for New Course JSON file");

        },
        courseCreationCSV:async({page},use)=>
        {
            console.log("Running New Course Fixture using csv");
            const data = readCSV("./testdata/user.csv")
            await use(data)
            console.log("Running after test for New Course CSV file");

        },
        // get the current status of the test and if it is failed take the screenshot
        page:async({page},use,testInfo)=>
        {
                 await use(page)
                // after use will get executed after every test

                if(testInfo.status!=testInfo.expectedStatus)
                {
                  const path=await page.screenshot({path:`screenshots/${testInfo.title}_${Date.now()}.png`})

                  await testInfo.attach('screenshot',{body:path,contentType:"image/png"})  

                }
        }

    }

)
export const expect=test.expect;