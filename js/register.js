let mailvacio = document.querySelector(".mailvacio");
let email = document.querySelector("#email");
let contrasennia = document.querySelector("#contrasennia");
let form = document.querySelector(".form");
let contravacio = document.querySelector(".contravacio");
let terminovacio = document.querySelector(".terminovacio");
let terminos = document.querySelector("#terminos");

form.addEventListener("submit", function validar(event) {
    if (email.value === "") {
        mailvacio.innerText = "⚠ Por favor complete el campo";
        event.preventDefault();
    }
    if (contrasennia.value === "") {
        contravacio.innerText = "⚠ Por favor complete el campo";
        event.preventDefault();
    }
    if (terminos.checked == false) {
        terminovacio.innerText = "⚠ Debe acetar los terminos y condiciones para poder registrarse";
        event.preventDefault();
    }

});
