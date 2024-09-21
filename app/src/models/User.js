"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
	constructor(body) {
		// 생성자
		this.body = body;
	}

	// >>> await - Promise를 반환하기 때문에 .then()으로도 접근하여 데이터를 가져올 수 있다.
	// await을 사용해준 이유는 "가독성" 때문이다. fs(파일시스템)에서도 await으로 가져올 수 있다.
	// 추가로 async 에서만 사용가능하다. <<<
	async login() {
		const client = this.body;
		const { id, password } = await UserStorage.getUserInfo(client.id);

		if (id) {
			if (id === client.id && password === client.password) {
				return { success: true };
			}
			return { success: false, msg: "비밀번호가 틀렸습니다." };
		}
		return { success: false, msg: "존재하지 않는 아이디입니다." };
	}

	async register() {
		const client = this.body;
		try {
			const respose = await UserStorage.save(client);
			return respose;
		} catch (err) {
			return { success: false, msg: err };
		}
	}
}

module.exports = User;
