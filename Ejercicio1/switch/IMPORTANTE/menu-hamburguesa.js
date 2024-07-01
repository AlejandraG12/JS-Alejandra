//2 Icono de hamburguesa que al clicar en él muestra el menú.

let hamburguesa=document.getElementById('hamburguesa');

let menu=document.getElementById('menu');



function verMenu() {
    menu.classList.toggle('active');
    
}

hamburguesa.addEventListener('click', verMenu);


