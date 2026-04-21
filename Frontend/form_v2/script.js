console.log("El archivo main.js se ha cargado correctamente");

document.addEventListener('submit', (e) => {
    console.log("¡Se ha detectado un envío de formulario!");
});

document.getElementById('fecha').valueAsDate = new Date();

/* fetch('get_user_info.php')
.then(response => response.json())
.then(data => {
    if (data.logged_in) {
        document.getElementById('welcome').textContent = `Hola, ${data.nombre}.`;
    } else {
        window.location.href = 'index.html';
    }
})
.catch(error => console.error('Error:', error)); */


// 1. Configuración: La IP de tu servidor Ubuntu
const API_BASE = 'http://173.16.0.27/coordicanarias/api';

// 2. Función para cargar los Usuarios
async function cargarUsuarios() {
    const select = document.getElementById('id_usuario');
    try {
        const res = await fetch(`${API_BASE}/get_usuarios.php`);
        const json = await res.json();
        
        if (json.status === "success") {
            // Limpiamos y ponemos la opción por defecto
            select.innerHTML = '<option value="">Seleccionar</option>';
            
            json.data.forEach(user => {
                const opt = document.createElement('option');
                // El JS pone el ID de la base de datos automáticamente en el value
                opt.value = user.id_usuario; 
                opt.textContent = `${user.nombre} ${user.apellidos}`;
                select.appendChild(opt);
            });
        }
    } catch (e) {
        console.error("Error cargando usuarios:", e);
    }
}

// 3. Función para cargar los Proyectos
async function cargarServiciosGenerales() {
    // Asegúrate de que en el HTML el select tenga id="id_servicio"
    const select = document.getElementById('id_servicio'); 
    
    try {
        const res = await fetch('http://173.16.0.27/coordicanarias/api/get_servicios.php');
        const json = await res.json();

        if (json.status === "success") {
            // Limpiamos y ponemos la opción inicial
            select.innerHTML = '<option value="">Seleccionar</option>';
            
            json.data.forEach(servicio => {
                const opt = document.createElement('option');
                // El JS pone automáticamente el ID en el value y el nombre en el texto
                opt.value = servicio.id_servicio;
                opt.textContent = servicio.nombre;
                select.appendChild(opt);
            });
        }
    } catch (error) {
        console.error("Error al cargar la lista de servicios:", error);
    }
}

// 4. Lógica dinámica: Cargar Servicios según el Proyecto seleccionado
/* document.getElementById('id_proyecto').addEventListener('change', async (event) => {
    const idProyecto = event.target.value;
    const selectServicios = document.getElementById('id_servicio');
    
    // Si no hay proyecto seleccionado, vaciamos servicios
    if (!idProyecto) {
        selectServicios.innerHTML = '<option value="">Seleccione primero un proyecto</option>';
        return;
    }

    try {
        // Llamamos a la API pasando el ID por la URL (?id_proyecto=...)
        const res = await fetch(`${API_BASE}/get_servicios_proyectos.php?id_proyecto=${idProyecto}`);
        const json = await res.json();

        selectServicios.innerHTML = '<option value="">Seleccionar servicio...</option>';
        if (json.status === "success") {
            json.data.forEach(serv => {
                const opt = document.createElement('option');
                opt.value = serv.id_servicio;
                opt.textContent = serv.nombre;
                selectServicios.appendChild(opt);
            });
        }
    } catch (e) {
        console.error("Error cargando servicios:", e);
    }
}); */

// 5. INICIO: Ejecutar las cargas principales cuando se abre la página
document.addEventListener('DOMContentLoaded', () => {
    cargarUsuarios();
    cargarServiciosGenerales();
    // Aquí podrías añadir también cargarProfesionales();
});


//sessionStorage.setItem('id_profesional', id_introducida_por_el_usuario);

document.getElementById('formActuacion').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Enviando...");

    const datos = {
        id_profesional: sessionStorage.getItem('id_profesional'),
        id_usuario: document.getElementById('id_usuario').value,
        id_servicio: document.getElementById('id_servicio').value,
        fecha: document.getElementById('fecha').value,
        horaInicio: document.getElementById('horaInicio').value,
        horaFin: document.getElementById('horaFin').value
    };

    const res = await fetch('http://173.16.0.27/coordicanarias/api/crear_actuacion.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    const respuestaTexto = await res.text(); // Leemos TODO lo que diga el PHP
    console.log("RESPUESTA DEL SERVIDOR:", respuestaTexto);
    
    try {
        const respuestaJson = JSON.parse(respuestaTexto);
        alert(respuestaJson.message);
    } catch (err) {
        alert("El PHP devolvió un error de código. Mira la consola.");
    }
});
