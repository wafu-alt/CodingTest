### https://velog.io/@eundada064/%EB%B0%B1%EC%A4%80-JavaScript-VSCode-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85

### https://ghost4551.tistory.com/5

https://jb-dailylife.tistory.com/entry/%EB%B0%B1%EC%A4%80-nodejs-nodejs-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

https://choi95.tistory.com/142

https://velog.io/@nxnaxx/%EB%B0%B1%EC%A4%80baekjoon-Node.js-%EC%9E%85%EC%B6%9C%EB%A0%A5

https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174361/file-system-%EB%AA%A8%EB%93%88

https://nyang-in.tistory.com/156

https://leehyungi0622.github.io/2021/03/24/202103/210324-algorithm_javascript_input/

https://goforit.tistory.com/220

```
Node.js로 백준 문제를 푸는 경우 다른 언어에 비해서 입출력을 따로 다루어 주어야 합니다. 백준 문제의 경우 성능도 다루기 때문에 많은 사람들이 Node.js의 fs 파일 시스템 모듈을 활용하여 입력을 받고 출력하여 문제를 제출하게 됩니다. fs로 간혹 안되는 부분은 readline을 사용해야 합니다.

// fs 방식 입력 받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input은 각 txt 파일의 row를 string형태의 값을 Array로 가짐
// row가 1개 또는 여러개 인 경우 input을 신경써야 합니다.

// 출력 결과는 항상 console.log를 통해서 전달합니다.
vscode에서 input.txt 파일을 생성하여, vscode에서 테스트용 코드를 작성할 때는 "./input.txt"의 data input을 받아와 테스트를 진행하고 제출 하는 용도인 경우 "/dev/stdin"으로 받아오게 됩니다.
```

1순위
https://velog.io/@support/%EB%B0%B1%EC%A4%80node-js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

https://degurii.tistory.com/108

https://rrecoder.tistory.com/60

위 링크들 참고하기

### 1.입력방식

-fs모듈(File System모듈)을 이용한 방식

nodeJS fs 모듈 api https://nodejs.org/api/fs.html

```
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);


console.log(a+b);
```

-readline 모듈을 이용한 방식

```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {

}).on('close', () => {

});
```
