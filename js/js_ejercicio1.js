const boton = document.getElementById("button-ej-1");

function colorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

boton.addEventListener("click", function () {
  document.body.style.backgroundColor = colorAleatorio();
});
