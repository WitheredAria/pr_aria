let inputName = document.querySelector(".saludo");
let buttonSaludo = document.querySelector(".boton");

buttonSaludo.addEventListener("click", function(event) {
    if (inputName.value !== "") {
         alert("¡Hola, " + inputName.value + "!");
         inputName.value = "";
    }
});