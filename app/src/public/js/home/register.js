"use strict";

const id = document.querySelector("#id"), // 질의 선택자 html에 있는 id value를 가져온다
    name = document.querySelector("#name"),
    password = document.querySelector("#password"), // #을 넣는 이유는 html 태그에 id를 부여한 것을 #이라 한다
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button"); // 태그명 이다

// DOM -> Document Object Model 인터페이스 자바스크립트에서 html에 존재하는 데이터를 가져와서 제어가능
registerBtn.addEventListener("click", register);

// frontend
function register() {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };
    
    // console.log(req); // 콘솔에서 확인 시 object 형식 키-값으로 구성
    // console.log(JSON.stringify(req)); // JSON은 문자열로 결과 { } 안으로 문자열로 구성된다.
    // fetch를 이용하여 브라우저에 입력한 값을 서버에 전달
    fetch("/register", { // object 형태로 전달
        method: "POST", // body를 통해 전달을 할 때는 http 메서드 사용해야한다.
        headers: {  // 내가 요청, 전달하는 데이터가 JSON 데이터라고 알려주는 방법은
            "Content-Type": "application/json", // 내가 보내는 데이터 타입의 명시
        },
        body: JSON.stringify(req)  // stringify - object를 문자열로 바꿔주는 메서드
    }).then((res) => res.json()).then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        } // then - fetch 전달한 것을 응답한 데이터를 받기 위한 것
    }).catch((err) => {
        console.error("회원가입 중 에러 발생");
    })
}