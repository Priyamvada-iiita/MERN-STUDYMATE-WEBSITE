const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema({
  username: String,
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = ForumPost;
