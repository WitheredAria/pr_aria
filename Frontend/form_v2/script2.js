// Usando el localStorage de nombre de la página de login, saluda al profesional por su nombre.
document.addEventListener('DOMContentLoaded', () => {
    const nombre = localStorage.getItem('usuarioNombre');
    const h1 = document.querySelector('h1');
    
    if (nombre && h1) {
        h1.textContent = `Hola, ${nombre}.`;
    }
});

// Configura el selector de fecha para que, por defecto, aparezca el día de hoy.
document.getElementById('fecha').valueAsDate = new Date();

async function cargarDatosDinamicos() {
    // Recoge el ID del profesional
    const profesionalID = localStorage.getItem('usuarioID');
    
    if (!profesionalID) {
        console.error("No se encontró ID de profesional. Redirigiendo al login...");
        window.location.href = 'login.html';
        return;
    }

    console.log(`Cargando datos para el profesional ID: ${profesionalID}`);

    try {
        // Usa el ID dinámico en la URL
        const response = await fetch(`http://173.16.0.27/coordicanarias/api/get_filtros.php?id_prof=${profesionalID}`);
        
        if (!response.ok) throw new Error("No se pudo contactar con la API");

        const res = await response.json();

        if (res.status === "success") {
            const { servicios, usuarios } = res.datos || res.data;

            const selectServicio = document.getElementById('id_servicio');
            const selectUsuario = document.getElementById('id_usuario');

            if (selectServicio) {
                selectServicio.innerHTML = '<option value="">Seleccione servicio...</option>';
                servicios.forEach(s => {
                    let opt = document.createElement('option');
                    opt.value = s.id_servicio;
                    opt.textContent = s.nombre;
                    selectServicio.appendChild(opt);
                });
            }

            if (selectUsuario) {
                selectUsuario.innerHTML = '<option value="">Seleccione usuario...</option>';
                usuarios.forEach(u => {
                    let opt = document.createElement('option');
                    opt.value = u.id_usuario;
                    opt.textContent = `${u.nombre} ${u.apellidos}`;
                    selectUsuario.appendChild(opt);
                });
            }
        }
    } catch (error) {
        console.error("Error cargando los datos:", error);
    }
}

// Ejecución inicial
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cargarDatosDinamicos);
} else {
    cargarDatosDinamicos();
}

// Envío de formulario actualizado
document.getElementById('formActuacion').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datos = {
        // Saca el ID de localStorage
        id_profesional: localStorage.getItem('usuarioID'),
        id_usuario: document.getElementById('id_usuario').value,
        id_servicio: document.getElementById('id_servicio').value,
        fecha: document.getElementById('fecha').value,
        horaInicio: document.getElementById('horaInicio').value,
        horaFin: document.getElementById('horaFin').value
    };

    try {
        const res = await fetch('http://173.16.0.27/coordicanarias/api/crear_actuacion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        const respuestaTexto = await res.text();
        const respuestaJson = JSON.parse(respuestaTexto);
        alert(respuestaJson.message);
    } catch (err) {
        console.error("Error al enviar:", err);
        alert("Hubo un error al procesar la solicitud.");
    }
});