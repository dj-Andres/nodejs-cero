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
router.get('/crear',(req,res)=>{
    res.render('crear');
})
router.post('/',async(req,res)=>{
    const body=req.body
    //console.log(body);
    try {
        const PersonaBd=new Persona(body);
        await PersonaBd.save();
        console.log('La persona fue creada',PersonaBd);
        res.redirect('/personas')     
    } catch (error) {
        console.log(error);
    }
})
router.get('/:id',async(req,res)=>{
    const id=req.params.id; 
    try {
        const PersonaBd=await Persona.findOne({_id:id})
        console.log(PersonaBd);
        res.render('detalle',{
            Persona:PersonaBd,
            error:false
        })
    } catch (error) {
        console.log(error);
        res.render('detalle',{
            Persona:PersonaBd,
            error:true,
            mensaje:'No se encuentra la persona'
        })
    }
})
module.exports=router;