
# h-index
h-index는 논문발표 숫자와 인용숫자가 연관있다.
논문 수 <= 인용숫자 조건에 만족하는
논문 수의 최대값을 h-index값으로 한다

예시)
[10 20 30 45 50] h-index : 5
[10 5 4 2 0] h-index : 3
[5 3 2 0 1] h-index : 2
[0 0 0 0 0] h-index : 0
[10 20 30 40 50 60 70 80 90 100] h-index : 10



```javascript
const citations = [5, 3, 2, 0, 1];



function solution(citations) {
  citations.sort((a, b) => b - a);
  console.log("정렬 : ", citations);
  let answers = 0;
  let count = 0; // 조건에 만족하는 논문 수 카운트
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      /*
        왜 <=가 아닌가?
        논문 수는 내림차순 5 3 2 1 0 순이고
        조건 만족 카운트는 0 1 2 3 4 순이라서
        =을 조건에 넣으면 h-index가 2가 되어야하는데 3이 된다
        <= 할려면 i+1 < citations[i] 하면 된다.
      */
      console.log(`${i} < ${citations[i]}`);
      count++;
      console.log(`count: ${count}`);
    }
  }

  answers = count;
  return answers;
}

console.log("답: ", solution(citations));

```
- 매우 어려웠음.
- 다른 사람것을 보고 깨달았는데 아직 잘 모르겠음 머리로는 이해가는데 다시 문제풀려고하면 방법이 생각 안 날것 같음

