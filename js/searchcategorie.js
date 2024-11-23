let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idTag = qsObj.get("idTag");
let tituloCategoria = document.querySelector("#tituloCategoria");
let recetas_seccion = document.querySelector(".recetas_seccion");
let url = `https://dummyjson.com/recipes/tag/${idTag}`;

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
        let nombre = ""
                if (dato[i].name.length > 30){
                    for (let x = 0; x < 30; x++) {
                        nombre += dato[i].name[x]               
                    }
                    nombre += "..."
                }else{
                    nombre = results.recipes[i].name
                }
        recipe += `
<article class="recipe_card">
<img class="imagenComida" src="${dato[i].image}" alt="${dato[i].name}">
<div class="recetas_info">
<h3 class="nombreTarjeta" >${nombre}</h3>
<div class="cajaEstrellas">
             <p class="dificultadTarjeta">Dificultad: </p>
             <img src="${link}" class="estrellas" alt="">
        </div>
<a class="verDetalle" href="./detalle.html?idReceta=${dato[i].id}">Ver detalle</a>
</div>
</article>`;
    }
    recetas_seccion.innerHTML = recipe;
    tituloCategoria.innerText =  `Categoria: ${idTag}`;
})
.catch(function (error) {
    return console.log(error);
});