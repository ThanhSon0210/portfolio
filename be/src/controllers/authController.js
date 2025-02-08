const User = require("../models/userModel");
const { hashPassword, checkPassword } = require("../untils/passwordUtils");
const jwtWeb = require("../untils/jwtWeb");

// 🚀 Đăng ký
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Vui lòng nhập đủ thông tin" });
  }

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    const hashedPassword = await hashPassword(password);
    const userId = await User.createUser(username, email, hashedPassword);

    res.status(201).json({ message: "Đăng ký thành công", userId });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

// 🚀 Đăng nhập
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Vui lòng nhập đủ thông tin" });
  }

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const isPasswordValid = await checkPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const token = jwtWeb.generateToken(user);

    res.json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

// 🔍 Lấy thông tin user từ token
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json({ id: user.id, username: user.username, email: user.email, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};
