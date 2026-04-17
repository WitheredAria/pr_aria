document.getElementById('fecha').valueAsDate = new Date();

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