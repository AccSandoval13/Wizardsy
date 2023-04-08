const mongoose = require('mongoose');


const contentSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true},
  description: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true },
  tags: { type: [String], required: true,trim: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
