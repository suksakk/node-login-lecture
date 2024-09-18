"use strict"; // 이크마 문법 준수

const express = require("express");
const router = express.Router();

// home.ctrl.js 파일 연결 
const ctrl = require("./home.ctrl");

// 루트 경로
router.get("/", ctrl.home);

// 루트 경로
router.get("/login", ctrl.login);

module.exports = router; // index.js 파일을 외부에서 사용하게끔 한다.