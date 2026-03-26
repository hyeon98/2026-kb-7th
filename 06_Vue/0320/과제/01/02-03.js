const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);
p1 = { name: 'lee', age: 25 };

// { name: 'john', age: 22 }
// p1 = { name: 'lee', age: 25 } 이 부분에서 const를 재할당 하려고 하기에 Type Error 발생.
