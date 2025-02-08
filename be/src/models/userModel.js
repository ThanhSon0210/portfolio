const db = require("../db");

class User {
  // 🔍 Tìm user theo email
  static async findByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }

  // 🔍 Tìm user theo ID
  static async findById(id) {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }

  // ➕ Tạo user mới
  static async createUser(username, email, hashedPassword) {
    const role = "user"; // Mặc định role là "user"
    const [result] = await db.execute(
      "INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, ?, NOW())",
      [username, email, hashedPassword, role]
    );
    return result.insertId;
  }
}

module.exports = User;
