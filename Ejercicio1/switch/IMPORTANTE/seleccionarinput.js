let select = document.getElementById("opciones");
let cajaInput = document.getElementById("cajaTexto");

function actualizarTexto() {
    let valorOpcion = select.options[select.selectedIndex].value;
    cajaInput.value = valorOpcion;

    let indiceSelec = select.selectedIndex ;
    if (indiceSelec >= 0 && indiceSelec <= 4) {
        document.getElementById("boton" + (indiceSelec)).disabled = false;
    }
}

function deshabilitarBoton(numeroBoton) {
    document.getElementById("boton" + numeroBoton).disabled = true;
}


