/* const response = await fetch('http://173.16.0.27/coordicanarias/api/crear_actuacion.php', { ... });
 */

// Definimos la dirección del servidor una sola vez
const BASE_URL = 'http://173.16.0.27/coordicanarias/api';

// Ejemplo para CREAR ACTUACIÓN
async function guardarActuacion(datos) {
    const response = await fetch('${BASE_URL}/crear_actuacion.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return await response.json();
}

// Ejemplo para OBTENER USUARIOS

async function cargarUsuarios(idProf) {
    const response = await fetch('${BASE_URL}/get_usuarios_por_profesional.php?id_profesional=${idProf}');
    return await response.json()
}

async function cargarUsuarios() {
    const selectUsuario = document.getElementById('id_usuario');

    try {
        const response = await fetch('${BASE_URL}/get_usuarios.php');
        const resultado = await response.json();

        if (resultado.status == "success") {
            resultado.data.forEach(usuario => {
                const option = document.createElement('option');
                option.value = usuario.id_usuario;
                // Mostramos nombre y apellidos para que sepa a quién elige
                option.textContent = '${usuario.nombre} ${usuario.apellidos}';
                selectUsuario.appendChild(option);
            });
        }
    } catch (error) {
        console.error("Error cargando usuarios: ", error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    cargarUsuarios();
    cargarProfesionales();
    cargarProyectos();
})


console.log("¡JS cargado!");