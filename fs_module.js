/** @format */

/* 129. 파일 리스트 출력하기 */
const testFolder = './'; //현재 디렉토리 의미
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder); //함수의 인자로 디렉토리

filenameList.forEach((fileName) => {
  console.log(fileName);
});
// 결과값으로 현재 파일에 있는 파일리스트들이 출력됨

/* 130. object를  json형식으로 파일에 저장하기*/
// JSON.stringify()

const userList = [
  { name: 'Heewon', age: 28, gender: 'female', birthday: '4,June' },
  { name: 'Sangwoo', age: 27, gender: 'male', birthday: '30,August' },
  { name: 'Soojung', age: 25, gender: 'female', birthday: '9,October' },
];

const jsonUserList = JSON.stringify(userList);
console.log(typeof userList); //Object
console.log(typeof jsonUserList); //String

// 현재파일에 list.json이라는 이름으로 파일 저장--> 예외처리 해주야함
fs.writeFile('./list.json', jsonUserList, 'utf-8', function (error) {
  console.log('파일 쓰기 작업이 끝났습니다!~');
});

/* 131. 파일을 json형식으로 불러오기!*/

fs.readFile('./list.json', (err, data) => {
  if (err) throw err;
  const friendList = JSON.parse(data.toString());
  //parse()는 json파일을 js object로 변환하는 기능
  console.log(friendList[1].name, '님 생일은', friendList[1].birthday, 'Happy birthday!');
});
