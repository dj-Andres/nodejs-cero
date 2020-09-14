const http=require('http');

//const port=process.env.PORT;

const server=http.createServer((req,resp)=>{
    //resp.statusCode=200;
    //resp.setHeader("Content-Type","text/html");
    resp.end("<h1>Hola mundo cruel,como estais </h1>");
});
const puerto=3000;

server.listen(puerto,()=>{
    console.log(`Servidor corriendo en el  puerto: ${puerto}`);
});