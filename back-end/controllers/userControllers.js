const userModel = require('../models/userModel');
const imageModel = require('../models/imageModel');
const likeModel = require('../models/likeModel');
const commentModel = require('../models/commentModel');

const userController = {
  createUser: async (req, res) => {
    try {
      const newUser = await userModel.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  getAllImagesByUserId: async (req, res) => {
    try {
      const images = await imageModel.find({ userId: req.params.id });
      res.status(200).json(images);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  createLike: async (req, res) => {
    try {
      const newLike = await likeModel.create(req.body);
      res.status(201).json(newLike);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  createComment: async (req, res) => {
    try {
      const newComment = await commentModel.create(req.body);
      res.status(201).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = userController;
