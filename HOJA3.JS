

// script.js

// Función para mostrar la sección de inicio
function mostrarInicio() {
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('cursos').style.display = 'none';
    document.getElementById('agregar-curso').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
}

// Función para agregar curso
function agregarCurso(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener valores del formulario
    const nombreCurso = document.getElementById('nombre-curso').value;
    const nombreInstructor = document.getElementById('nombre-instructor').value;
    const fechaInicio = document.getElementById('fecha-inicio').value;
    const duracion = document.getElementById('duracion').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear objeto curso
    const nuevoCurso = {
        nombre: nombreCurso,
        instructor: nombreInstructor,
        fechaInicio: fechaInicio,
        duracion: duracion,
        descripcion: descripcion,
    };

    // Guardar en localStorage
    let cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    cursos.push(nuevoCurso);
    localStorage.setItem('cursos', JSON.stringify(cursos));

    // Agregar curso a la lista
    mostrarCursos();

    // Limpiar el formulario
    document.getElementById('cursoForm').reset();
}

// Función para mostrar cursos
function mostrarCursos() {
    const cursosContainer = document.getElementById('cursos-list');
    cursosContainer.innerHTML = ''; // Limpiar lista existente
    let cursos = JSON.parse(localStorage.getItem('cursos')) || [];

    cursos.forEach((curso, index) => {
        const cursoDiv = document.createElement('div');
        cursoDiv.classList.add('curso');
        cursoDiv.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p><strong>Profesor:</strong> ${curso.instructor}</p>
            <p><strong>Fecha de inicio:</strong> ${curso.fechaInicio}</p>
            <p><strong>Duración:</strong> ${curso.duracion} semanas</p>
            <button class="ver-detalles" onclick="mostrarDetalles('curso${index}')">Ver más detalles</button>
            <div class="detalles" id="curso${index}" style="display: none;">
                <p>${curso.descripcion}</p>
            </div>
        `;
        cursosContainer.appendChild(cursoDiv);
    });

    // Mostrar la sección de cursos
    document.getElementById('cursos').style.display = 'block';
    document.getElementById('agregar-curso').style.display = 'none';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
}

// Función para mostrar detalles
function mostrarDetalles(cursoId) {
    const detalles = document.getElementById(cursoId);
    detalles.style.display = detalles.style.display === "none" || detalles.style.display === "" ? "block" : "none";
}

// Función para mostrar el formulario de agregar curso
function mostrarFormulario() {
    document.getElementById('agregar-curso').style.display = 'block';
    document.getElementById('cursos').style.display = 'none';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
}

// Función para agregar contacto
function agregarContacto() {
    const contactoInfo = document.getElementById('contacto-info');
    contactoInfo.innerHTML = 'Información  de numero telefonico:2869960 celular:0988525987.';
    
    // Mostrar la sección de contacto
    document.getElementById('contacto').style.display = 'block';
    document.getElementById('cursos').style.display = 'none';
    document.getElementById('agregar-curso').style.display = 'none';
    document.getElementById('inicio').style.display = 'none';
}

// Mostrar la sección de inicio al cargar la página
window.onload = mostrarInicio;
