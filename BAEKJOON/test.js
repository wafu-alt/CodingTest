const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

//console.log(input);

let star = "";
let blank = " ";

for (i = 1; i <= input; i++) {
  star = star + "*"; //star += "*";
  let j = "";
  j = input - i;
  console.log(j);
  for (j; j == input; j--) {
    console.log("a");
  }
  console.log(star);
}
