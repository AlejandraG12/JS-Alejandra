let contador=0;

function incrementarContador(){

    contador++;

    document.getElementById('contador').textContent=contador;

   
}


// mostrar fecha y hora



function incrementarHora() {
   
    let ahora = new Date();
    let opciones = {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute:'numeric',
      second: 'numeric',
    
      
    };
    
    let fechaHora = ahora.toLocaleDateString('es-ES', opciones);
    document.getElementById('contable').textContent=fechaHora;
    setInterval(actualizarFecha,1000);
    
    }
    
    