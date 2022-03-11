/* 
//여러줄 입력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N = 0;
var count = 0;
rl.on("line", function (x) {
  count += 1;
  if (count === 1) {
    N = x;
  } else {
    input.push(x);
  }

  if (count > N) {
    rl.close();
  }
}).on("close", function () {
  console.log(input.join(""));
  process.exit();
});
*/

//한줄 입력
/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = +0;
let answer = [];

rl.on("line", (line) => {
  input = line;
  rl.close();
}).on("close", () => {
  input.includes(/대나무 빨대/);
  console.log(input);
  process.exit();
});
*/
let test =
  "난 안 촉촉한 초코칩보다 촉촉한 초코칩이 좋기 때문에 촉촉한 초코칩을 사 먹을 거야";

console.log(/대나무 빨대/.includes(test));
