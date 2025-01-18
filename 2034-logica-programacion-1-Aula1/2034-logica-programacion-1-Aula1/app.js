// alert("¡Bienvenida y bienvenido a nuestro sitio Web");

// let nombre; 
// let edad ;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// let mensajeError = "¡Error! Completa todo los campos requeridos";


// let usuario = prompt("Ingrese su nombre");
// let usuarioValor = typeof usuario === "string" && usuario.length > 0 ? usuario : mensajeError;
// let anios = prompt("Ingrese su edad");
// let numero = parseInt(anios);
// let aniosValor = typeof  numero === "number" &&  numero > 0 ? numero : mensajeError;

// let  licencia = aniosValor >= 18 ? "Puede obtener tu lincencia de conducir" : "No puede conducir";

// alert(`Hola ${usuarioValor}, tienes ${aniosValor} años. ${licencia}`);



// let diaSemana = prompt("Ingrese un día de la semana");
// let dia = diaSemana === "Sábado" || diaSemana === "Domingo" ? "¡Buen fin de semana!": "Buena semana";
// alert(dia);




// let numero = prompt("Ingrese un número");

// let datoEntero = parseInt(numero);

// let positivoNegativo = datoEntero > 0 ? "El número es positivo" : "El número es negativo";
// alert(positivoNegativo);



// let numero;
// let datoEntero;

// while (true) {
//     numero = prompt("Ingrese un número");

//     // Verifica si el número es válido usando una expresión regular
//     if (/^-?\d+$/.test(numero)) {
//         datoEntero = parseInt(numero);
//         break;
//     } else {
//         alert("¡Error! Por favor, ingrese un número válido.");
//     }
// }

// let positivoNegativo = datoEntero > 0 ? "El número es positivo" : "El número es negativo";
// alert(positivoNegativo);


// let contador = 1;
// let contador2 = 10;
// while(contador <= 10) {
//     console.log(contador);
//     contador++;
// } 

// while(contador2 <= 10 && contador2 >=0) {
//     console.log(contador2);
//     contador2--;
// }g

let cuentaRegresiva = 0;
let usuario = prompt("Ingrese un número");
let numero = parseInt(usuario);

while(cuentaRegresiva < numero) {
    console.log(numero - cuentaRegresiva);
    cuentaRegresiva++;
    alert(`Faltan ${ cuentaRegresiva} segundos`);
}

