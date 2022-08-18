const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: Array, default: [String] },
  usersDisliked: { type: Array, default: [String] },
  comments: { type: [String] },
  imageUrl: { type: String, allowNull: true }
});

module.exports = mongoose.model('Posts', postSchema);