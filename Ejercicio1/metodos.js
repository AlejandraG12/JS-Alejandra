let mensaje = "Hola Mundo";
let mensajeMayusculas = mensaje.toUpperCase(); // toLowerCase() minusculas 
console.log(mensajeMayusculas); // Resultado: "HOLA MUNDO"


// ----------------------------index of()--------------------

//me devuelve el  primer valor que encuentra , de acuerdo el caracter que yo puse para la busqueda.

// cuando me devuelve -1 es por que no encuentra ese valor 

let mensaje1 = "Hola Mundo";
let posicionO = mensaje1.indexOf("o");
console.log(posicionO); // Resultado: 1

//---------------------split----------------------------

// Me corta la cadena de texto -por donde yo le diga y me devuelve cortes de la frase y lo que no esta declarado en el corte me lo borra

let mensaje3 = "Hola, Mundo";
let palabras = mensaje3.split(", ");
console.log(palabras); // Resultado: ["Hola", "Mundo"]


//------------inciso------------------------------

//En JavaScript, puedes acceder a los caracteres individuales de una cadena de texto utilizando corchetes [] y especificando el índice del carácter que deseas obtener.


let frase1 = "Hola mundo";

console.log(frase1[0]);  // Esto imprimirá "H", el primer carácter de la cadena
console.log(frase1[1]);  // Esto imprimirá "o", el segundo carácter de la cadena








//------------------------------------- Ejercicio 15 ---------------------------


let frase = prompt("Ingresa una frase(gato)");

let palabra='gato';

if (frase.indexOf(palabra)>=0){

    console.log ('La palabra '+palabra + " está en la frase");
    
}
else{

    console.log ('La palabra '+ palabra + " no está en la frase");
   
}


// -------------------ejercicio 15.2 -----------------------

let frasi= prompt('Ingresa una frase').toLocaleLowerCase();

let letra = prompt("Ingresa una letra para buscar:").toLocaleLowerCase();

let contador=0;


 for (let i = 0; i <frasi.length;i++){

    if (frasi[i]===letra){
        contador++;

    }

}

console.log(' la letra '+ letra+ ' aparece '+ contador+' vez/vece en la frase ');


//---------- Contador de consonates: Solicita al usuario una frase y cuenta cuántas consonates contiene.

let frases= prompt('ingresa una frase (consonantes)').toLocaleLowerCase();

let Contador=0;

let consonantes="bcdfghjklmnpqrstvwxyz";





for(let i =0; i<frases.length;i ++)
   {

    if(consonantes.indexOf(frases[i])>=0){

        contador++;
    }

}
console.log('La frase tiene '+ contador+' consonante(s).');



// cuantas r hay en la frase 



let letras= prompt('ingresa una frase (letra r)').toLocaleLowerCase();

contador=0;

let letraR='r';

for(let i=0; i<letras.length;i++){

    if (letras[i]===letraR){
        contador++;
    }
    
}

console.log('la frase tiene:'+ contador + ' letras r')


//-----------------contar las vocales en una frase--------------

//-----------------ALERTA ALGO PARECIDO A LA PRUEBA--------------



//  Pide al usuario que ingrese una frase y utiliza un bucle for para contar la cantidad de vocales (a, e, i, o, u) en la frase.

//Pide al usuario que ingrese una frase.
//Creamos una variable que vamos a utilizar para contar las vocales y la = a 0.

//Utiliza un bucle for para recorrer cada carácter de la frase.
//Para cada carácter, verifica si es una vocal (a, e, i, o, u), sin importar si es mayúscula o minúscula.

//Si el carácter es una vocal, incrementa el contador de vocales en 1.

//Al finalizar el bucle, imprime la cantidad total de vocales encontradas en la frase.



let vocal= prompt('ingresa una frase (vocales)');


 Contador=0;

let vocales="aeiouAEIOU";


for(let i =0; i<frases.length;i ++)
   {

    if(vocales.indexOf(frases[i])>=0){

        contador++;
    }

}
console.log('La frase tiene: '+ contador+' vocal(es).');


//frase.lenght lo voy a utilizar para recorrer la longitud de la frase 
//indexoff me devuelve la posición



























































