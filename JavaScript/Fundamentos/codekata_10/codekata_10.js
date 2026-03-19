document.querySelector(".test").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Clic en el botón");
});

/* document.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    alert("Menú contextual está intervenido");
}); */

window.addEventListener("click", function(event) {
    console.log("Hemos hecho clic en la ventana de la web");
});