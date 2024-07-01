//5- Tengo una imagen de 300px ancho, cuando pase el ratón por encima la imagen se cambiara por otro diferente, al quitar el ratón la imagen volverá a aparecer.


let imagen=document.getElementById('miImagen');

let imagenOriginal=imagen.src;
let imagenNueva='../imagenes/2.webp';

function cambiarImagen() {

imagen.src=imagenNueva;

 };

 function restaurarImagen() {

    imagen.src=imagenOriginal;
    
 }
 
 imagen.addEventListener('mouseover',cambiarImagen);
 imagen.addEventListener('mouseout',restaurarImagen);

 

// FECHA ACTUAL - proyectar fecha y hora

function actualizarFecha() {
   


let ahora = new Date();
let opciones = {
  weekday: 'long', // Nombre completo del día de la semana (por ejemplo, "lunes")
  year: 'numeric', // Año con cuatro dígitos
  month: 'long', // Nombre completo del mes 
  day: 'numeric', // Día del mes como número
  hour: 'numeric',// para la hora
  minute:'numeric',//para los minutos
  second: 'numeric',// para los segundos

  
};

let fechaHora = ahora.toLocaleDateString('es-ES', opciones);
document.getElementById('hora').textContent=fechaHora;

}

setInterval(actualizarFecha,1000);




























