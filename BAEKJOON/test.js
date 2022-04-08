const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toLowerCase();
//.toLowerCase() 대문자 입력을 소문자로 바꿔준다

//console.log(input);
const result = new Array(26).fill(0); // result를 26자리의 배열로 만들고 0으로 채우기
//26인 이유 : 알파벳이 26개임
//console.log(result, result.length);
for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++; // input값의 글자 자릿수를 숫자로 변환하고 97(a)만큼 뺀다 그러면 알파벳 순서에 맞게 카운팅이 올라감
  /*
  예시로 a는 97이고 -97하면 0이므로 result[0]++가 되므로 0자리에 1이 됨
  b는 98 - 97 = 1이므로 result[1]++가 1카운트가 올라감
  z는 122-97 = 25이므로 result[25]++가 1카운팅됨
  */
  //console.log(i, result);
}
//console.log(result);

const max = Math.max(...result); // 배열에서 최대값 출력
const index = result.indexOf(max); // 최대값으로 검색. 위차값 출력

//console.log(max, index);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true; //기본값 false에서 조건에 맞으면 true로 바꾸고 break로 빠져나옴
    //console.log(result[j], index, j);
    break;
  }
}
//console.log(isSame);
console.log(isSame ? "?" : String.fromCharCode(index + 65));
//isSame이 참이면 ?출력 , 아니면 영어 대문자로 출력
//참이라는 말은 최대값이 여러개라는 말임 최소 2개이상
