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
    
    // Actualizar la lista visual para mostrar los amigos agregados.
    actualizarListaAmigos();
}

