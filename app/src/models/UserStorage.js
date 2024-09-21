"use strict";

// >>> promise는 약속이라는 의미로 promise가 수행하는 동작이 끝남과 동시에 상태를 알려준다
// 이는 비동기 처리에 아주 효과적이다. <<<
// >>> promise 시 콘솔에 pending 출력이 되는 것은 데이터를 전부 읽어오지 못했다는 의미 <<<
const fs = require("fs").promises;

// Model
class UserStorage {
	static #getUserInfo(data, id) {
		const users = JSON.parse(data, id);
		const idx = users.id.indexOf(id);
		const usersKeys = Object.keys(users); // => [id, password, name]
		const userInfo = Object.keys(users).reduce((newUser, info) => {
			newUser[info] = users[info][idx];
			return newUser;
		}, {});

		return userInfo;
	}

	// >>> 콜백함수 - 순차적으로 실행하고 싶을 때 사용한다 첫 번째 인자로 들어갈 경우 = 두 번째 파라미터 실행 후 콜백함수 실행, 두 번째 인자로 들어갈 경우는 그 반대
	// reduce(1, 2) - 두 개의 파라미터를 가지고 있다.
	// 첫 번째 파라미터에는 콜백 함수이다. 이 콜백 함수가 동작할 때 return 하는 값이 다음 콜백 함수의 첫 번째 파라미터로 전달
	// 그리고 나서 마지막 콜백 함수가 동작한 이후의  return 값이 reduce 메서드의 return 값이 된다
	// reduce 메서드의 두 번째 파라미터는 초기값이다. 콜백 함수가 동작하면서 해당 함수의 리턴값이 다음 콜백 함수의 첫 번째 파라미터로 전달되는데
	// 이 원리대로라면 가장 첫 번째 동작하는 콜백함수의 첫 번째 파라미터는 전달 받는 값이 없다
	// 그래서 reduce 메서드의 두 번째 파라미터에, 첫 번째 콜백함수에서 동작할 누산값을 전달 <<<
	static #getUsers(data, isAll, fields) {
		const users = JSON.parse(data);
		if (isAll) return users;
		const newUsers = fields.reduce((newUsers, field) => {
			if (users.hasOwnProperty(field)) {
				// hasOwnProperty - users에 해당하는 키-값이 있는 확인
				newUsers[field] = users[field]; // 키-값
			}
			return newUsers;
		}, {});

		return newUsers;
	}

	static getUsers(isAll, ...fields) {
		// ... -> 여러 파라미터를 받을 수 있게 한다

		return fs
			.readFile("./src/databases/users.json")
			.then((data) => {
				return this.#getUsers(data, isAll, fields);
			})
			.catch(console.error);
	}

	static getUserInfo(id) {
		// then은 성공 시, catch는 실패 시
		return fs
			.readFile("./src/databases/users.json")
			.then((data) => {
				return this.#getUserInfo(data, id);
			})
			.catch(console.error);
	}

	static async save(userInfo) {
		// true -> 모든 필드를 가져온다.
		const users = await this.getUsers(true);
		if (users.id.includes(userInfo.id)) {
			throw "이미 존재하는 아이디 입니다.";
		}
		users.id.push(userInfo.id);
		users.name.push(userInfo.name);
		users.password.push(userInfo.password);
		// 데이터 추가
		fs.writeFile("./src/databases/users.json", JSON.stringify(users));
		return { success: true };
	}
}

module.exports = UserStorage;
