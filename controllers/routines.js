const {Routine} = require("../models/workouts");
const {Workout} = require("../models/workouts");

module.exports = {
    index,
    new: newRoutine,
    create,
    delete: deleteOne,
    update,
    findUpdate,
}

//Render routines index
function index(req, res) {
    Routine.find({}, function (err, routines){
        console.log(routines)
        console.log('Render routines')
        if (err) {
            console.log('ROUTINES INDEX ERROR ' + err)
            res.redirect('routines')
        } else {
            
            res.render('routines/index', {routines})
        }

    })    
  }

  function newRoutine(req, res) {
    console.log("Routine Form")
    Workout.find({}, function (err, workouts){
        if (err) {
            console.log("ROUTINES CREATE WORKOUT FIND ERROR " + err)
            res.redirect('routine')
        } else {
            console.log('GOING TO ROUTINES NEW WITH WORKOUTS: ' + workouts)
            res.render('routines/new', {workouts})
        }
    })
}

function create(req, res) {
    const routine = new Routine(req.body)
    console.log("SUBMITTED INFO")
    console.log(req.body)
    Workout.find({name: req.body.rtWorkouts}, function (err, workouts){

        routine.rtWorkouts = workouts

        console.log('ROUTINE INFO ' + routine)
        console.log('ROUTINE.RTWORKOUTS ' + routine.rtWorkouts)
        console.log('WORKOUTS VAR ' + workouts)
        routine.save(function (err){
            if (err) {
                console.log("ROUTINES CREATE ERROR " + err)
                return res.render('routines/new', {workouts})
            } else {
                console.log(workouts)
                console.log("ROUTINE SAVED" + routine)
                Routine.find({}, function (err, routines) {
                    if (err) {
                        return console.log('error ' + err)
                    } else {
                    console.log('IF render index')
                    res.redirect('routines')
                    }
                  });
                
            }
        })
    })
}

async function deleteOne(req, res) {

   await Routine.findByIdAndDelete(req.params.id)

    res.redirect('/routines')
    console.log("DELETE ONE WITH ID OF " + req.params.id) 
}

function findUpdate(req, res){
    console.log('FIND UPDATE REQ PARAMS.ID')
    console.log(req.params.id)

    Routine.findById(req.params.id, function (err, routines){
        if (err) {
            console.log('FIND UPDATE ERROR ' + err)
        } else {
            console.log('FIND UPDATE WORKOUTS IS ')
            console.log(routines)
            Workout.find({}, function (err, workouts){
                if (err) {
                    console.log("ROUTINE FIND UPDATE WORKOUT FIND ERROR" + err)
                    res.redirect('routines')
                } else {
                    console.log('FIND UPDATE WORKOUTS IS ')
                    console.log(workouts)
                    res.render('routines/update', {routines, workouts})
                }
            })
            
        }
    })
    
    
}

async function update(req, res) {

    console.log('UPDATE FUNCTION HIT! REQ.BODY CONTAINS: ')
    console.log(req.body)

    // req.body.rtWorkouts.forEach(async function (w){
    //     await 
    // })

   await Routine.findByIdAndUpdate(req.params.id, {rtName: req.body.rtName})
   
   
   
   
   res.redirect('/routines')
}