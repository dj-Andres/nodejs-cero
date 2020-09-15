const express=require('express');

const router=express.Router();
//usando el modelo//
const Persona=require('../models/personas');

router.get('/',async (req,res)=>{
    try {
        const arregloMascotasBD=await Persona.find();
        console.log(arregloMascotasBD);

        res.render("personas",{
            //arrayPersonas:[
            //    {id:'1',cedula:'0707012605',nombre:'Diego'},
            //    {id:'2',cedula:'0707012603',nombre:'Andrea'}
           // ]
           arregloMascotas:arregloMascotasBD
        })

    } catch (error) {
        console.log(error);
    }
})

module.exports=router;