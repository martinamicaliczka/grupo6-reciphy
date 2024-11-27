let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

let titulo          = document.querySelector(".titulo");
let nombreTarjeta2   = document.querySelector(".nombreTarjeta2");
let instrucciones   = document.querySelector(".instrucciones");
let coccion         = document.querySelector(".coccion");
let imagenComida    = document.querySelector(".imagenComida");
let lista_detalle   = document.querySelector(".lista_detalle");
let cateoriaLink    = document.querySelector(".categoriaLink");

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    nombreTarjeta2.innerText=`${results.name}`;
    instrucciones.innerHTML = `<strong>Instrucciones:</strong> ${results.instructions}`;
    coccion.innerHTML=`<strong>Tiempo de cocción:</strong> ${results.cookTimeMinutes} minutos`;
    imagenComida.src = results.image;
    listita = "";
    let tags=results.tags;
    for (let i = 0; i < tags.length; i++) {
        listita+=`<li><a class="categoriaLink2" href="./searchcategorie.html?idTag=${tags[i]}">${tags[i]}</a></li>`
    }
    lista_detalle.innerHTML=listita;
})
.catch(function(error) {
    return console.log(error);
});