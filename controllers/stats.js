const {Routine} = require("../models/workouts");
const {Stat} = require("../models/workouts");
const {Workout} = require("../models/workouts");

module.exports = {
    index,
    create, 
    new: newStat,
    delete: deleteOne,
}

//Render stats index
function index(req, res) {
    console.log('Render stats Index')
    Stat.find({}, function(err, stats){
        if (err) {
            console.log('STATS INDEX ERROR ' + err)
            res.redirect('stats')
        } else {
            res.render('stats/index', {stats});
        }
    })
    
  };

function newStat(req, res) {
    console.log("NEW STAT FUNCTION")
    console.log(req.params.id)
    Routine.find({_id: req.params.id}, function (err, routines){
        if (err) {
            console.log('NEW STAT ROUTINE FINED ERROR ' + err)
        } else {
            console.log("ROUTINE FIND SUCCESS!" + routines)
            res.render('stats/new', {routines})
        }
    })
}

function create(req, res) {
    console.log("SUBMITTED STATS INFO")

    const stat = new Stat(req.body)

    console.log('REQ.BODY')
    console.log(req.body)

    Routine.findById(req.params.id, function (err, routines){
        
        
        stat.stRoutine = routines
        console.log("DISPLAY CREATE STAT ROUTINES VAR " + routines)
        console.log("DISPLAY CREATE STAT " + stat)

        if (err){
            console.log("STAT CREATE ROUTINE.FIND ERROR " + err)
            res.render('stats/new', routines ) 
        } else {
            stat.save(function (err){
                if (err) {
                    console.log("STATS CREATE ROUTINE SAVE ERROR " + err)
                    res.redirect('/stats')
                } else {
                    console.log("CREATED NEW STATS SUCCESS ")
                    console.log(stat)
                    res.redirect('/stats')
                }
            }) 
        }

    }) 
}

async function deleteOne(req, res) {

    await Stat.findByIdAndDelete(req.params.id)
 
     res.redirect('/stats')
     console.log("DELETE ONE WITH ID OF " + req.params.id)
}