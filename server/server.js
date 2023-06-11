import express from  "express"
import dotenv from 'dotenv'
import route from "./routes/userRoutes.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/users", route)

app.get('/',(req, res)=>{
    res.send("Server started")
})

app.listen(PORT, ()=>{
    console.log(`listen to the PORT ${PORT}`)
})