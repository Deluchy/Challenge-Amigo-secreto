// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres.
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const añadirAmigo = document.getElementById('amigo');
    const nombreAmigo = añadirAmigo.value.trim();

    // Valida que el campo escriba un nombre no esté vacío o contenga espacio en blanco.
    if (nombreAmigo === '') {
        alert('Por favor, no dejar el espacio en blanco');
        return;
    }

    // Evitar Nombres duplicados
    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista, por favor ingrese otro nombre');
        return;
    }

    // Agregar el nombre al listaAmigos.
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el añadirAmigo luego de presionar el botón Añadir.
    añadirAmigo.value = '';
    
    // Actualiza la lista visual para mostrar los amigos agregados.
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    // Crear un elemento li por cada amigo
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto y que cada uno sepa a quién le toca regalar
// Se muestra el resultado en la lista de resultados.
function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    // Validar que haya al menos 2 amigos para sortear asi no se repita el sorteo de amigos.
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo');
        return;
    }
    
    // Mezclar el array de amigos
    const listaMezclada = mezclarArray([...listaAmigos]);
    
    // Asignar a cada persona la siguiente en la lista (el último al primero)
    for (let i = 0; i < listaMezclada.length; i++) {
        const li = document.createElement('li');
        const amigoActual = listaMezclada[i];
        const amigoSecreto = listaMezclada[(i + 1) % listaMezclada.length];
        
        li.textContent = `El amigo secreto de ${amigoActual} es ${amigoSecreto}.`;
        resultadoElement.appendChild(li);
    }
}

// mezclarArray para mezclar el array de amigos de forma aleatoria.
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Permite usar la tecla Enter para agregar un amigo.
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});