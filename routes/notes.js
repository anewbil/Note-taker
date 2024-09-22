const router=require("express").Router()
const fs=require("fs")
const {v4:uuidv4}=require("uuid")

router.get("/",(req,res)=>{
    fs.readFile("./db/db.json",(err,data)=>{
        if (err){
            console.error(err)
        }else{
            res.status(200).json(JSON.parse(data))
        }
    })
})

router.post("/",(req,res)=>{
    fs.readFile("./db/db.json",(err,data)=>{
        if (err){
            console.error(err)
        }else{
            let notesArr =JSON.parse(data)

            const newNote={
                title:req.body.title,
                text:req.body.text,
                id:uuidv4()
            }
            notesArr.push(newNote)
            fs.writeFileSync("./db/db.json",JSON.stringify(notesArr))
            res.status(200).json(notesArr)
        }
    })
})

router.delete("/:id",(req,res)=>{
    fs.readFile("./db/db.json",(err,data)=>{
        if (err){
            console.error(err)
        }else{
            let notesArr =JSON.parse(data)
            const filteredNotes=notesArr.filter((note)=>{
                return note.id !== req.params.id
            })
            fs.writeFileSync("./db/db.json",JSON.stringify(filteredNotes))
            res.status(200).json({message:"Note was deleted"})
        }
    }
)
})


module.exports=router


/*ignore just a test*/ 