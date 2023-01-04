const express = require('express')
const mongoose = require('mongoose')
const app = express()
const multer = require('multer')
const route = require("./routes/route")
mongoose.set('strictQuery', true)
app.use(express.json())
app.use(multer().any());

mongoose.connect('mongodb://localhost:27017/socialMediaApp',{
    useNewUrlParser:true
})
.then(()=>{
    console.log("mongoDb is connected")
})
.catch((error)=>{
    console.log(error)
})

app.use("/",route)

//----------handling wrong api edge case--------------------------------------------
app.use((req, res) => {
    res.status(400).send({ status: false, error: "Endpoint is not Correct" });
})

app.listen(3000,()=>{
    console.log(`Express is running on Port `+3000)
})






