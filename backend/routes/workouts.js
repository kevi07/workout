const express = require('express')
const Workout =require('../models/workoutModel')
const workoutController = require('../controllers/workoutController')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:'detelted a  id'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:'updated a workout'})
})

module.exports = router