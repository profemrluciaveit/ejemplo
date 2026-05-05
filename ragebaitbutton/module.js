const btn= document.querySelector("#BotonRage");
const caja = document.querySelector("#caja");
const MidXR= (window.innerWidth / 2) + 100
const MidXL= (window.innerWidth / 2) - 100
const MidYT= (window.innerHeight / 2) - 100
const MidYB= (window.innerHeight / 2) + 100

let atrapado = false;

btn.addEventListener("click", function(e) {
    if (atrapado) {
        alert("¡Felicidades! Ganaste.");
    }
});

btn.addEventListener("mouseenter", function(e) {

if (atrapado) return;

const posX = btn.style.left;
const posY = btn.style.top;

const randomX = Math.floor(Math.random() * window.innerWidth);
const randomY = Math.floor(Math.random() * window.innerHeight);

caja.style.left = MidXL + "px";
caja.style.top = MidYT + "px";

if (randomX > MidXL && randomX < MidXR && randomY < MidYB && randomY > MidYT) {
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";

    atrapado = true;
    caja.style.backgroundColor = "lightgreen";
    caja.style.backgroundtransparent = "0.5";
    return;
}else{
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
};

});

