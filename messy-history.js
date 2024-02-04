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

//Function to perform the math operations
export const performOperations = () => {
  results.forEach((result) => {
    const { operation, num1, num2 } = result;
    if (operation === "add") {
      console.log(helpers.sum(num1, num2));
    } else if (operation === "subtract") {
      console.log(helpers.subtract(num1, num2));
    } else if (operation === "multiply") {
      console.log(helpers.multiply(num1, num2));
    } else if (operation === "divide") {
      console.log(helpers.divide(num1, num2));
    }
  });
};

