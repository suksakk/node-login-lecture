"use strict";


// req -> frontend, res -> backend
const output = {
    home: (req, res) => {
        // 기능
        res.render("home/index"); // 이동 경로
    },
    // // 위 코드랑 같은 의미
    // function hello(req, res) {
    // 	// 기능
    // 	res.render("home/index"); // 이동 경로
    // }
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["SAKK", "나개발", "김팀장"],
    password: ["123", "1234", "12345"],
}
const process = {
    login: (req, res) => {
        // console.log(req.body); // body 파싱 할 수 있도록 미들웨어 모듈 설치 move to app.js
        // parsing은 여러 문맥으로 사용
        // 1. 문자열 파싱 - 문자열에서 특정 데이터를 추출하거나 원하는 형식으로 변환하는 프로세스 ex) JSON 문자열을 객체로 변환하는 것
        // 2. 언어 파싱 - 프로그래밍 언어 또는 마크업 언어의 소스 코드를 해석, 구문 오류를 확인, 실행 가능한 코드로 변환하는 프로세스
        // 3. HTML & XML 파싱 - 웹 페이지의 HTML or XML 문서를 해석하여 웹 브라우저가 문서를 렌더링하거나, 웹 스크래핑 도구가 웹 사이트에서 데이터 추출하는데 사용
        // 4. 구문 분석 - 자연어 처리에서 텍스트 문서를 분석하여 문장 구조, 어휘, 문법, 의미등을 이해하는 과정
        const id = req.body.id,
            password = req.body.password;
        
        // id와 password frontend에서 전달한 id가 users 있는 id가 동일하게 있다면 users.id.indexOf(id) -> indexOf - 특정 문자 위치 찾기를 하여 idx에 저장  
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) { // backend에서 idx 저장 값을 해서 === frontend password와 동일하다면
                return res.json({ // res.json -> json 형식으로 전달하여 frontend로 응답
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    },
};

module.exports = {
    output,
    process,
};

// object 구조는 키-값으로 구성되어있다
// {key: value} 이렇게 되어있지만 키 하나만 입력시 자체적으로 키와 같은 value를 입력한다
// {
// 	hello, // hello: hello
// 	login, // login: login
// };
