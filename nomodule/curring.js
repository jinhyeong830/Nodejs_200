/** @format */
/* 
커링? 여러 개의 파라미터를 갖는 함수가 있을 때 그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법..
리턴값이 없는 대신 콜백을 인자로 넘겨서 사용,,

중복을 최소화하면서 개발할 수 있삼
 */

/* 103 CURRING */
const add = (x) => (y) => x + y;
const add10 = add(10);
console.log(add10); //function이라고 뜸. :10+y인 함수가 리턴되는 것
console.log(add10(20));
console.log(add(10)(20));

/* 104. 커링예제 1 */
const coffeeMachine = (liquid) => (esso) => `${esso} +${liquid}`;
const ameMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = ameMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);
