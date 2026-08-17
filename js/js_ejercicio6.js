const tiempoTexto = document.getElementById("tiempo");
const buttonIniciar = document.getElementById("button-iniciar");
const buttonPausar = document.getElementById("button-pausar");
const buttonReiniciar = document.getElementById("button-reiniciar");

let segundosTotales = 0;
let intervalo = null;

function formatearTiempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return [horas, minutos, segundos]
    .map(function (unidad) {
      return String(unidad).padStart(2, "0");
    })
    .join(":");
}

function actualizarTexto() {
  tiempoTexto.textContent = formatearTiempo(segundosTotales);
}

buttonIniciar.addEventListener("click", function () {
  if (intervalo !== null) return; // ya está corriendo, no crea otro intervalo

  intervalo = setInterval(function () {
    segundosTotales++;
    actualizarTexto();
  }, 1000);
});

buttonPausar.addEventListener("click", function () {
  clearInterval(intervalo);
  intervalo = null;
});

buttonReiniciar.addEventListener("click", function () {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  actualizarTexto();
});
