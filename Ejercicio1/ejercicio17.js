// Ejercicio 17

//Pide al usuario que ingrese números hasta que ponga parar. Cuando escriba parar dejaran de salir cuadros de diálogos y aparecerá en la consola cuántos números pares ha ingresado.

//Necesitamos un for con una condición == a true.
//Si el usuario mete parar esa condición pasará a false.
//Si mete nº comprobaremos si el nº es par, si es par ++.



let numeroPares = 0;
let continuar = true;

for (let i = 0; continuar === true; i++) {

    let numero = prompt('ingrese números (o escribe parar para detener)');

    if (numero.toLocaleLowerCase() === 'parar') {

        continuar = false;

    } else {

        if (numero % 2 === 0) {
            numeroPares++;

        }
    }


}

console.log('Numeros pares' + numeroPares)


// EJERCICIO 17*

//Pide al usuario que ingrese números hasta que ponga parar. 
//Cuando escriba parar dejaran de salir cuadros de diálogos y aparecerá en la consola cuántos números positivos y pares ha ingresado, y en otra línea cuántos números pares y negativos ha ingresado.

let numerosPP = 0;
let numerosPN = 0;

let con = true;

for (let i = 0; con === true; i++) {

    let numero = prompt('ingrese números (o escribe parar detener)');

    if (numero.toLocaleLowerCase() === 'parar') {

        continuar = false;

    }
    else {

        if ((numero % 2 === 0) && (numero >= 0)){
            numerosPP++;

    }else if ((numero % 2 === 0) && (numero < 0)) {

        numerosPP++; }


    }
}
console.log('Numeros pares y positivos' + numerosPP);
console.log('Numeros pares y positivos' + numerosPN);
















