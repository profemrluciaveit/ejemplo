const button = document.getElementById('centralButton');

function obtenerZonaCentral() {const width = window.innerWidth;
    const height = window.innerHeight;
    return {left: width * 0.4,
        top: height * 0.4,
        width: width * 0.2,
        height: height * 0.2,};}

function estaPuntoEnZona(x, y) {const zona = obtenerZonaCentral();
    return x >= zona.left && x <= zona.left + zona.width && y >= zona.top && y <= zona.top + zona.height;}

function obtenerPosicionAleatoria() {const width = window.innerWidth;
    const height = window.innerHeight;
    const buttonRect = button.getBoundingClientRect();
    const maxLeft = Math.max(0, width - buttonRect.width);
    const maxTop = Math.max(0, height - buttonRect.height);

    return {left: Math.random() * maxLeft,
        top: Math.random() * maxTop,};}

function colocarBoton(position) {button.style.position = 'absolute';
    button.style.left = `${position.left}px`;
    button.style.top = `${position.top}px`;}

function colocarBotonFueraDelCentro() {
    let position;
    do {position = obtenerPosicionAleatoria();
        const buttonCenterX = position.left + button.getBoundingClientRect().width / 2;
        const buttonCenterY = position.top + button.getBoundingClientRect().height / 2;
        if (!estaPuntoEnZona(buttonCenterX, buttonCenterY)) {
            break;}} while (true);

    colocarBoton(position);}

function moverBotonAleatoriamente() {const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    if (estaPuntoEnZona(buttonCenterX, buttonCenterY)) {
        alert("ganaste wachin");
        return;}

    const position = obtenerPosicionAleatoria();
    colocarBoton(position);}

window.addEventListener('load', () => {
    colocarBotonFueraDelCentro();});

window.addEventListener('resize', () => {
    colocarBotonFueraDelCentro();});

button.addEventListener('click', moverBotonAleatoriamente);

