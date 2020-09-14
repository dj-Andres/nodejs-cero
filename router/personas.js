const express=require('express');

const router=express.Router();

router.get('/personas',(req,res)=>{
    res.render("personas",{
        arrayPersonas:[
            {id:'1',cedula:'0707012605',nombre:'Diego'},
            {id:'2',cedula:'0707012603',nombre:'Andrea'}
        ]
    })
})

module.exports=router;