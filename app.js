//forma de requerir el modulo//
//const frutero=require('./frutas');
//forma de llamar mas de 2 objetos de un modulo//
const {frutas,dinero}=require('./frutas');
const cosway=require('cowsay');

console.log(cosway.say({
    text:"Hola a todos que tal",
    e:"oO",
    t:"U"
}));

frutas.forEach(item=>{
    console.count(item);
})

console.log(dinero);