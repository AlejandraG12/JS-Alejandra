
let numeroP = 0;
let continuar = true;

for (let i = 0; continuar === true; i++) {

    let numero = prompt("Por favor, ingrese números y  escribe (parar) para detener");

    if (numero.toLowerCase() === "parar") {

        continuar = false;

    } else {

        if (numero % 2 === 0) {
            numeroP++;

        }
    }


}

console.log("Números pares:"+ " " + numeroP)