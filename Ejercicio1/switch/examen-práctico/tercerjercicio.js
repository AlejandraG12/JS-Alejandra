
let numero=parseInt(prompt("Por favor, ingrese un número"));


let Primo=true;



for (let i = 2;  i <=(numero/2); i++){


    
    if (numero % i==0 ) {
        
        Primo= false
    }

        
} 

if (Primo === true) {

   console.log("El número es primo."); 


    
} else{

    console.log("El número no es primo."); 

}
