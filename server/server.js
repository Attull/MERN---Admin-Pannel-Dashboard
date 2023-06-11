import express from  "express"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req, res)=>{
    res.send("Server started")
})

app.listen(PORT, ()=>{
    console.log(`listen to the PORT ${PORT}`)
})