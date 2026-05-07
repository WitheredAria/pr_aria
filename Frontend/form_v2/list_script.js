// Usando el localStorage de nombre de la página de login, saluda al profesional por su nombre.
document.addEventListener('DOMContentLoaded', () => {
    const nombre = localStorage.getItem('usuarioNombre');
    const h1 = document.querySelector('h1');
    
    if (nombre && h1) {
        h1.textContent = `Hola, ${nombre}.`;
    }
});

