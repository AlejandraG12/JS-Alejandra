
let letras= prompt("Por favor, ingresa una frase ").toLowerCase();

contador=0;

let letraA='a';

for(let i=0; i<letras.length;i++){

    if (letras[i]===letraA){
        contador++;
    }
    
}

console.log("La frase tiene: "+ contador + " letras(a)." );

