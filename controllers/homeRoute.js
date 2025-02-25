const router = require('express').Router();
const { User } = require('../models');


router.get('/', async (req, res) => {
    res.render('homepage', {
    loggedIn: req.session.loggedIn
});
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn === true) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  

module.exports = router;