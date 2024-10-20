const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.json({msg:'this is get'})
})

//get a single workout
router.get('/:id',(req,res)=>{
    res.json({msg:'Single id'})
})

//post a new workout
router.post('/',(req,res)=>{
    res.json({msg:'post a new workout'})
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:'detelted a  id'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:'updated a workout'})
})

module.exports = router