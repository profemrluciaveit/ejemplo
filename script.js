const botonsito = document.querySelector("button");
const body = document.querySelector("body");

botonsito.style.position = "absolute";

botonsito.addEventListener("mouseover", (e) => {
  const botonesGraciosos = [
    "Agarrame si podés",
    "Casi lo tocás",
    "Uy, se me escapó",
    "No tan rápido",
    "Probá otra vez 😏",
    "Soy inevitable",
    "¿En serio creíste?",
    "Modo escurridizo",
    "No me vas a atrapar",
    "Intento fallido",
    "Suerte la próxima",
    "Zoom… me fui",
    "Error 404: botón no encontrado",
    "Te falta reflejo",
    "Clickeame… si podés",
    "Demasiado lento",
    "Estoy acá… o no",
    "Se corrió solo",
    "Casi, casi…",
    "Nivel: imposible",
  ];

  const x = parseInt(botonsito.style.left);
  const y = parseInt(botonsito.style.top);

  const rangoWinx1 = window.innerWidth / 2 + 100;
  const rangoWinx2 = window.innerWidth / 2 - 100;
  const rangoWiny1 = window.innerHeight / 2 + 100;
  const rangoWiny2 = window.innerHeight / 2 - 100;

  if (x < rangoWinx1 && x > rangoWinx2 && y < rangoWiny1 && y > rangoWiny2) {
    botonsito.textContent = "tramposo";
    return;
  }
  const randomIndex = Math.floor(Math.random() * botonesGraciosos.length);
  botonsito.textContent = botonesGraciosos[randomIndex];

  const factorX = window.innerWidth - botonsito.offsetWidth;
  const factorY = window.innerHeight - botonsito.offsetHeight;

  const newPositionX = Math.floor(Math.random() * factorX) + "px";
  const newPositionY = Math.floor(Math.random() * factorY) + "px";

  botonsito.style.left = newPositionX;
  botonsito.style.top = newPositionY;
});

botonsito.addEventListener("click", (e) => {
  const x = parseInt(botonsito.style.left);
  const y = parseInt(botonsito.style.top);

  const rangoWinx1 = window.innerWidth / 2 + 100;
  const rangoWinx2 = window.innerWidth / 2 - 100;
  const rangoWiny1 = window.innerHeight / 2 + 100;
  const rangoWiny2 = window.innerHeight / 2 - 100;

  if (x < rangoWinx1 && x > rangoWinx2 && y < rangoWiny1 && y > rangoWiny2) {
    botonsito.innerHTML = "";
    alert("¡Me atrapaste!");
    body.outerHTML +=
      "<style>body {background-image: url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejZ1OWVjYXozc2hhaXV0aG9zdzlocnNpazM3empncnBzNHpnMGFtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/chw38P0m4kNa3rXEjQ/giphy.gif'); }</style>";
  }
});
