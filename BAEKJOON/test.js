const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");

//console.log(input);

let cirNum = parseInt(input[0]);

let arry = [];
let str;
let strArr = [];
for (i = 1; i <= cirNum; i++) {
  arry = input[i].split(" ");
  str = arry[1];
  //console.log(str);
  for (j = 0; j < str.length; j++) {
    for (k = 0; k < arry[0]; k++) {
      strArr[j] += str[j];
    }
  }
}
console.log(strArr);
//console.log(arry);
