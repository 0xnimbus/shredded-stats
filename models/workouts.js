const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    muscleGroup: {
        type: String,
        enum: ["Back", 'Biceps', 'Chest', 'Triceps', 'Shoulders', 'Legs', 'Abs', 'Misc'],
        required: true
    },
    sets: {
        type: Number,
        required: true
    }
})

const routineSchema = new Schema ({
    rtName: {
        type: String, 
    required: true
    },
    rtWorkouts: [workoutSchema], 
})

const statsSchema = new Schema ({
    stDate: {
        type: Date, 
        required: true
    },
    stRoutine: [routineSchema],
    weight: [{
        type: Number, 
        required: true
    }],
    reps: [{
        type: Number,
        required: true
    }]
})

module.exports = {
    Routine: mongoose.model("Routine", routineSchema),
    Workout: mongoose.model("Workout", workoutSchema),
    Stat: mongoose.model("Stat", statsSchema) 
}

