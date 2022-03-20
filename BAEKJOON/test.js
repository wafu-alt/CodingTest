const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");

//console.log(input);

let cirNum = parseInt(input[0]);

let arry = [];
for (i = 1; i <= cirNum; i++) {
  arry = input[i].split(" ");
  for (j)
}
console.log(arry);
