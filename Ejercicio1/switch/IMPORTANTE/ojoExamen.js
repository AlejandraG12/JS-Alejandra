//Crear una web con un botón y con una etiqueta div (con cualquier contenido) de 100 x 50 píxeles que se mueva al hacer clic en el botón, de izquierda a derecha hasta que llegue al final de la ventana.



function aclase() {

    let div=document.querySelector('.caja');
    div.classList.toggle("mover")


}

document.getElementById('btn').addEventListener('click', aclase);