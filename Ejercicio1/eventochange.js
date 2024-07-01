
// primer ejercicio
function cambiarColor() {
    let selecColor = this.value;
    console.log('Color seleccionado:', selecColor);
  }

 document.getElementById('seleColor').addEventListener('change', cambiarColor);




 //2 - Formulario en el que ingresar el nombre. Que cuando ingreses el nombre y clickes fuera aparezca en una p.

//Texto de la p al principio → Aquí aparecerá tu nombre

let parrafo=document.getElementById('parrafo');
let nombre=document.getElementById('nombre');

function escribirNombre() {

    parrafo.textContent=this.value;
    
}

nombre.addEventListener('change',escribirNombre);

