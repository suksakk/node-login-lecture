"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
// ./ -> 현재 폴더에서 ./routes/ 폴더에서 ./routes/home 에 있는 자바스크립트를 읽어달라는 경로표시
const home = require("./src/routes/home");

// app setting - 화면 뷰(HTML) 처리가능한 뷰 엔진 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결 
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // use -> middleware를 등록해 주는 메서드kk

module.exports = app;
