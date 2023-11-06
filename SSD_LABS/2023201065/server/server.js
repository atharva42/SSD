const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes=require('./routes/workouts.js')
const todoRoutes = require('./routes/todo.js');
const userRoutes=require('./routes/user.js')
const uri = 'mongodb://localhost:27017/'


//express app
const app=express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user',userRoutes)
app.use('/api/todos', todoRoutes);

//connect to db
mongoose.connect(uri)
.then(() => {
    //listen for requests
    app.listen(4000, () => {
    console.log("conected to MongoDb & listening on port 4000")
})
})
.catch((error) => {
    console.log(error)
})
