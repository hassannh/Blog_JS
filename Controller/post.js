const Post = require('../Model/post_m');

async function getAllPosts(req, res) {
  try {
    const posts = await Post.getAllPosts();
    
    // Render an EJS view and pass the retrieved posts to it
    res.render('post', { posts });
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllPosts,
};
