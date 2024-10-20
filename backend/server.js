require('dotenv').config()
const workoutRoutes = require('./routes/workouts')

const express = require('express')
const app = express()

app.use(express.json)
app.use((req,res,next) => {
    console.log(req.path,req.method)    
    next()  
})

app.get('/api/workouts/',workoutRoutes)

app.listen(process.env.PORT, () => {
    console.log("listening on port ", process.env.PORT);
})