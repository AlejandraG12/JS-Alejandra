
//Crea un array vacío
//Agrega, Manzana, Banana y Naranja al array vacío.

let prueba=[]
prueba.push('Manzana','Banana','Naranja');
console.log(prueba)



//2 Agregar elementos a un array que ya existe.

//Crea un array que contenga 1,2,3
let numero=[1,2,3]

//Agrega números hasta el 6

numero.push(4,5,6)

console.log(numero)


//3 Tienes un array inicial con los valores 1,2,3,4,5. Quieres cambiar el número en la posición 2 por el número 10. 

let inicial=[1,2,3,4,5]

inicial[1]=10

console.log (inicial)

//4 Suma de elementos en un array utilizando una función.

//Tienes un array de números y quieres calcular la suma de todos los valores del array. 
//Crea una función que devuelva la suma de los números.
//Recorre el array y suma cada valor.



function calcularSuma(array) {
    let suma=0;

    for (let i = 0;i < array.length;i ++){
         suma+=array[i];
        
    }
    return suma;
    
}
let number=[10,20,30,40,50];

console.log('Suma de los valores: '+calcularSuma(number));


//5. Ingresar 3 valores que meta el usuario a un array, utilizando una función.

//Declaramos un array vacío.



let valorIngresado=[];

function agregarValor() {

    let valor=prompt('Por favor, ingrese un valor');

    valorIngresado.push(valor);
   
        
    }
   

    for(let i=0; i<3;i++){
      
        agregarValor();
       
        
    }

    
console.log('valores ingresados',valorIngresado)






