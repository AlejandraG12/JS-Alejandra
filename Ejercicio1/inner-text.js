let innerHTML=document.getElementById('primera').innerHTML;

document.getElementById('primera').innerHTML='Este es el contenido ORIGINAL utilizando<strong> inner HTML</strong>';



let textContent=document.getElementById('segunda').textContent;
document.getElementById('segunda').textContent='Este es el nuevo contendido utilizando textContent.'


//Crea una página web con un botón y un div vacío. Utiliza JavaScript para que, al hacer clic en el botón, el contenido del div cambie a “Has hecho click en el botón”

let vacio=document.getElementById('miDiv');
let boton=document.getElementById('miBoton');

function cambiarContenido() {

    vacio.innerHTML='<p> ! Has hecho clic en el <a href="#">botón !</a></p>';
    
}

boton.addEventListener('click', cambiarContenido);




