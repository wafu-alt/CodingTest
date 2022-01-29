console.log("text box");

// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().split("\n");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  //입력 > 변수선언
  console.log(input);
}).on("close", () => {
  //솔루션
  console.log("close 터미널에서 ctrl + d 했을때 이 문구 출력");
  process.exit();
});
