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
