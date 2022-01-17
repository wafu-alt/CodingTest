### 14681번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/be114256-c8f5-41d6-a057-ce03dd00f051/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220117T124412Z&X-Amz-Expires=86400&X-Amz-Signature=ad365d02e1dec52000c95afd4ca34dccedaf97c5587c22bbf527c36985972fdd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
  /////////////////////////////
  process.exit();
});
```

주의사항 :[런타임 에러 (EACCES)](https://www.acmicpc.net/help/rte) 이 뜬다면 fs모듈을 사용해서 그렇다고 함
[https://hanch-dev.tistory.com/4](https://hanch-dev.tistory.com/4) 를 참조하였다.

### 2753번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/32cea35b-ad4a-450a-b7df-44e131dd3cc5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220117T124424Z&X-Amz-Expires=86400&X-Amz-Signature=db65f6e57cc8a520a371ffb4315a6ed7b2306b56fd99d38cad16adb9ea2aef6c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const year = parseInt(input[0]);

const input = prompt();
const year = input;

if (year % 400 == 0) {
  console.log(1);
} else if (year % 4 == 0 && year % 100 != 0) {
  console.log(1);
} else {
  console.log(0);
}
```

### 9498번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/436552e6-9b67-46a0-8932-88cd9dbce44c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220116T135825Z&X-Amz-Expires=86400&X-Amz-Signature=387cd71fb5dfe6abb0f2c1b1c59b73d161226d4d4bbfa9018d8cfe238be560dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// const a = parseInt(input[0]);

if (90 <= a && a <= 100) {
  console.log("A");
} else if (80 <= a && a < 90) {
  console.log("B");
} else if (70 <= a && a < 80) {
  console.log("C");
} else if (60 <= a && a < 69) {
  console.log("D");
} else {
  console.log("F");
}
```

처음짠 코드는 이렇게인데 안됨

```jsx
const input = require("fs").readFileSync("/dev/stdin");
const score = Number(input);

if (score >= 90) {
  console.log("A");
} else if (89 >= score && score >= 80) {
  console.log("B");
} else if (79 >= score && score >= 70) {
  console.log("C");
} else if (69 >= score && score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
```

다른사람이 만든건데 이건 맞음 왜 그런지 모르겟음
해결책 : `else if (60 <= a && a < 69) { console.log("D"); }` 에서 69를 70이라고 고치면 됨

```jsx
//const fs = require("fs");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

if (90 <= a && a <= 100) {
  console.log("A");
} else if (80 <= a && a < 90) {
  console.log("B");
} else if (70 <= a && a < 80) {
  console.log("C");
} else if (60 <= a && a < 70) {
  console.log("D");
} else {
  console.log("F");
}
```

### 1330번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/287315dd-120a-43ef-bc99-e8efa07c3fb6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220114T143547Z&X-Amz-Expires=86400&X-Amz-Signature=a62b38d80ee10550364893e0b411bf244b0a84fc8ea2b1da00f4243899d7b6ad&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a < b) {
  console.log("<");
} else if (a > b) {
  console.log(">");
} else if (a == b) {
  console.log("==");
}
```

- == vs === , 비교 연산자와 엄격한 비교연산자 차이 즉, 엄격한 연산자는 데이터 타입가지 보고 비교를 함
