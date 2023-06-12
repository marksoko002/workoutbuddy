const express = require('express')
const router = express.Router()
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deletWorkout,
    updateWorkout
    } = require('../controllers/workoutController')

// GET all workouts
router.get('/',getWorkouts)

// GET a single workouts
router.get('/:id',getWorkout)

// POST workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id',deletWorkout)

// UPDATE workouts
router.patch('/:id',updateWorkout)


module.exports = router
