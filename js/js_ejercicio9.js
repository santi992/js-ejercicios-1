const inputTarea = document.getElementById("texto-ej-9");
const buttonAgregar = document.getElementById("button-agregar");
const buttonLimpiar = document.getElementById("button-limpiar");
const listaEj9 = document.getElementById("lista-ej-9");

const CLAVE_STORAGE = "tareas";

// Carga las tareas guardadas, o un array vacío si no hay nada todavía
let tareas = JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || [];

function guardarTareas() {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
}

function mostrarTareas() {
  listaEj9.innerHTML = "";

  tareas.forEach(function (tarea, indice) {
    const li = document.createElement("li");
    if (tarea.completada) {
      li.classList.add("completada");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", function () {
      tareas[indice].completada = checkbox.checked;
      guardarTareas();
      mostrarTareas();
    });

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = "Eliminar";
    buttonEliminar.classList.add("button");
    buttonEliminar.classList.add("button-eliminar");
    buttonEliminar.addEventListener("click", function () {
      tareas.splice(indice, 1);
      guardarTareas();
      mostrarTareas();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonEliminar);
    listaEj9.appendChild(li);
  });
}

buttonAgregar.addEventListener("click", function () {
  const texto = inputTarea.value.trim();

  if (texto === "") return;

  tareas.push({ texto: texto, completada: false });
  guardarTareas();
  mostrarTareas();

  inputTarea.value = "";
  inputTarea.focus();
});

inputTarea.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    buttonAgregar.click();
  }
});

buttonLimpiar.addEventListener("click", function () {
  tareas = tareas.filter(function (tarea) {
    return !tarea.completada;
  });
  guardarTareas();
  mostrarTareas();
});

mostrarTareas(); // recupera lo guardado al cargar la página
