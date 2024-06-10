// Escribe una función que imprima en la consola los números pares de x al y.

//Pedir al usuario nº de inicio (x)
//Pedir al usuario nº de fin (y)



function numeroPares(inicio,fin) {
    for (let i = inicio; i <= fin; i++) {
       
        if (i%2===0) {
             console.log(i);
        }
    
        
    }
   
}
let x= parseInt(prompt('Ingresa un número inicial'));
let y= parseInt(prompt('Ingresa un número final'));

numeroPares(x,y);


//2 Verificación de contraseña

//Necesitamos una contraseña almacenada.
//Pedimos al usuario ingresar la contraseña.


let contraseñaAlmacenada='1234';

function Verifica(contra){

    if (contraseñaAlmacenada ===contra) {
        return 'Contraseña es correcta';
        
    }
   
    else {

        return'la contraseña es incorrecta';
    };
   

}
let contraseña =prompt ('Ingrese una contraseña');
console.log(Verifica(contraseña))



//3------------------------------------ Determina el grupo de edad---------------------------------

//El usuario ingresa la edad.
//Si es mayor o igual a 0 comprobamos:
//Si tiene 12 o menos -> Es un niño
//Si tiene 17 o menos -> Es adolescente
//Si tiene 64 o menos -> Es adulto
//Sino, es anciano
//Si es menor a 0 → Edad no válida



function GrupoEdad(edad) {
    if (edad>=0) {
        
   

    if (edad <= 12 ) {
        return 'Es un niño';
        
    }

    else if (edad<=17 ) {
        return 'Es un adolescente';
        
    }

    else if (edad<=64 ) {
        return 'Es un adulto';
        
    }
    else{
        return'ERES UN ANCIANO';
    }
    
    
}

else{
        return'Edad no válida';
}

   



}

let e= parseInt(prompt ('Ingrese la edad '));

console.log(GrupoEdad(edad))
