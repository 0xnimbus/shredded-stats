const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    name: {
        type: String, 
    },
    muscleGroup: {
        type: String,
        enum: ["Back", 'Biceps', 'Chest', 'Triceps', 'Shoulders', 'Legs', 'Abs', 'Misc']
    },
    sets: {
        type: Number,
    }
})

const routineSchema = new Schema ({
    rtName: {
        type: String 
    },
    rtWorkouts: [workoutSchema], 
})

const statsSchema = new Schema ({
    stDate: {
        type: Date, 
    },
    stRoutine: [routineSchema],
    weight: [{
        type: Number, 
    }],
    reps: [{
        type: Number
    }]
})

module.exports = {
    Routine: mongoose.model("Routine", routineSchema),
    Workout: mongoose.model("Workout", workoutSchema),
    Stat: mongoose.model("Stat", statsSchema) 
}

