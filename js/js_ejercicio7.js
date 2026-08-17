const inputLongitud = document.getElementById("num-ej-7");
const buttonGenerar = document.getElementById("button-generar");
const pass = document.getElementById("pass");

const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";
const ESPECIALES = "!@#$%^&*()_+-=[]{}|?";

const TODOS_LOS_CARACTERES = MAYUSCULAS + MINUSCULAS + NUMEROS + ESPECIALES;

function generarContrasena(longitud) {
  let contrasena = "";

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * TODOS_LOS_CARACTERES.length,
    );
    contrasena += TODOS_LOS_CARACTERES[indiceAleatorio];
  }

  return contrasena;
}

function mostrarResultado(texto) {
  pass.textContent = texto;
  pass.classList.remove("error");
}

function mostrarError(mensaje) {
  pass.textContent = mensaje;
  pass.classList.add("error");
}

buttonGenerar.addEventListener("click", function () {
  const valor = inputLongitud.value.trim();

  if (valor === "") {
    mostrarError("Ingresá una longitud.");
    return;
  }

  const longitud = parseInt(valor, 10);

  if (isNaN(longitud) || longitud < 4) {
    mostrarError("La longitud debe ser mayor o igual a 4.");
    return;
  }

  mostrarResultado(generarContrasena(longitud));
});
