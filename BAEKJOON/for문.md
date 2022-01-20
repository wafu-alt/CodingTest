### 2739번

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84240f24-33d6-4e55-b4ef-48ec67ed1d2a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220120T124406Z&X-Amz-Expires=86400&X-Amz-Signature=d8542440b0d29e4fccb4463e0465f851b364f88eaef01400fd6ef178e5cdbdc3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0]);

for (i = 1; i < 10; i++) {
  let result = num * i;
  console.log(`${num} * ${i} = ${result}`);
}
```
