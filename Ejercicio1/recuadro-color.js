

function cambio() {
    let contenido=document.getElementById('contenido');
let selecColor=document.getElementById('selecColor');
    


    contenido.textContent=this.value;
    contenido.style.backgroundColor=this.value;
    
}

document.getElementById('seleColor').addEventListener('change', cambio);



