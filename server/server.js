import express from  "express"

const app = express()


app.get('/',()=>{
    console.log("Server started")
})

app.listen(3000, ()=>{
    console.log("listen to the PORT 3000")
})