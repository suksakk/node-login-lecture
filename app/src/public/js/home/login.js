"use strict";

// DOM -> Document Object Model 인터페이스 자바스크립트에서 html에 존재하는 데이터를 가져와서 제어가능


const id = document.querySelector("#id"), // 질의 선택자 html에 있는 id value를 가져온다
    psword = document.querySelector("#psword"), // #을 넣는 이유는 html 태그에 id를 부여한 것을 #이라 한다
    loginBtn = document.querySelector("button"); // 태그명 이다

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}