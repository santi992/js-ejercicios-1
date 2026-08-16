const boton = document.getElementById("button-ej-2");
const clics = document.getElementById("n-clics");

let contador = parseInt(clics.textContent);

boton.addEventListener("click", function () {
  contador++;
  clics.textContent = contador;
});
