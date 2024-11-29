let mailvacio = document.querySelector(".mailvacio");
let email = document.querySelector("#email");
let contrasennia = document.querySelector("#contrasennia");
let form = document.querySelector(".form");
let contravacio = document.querySelector(".contravacio");
form.addEventListener("submit", function validar(event) {
    if (email.value === "") {
        mailvacio.innerText = "⚠ Por favor complete el campo email";
        event.preventDefault();
    }else{
        mailvacio.innerText = "";
    }
    if (contrasennia.value === "") {
        contravacio.innerText = "⚠ Por favor complete el campo contraseña";
        event.preventDefault();
    }else{
        contravacio.innerText = "";
    }
});