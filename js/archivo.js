let search = document.querySelector("#Buscar"); 
let formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function validar(event){
    if (Buscar === ""){
        alert("El texto esta vacio");
        event.preventDefault();
    }
    if(Buscar.lenght<3){
        alert("El texto tiene que tener una longitud mayor a 3 caracteres");
        event.preventDefault();
    }
   });
   