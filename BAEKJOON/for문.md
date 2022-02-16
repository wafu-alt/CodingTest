# 15552번

## 문제

본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

C++을 사용하고 있고 `cin`/`cout`을 사용하고자 한다면, `cin.tie(NULL)`과 `sync_with_stdio(false)`를 둘 다 적용해 주고, `endl` 대신 개행문자(`\n`)를 쓰자. 단, 이렇게 하면 더 이상 `scanf`/`printf`/`puts`/`getchar`/`putchar` 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, `Scanner`와 `System.out.println` 대신 `BufferedReader`와 `BufferedWriter`를 사용할 수 있다. `BufferedWriter.flush`는 맨 마지막에 한 번만 하면 된다.

Python을 사용하고 있다면, `input` 대신 `sys.stdin.readline`을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 `.rstrip()`을 추가로 해 주는 것이 좋다.

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

자세한 설명 및 다른 언어의 경우는 [이 글](http://www.acmicpc.net/board/view/22716)에 설명되어 있다.

[이 블로그 글](http://www.acmicpc.net/blog/view/55)에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

## 입력

첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

## 출력

각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

## 예제 입력 1

```
5
1 1
12 34
5 500
40 60
1000 1000

```

## 예제 출력 1

```
2
46
505
100
2000
```

## 답

---

```jsx
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

const cirNum = input[0];

for (i = 1; i <= cirNum; i++) {
  let Num = input[i].split(" ");

  console.log(Number(Num[0]) + Number(Num[1]));
}
```

→ 시간초과 일어남
이유 : for문안에서 돌면서 바로 답을 출력하는데 이것이 숫자가 커져버리면 시간이 많이 걸리게되고, 시간 제한 있는 문제이기 때문에 실패함

```jsx
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

const cirNum = input[0];
let answer = +0;

for (i = 1; i <= cirNum; i++) {
  let Num = input[i].split(" ");

  answer = answer + (Number(Num[0]) + Number(Num[1])) + "\n";
}
console.log(answer);
```

- 그러므로 위와 같이 한 변수에 저장해놓고 차곡차곡 쌓은 다음 한번에 출력하면 시간이 적게 걸리게 됨

# 8393번

## 문제

n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

## 출력

1부터 n까지 합을 출력한다.

## 예제 입력 1

```
3

```

## 예제 출력 1

```
6
```

## 답

---

```jsx
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = +input;
//console.log(input);
let sumNum = +0;

for (i = 1; i <= input; i++) {
  sumNum += i;
  //console.log(sumNum, i);
}
console.log(sumNum);
```

# 10950번

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

# 2739번

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
