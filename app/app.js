"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");  // ./ -> 현재 폴더에서 ./routes/ 폴더에서 ./routes/home 에 있는 자바스크립트를 읽어달라는 경로표시

// app setting - 화면 뷰(HTML) 처리가능한 뷰 엔진 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> middleware를 등록해 주는 메서드
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;