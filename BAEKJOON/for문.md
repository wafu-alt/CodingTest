### 2739번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84240f24-33d6-4e55-b4ef-48ec67ed1d2a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220211T114928Z&X-Amz-Expires=86400&X-Amz-Signature=7705324fe277fa337d9fa904429585671f9b918443e408570b7e079f0d37fe9f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0]);

for (i = 1; i < 10; i++) {
  let result = num * i;
  console.log(`${num} * ${i} = ${result}`);
}
```
### 10950번
![image](https://user-images.githubusercontent.com/83447120/153586549-9b1f8b1a-9f24-4a16-b80c-117f31122578.png)

```jsx
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//let input = fs.readFileSync(filePath).toString().split("\r\n");

const cirNum = input[0];

for (i = 1; i <= cirNum; i++) {
  let Num = input[i].split(" ");

  console.log(Number(Num[0]) + Number(Num[1]));
}
```
- 입력 받은 것을 각각 어떻게 나눠야하는지 핵심이었던 것 같다
