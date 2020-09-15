const express=require('express'); 

const app=express();
//crearcion del puerto local//
//const port =3000;

//crearcion del puerto para heroku//
const port =process.env.PORT || 3000;

//conexion con la bd//
const mongoose=require('mongoose');
//credenciales de la bd//
const user='Andres-JP';
const password='619-Andres';
const bd='practica';
const uri=`mongodb+srv://${user}:${password}@cluster0.agppc.mongodb.net/${bd}?retryWrites=true&w=majority`;
//sentencia de para conectar con la bd//
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=> console.log('conectado a la base de datos'))
  .catch(e =>console.log(e))

//usando el motor de plantilla EJS//
app.set('view engine','ejs');
app.set('views',__dirname+"/views")
//mostrar la pagina estatica al inicio de la peticion //
 app.use(express.static(__dirname+"/public"));
//forma de usar las rutas sin uso de Router de express//
//app.get('/',(req,res)=>{
    //res.send('Mi respuesta con express v2');
    //mostramos la pagina de ejs con render
  //  res.render("index");
//})
//app.get('/servicios',(req,res)=>{
    //res.send('Estas en la pagina servicios');
  //  res.render("servicio",{tituloservicio:"Servicos .NET"})
//})
//app.get('/productos',(req,res)=>{
  //  res.status(200).render("productos");
//})

//1. usando el modulo de Router de express manera correcta//
//2. usando el archivo de rutas//
app.use('/',require('./router/rutasWeb'));
app.use('/personas',require('./router/personas'));
//configuracion de archivos estaticos//
//app.use(express.static(__dirname +"/public"));   
//uso de middleware//
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"No se encontro lo que buscabas no molestar"
    });
})

app.listen(port,()=>{
    console.log('servidor listo',port);
})