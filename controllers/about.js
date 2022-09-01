const Workout = require("../models/workouts");

module.exports = {
    index,
}

//Render about index
function index(req, res, next) {
    console.log('Render about')
    res.render('about/index');
  };
