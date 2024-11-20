let qs = location.search;
let resultados = new URLSearchParams(qs);
let searchResults = resultados.get("Buscar");
let URL = `https://dummyjson.com/recipes`;
console.log(searchResults);  
let terminos_busqueda = document.querySelector(".terminos_busqueda"); 
let resultados_busqueda = document.querySelector(".resultados_busqueda");

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
        if (dato[i].name == searchResults){
            buscar += `
            <article class="recipe_card"> 
                <img class="imagenComida" src="${dato[i].image}" alt="${dato[i].name}">
                  <div class="recetas_info">
                    <h3 class="nombreTarjeta">${dato[i].name}</h3>
                    <a class="verDetalle" href="./detalle.html?idReceta=${dato[i].id}">Ver detalle</a>
                </div>
            </article>`;
    } }
if (buscar == ""){
    resultados_busqueda.innerHTML = `<p>No se encontraron recetas para "${searchResults}".</p>`;
}
else{
    resultados_busqueda.innerHTML = buscar;
}
})
.catch(function (error) {
    return console.log(error);
});


