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

### 2739번

## 문제

N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

## 입력

첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

## 출력

출력형식과 같게 N*1부터 N*9까지 출력한다.

## 예제 입력 1

```
2

```

## 예제 출력 1

```
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18

```

```jsx
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0]);

for (i = 1; i < 10; i++) {
  let result = num * i;
  console.log(`${num} * ${i} = ${result}`);
}
```

