let qs = location.search;
let resultados = new URLSearchParams(qs);
let searchResults = resultados.get("Buscar");
let URL = `https://dummyjson.com/recipes/search?q=${searchResults}`;
console.log(searchResults);  
let terminos_busqueda = document.querySelector(".terminos_busqueda"); 
let recetas_seccion = document.querySelector(".recetas_seccion");

terminos_busqueda.innerText = `Resultados de busqueda para: ${searchResults}`;

fetch(URL)
.then(function (data) {
    return data.json();
})
.then(function (results) {

    console.log(results);
    let buscar = "";
    let dato =  results.recipes;
    for (let i = 0; i < dato.length; i++){
        let link = "";
            if (dato[i].difficulty=="Easy") {
                link = "./img/estrellaeasy.png"
            }else if (dato[i].difficulty=="Medium"){
                link = "./img/estrellamedium.png"
            }else if (dato[i].difficulty=="High"){
                link = "./img/estrellahigh.png"
            }
        buscar += `
        <article class="recipe_card"> 
            <img class="imagenComida" src="${dato[i].image}" alt="${dato[i].name}">
                <div class="recetas_info">
                <h3 class="nombreTarjeta">${dato[i].name}</h3>
                <div class="cajaEstrellas">
             <p class="dificultadTarjeta">Dificultad: </p>
             <img src="${link}" class="estrellas" alt="">
        </div>
                <a class="verDetalle" href="./detalle.html?idReceta=${dato[i].id}">Ver detalle</a>
            </div>
        </article>`;
    }
    if (buscar == ""){
    recetas_seccion.innerHTML = `<p class="resultado_vacio">No se encontraron recetas para "${searchResults}" :( </p>`
    }else{
    recetas_seccion.innerHTML = buscar;
}
})
.catch(function (error) {
    return console.log(error);
});


