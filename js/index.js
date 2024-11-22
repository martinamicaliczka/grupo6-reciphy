//validamos elformulario
let limit = 10
let url = (`https://dummyjson.com/recipes?limit=${limit}&skip=0&select=name,image,difficulty`);
let recetas_seccion = document.querySelector(".recetas_seccion");
let cargar_mas = document.querySelector("#cargar_mas");


function buscarFetch(url) {
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (results) {
            console.log(results);
            let recipe = "";
            let dato = results.recipes;
            for (let i = 0; i < dato.length; i++) {
                let link = "";
                if (dato[i].difficulty=="Easy") {
                    link = "./img/estrellaeasy.png"
                }else if (dato[i].difficulty=="Medium"){
                    link = "./img/estrellamedium.png"
                }else if (dato[i].difficulty=="High"){
                    link = "./img/estrellahigh.png"
                }
                recipe += `
        <article class="recipe_card">
        <img class="imagenComida" src="${dato[i].image}" alt="${dato[i].name}">
        <div class="recetas_info">
        <h3 class="nombreTarjeta" >${dato[i].name}</h3>
        <div>
             <p class="dificultadTarjeta">Dificultad: </p>
             <img src="${link}" class="estrellas" alt="">
        </div>
        <a class="verDetalle" href="./detalle.html?idReceta=${dato[i].id}">Ver detalle</a>
        </div>
        </article>`;
            }
            recetas_seccion.innerHTML = recipe;
        })
        .catch(function (error) {
            return console.log(error);
        });
}
buscarFetch(`https://dummyjson.com/recipes?limit=${limit}&skip=0&select=name,image,difficulty`)
cargar_mas.addEventListener("click", function (e) {
    limit += 10
    buscarFetch(`https://dummyjson.com/recipes?limit=${limit}&skip=0&select=name,image,difficulty`);
    if (limit == 50) {
        cargar_mas.style.display = "none"
    }
})