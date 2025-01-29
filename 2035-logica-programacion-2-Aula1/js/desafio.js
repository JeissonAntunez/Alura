let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];
let listaNumeros = [];
let longitud;
lenguajesDeProgramacion.push("Java","Ruby","GoLang");




console.log(lenguajesDeProgramacion);


function mostrarElementos(){
    for(let i= 0; i<lenguajesDeProgramacion.length; i ++ )
    {
        console.log(lenguajesDeProgramacion[i]);
    }
};


function mostrarInverso(){
    for(let i=lenguajesDeProgramacion.length-1;  0<= i; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
};

console.log(lenguajesDeProgramacion.length);
mostrarElementos();
console.log("--------------------------- \n");
mostrarInverso();
console.log("--------------------------- \n");
console.log("--------------------------- \n");


/** Función de promedio de números */

function m(dat){
    console.log(dat);
}

function calcularPromedio(lista){
    if (lista.length === 0) {
        return "La lista está vacía. No se puede calcular el promedio.";
      }
    
      // Usar reduce para sumar todos los números en la lista
      const suma = lista.reduce((acumulador, numero) => acumulador + numero, 0);
    
      // Calcular el promedio
      const promedio = suma / lista.length;
    
      return promedio;
    }
    
    // Ejemplo de uso
    const numeros = [10, 20, 30, 40, 50];
    console.log(`El promedio es: ${calcularPromedio(numeros)}`);


function mayorMenor (){
    
}