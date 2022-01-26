console.log("text box");

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

console.log(input);
console.log(Number(input));
console.log(Number(input[0]));
