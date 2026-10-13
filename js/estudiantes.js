
const formulario = document.getElementById("formulario-estudiantes");
const mensaje = document.getElementById("mensaje");
const estudiantes = [];

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const codigo = document.getElementById("codigo").value.trim();
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();

    if (!codigo || !nombres || !apellidos) {
        mostrarMensaje("Todos los campos son obligatorios.", "error");
        return;
    }

    const existe = estudiantes.some(
        estudiante => estudiante.codigo === codigo
    );

    if (existe) {
        mostrarMensaje("El código del estudiante ya existe.", "error");
        return;
    }

    estudiantes.push({
        codigo,
        nombres,
        apellidos
    });

    mostrarMensaje(
        "Estudiante registrado correctamente.",
        "exito"
    );

    formulario.reset();
    mostrarEstudiantes();
});

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
}

function mostrarEstudiantes() {
    const tabla = document.getElementById("lista-estudiantes");

    tabla.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const fila = document.createElement("tr");

        [
            estudiante.codigo,
            estudiante.nombres,
            estudiante.apellidos
        ].forEach(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        tabla.appendChild(fila);
    });
}
