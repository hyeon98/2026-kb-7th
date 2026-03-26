// ... 연산자 (rest parameter)
// → 전달된 나머지 인수를 배열로 묶음
// 주의: 하나만 사용 가능, 반드시 마지막 매개변수에 위치

function foodReport(name, age, ...foods) {
  console.log(name + ', ' + age);
  console.log(foods);
}

foodReport('이몽룡', 20, '짜장면', '냉면', '불고기');
foodReport('홍길동', 16, '초밥');
