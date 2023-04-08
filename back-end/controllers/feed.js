const router = require('express').Router();
const db = require('../models');
const User = require('../../models/signup');
const index = require('../views/index');

// Home
router.get('/', (req, res) => {
  db.Post.find()
    .then((post) => {
      res.render('index', { post });
    })
    .catch((err) => {
      console.log('err', err);
      res.render('error404');
    });
});

// About
router.get('/about', (req, res) => {
  res.render('about');
});

// Today
router.get('/today', (req, res) => {
  res.render('today');
});

// Create
router.get('/create', (req, res) => {
  res.render('create');
});

module.exports = router;
