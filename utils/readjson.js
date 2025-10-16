import fs from "fs"

export function readJson(filepath)
{
    console.log("Reading json file");
    //read the file as text
    const fileContent=fs.readFileSync(filepath,"utf-8")
    const data = JSON.parse(fileContent)
    return data;

}