let lista           = document.querySelector(".lista");
let url = "https://dummyjson.com/recipes/tags";

fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(results) {
    console.log(results);
    listita = "";

    for (let i = 0; i < results.length; i++) {
        listita+=`<li><a class="categoriaLink" href="./searchcategorie.html?tag=${results[i]}">${results[i]}</a></li>`
    }
    lista.innerHTML=listita;
})
.catch(function(error) {
    return console.log(error);
});



