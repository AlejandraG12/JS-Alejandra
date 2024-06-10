// EJERCICIO 9

//primer Ejercicio

let totalCompra= prompt ('Ingrese el total de la compra')


if (totalCompra >1000) {



  console.log ('Total del descuento:' +" " + ( totalCompra * 0.10) + '€')
    
    
}

else if ( totalCompra >500) {

    totalCompra * 0.05;

    console.log ( 'Total del descuento:'+ " " + ( totalCompra * 0.05)+ '€')

    
}



else {
     
    console.log ( 'No se aplica ningún descuento')
}


// EJERCICIO 2

let mes= prompt ('Ingrese el nombre de un mes en minúsculas')

let dias;

if (mes =='enero'|| mes== 'marzo'||  mes== 'mayo' || mes== 'julio' || mes== 'agosto' || mes== 'octubre' || mes== 'diciembre'  ) {

dias= 31;

    console.log ( 'El mes de ' + mes +' tiene ', dias ,' dias.');


    
}

else if ( mes=='febrero'){

    dias=28;

    console.log ( 'El mes de ' + mes +' tiene '+ dias +' dias.');


}

else if ( mes=='abril'|| mes=='junio'|| mes=='septiembre'|| mes=='noviembre'){

    dias=30;

    console.log ( 'El mes de ' + mes +' tiene '+ dias +' dias.');


}

else {

    console.log ('El nombre del mes ingresado no es válido')
}


// conversion de tipo de datos

let numeroTexto = "10";
let numero = parseInt(numeroTexto); // Convierte la cadena "10" a número 10
let texto = String(numero); // Convierte el número 10 a la cadena "10"


// -------------------------------switch------------------------------------------------//

let dia=parseInt(prompt('ingrese un número entre 1 y 7'));

switch (dia) {
    case 1:
        console.log('Lunes')
        
        break;
        case 2:
            console.log('Martes')
            
            break;


            case 3:
            console.log('Miercoles')
            
            break;

            case 4:
                console.log('Jueves')
                
                break;

                case 5:
                    console.log('Viernes')
                    
                    break;

                    case 6:
                        console.log("Sábado");

                        break;
                    case 7:
                        console.log("Domingo");
                        
                        break;

                    default:
                        console.log("Número inválido. Por favor ingrese un número entre 1 y 7.");
                        
                }
                
                
        
    

            



    












