// let miElemento = document.getElementById("miElemento");

// // Función que se ejecuta cuando ocurre el evento de clic
// function handleClick() {
//     console.log("¡Hiciste clic en el elemento!");
// }
// miElemento.addEventListener('click',handleClick);



// Función que se ejecuta cuando el ratón pasa sobre el elemento- PASO POR ENCIMA Y ME LO CUENTA

let miElemento = document.getElementById("miElemento");

function handleMouseOver() {
    console.log("El ratón está sobre el elemento.");
}

miElemento.addEventListener('mouseover',handleMouseOver);


// Función que se ejecuta cuando el ratón sale del elemento

function handleMouseOut() 
{
    console.log("El ratón salió del elemento.");

}
miElemento.addEventListener("mouseover", handleMouseOver);
miElemento.addEventListener("mouseout", handleMouseOut);





