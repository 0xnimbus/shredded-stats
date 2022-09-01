var express = require('express');
var router = express.Router();

//Renders home page index
router.get('/', function(req, res, next) {
  console.log('Render Home')
  res.render('index', { title: 'Shreddest' });
});

module.exports = router;
