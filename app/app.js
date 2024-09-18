"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// app setting - 화면 뷰(HTML) 처리가능한 뷰 엔진 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> middleware를 등록해 주는 메서드

module.exports = app;