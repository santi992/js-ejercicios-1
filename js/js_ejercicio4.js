const input = document.getElementById("texto-ej-4");
const lista = document.getElementById("lista-ej-4");

const elementos = [
  "Perro",
  "Gato",
  "Pez",
  "Loro",
  "Gallina",
  "Gacela",
  "León",
  "Lobo",
  "Tigre",
  "Rata",
  "Oso",
  "Tiburón",
  "Delfín",
];

function renderizarLista(items) {
  lista.innerHTML = "";

  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

input.addEventListener("input", function () {
  const texto = input.value.toLowerCase();

  const filtrados = elementos.filter(function (item) {
    return item.toLowerCase().includes(texto);
  });

  renderizarLista(filtrados);
});

renderizarLista(elementos); // muestra la lista completa al cargar la página
