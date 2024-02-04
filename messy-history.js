// A function that adds 1 plus 1
export function addOnePlusOne() {
  return 1 + 1;
}

// a function that appliess addition the values passed in
export function addValues(a, b) {
  //This is a BS comment
  //Q: Why is this a BS comment?
  //A: Because it doesn't add any value to the code
  return a + b;
}
//reads in a csv file and uses the helpers to perform the math operations
import { sum, subtract, multiply, divide } from "./helpers/helper.js";
const fs = require("fs");
const path = require("path");
const helpers = require("./helpers/helper.js");
const csv = require("csv-parser");
const results = [];

//The CSV file is at the root of the project
const csvPath = path.join(__dirname, "math.csv");

//Function to read the CSV file
export const readCSV = () => {
  fs.createReadStream(csvPath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
};



