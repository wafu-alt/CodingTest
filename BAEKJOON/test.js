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
      strArr += str[j];
    }
  }
}
console.log(strArr);
//console.log(arry);

/*
const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = '';
    
    const [num2, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            answer += str[j];
  	}
    }
    
    console.log(answer);
}
*/
