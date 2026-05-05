document.getElementById('btnLogin').addEventListener('click', async (e) => {
    e.preventDefault(); // Evitamos que la página se recargue

    const idBuscado = document.getElementById('userID').value;
    const url = 'http://173.16.0.27/coordicanarias/api/get_profesionales.php';

    try {
        const response = await fetch(url);
        const resultado = await response.json();

        // Según el JSON, la lista está en 'resultado.data'
        const listaProfesionales = resultado.data;

        // Buscamos en el array el profesional que tenga ese id_profesional
        // Usamos == para comparar porque el input es string y el ID puede ser número
        const usuarioEncontrado = listaProfesionales.find(p => p.id_profesional == idBuscado);

        if (usuarioEncontrado) {
            console.log("¡Usuario encontrado!", usuarioEncontrado);
            
            // Guardamos el nombre en LocalStorage
            localStorage.setItem('usuarioNombre', usuarioEncontrado.nombre);
            localStorage.setItem('usuarioID', usuarioEncontrado.id_profesional);
            
            // Saltamos a la siguiente página
            window.location.href = 'index.html';
        } else {
            alert("El ID " + idBuscado + " no existe en la base de datos.");
        }

    } catch (error) {
        console.error("Error en la petición:", error);
        alert("No se pudo conectar con el servidor.");
    }
});