const express = require('express');
const route = require('./router/route');
const { connectDb } = require('./db');
const cors = require('cors');
connectDb()


const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/blog',route)

app.listen(4000,()=>{
    console.log("running")
})
