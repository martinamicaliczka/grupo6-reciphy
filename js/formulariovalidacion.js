let buscar = document.querySelector(".buscar");
let formularioIndex = document.querySelector(".formularioIndex");
let enviar = document.querySelector("#enviar")
let enviarCelu = document.querySelector("#enviarCelu")

formularioIndex.addEventListener("submit", function validar(event) {
    if (buscar.value === "") {
        alert("El texto esta vacio");
        event.preventDefault();
    }
    else if (buscar.value.length < 3) {
        alert("El texto tiene que tener una longitud mayor a 3 caracteres");
        event.preventDefault();
    }
});
buscar.addEventListener("input", function () {
    if (this.value.length < 3) {
        buscar.style.color = "black";
    } else {
        buscar.style.color = "#d045ac";
    }
});