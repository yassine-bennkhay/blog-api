const mongoose=require("mongoose")
require("dotenv").config()
require("colors")
const uri=process.env.MONGO_URI

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(uri)
        console.log(`Database connected: ${conn.connection.host}`.green.underline)

    }catch(error){
       console.log(error)
       process.exit(1)
    }

}
module.exports=connectDB

