const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");

//console.log(input);

function searchSelfNum() {
  let firstNum = "1";
  let number = 0;

  return firstNum[0];
}

for (i = 1; i < 50; i++) {
  searchSelfNum(i);
}
console.log();
