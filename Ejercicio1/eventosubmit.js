let formulario = document.getElementById('formulario');

function validarEnvio(event) {
  event.preventDefault(); // le estoy pidiendo que no se envie

  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let interes = document.getElementById('interes').value;

  let nombreValido=nombre !==""; // estoy declarando que mientres este vacio no es valido
  let interesValido=interes !=="";
  let edadValida = Number.isInteger(parseInt(edad))&& parseInt(edad)>18; // estoy diciendole que el valor sea un número entero y que todo lo de aqui me lo devuelve en número.

  if (nombreValido && interesValido && edadValida) {


    formulario.submit();  // si las tres declaraciones son verdad , me envia el formulario
    
  }

  mostrarError('error-nombre',nombreValido);
  mostrarError('error-edad',edadValida);
  mostrarError('error-interes',interesValido);
  
  }


  // este es para que al usuario le aparezcan los mensajes de error


  function mostrarError(id,mostrar) {

    let parrafo=document.getElementById(id);
    
  

    if (mostrar) {
      parrafo.style.display='none';// oculta el mensaje
      
    }

    else{
 
      parrafo.style.display='block';// mostrar el mensaje

    }

  }
  
  formulario.addEventListener('submit',validarEnvio);




