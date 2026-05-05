// Seleccionamos el botón por su ID
const btnGame = document.getElementById('btnGame');

// Función para mover el botón a una posición aleatoria
function moveButton() {
    // Calculamos el máximo de ancho y alto disponible restando el tamaño del botón
    const maxX = window.innerWidth - btnGame.offsetWidth;
    const maxY = window.innerHeight - btnGame.offsetHeight;

    // Generamos coordenadas aleatorias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplicamos la nueva posición con estilos en línea (absolute)
    btnGame.style.left = randomX + 'px';
    btnGame.style.top = randomY + 'px';
}

// Función para comprobar si el botón está en la zona central
/**
 * Funcion para comprobar si el boton esta en la zona central
 * @return {Boolean}
 */
function estaEnElCentro() {
    // Obtenemos la posición y tamaño del botón usando offset properties
    const btnLeft = btnGame.offsetLeft; //version numerica del estilo left
    const btnTop = btnGame.offsetTop; //version numerica del estilo top
    const btnRight = btnLeft + btnGame.offsetWidth;
    const btnBottom = btnTop + btnGame.offsetHeight;

    // Calculamos el centro de la pantalla para definir la zona
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    // Límites de la zona central (150x150)
    const zoneLeft = screenCenterX - 75;
    const zoneRight = screenCenterX + 75;
    const zoneTop = screenCenterY - 75;
    const zoneBottom = screenCenterY + 75;

    // Comprobamos si alguna parte del botón está dentro de la zona (intersección)
    const solapaHorizontal = btnLeft < zoneRight && btnRight > zoneLeft;
    const solapaVertical = btnTop < zoneBottom && btnBottom > zoneTop;

    return solapaHorizontal && solapaVertical;
}

// Evento cuando el mouse entra en el área del botón
btnGame.addEventListener('mouseenter', function () {
    // Solo se mueve si NO está en el centro
    if (estaEnElCentro() === false) {
        moveButton();
    }
});

// Evento cuando el usuario hace clic en el botón
btnGame.addEventListener('click', function () {
    // Usamos la función para verificar si ganó
    if (estaEnElCentro() === true) {
        alert('¡Ganaste el juego! Has logrado atrapar el botón en el centro.');
    } else {
        console.log('Botón fuera de la zona central');
    }
});

// Posicionamos el botón inicialmente de forma aleatoria para empezar
window.onload = function () {
    moveButton();
};
