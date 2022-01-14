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
