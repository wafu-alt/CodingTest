# 1.입력방식

## fs모듈(File System모듈)을 이용한 방식

nodeJS fs 모듈 api https://nodejs.org/api/fs.html

```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

```

위와 같이 fs모듈을 코드로 불러와서 사용한다.
`fs.readFileSync('/dev/stdin')` fs모듈에 readFileSync(동기식 처리)으로 /dev/stdin 경로의 파일을 불러온다.
불러와서 문자열toString()로 불러온다. 문자열로 불러와 .split()으로 구분한다.

참고로 비동기는 readFile()로 불러오면 된다.

### 예시)

- 한 줄 일 때, \`` `\`이 공백으로 구분 <`split()참조 : https://www.codingfactory.net/10424>

입력 : `5`

```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
```

-입력이 여러줄 일 때 (줄바꿈 들어감) `\n`이 줄바꿈(이스케이프 문자 = New line)으로 구분
입력 :
```
5
1
2
3
```

```
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
```

-입력이 복합적일 때

```
/*
입력
5 << input[0]
1 1 << input[1]
2 3 << input[2]
3 4 << input[3]
9 8 << input[4]
5 2 << input[5]
*/

const caseNum = inpu[0];

for(i=1; i<=caseNum; i++) {
  let num = inpu[i].split(' '); //배열을 띄워쓰기로 나눔, '\n'은 열로 나눔(엔터)
  console.log(Number(num[0]) + Number(num[1]));
}
```

## readline 모듈을 이용한 방식

```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input; //input 변수에 할당받기

rl.on('line', (input) => {
  //문자열 입력되는 공간, 입력받은것을 타입변환 혹은 나눠서 다른 변수 입력하는 공간을 여기에서 사용한다.
}).on('close', () => {
  //해결책을 입력하는 공간
  process.exit();
});
```

### 예시)

-입력이 복합적일 때

```
//입력
5
1 1
2 3
3 4
9 8
5 2

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (input) => {
  input.push(line); //input 입력 받음
  //['5' , ['1 1'] , ['2 3'] , ['3 4'] , ['9 8'] , ['5 2']]

}).on('close', () => {
  let count = Nuber(input[0]); // 제일 처음 5를 가져옴
  let numbers = [];

  for (let i = 1; i<=count; i++) {
    numbers.push(input[i].split(' '));
    //배열을 하나의 인덱스를 지정하고 ' '빈칸 기준으로 각각 나눔. 그리고 다시 배열로 만듬
    //numbers = [ ['1' , '1'] , ['2' , ' 3'] , ['3' , ' 4'] , ['9' , ' 8'] , ['5' , ' 2']];
  }

  for (let i =1; i<= count; i++) {
    console.log( num1 + num2);
  }

  process.exit();
});

```

```
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let answer = ''; // 변수 answer을 공백으로 넣음

rl.on('line', line=>{
  //입력 > 변수선언
    const input = line.split(' ');


}).on('close', ()=>{
  //솔루션
    if(input.length===2){
        const A = Number(input[0]);
        const B = Number(input[1]);
        answer += A+B + '\n';
    }
  //출력
    console.log(answer);
    process.exit();
})

```

---

## fs모듈 사용해보기

node 설치 후

node -v로 버젼 확인

test.js있는 파일 경로에 가서 (cd f/study_design/'github desktop'/CodingTest/BAEKJOON)
node test.js로 js파일 실행

![jpg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d97a511-c99e-4ea2-888f-8502770020c5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220126T135941Z&X-Amz-Expires=86400&X-Amz-Signature=1504c9055e11786392c5329a41e3a82ee90ce43f83e745853191db6bb8649c58&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- test.js 파일

```
const fs = require("fs");
const input = fs.readFileSync("입력txt파일의 경로").toString().split("\n");
```

## 삼항연산자 의미 알아보기 `process.platform === "linux" ? "/dev/stdin" : "./input.txt";`

백준은 리눅스 환경 BOJ( Baekjoon Online Judge ) Ubuntu를 사용한다고 함 그래서 백준에서 설정 /dev/stdin 경로를 입력한다.

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

---

## readline모듈 사용해보기

```
console.log("text box"); //est.js가 잘 되었는지 확인

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {

  //입력 받으면 input으로 넘어가고 줄바꾸면 바로 console.log에서 출력이 된다.
  console.log(input);

}).on("close", () => {

  console.log("close 터미널에서 ctrl + d 했을때 이 문구 출력");

  process.exit();
});

```

![jpg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8049bb08-c0ed-4d18-899a-6df5dc15bccd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220129T130429Z&X-Amz-Expires=86400&X-Amz-Signature=86d9ebe4c9933b90920ede41bcec873882480259fd46fa53545ce1908331eb93&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 참조사이트

https://velog.io/@eundada064/%EB%B0%B1%EC%A4%80-JavaScript-VSCode-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85

https://ghost4551.tistory.com/5

https://jb-dailylife.tistory.com/entry/%EB%B0%B1%EC%A4%80-nodejs-nodejs-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

https://choi95.tistory.com/142

https://velog.io/@nxnaxx/%EB%B0%B1%EC%A4%80baekjoon-Node.js-%EC%9E%85%EC%B6%9C%EB%A0%A5

https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174361/file-system-%EB%AA%A8%EB%93%88

https://nyang-in.tistory.com/156

https://leehyungi0622.github.io/2021/03/24/202103/210324-algorithm_javascript_input/

https://goforit.tistory.com/220

https://velog.io/@support/%EB%B0%B1%EC%A4%80node-js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

https://degurii.tistory.com/108

https://rrecoder.tistory.com/60
