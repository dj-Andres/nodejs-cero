const express =require('express');
//usando el modulo de rutas de express//
const router=express.Router();

router.get('/',(req,res)=>{
    res.render("index");
})
router.get('/servicios',(req,res)=>{
    res.render("servicio",{tituloservicio:"Servicos .NET"})
})
router.get('/productos',(req,res)=>{
    res.status(200).render("productos");
})

//exportamos las rutas para poder usarlo en el script principal//
module.exports=router;