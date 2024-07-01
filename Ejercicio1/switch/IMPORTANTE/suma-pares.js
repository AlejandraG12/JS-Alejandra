//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

let numeroN=parseInt(prompt('Por favor ingrese un Nº'));
let numeroM=parseInt(prompt('Por favor ingrese un Nº mayor que el anterior'));



let sumarPares=0;

for (let i = numeroN;i <= numeroM;i++) {

    if (i%2===0) {
        sumarPares+=i;
        
    }
    
    
}
 console.log(sumarPares);

// Crea una función para determinar si lo que ha ingresado el usuario en el prompt es una cadena de texto escrita solo en mayúsculas, solo en minúsculas o por una mezcla de ambas.


let frase= prompt('Introduce una frase');


function comprobar(frase) {

    let mayusculas = frase.toUpperCase();
    let minusculas= frase.toLocaleLowerCase();

    

    if (frase===mayusculas) {

      

        console.log('Solo mayusculas');
        
    }

    else if (frase===minusculas) {

        console.log('Solo minúsculas');


        
    }

    else{

        console.log('Mezcla de mayúsculas y minúsculas')
    }
    
}

comprobar(frase);





