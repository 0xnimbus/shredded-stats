var express = require('express');
var router = express.Router();
const routinesCtrl = require("../controllers/routines");

//GET index 
router.get('/', routinesCtrl.index)
//GET /new
router.get('/new', routinesCtrl.new)
//POST form info 
router.post('/', routinesCtrl.create)
//GET deleteID 
router.delete('/:id', routinesCtrl.delete)
//GET update 
//router.get('/:id/update', routinesCtrl.findUpdate)
//PUT update
//router.put('/:id', routinesCtrl.update)

module.exports = router;