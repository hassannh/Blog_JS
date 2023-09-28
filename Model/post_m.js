const db = require('../database/database');

class Post {


  
  static async getAllPosts() {
    try {
      const [rows] = await db.query('SELECT * FROM post');
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Post;
