
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})

connectDB()










/*
import express from "express";
( async () => {
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
        console.log(error)
    })
    app.listen(process.env.PORT, () =>{
        console.log(`app is listen ${process.env.PORT}`);
        
    })
} catch (error) {
    console.error("ERROR: ", error)
    throw error
}
})()
*/