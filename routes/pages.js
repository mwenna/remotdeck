//import express
const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
  res.render('index', {
    user: req.user
  });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/subjects', (req, res) => {
  res.render('subjects');
});

router.get('/quiz', (req, res) => {
  res.render('quiz');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('profile', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }

})

router.get('/courses', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('courses', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }

})

router.get('/personalsecuritycourse', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('personalsecuritycourse', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }

})

router.get('/commercialsecuritycourse', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('commercialsecuritycourse', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }

})


module.exports = router;
