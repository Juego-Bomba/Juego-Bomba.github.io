let opcionUno = document.getElementById("opcionUno");
let opcionDos = document.getElementById("opcionDos");
let opcionTres = document.getElementById("opcionTres");
let opcionCuatro = document.getElementById("opcionCuatro");
let opcionUnoN2 = document.getElementById("opcionUnoN2");
let opcionDosN2 = document.getElementById("opcionDosN2");
let opcionTresN2 = document.getElementById("opcionTresN2");
let opcionUnoN3 = document.getElementById("opcionUnoN3");
let opcionDosN3 = document.getElementById("opcionDosN3");



let levels = window.location.pathname.split("/").pop();

function timeLevel(){
    if (levels.includes("nivel2.html")){
    document.getElementById("tiempoNivel").innerText = "Tienes 2 minutos y 1 intento para evitar un desastre";
    } if (levels.includes("nivel3.html")){
       document.getElementById("tiempoNivel").innerText = "Tienes 1 minuto y 1 intento para desactivar la bomba por completo"    
     }
     else {return false;}    
}

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
  }

  function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
  }


function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function countDown() {
    if (levels.includes("nivel1.html")){

    let time_minutes = 3; // Value in minutes
    let time_seconds = 0; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
    }
   if (levels.includes("nivel2.html")){
    
    let time_minutes = 2; // Value in minutes
    let time_seconds = 0; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#cuentaRegresivaDos');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);

   } 
   if (levels.includes("nivel3.html")){
    
    let time_minutes = 1; // Value in minutes
    let time_seconds = 0; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#cuentaRegresivaTres');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);   
   }
}
function Choice(elem){
var box = document.getElementById("error");
if (levels.includes("nivel1.html") && elem.id == "opcionUno" || elem.id == "opcionTres" || elem.id == "opcionCuatro") {
  box.style.backgroundColor = "red";
} if (levels.includes("nivel1.html") && elem.id == "opcionDos") {
  box.style.backgroundColor = "green";
}
if (levels.includes("nivel2.html") && elem.id == "opcionUnoN2" || elem.id == "opcionDosN2") {
  box.style.backgroundColor = "red";
} if (levels.includes("nivel2.html") && elem.id == "opcionTresN2") {
  box.style.backgroundColor = "green";
}
if (levels.includes("nivel3.html") && elem.id == "opcionDosN3") {
  box.style.backgroundColor = "red";
} if (levels.includes("nivel3.html") && elem.id == "opcionUnoN3") {
  box.style.backgroundColor = "green";
}

}
function changeLevel(elem){

  if (levels.includes("nivel1.html") && elem.id == "opcionUno" || elem.id == "opcionTres" || elem.id == "opcionCuatro") {
    location.replace("../pages/reiniciarJuego.html");
  } if (levels.includes("nivel1.html") && elem.id == "opcionDos"){
    location.replace("../pages/nivel2.html");
  }
  if (levels.includes("nivel2.html") && elem.id == "opcionUnoN2" || elem.id == "opcionDosN2"){
    location.replace("../pages/reiniciarJuego.html");
  } if (levels.includes("nivel2.html") && elem.id == "opcionTresN2"){
    location.replace("../pages/nivel3.html");
  }
  if (levels.includes("nivel3.html") && elem.id == "opcionDosN3"){
    location.replace("../pages/reiniciarJuego.html");
  } if (levels.includes("nivel3.html") && elem.id == "opcionUnoN3"){
    location.replace("../pages/mensaje.html");
}
}

function textHelp(){
  if (levels.includes("nivel2.html")){
    document.getElementById("textHelp").innerText = "Ufff polinomios, odio los polinomios. Demasiadas equis...";
  }
  if (levels.includes("nivel3.html")){
    document.getElementById("textHelp").innerText = "Sé que es un cuatrinomio, pero no sé que tan perfecto...";
  }
}  
function resetGame(element){
  if (element.id == "reiniciar"){
    location.replace("../pages/nivel1.html");
  }
}


function enter(event) {
  let nombre = document.getElementById("nombre").value;
  let volver = document.getElementById("volver");
  let x = event.keyCode;
  if (x == 13) { 
    document.getElementById("mensaje").innerText = "Muchas gracias " + nombre + ", nos salvaste de lo que pudo ser un desastre. Es posible que en un tiempo la gente ya no te recuerde, incluyéndome. De todas formas, te llamaremos si necesitamos a un experto."; 
    volver.style.display = "block";
  }
}
function menuPrincipal(element){
  if (element.id == "volver"){
    location.replace("../index.html");
  }
}
