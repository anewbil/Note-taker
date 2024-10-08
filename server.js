const express=require("express")
const fs=require("fs")
const path=require("path")
const api=require("./routes")
const PORT=process.env.PORT||3001

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})

app.use("/api",api)



app.listen(PORT,()=>{
    console.log(`app listening on ${PORT}`)
})