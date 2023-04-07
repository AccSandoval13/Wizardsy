router.get ('/', function (req, res){
  res.render('/home', { home })
  })
  .catch(err => {
    res.render('error404')
  })

// Path: views/home.hbs 
