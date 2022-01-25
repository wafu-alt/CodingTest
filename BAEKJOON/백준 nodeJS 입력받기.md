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

# 1.입력방식

##fs모듈(File System모듈)을 이용한 방식

nodeJS fs 모듈 api https://nodejs.org/api/fs.html

```
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

var a = parseInt(input[0]);
var b = parseInt(input[1]);


console.log(a+b);
```

예시)

-코드가 한 줄 일 때
입력 :
`5`

` `이 공백을 말함 그것을 `split()`로 구분 <`split()참조 https://www.codingfactory.net/10424>

```
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split(' ');
```

-코드가 여러줄 일 때 (줄바꿈 들어감)
입력 :

```
5
1
2
3
```

`\n`이 줄바꿈을 말함 그것을 `split()`로 구분

```
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
```

-코드가 종합일때

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

##readline 모듈을 이용한 방식

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

예시)

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
  //솔루션
    const input = line.split(' ');

    if(input.length===2){
        const A = Number(input[0]);
        const B = Number(input[1]);
        answer += A+B + '\n';
    }
}).on('close', ()=>{
  //출력
    console.log(answer);
    process.exit();
})

```
