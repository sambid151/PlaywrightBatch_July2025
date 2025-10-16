import fs from "fs"
import Papa from "papaparse"

export function readCSV(filePath)
{
  console.log("Reading CSV file");
   const filecontent=fs.readFileSync(filePath,"utf-8")
   const result=Papa.parse(filecontent,{header:true})
    return result.data
  


}