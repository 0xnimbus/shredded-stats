        const {Routine} = require("../models/workouts");
        const {Workout} = require("../models/workouts");

        module.exports = {
            index,
            new: newRoutine,
            create,
            delete: deleteOne,
            //update,
            findUpdate,
        }

        //Render routines index
            function index(req, res) {
                Routine.find({}, function (err, routines){
                    if (err) {
                        res.redirect('routines')
                    } else {
                        res.render('routines/index', {routines}) 
                    }      
            })   
        }

        function newRoutine(req, res) {
            Workout.find({}, function (err, workouts){
                if (err) {
                    res.redirect('routine')
                } else {
                    res.render('routines/new', {workouts})
                }
            })
        }

        function create(req, res) {
            const routine = new Routine(req.body)
            Workout.find({name: req.body.rtWorkouts}, function (err, workouts){

                routine.rtWorkouts = workouts
                routine.save(function (err){
                    if (err) {
                        console.log("ROUTINES CREATE ERROR " + err)
                        return res.render('routines/new', {workouts})
                    } else {
                        Routine.find({}, function (err, routines) {
                            if (err) {
                                return console.log('error ' + err)
                            } else {
                            res.redirect('/routines')
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
            Routine.findById(req.params.id, function (err, routines){
                if (err) {
                } else {
                    Workout.find({}, function (err, workouts){
                        if (err) {
                            res.redirect('routines')
                        } else {
                            res.render('routines/update', {routines, workouts})
                        }
                    })
                    
                }
            })
            
            
        }


        //Could not get update to work
        // async function update(req, res) {
        //     let arr = []
        //     arr = req.body.rtWorkouts
        //     console.log(arr)
        //     Routine.findById(req.params.id, function(err, routines) {
        //         console.log('ROUTINES', routines)
        //         arr.forEach(function (w){

        //             function findMatch(w) {
        //                 return w == routines.rtWorkouts._id
        //             }
        //             console.log(routines.rtWorkouts._id.find(findMatch))

        //                 if (routines.rtWorkouts.find(findMatch)) {
        //                     console.log('INCLUDES')
        //                 } else if (req.body.rtWorkouts.includes(w) === false) {
        //                     x = true 
        //                     console.log('ELSE IF')
        //                 } else {
        //                     Workout.findById(w, function (err, workouts){
        //                         if (err) {
        //                         } else {
        //                             console.log('ELSE')
        //                             routines.rtWorkouts.push(workouts)
        //                         }
                                
        //                     })
        //                 }
        //     })
        //     routines.save(function (err){
        //         if (err) {
        //             res.redirect('routines')
        //         } else {
        //             res.redirect('/routines')
        //         }
        //     }) 
        // })
    
        // }