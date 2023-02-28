import express from 'express'
import cors from 'cors'
import {getNotes,getNote} from './database.js'

const app = express();

app.use(cors());

app.get('/',async (req,res)=>{
    const notes = await getNotes()
    res.json(notes)
})




app.get('/posts/:id',async (req,res)=>{
    const {id}=req.params;
    const note=await getNote(id)
    res.send(note)
    
})














app.listen(3000,()=>{
    
})


// route will bring last 10 posts
//:id will bring the selected post
//both are get requests
