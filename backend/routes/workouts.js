const express = require('express')
const Workout =require('../models/workoutModel')
const workoutController = require('../controllers/workoutController')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)

module.exports = router