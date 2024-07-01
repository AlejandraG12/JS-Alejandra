// Añadir una clase a un elemento al hacer clic en un botón, eliminar la clase al hacer clic en un botón y alternar una clase al hacer clic en un botón.

let parrafo=document.getElementById('parrafo');
let addClassbutton=document.getElementById('mas');
let removeClassbutton=document.getElementById('menos');
let toggleClassbutton=document.getElementById('alternar');

addClassbutton.addEventListener('click',function (){
    parrafo.classList.add('color');
});

removeClassbutton.addEventListener('click',function (){
    parrafo.classList.remove('color');
});

toggleClassbutton.addEventListener('click',function (){
    parrafo.classList.toggle('color');
});





