 //usamos el modulo de moogose//
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const personaSchema=new Schema({
    nombre:String,
    cedula:String
})

//creacion del modelos//

const persona=mongoose.model('Persona',personaSchema);

module.exports=persona;