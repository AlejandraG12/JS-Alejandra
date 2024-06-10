// contraseñas

let contraseñaAlmacenada= "abc";

let contraseñaIngresada =prompt ("Por favor , ingresa la contraseña");

let igualdad = contraseñaAlmacenada === contraseñaIngresada ;

console.log ("La contraseña es:" + igualdad);





// operadores lógicos

let llueve = true; //Si llueve
let haceSol = false; //No hace sol


// si las variables son verdaderas ambas  && - me devuelve = true - necesito las dos variables verdaderas
// si una de las variables es verdadera y pongo || me da = true por que solo necesito una variable verdadera

console.log(llueve && haceSol); // false
console.log(llueve || haceSol); // true	


// DATOS ALMACENADOS

let nombreAlmacenado = "alejaG";
let contraseñaAlmacenadas= "tomi";

// DATOS INGRESADOS

let nombreIngresado= prompt ("Ingrese su Usuario:")
let contraseñaIngresadas= prompt ("Contraseña:")

// COMPARACIÓN

let igual = ( nombreAlmacenado == nombreIngresado) && ( contraseñaAlmacenadas == contraseñaIngresadas)

console.log ( "los Datos introducidos son: " + igual)


// EJERCICIO 5.2


//DATOS INGRESADOS
let edad= prompt ('Ingrese su Edad')

//COMPOBRACIÓN

let comprobacion = (edad >= 18) && (edad <= 65);

console.log("Tiene la edad permitida:" + comprobacion)



//EJERCICIO 5.3

let edadUsuario=prompt ('Introduzca su edad')
let cuentaActiva=true

//COMPROBACION

let comproba= (edadUsuario >=18) && (cuentaActiva);

console.log('La Verificación es:'+ comproba)


let edadd = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");// si se cumple la condición
} else {
    console.log("Eres menor de edad");} // si no se cumple la condición


    

   
    




























