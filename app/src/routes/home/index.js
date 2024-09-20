"use strict"; // 이크마 문법 준수

// backend

const express = require("express");
const router = express.Router();

// home.ctrl.js 파일 연결 
const ctrl = require("./home.ctrl");

// 루트 경로
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// frontend에서 전달한 login데이터를 받아서 login 기능을 처리하는 기능
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // index.js 파일을 외부에서 사용하게끔 한다.