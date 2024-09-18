"use strict";

const home = (req, res) => {
	// 기능
	res.render("home/index"); // 이동 경로
};
// // 위 코드랑 같은 의미
// function hello(req, res) {
// 	// 기능
// 	res.render("home/index"); // 이동 경로
// }

const login = (req, res) => {
	res.render("home/login");
};

module.exports = {
	home, login,
};

// object 구조는 키-값으로 구성되어있다
// {key: value} 이렇게 되어있지만 키 하나만 입력시 자체적으로 키와 같은 value를 입력한다
// {
// 	hello, // hello: hello
// 	login, // login: login
// };
