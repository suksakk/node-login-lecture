"use strict";

class UserStorage {
    static #users = { // #변수 - 해당 변수를 public에서 private로 변경 -> 은닉화
        id: ["SAKK", "나개발", "김팀장"],
        password: ["123", "1234", "12345"],
        name: ["이건민", "홍길동", "김철수"],
    };
    
    static getUsers(...fields) { // ... -> 여러 파라미터를 받을 수 있게 한다  
        const users = this.#users;
        // 콜백함수 - 순차적으로 실행하고 싶을 때 사용한다 첫 번째 인자로 들어갈 경우 = 두 번째 파라미터 실행 후 콜백함수 실행, 두 번째 인자로 들어갈 경우는 그 반대  
        // reduce(1, 2) - 두 개의 파라미터를 가지고 있다.
        // 첫 번째 파라미터에는 콜백 함수이다. 이 콜백 함수가 동작할 때 return 하는 값이 다음 콜백 함수의 첫 번째 파라미터로 전달
        // 그리고 나서 마지막 콜백 함수가 동작한 이후의  return 값이 reduce 메서드의 return 값이 된다
        // reduce 메서드의 두 번째 파라미터는 초기값이다. 콜백 함수가 동작하면서 해당 함수의 리턴값이 다음 콜백 함수의 첫 번째 파라미터로 전달되는데
        // 이 원리대로라면 가장 첫 번째 동작하는 콜백함수의 첫 번째 파라미터는 전달 받는 값이 없다
        // 그래서 reduce 메서드의 두 번째 파라미터에, 첫 번째 콜백함수에서 동작할 누산값을 전달 
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) { // hasOwnProperty - users에 해당하는 키-값이 있는 확인
                newUsers[field] = users[field];  // 키-값
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;