
let pares= parseInt(prompt("Por favor, ingresa un número(entero)"))

function par(numero) {

    if (numero % 2===0) {

        return" Número Par."
    }

    else{
       return "Número impar."
    }
    
}

console.log("El resultado de la operación es: "+ par(pares));

