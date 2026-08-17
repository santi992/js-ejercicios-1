const texto = document.getElementById("texto-ej-8");
const palabras = document.getElementById("palabras");
const caracteres = document.getElementById("caracteres");

function contarPalabras(valor) {
  const limpio = valor.trim();

  if (limpio === "") {
    return 0;
  }

  return limpio.split(/\s+/).length;
}

function contarCaracteres(valor) {
  return valor.replace(/\s/g, "").length;
}

texto.addEventListener("input", function () {
  const valor = texto.value;

  palabras.textContent = contarPalabras(valor);
  caracteres.textContent = contarCaracteres(valor);
});
