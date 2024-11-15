let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

let nombre          = document.querySelector(".nombre");
let instrucciones   = document.querySelector(".instrucciones");
let coccion         = document.querySelector(".coccion");
let image           = document.querySelector(".image");
let lista           = document.querySelector(".lista");
let cateoriaLink    = document.querySelector(".categoriaLink");

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    nombre.innerText=`${results.name}`;
    instrucciones.innerText = `Instrucciones: ${results.instructions}`;
    coccion.innerText=`Tiempo de cocción: ${results.cookTimeMinutes}`;
    image.src = results.image;
    listita = "";
    let tags=results.tags;
    for (let i = 0; i < tags.length; i++) {
        listita+=`<li><a class="categoriaLink" href="">${tags[i]}</a></li>`
    }
    lista.innerHTML=listita;
})
.catch(function(error) {
    return console.log(error);
});