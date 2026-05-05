const boton = document.querySelector("button");
const MaxX = window.innerWidth;
const MaxY = window.innerHeight;

const MidX = window.innerWidth / 2;
const MidY = window.innerHeight / 2;
let newX = 0;
let newY = 0;
let GANAR = 0;
boton.addEventListener("mouseenter", function (e) {
  const CambioX = boton.style.left;
  const CambioY = boton.style.top;

  if (
    newX < MidX + 250 &&
    newX > MidX - 250 &&
    newY < MidY + 250 &&
    newY > MidY - 250
  ) {
    GANAR = 1;
  } else {
    newX = Math.floor(Math.random() * MaxX);
    newY = Math.floor(Math.random() * MaxY);
    boton.style.left = newX + "px";
    boton.style.top = newY + "px";
  }
});

boton.addEventListener("click", function (e) {
  if (GANAR === 1) {
    alert("GANASTE!");
  }
});