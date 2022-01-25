var botonencriptar = document.querySelector("#btn-encriptar");
var botondesencriptar = document.querySelector("#btn-desencriptar");
var mensajeIngresado  = document.querySelector("#input-texto");
var cuadroEncriptado  = document.querySelector("#msg");
var botonCopiar = document.querySelector("#btn-copy");

botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    mensaje = mensajeIngresado.value;
    mensajeEncriptado = mensaje.replaceAll("e", "enter")
                           .replaceAll("i", "imes")
                           .replaceAll("a", "ai")
                           .replaceAll("o", "ober")
                           .replaceAll("u", "ufat");
    cuadroEncriptado.value = mensajeEncriptado;
    mensajeIngresado.value = "";
    
});

botondesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    mensaje = mensajeIngresado.value;
    mensajeDesencriptado = mensaje.replaceAll("enter","e")
                           .replaceAll("imes", "i")
                           .replaceAll("ai", "a")
                           .replaceAll("ober", "o")
                           .replaceAll("ufat", "u");
    cuadroEncriptado.value = mensajeDesencriptado;
    mensajeIngresado.value = "";
  
});

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    cuadroEncriptado.select();
    document.execCommand("copy");
    cuadroEncriptado.value = ""; 

});


  

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 

Por ejemplo:
"gato" => "gaitober"
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras 

Por ejemplo:
gaitober" => "gato"
*/
