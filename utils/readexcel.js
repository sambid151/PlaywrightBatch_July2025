import fs from "fs"
import * as XLSX from "xlsx"

export function readExcel(filePath,SheetName)
{

    console.log("Reading excel data");
    const filecontent=fs.readFileSync(filePath)
    //convert data into json array ( recommended way for type - buffer)
    const wb=XLSX.read(filecontent,{type:"buffer"})
    //refer to sheet name 
    const ws=wb.Sheets[SheetName];
    const data=XLSX.utils.sheet_to_json(ws,{defval:"",raw:true})
    return data 

}