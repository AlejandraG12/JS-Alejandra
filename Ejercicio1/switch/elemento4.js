// Cuando pase el ratón por encima del div, cambiará el color de fondo de ese div.

let prueba=document.getElementById("bar");



 function cambiarColor() {

    prueba.style.backgroundColor='red';
    
 
 }
 
 prueba.addEventListener("mouseover",cambiarColor);





 function restaurarColor() {

    prueba.style.backgroundColor='orange';
   

    
 }

 prueba.addEventListener("mouseout", restaurarColor);




//Cuando salga el cursor del div, el div cambia de color de fondo.


