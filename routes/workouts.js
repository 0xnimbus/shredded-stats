var express = require('express');
var router = express.Router();
const workoutsCtrl = require("../controllers/workouts");

//GET index 
router.get('/', workoutsCtrl.index)
//GET /new
router.get('/new', workoutsCtrl.new)
//POST form info 
router.post('/', workoutsCtrl.create)
//GET deleteID 
router.delete('/:id', workoutsCtrl.delete)
//GET update 
router.get('/:id/update', workoutsCtrl.findUpdate)
//PUT update
router.put('/:id', workoutsCtrl.update)

module.exports = router;
