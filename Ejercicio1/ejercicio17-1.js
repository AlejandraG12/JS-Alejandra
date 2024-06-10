//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// 1. Solicitamos al usuario que ingrese un número utilizando y lo convertimos a number.

// 2. Declaramos una variable como true, asumiendo inicialmente que el número es primo.

// 3. Utilizamos un bucle for para iterar(repetir) desde 2 hasta la mitad del número . Comenzamos en 2 porque todos los números son divisibles por 1, y terminamos en la mitad del número porque ningún divisor de un número será mayor que su mitad. (osea de 16 será 8, pero no 9)

// 4.  Dentro del bucle, verificamos si el número es divisible por i y que nos devuelva el resto. Si es igual a cero, significa que i es divisor, por lo que actualizamos la variable a false.

// 5.  Después del bucle, verificamos si la variable es true y si el número introducido es mayor que 1. Si ambos son verdaderos, imprimimos en la consola que el número es primo. De lo contrario, imprimimos que el número no es primo.


let numero=parseInt(prompt('Por favor ingrese un número'));

let Primo=true;



for (let i = 2;  i <=(numero/2); i++){


    // si el número dividido entre algún otro  número que ni sea ni 1 ni el mismo da 0

    // El resto, entonces pasamos primo a falso

    if (numero %i==0 ) {
        
        Primo= false
    }

    

    
} 

if (Primo===true) {

   console.log('El número es primo') 


    
} else{

    console.log('El número no es primo') 

}








