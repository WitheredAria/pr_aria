document.addEventListener('DOMContentLoaded', () => {
    const nombre = localStorage.getItem('usuarioNombre');
    const h1 = document.querySelector('h1');
    
    if (nombre && h1) {
        h1.textContent = `Hola, ${nombre}.`;
    }
});

document.getElementById('fecha').valueAsDate = new Date();

/* // 1. La función que pide los datos y rellena los huecos
async function cargarDatosDinamicos() {
    const ID_LUNA = 30; // El ID que estamos simulando
    console.log("Iniciando carga automática para Luna (ID 30)...");

    try {
        // Llamada a la API
        const response = await fetch(`http://173.16.0.27/coordicanarias/api/get_filtros.php?id_prof=${ID_LUNA}`);
        
        if (!response.ok) throw new Error("No se pudo contactar con la API");

        const res = await response.json();
        console.log("Datos de Luna recibidos:", res);

        if (res.status === "success") {
            const { servicios, usuarios } = res.datos || res.data;

            // Buscamos los únicos dos selectores que existen en el HTML
            const selectServicio = document.getElementById('id_servicio');
            const selectUsuario = document.getElementById('id_usuario');

            // Rellenamos Servicios
            if (selectServicio) {
                selectServicio.innerHTML = '<option value="">Seleccione servicio...</option>';
                servicios.forEach(s => {
                    let opt = document.createElement('option');
                    opt.value = s.id_servicio;
                    opt.textContent = s.nombre;
                    selectServicio.appendChild(opt);
                });
                console.log("Servicios de Rehabilitación cargados.");
            }

            // Rellenamos Usuarios
            if (selectUsuario) {
                selectUsuario.innerHTML = '<option value="">Seleccione usuario...</option>';
                usuarios.forEach(u => {
                    let opt = document.createElement('option');
                    opt.value = u.id_usuario;
                    opt.textContent = `${u.nombre} ${u.apellidos}`;
                    selectUsuario.appendChild(opt);
                });
                console.log("Usuarios de Luna cargados.");
            }
        }
    } catch (error) {
        console.error("Error cargando los datos de Luna:", error);
    }
}

// 2. Ejecución inmediata (sin depender de eventos de click/change)
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cargarDatosLuna);
} else {
    cargarDatosLuna();
}

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
}); */

async function cargarDatosDinamicos() {
    // RECOGEMOS EL ID DEL PROFESIONAL
    const profesionalID = localStorage.getItem('usuarioID');
    
    if (!profesionalID) {
        console.error("No se encontró ID de profesional. Redirigiendo al login...");
        window.location.href = 'login.html';
        return;
    }

    console.log(`Cargando datos para el profesional ID: ${profesionalID}`);

    try {
        // Usamos el ID dinámico en la URL
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

// 3. Envío del formulario actualizado
document.getElementById('formActuacion').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datos = {
        // IMPORTANTE: Sacamos el ID de localStorage (antes tenías sessionStorage)
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