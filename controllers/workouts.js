const {Workout} = require("../models/workouts");

module.exports = {
    index,
    new: newWorkout,
    create, 
    delete: deleteOne, 
    update,
    findUpdate, 
}

//Render workouts index
function index(req, res) {
            Workout.find({}, function (err, workouts) {
                if (err) return console.log('error ' + err)
                console.log('IF render index')
                res.render("workouts/index", {workouts});
              });
  }

function newWorkout(req, res) {
    console.log("Workout Form")
    res.render('workouts/new')
}

function create(req, res) {
    const workout = new Workout(req.body)
    workout.save(function (err){
        if (err) {
            return res.render('workouts/new')
        } else {
            res.redirect('/workouts')
        }
    })
}

async function deleteOne(req, res) {
    
        await Workout.findByIdAndDelete(req.params.id)
    
    res.redirect('/workouts')
    console.log("DELETE ONE WITH ID OF " + req.params.id)
    
}

function findUpdate(req, res){
    console.log('FIND UPDATE REQ PARAMS.ID')
    console.log(req.params.id)

    Workout.findById(req.params.id, function (err, workouts){
        if (err) {
            console.log('FIND UPDATE ERROR ' + err)
        } else {
            console.log('FIND UPDATE WORKOUTS IS ')
            console.log(workouts )
            res.render('workouts/update', {workouts})
        }
    })
    
    
}

async function update(req, res) {

    console.log('UPDATE FUNCTION HIT! REQ.BODY CONTAINS: ')
    console.log(req.body)

   await Workout.findByIdAndUpdate(req.params.id, {name: req.body.name, muscleGroup: req.body.muscleGroup, sets: req.body.sets})
   
   
   res.redirect('/workouts')
}