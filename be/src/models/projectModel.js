const db = require('../db');

class Project {
  static async getAllProjects() {
    const [rows] = await db.query('SELECT * FROM project');
    return rows;
  }

  static async getProjectById(id) {
    const [rows] = await db.query('SELECT * FROM project WHERE id = ?', [id]);
    return rows[0];
  }

  static async createProject(name, link) {
    const [result] = await db.query(
      'INSERT INTO project (name, link) VALUES (?, ?)',
      [name, link]
    );
    return result.insertId;
  }

  static async updateProject(id, name, link) {
    const [result] = await db.query(
      'UPDATE project SET name = ?, link = ? WHERE id = ?',
      [name, link, id]
    );
    return result.affectedRows;
  }

  static async deleteProject(id) {
    const [result] = await db.query('DELETE FROM project WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Project;
