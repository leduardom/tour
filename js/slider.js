function loadHTML(page) {
    fetch(page)
        .then(response => response.text())
        .then(text => document.getElementById('pagina').innerHTML = text);
}


current_page = 1;
total_pages = 2;
document.getElementById("pagina").innerHTML = "Página " + current_page + " de " + total_pages;

function lastPage() {

    alert("Implemente corretamente a mudança de página para trás");
}

function nextPage() {
    alert("Implemente corretamente a mudança de página para frente");
}