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

const createWorkout = async (req,res) => {
    const {title, load, reps} = req.body
    console.log('data is at get method')
    try{
        console.log("data at backend")
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete Workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectID.isValid){
       return res.status(400).json({msg:'No such workout'})
    }
    
    const workout = Workout.findByIdAndDelete({_id:id})

    if(!Workout){
        return res.status(404).json({error: 'No such Workout'})
    }

    res.status(200).json(workout)
}

//update workout

const updateWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(400).json({msg:'No such workout'})
    }

    const workout = Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(400).json({msg:'No such workout'})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}