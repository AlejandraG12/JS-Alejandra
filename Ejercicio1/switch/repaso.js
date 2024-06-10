//1-Mostrar en la consola los números de X a 1 disminuyendo de 1 en 1. X lo ingresa el usuario en un prompt.

let x = prompt("por favor, ingresa un número");



for (let i = x; i >= 1; i--) {

    console.log(i)


}

//2- Ejercicio que me pida números mientras no le diga que pare y me muestre solo los pares.

let numeroPares = 0;
let continuar = true;

for (let i = 0; continuar === true; i++) {

    let numero = prompt('ingrese números o escribe (parar) para detener');

    if (numero.toLowerCase() === 'parar') {

        continuar = false;

    } else {

        if (numero % 2 === 0) {
            numeroPares++;

        }
    }


}

console.log('Números pares:'+' '+numeroPares)


//3-Programa que nos diga si un número es primo (no es divisible por ninguno otro número que no sea él mismo o 1)



let numero=parseInt(prompt('Por favor ingrese un número'));


let Primo=true;



for (let i = 2;  i <=(numero/2); i++){


    
    if (numero %i==0 ) {
        
        Primo= false
    }

        
} 

if (Primo===true) {

   console.log('El número es primo.'); 


    
} else{

    console.log('El número no es primo.'); 

}


//4-Programa que pida una frase y muestre en la consola cuantas veces aparece la letra o.

let letras= prompt('ingresa una frase ').toLowerCase();

contador=0;

let letraO='o';

for(let i=0; i<letras.length;i++){

    if (letras[i]===letraO){
        contador++;
    }
    
}

console.log('la frase tiene:'+ contador + ' letras(O) ' + 'veces en la cadena.');


//5-Función →

//El usuario ingresa un nº y nos tiene que aparecer en la consola si es par o impar.

let pares= parseInt(prompt('Ingresa un número(saber si es par)'))

function par(numerico) {

    if (numerico%2===0) {
        return' Par.'
    }

    else{
       return ' Impar.'
    }
    
}

console.log('El resultado de la función es:'+ par(pares));


// preguntas para el examen teorico


// para que se utiliza split()? R//división de cadenas de textos, sin afectar el original(string)  espaciolet arr = mensaje.split(' ');//Así se muestra el arregloconsole.log(arr); // ["El", "Sol", "brilla", "de", "nuevo"]

//¿que hace document.write()? R// lo que escriba se pone en la pantalla 

//¿Que hacemos con continue en un bucle?

//  permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual

//Qué significa BOM R// BROWSER OBJECT MODEL 

//Que se emplea para añadir un elemento hijo( desde javascript) // APPENDCHILD()



//la etiquets <noscript> Para que se utiliza



// R// ESTE CONTENIDO NOS MUESTRA SOLO SI EL NAVEGADOR NO SOPORTA SCRIPTING



//para que sirve windows.open

// R // PARA ARBIR UNA VENTANA NUEVA DEL NAVEGADOR 

//para que se utiliza removechild()

// PARA ELIMINAR EL HIJO DOM

// para que se utiliza getElementByid()

//Para seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.


//Diferencia entre java y js 

//JAVASCRIPT  ES LENGUAJE DE INTERPERETACIÓN, INTERACTIVIDAD Y DINAMISMO DE LAS PAGINAS WEB

//JAVA LENGUAJE DE PROGRAMACIÓN COMPILADO ORIENTADO A OBJETOS DESARROLLO DE APLICACIONES 

// LA RESPUESTA ES QUE NO SON CORRECTAS NINGUNA DE LAS DOS 


