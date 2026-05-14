// Usando el localStorage de nombre de la página de login, saluda al profesional por su nombre.
document.addEventListener('DOMContentLoaded', () => {
    const nombre = localStorage.getItem('usuarioNombre');
    const profesionalID = localStorage.getItem('usuarioID')
    const h1 = document.querySelector('h1');
    
    if (nombre && h1) {
        h1.textContent = `Hola, ${nombre}.`;
    }

    if (!profesionalID) {
        window.location.href = 'login.html';
        return;
    }

    cargarActuaciones(profesionalID);
});

async function cargarActuaciones(idProf) {
    const tbody = document.getElementById('tbodyActuaciones');     
    // La API ya recibe el id_prof aquí, por lo que ella debería filtrar los datos
    const url = `http://173.16.0.27/coordicanarias/api/get_actuaciones.php?id_prof=${idProf}`;

    try {
        const response = await fetch(url);
        const res = await response.json();

        if (tbody) tbody.innerHTML = '';

        // Obtenemos los datos (si no hay, usamos un array vacío)
        const misRegistros = res.datos || res.data || [];

        console.log("Registros a mostrar:", misRegistros.length);

        if (res.status === "success" && misRegistros.length > 0) {
            
            // IMPORTANTE: Ya no filtramos manualmente en JS porque el objeto
            // que viene del servidor no trae el campo del ID del profesional.
            
            misRegistros.forEach(act => {
                const fila = document.createElement('tr');
                
                const fecha = act.fecha || '---';
                const nombreCompleto = `${act.usuario_nombre || ''} ${act.usuario_apellidos || ''}`;
                const servicio = act.nombre_servicio || 'Sin servicio';
                const horario = act["horaI-Fin"] || '---'; 

                fila.innerHTML = `
                    <td>${fecha}</td>
                    <td>${nombreCompleto}</td>
                    <td><span class="badge bg-info text-dark">${servicio}</span></td>
                    <td>${horario}</td>
                `;
                tbody.appendChild(fila);
            });
        } else {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center">No tienes actuaciones registradas.</td></tr>';
        }
    } catch (error) {
        console.error("Error al cargar la tabla:", error);
    }
}