let buscar = document.querySelector("#buscar"); 
let formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function validar(event){
    if (buscar.value === ""){
        alert("El texto esta vacio");
        event.preventDefault();
    }
    else if (buscar.value.length < 3) {
        alert("El texto tiene que tener una longitud mayor a 3 caracteres");
        event.preventDefault();
    }
   });
   
let url = ('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image');
let recetas_seccion = document.querySelector(".recetas_seccion");
let cargar_mas = document.querySelector("#cargar_mas");

fetch(url)
.then(function(data){
    return data.json();
})
.then(function(results) { 
    let recipe = ""; 
    let dato = results.recipes;
    for(let i=0; i<dato.length; i++){
        recipe+= `
        <article class="recipe_card">
        <img src="${dato[i].image}" alt="${dato[i].name}">
        <div class="recetas_info">
        <h3>${dato[i].id}</h3>
        <p>Dificultad: ${dato[i].difficulty}</p>
        <a href="./resultados.html?idReceta=${dato[i].id}">Ver detalle</a>
        </div>
        </article>`;
    }
    recetas_seccion.innerHTML = recipe;
})
.catch(function(error) {
    return console.log(error);
});