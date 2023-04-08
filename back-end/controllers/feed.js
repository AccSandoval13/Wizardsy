
const router = require('express').Router()
const db = require('../../front-end/models')
const index = require('../views/index') 


//Home
  
  router.get('/', (req, res) => {
      db.Post.find()
        .then((post) => {
          res.render('views/index', { index })
        })
          .catch(err => {
              console.log('err', err)
              res.render('error404')
          })
    })
//About
  
          router.get('/about', (req, res) => {
            res.render('/about', { about })
                  })
                  .catch(err => {
                      console.log('err', err)
                      res.render('error404')
                  })
//Today
                  router.get('/today', (req, res) => {
                    res.render('/today', { today })
                          })
                          .catch(err => {
                              console.log('err', err)
                              res.render('error404')
                          })
//Create
router.get('/create', (req, res) => {
  res.render('/create', { create })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })

        module.exports = router;

      // Routes 

    router.get ('/', function (req, res){
      res.render('/home', { home })
    })
    .catch(err => {
      res.render('error404')
  })

  module.exports = feed;

router.get ('/', function (req, res){
  res.render('/home', { home })
  })
  .catch(err => {
    res.render('error404')
  })



