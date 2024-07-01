let boton=document.getElementById("btn");

 
 boton.addEventListener('click',handleClick);

 function cambiarColor() {

    boton.style.backgroundColor='yellow';
    
 
 }
 
 boton.addEventListener("mouseover", cambiarColor);


 function restaurarColor() {

    boton.style.backgroundColor='';
   

    
 }

 boton.addEventListener("mouseout", restaurarColor);

 function handleClick() {

    alert('¡Hiciste click en el botón!');
    
 }


 
 
 

