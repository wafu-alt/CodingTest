
# h-index    
link : https://programmers.co.kr/learn/courses/30/lessons/42747
   
## 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

## 입출력 예
citations	return
[3, 0, 6, 1, 5]	3

## 입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.





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

h-index는 논문발표 숫자와 인용숫자가 연관있다.
논문 수 <= 인용숫자 조건에 만족하는
논문 수의 최대값을 h-index값으로 한다

예시)
[10 20 30 45 50] h-index : 5
[10 5 4 2 0] h-index : 3
[5 3 2 0 1] h-index : 2
[0 0 0 0 0] h-index : 0
[10 20 30 40 50 60 70 80 90 100] h-index : 10


- 매우 어려웠음.
- 다른 사람것을 보고 깨달았는데 아직 잘 모르겠음 머리로는 이해가는데 다시 문제풀려고하면 방법이 생각 안 날것 같음

