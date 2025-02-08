const express = require("express");
const authController = require("../controllers/authController");
const { verifyToken } = require("../untils/jwtWeb");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", verifyToken, authController.getUserInfo); // 🔍 Lấy thông tin user từ token

module.exports = router;
