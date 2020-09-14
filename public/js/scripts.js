var menuitems=document.getElementById("menuitems");
    menuitems.style.maxHeight="0px";

    function menutoggle(){
        if(menuitems.style.maxHeight=="0px"){
            menuitems.style.maxHeight="200px";
        }else{
            menuitems.style.maxHeight="0px";
        }
    }


var productosimg=document.getElementById("productosimg");
var pequena_imagen=document.getElementsByClassName("small-img");

    pequena_imagen[0].onclick=function(){
        productosimg.src=pequena_imagen[0].src;
    }
    pequena_imagen[1].onclick=function(){
        productosimg.src=pequena_imagen[1].src;
    }
    pequena_imagen[2].onclick=function(){
        productosimg.src=pequena_imagen[2].src;
    }
    pequena_imagen[3].onclick=function(){
        productosimg.src=pequena_imagen[3].src;
    }

    document.getElementById('btn').addEventListener('click',function(e){
        window.location.replace("cart.html");
    });
    
