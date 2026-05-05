const btn= document.querySelector("button");
btn.addEventListener("mouseenter", function(e){
    const position_x = btn.style.left;
    const position_y = btn.style.top;
    const factor = window.innerWidth;
    const factor2 = window.innerHeight;
    // Agregar límite para que no se escape
    const nuevaX = Math.floor(Math.random() * (factor - btn.offsetWidth));
    const nuevaY = Math.floor(Math.random() * (factor2 - btn.offsetHeight));
    btn.style.left = nuevaX + "px";
    btn.style.top = nuevaY + "px";

    // Definir rango alrededor del medio (centro ± 50px)
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;
    const rango = 50;
    if (Math.abs(nuevaX - centroX) < rango && Math.abs(nuevaY - centroY) < rango) {
        alert("¡El botón cayó dentro del rango del medio!");
    }

}); 
