require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const app = express()

// middlewares
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// routes
app.use('/api/workout',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
  // listen for requests
  app.listen(process.env.PORT,()=>{
    console.log('Connected on port',process.env.PORT)
})
}).catch(error=>{
    console.log({error: error.message})
})


