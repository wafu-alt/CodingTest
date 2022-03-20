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

// fruits 배열을 만들어 과일들을 입력받고, fruits 배열에서 콩과 무를 제거하세요.
// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fruits = [];
let result = [];
var count = 0;
rl.on("line", function (x) {
  fruits = x;

  rl.close();
}).on("close", function () {
  fruits = fruits.split(" ");
  console.log(fruits);
  result = fruits.filter((element) => element !== "콩" && element !== "무");

  console.log(result);
  process.exit();
});
