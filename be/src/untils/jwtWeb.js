const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET || "mysecretkey";

// ➕ Tạo token
exports.generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "7d" }
  );
};

// 🔐 Xác thực token
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Không có token, truy cập bị từ chối" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token không hợp lệ" });
    }
    req.user = decoded;
    next();
  });
};
