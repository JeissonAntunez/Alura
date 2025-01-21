let titulo = document.querySelector('h1');  // Selecciona el elemento h1
titulo.innerHTML = 'Juego del número secreto';  // Cambia el título de la página

let parrafo = document.querySelector('p');  // Selecciona el elemento p
parrafo.innerHTML = 'Indica un número secreto entre 1 y 10';  // Cambia el texto del párrafo

let dato = document.querySelector('input');  // Selecciona el input
let boton = document.querySelector('button');  // Selecciona el botón
let contador = 1;  // Inicializa el contador
function intentoDeUsuario() {
    let numeroSecreto = 7;  // Número secreto
    let datoValor = parseInt(dato.value);  // Obtiene el valor del input

    if (datoValor === numeroSecreto) {
        
        alert('¡Felicidades! Has adivinado el número secreto \n Número de intentos: ' + contador);
    } else {
        alert('¡Lo siento! Inténtalo de nuevo');
    }
    contador++;
}

boton.addEventListener(intentoDeUsuario);  // Añade un evento al botón para ejecutar la función