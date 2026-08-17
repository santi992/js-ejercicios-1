const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

const buttonSumar = document.getElementById("button-sumar");
const buttonRestar = document.getElementById("button-restar");
const buttonMultiplicar = document.getElementById("button-multiplicar");
const buttonDividir = document.getElementById("button-dividir");

function obtenerNumeros() {
  const a = num1.value.trim();
  const b = num2.value.trim();

  if (a === "" || b === "") {
    mostrarError("Completá ambos campos.");
    return null;
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    mostrarError("Ingresá valores numéricos válidos.");
    return null;
  }

  return { numA, numB };
}

function mostrarResultado(valor) {
  resultado.textContent = valor;
  resultado.classList.remove("error");
}

function mostrarError(mensaje) {
  resultado.textContent = mensaje;
  resultado.classList.add("error");
}

buttonSumar.addEventListener("click", function () {
  const datos = obtenerNumeros();
  if (datos === null) return;
  mostrarResultado(datos.numA + datos.numB);
});

buttonRestar.addEventListener("click", function () {
  const datos = obtenerNumeros();
  if (datos === null) return;
  mostrarResultado(datos.numA - datos.numB);
});

buttonMultiplicar.addEventListener("click", function () {
  const datos = obtenerNumeros();
  if (datos === null) return;
  mostrarResultado(datos.numA * datos.numB);
});

buttonDividir.addEventListener("click", function () {
  const datos = obtenerNumeros();
  if (datos === null) return;

  if (datos.numB === 0) {
    mostrarError("No se puede dividir por cero.");
    return;
  }

  mostrarResultado(datos.numA / datos.numB);
});
