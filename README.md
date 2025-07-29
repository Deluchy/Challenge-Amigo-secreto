# Challenge-Amigo-secreto

<a href="https://github.com/Deluchy/Challenge-Amigo-secreto">Visualiza mi repositorio</a>

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".  

El usuario deberá agregar nombres mediante un campo de texto y un botón "Añadir". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

<img width="927" height="482" alt="pantalla" src="https://github.com/user-attachments/assets/98678cee-c912-4067-a2d5-e79e2b632404" />

Boton de "Sortear Amigo"
<img width="326" height="78" alt="sortear-amigo" src="https://github.com/user-attachments/assets/4a4dc446-b624-463b-a8c4-afa54af8c363" />

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Añadir".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
<img width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/631eb1db-1ebd-47f3-a5e0-9eaacb643717" />

Se añadio Función para agregar un amigo a la lista
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
