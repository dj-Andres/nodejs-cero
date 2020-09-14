const express=require('express');

const app=express();

const puerto=3000;

app.get('/',(req,res)=>{
    var suma=0;
    for(i=2; i<process.argv.length;i++){
        suma+=Number(process.argv[i]);
        console.log(suma);
    }
})

app.listen(puerto,()=>{
    console.log('servidor a su servicio'+puerto);
})