const Workout = require('../models/workoutModel')

//get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

//get a single workouts
const getWorkout = async (req,res) => {
    const {id} = req.params
    const workout = await Workout.findById(id)
    if(!Workout){
        return res.status(404).json({error: 'No such Workout'})
    }
    res.status(200).json(workout)
}

//create a single workout

const createWorkout = async(req,res) => {
    const {title,reps,load} = req.body
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts
}