var express = require('express');
var router = express.Router();
const statsCtrl = require("../controllers/stats");

//GET index 
router.get('/', statsCtrl.index)
//GET /new 
router.get('/:id/new', statsCtrl.new)
//POST form info
router.post('/:id', statsCtrl.create)
//GET deleteID 
router.delete('/:id', statsCtrl.delete)

module.exports = router;