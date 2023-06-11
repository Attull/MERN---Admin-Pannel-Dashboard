import express from  "express"
import dotenv from 'dotenv'
import route from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use("/api/users", route)

app.get('/',(req, res)=>{
    res.send("Server started")
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`listen to the PORT ${PORT}`)
})