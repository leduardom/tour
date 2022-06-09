function loadMap() {

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}

function loadHTML(page) {
    fetch(page)
        .then(response => response.text())
        .then(text => document.getElementById('pagina').innerHTML = text)
        .then(text => loadMap());

}


current_page = 0;
total_pages = 2;
document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
loadHTML(current_page + ".html")

function lastPage() {
    if (current_page > 0) {
        current_page--;
    }
    loadHTML(current_page + ".html");
    document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
}

function nextPage() {
    if (current_page < total_pages) {
        current_page++;
    }
    loadHTML(current_page + ".html");
    document.getElementById("paginas").innerHTML = "Página " + current_page + " de " + total_pages;
}