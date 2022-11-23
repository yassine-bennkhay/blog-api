const express=require("express")
require("dotenv").config
const connectDB=require("./config/db")
const port=process.env.PORT||5000
const app=express()
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Posts endpoints
app.use('/api/posts',require('./routes/postRoutes'))
app.use('/api/add/post',require('./routes/postRoutes'))
app.use('/api/update/post',require('./routes/postRoutes'))
app.use('/api/delete/post',require('./routes/postRoutes'))




app.listen(port,()=>console.log(`The server is running on the port ${port}`))