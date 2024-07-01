let frase = prompt("Introduce una frase:");


// Obtener el primer carácter del string

let primerCa = frase[0];


// Verificar si el primer carácter es un número o una letra

if (primerCa >= '0' && primerCa <= '9') {

    console.log("El string empieza con un número.");

} else if ((primerCa >= 'A' && primerCa <= 'Z') || (primerCa >= 'a' && primerCa <= 'z')) {

    console.log("El string empieza con una letra.");

} else {

    console.log("El string empieza con un carácter especial.");

}


2 //

    let ensalada = ["patata", "lechuga", "tomate", "berenjena", "batata", "maíz"];

let ingrediente = prompt("Introduce un ingrediente:");


if (ensalada.includes(ingrediente.toLowerCase())) {

    console.log("El ingrediente se encuentra en el array.");

} else {

    console.log("El ingrediente no se encuentra en el array.");

}