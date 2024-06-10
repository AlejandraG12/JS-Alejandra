let numero= prompt ('Ingrese un número')


if (numero>=0) {

    console.log("El número es positivo");


    
} 
else {
    console.log("El número es negativo");

}

// ejercicio 7.1



if ((numero %2)==0) {

    console.log ('El número es par')
    
} else {

    console.log( 'El número es impar')
    
}

//Ejercicio 7.3

//Verificación de contraseña

let contraseñaGuardada='1234';

let contraseña =prompt ('Ingrese una contraseña');


if ((contraseña)== contraseñaGuardada){

    console.log ('La contraseña es correcta')
    
} else {

    console.log ('La contraseña es incorrecta')
    
}

//----------------------------------------VARIAS CONDICIONES----------------------------------------------

let hora=14;

if (hora > 12) {

    console.log ('Buenos días'); // SI CUMPLE LA 1
    
} else if( hora >18 ){

    console.log ('Buenas tardes'); // SI CUMPLE LA 2
} else{

    console.log ('Buenas noches'); // SI NO  CUMPLE NINGUNA -LO ÚLTIMO QUE TIENE QUE APARECER


}

















