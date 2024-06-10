let calificacion = parseInt(prompt('ingrese una calificación de 1 al 5'));

switch (calificacion) {
    case 1:
        console.log('Deficiente')

        break;
    case 2:
        console.log('Regular')

        break;


    case 3:
        console.log('Aceptable')

        break;

    case 4:
        console.log('Bueno')

        break;

    case 5:
        console.log('Excelente')

        break;


    default:
        console.log(" La calificación no es valida");

}



// Ejercicio 2 anidar SWITCH

// let numero = parseInt(prompt('Por favor  ingrese una número del  1 al 5'));

// if (numero => 1 && numero<=5) {

//     switch (numero) {
//         case 1:
//             console.log('Perro-Guau-guau')

//             break;
//         case 2:
//             console.log('Gato-Miau')

//             break;

//         case 3:
//             console.log('Vaca-Muu')

//             break;

//         case 4:
//             console.log('Pato-Cuac cuac')

//             break;

//         case 5:
//             console.log('Leòn-Rugido')

//             break;



//     }}

//     else{



//      console.log(" El número es invalido");


//     }



// ANIDAR IF

let temperatura = 18; // en grados 
let estaLloviendo = true;

if (temperatura > 20) {
    console.log("Ponte una camiseta.");
    if (estaLloviendo) {
        console.log("No olvides llevar un paraguas.");
    } else {
        console.log("No necesitas paraguas.");
    }
} else {
    console.log("Ponte un abrigo.");
    if (estaLloviendo) {
        console.log("Lleva una chaqueta impermeable.");
    } else {
        console.log("No olvides tu bufanda.");
    }
}

//A VECES PODEMOS EVITAR ANIDAR!! NOS DA EL MISMO RESULTADO

if (temperatura > 20 && estaLloviendo) {
    console.log("Ponte una camiseta y lleva un paraguas.");
} else if (temperatura > 20) {
    console.log("Ponte una camiseta.");
} else if (estaLloviendo) {
    console.log("Ponte un abrigo y lleva una chaqueta impermeable.");
} else {
    console.log("Ponte un abrigo y no olvides tu bufanda.");

    }


    //Ejercicio 11

    let edad =parseInt(prompt ('ingrese su edad'));
      
    if (edad >= 0 )
         
     
        if (edad <= 12) {
            console.log("Eres un niño");
        } 

        else if (edad <=17){

            console.log("Eres un adolescente");
        }

        else if (edad <=64){

            console.log("Eres un adulto");
        }

        else{

            console.log('Eres un anciano');
        }

        else{
            console.log( 'Edad no valida');
        }
        

        // Ejercicio 11.1

        let numero =parseInt(prompt ('ingrese un número'));

        if (numero===0) {
            
            console.log('El número es cero.');
            
        }

      
        if (numero >0) {

            console.log("El número  es positivo");
        
        
            
        } 
        else {
            console.log("El número  es negativo");
        
        }
        if ((numero %2)===0) {

            console.log ('El número es par');
            
        } else  {
        
            console.log( 'El número es impar');
            
        }

        


      
      






   













