'use strict';
let state = {};

d3.json("data/premade_data.json").then(function(data) {
    state.data = data;
    updatePage();
})

function updatePage() {
    renderPremadeListing();
}

function renderItem(item, parent) {
    let div = document.createElement("div");
    div.classList.add("card", "mx-2", "my-2");
    div.style.width = "14rem";

    let img = document.createElement("img");
    let imgSrc = item.images[0];
    img.src = imgSrc;
    img.style.width = "100%";

    let h5 = document.createElement("h5");
    let a = document.createElement("a");
    a.textContent = item.name;
    a.href = "#";
    h5.appendChild(a);

    let p = document.createElement("p");
    p.classList.add("price");
    p.textContent = "$" + item.price;

    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);

    parent.appendChild(div);
}

function renderPremadeListing() {
    let cardRow = document.querySelector("div.row.space-card#existing_listings");

    state.data.forEach(function(listing) {
        renderItem(listing, cardRow)
    })
}

