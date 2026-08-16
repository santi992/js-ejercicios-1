const input = document.getElementById("texto");
const boton = document.getElementById("button-ej-3");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
  const texto = input.value.trim();

  if (texto === "") {
    return; // no agrega nada si el campo está vacío
  }

  agregarItem(texto);
  input.value = "";
  input.focus();
});

function agregarItem(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Eliminar";
  buttonDelete.classList.add("button");
  buttonDelete.classList.add("button-secondary");
  buttonDelete.classList.add("button-li");

  buttonDelete.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(buttonDelete);
  lista.appendChild(li);
}
