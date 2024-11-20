let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

let titulo          = document.querySelector(".titulo");
let nombreTarjeta2   = document.querySelector(".nombreTarjeta2");
let instrucciones   = document.querySelector(".instrucciones");
let coccion         = document.querySelector(".coccion");
let imagenComida    = document.querySelector(".imagenComida");
let lista           = document.querySelector(".lista");
let cateoriaLink    = document.querySelector(".categoriaLink");

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    nombreTarjeta2.innerText=`${results.name}`;
    instrucciones.innerText = `Instrucciones: ${results.instructions}`;
    coccion.innerText=`Tiempo de cocción: ${results.cookTimeMinutes}`;
    imagenComida.src = results.image;
    listita = "";
    let tags=results.tags;
    for (let i = 0; i < tags.length; i++) {
        listita+=`<li><a class="categoriaLink" href="./searchcategorie.html?tag=${tags[i]}">${tags[i]}</a></li>`
    }
    lista.innerHTML=listita;
})
.catch(function(error) {
    return console.log(error);
});