'use strict';
let state = {};

d3.csv("data/input_data.csv").then(function (data) {
    state.data = data;
    updatePage();
})

function updatePage() {
    renderNewListing();
}

function renderItem(item, parent) {
    let div = document.createElement("div");
    div.classList.add("card", "mx-2", "my-2");
    div.style.width = "14rem";

    let img = document.createElement("img");
    let imgSrc = item.images;
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

function renderNewListing() {

    let cardRow = document.querySelector("div.row.space-card#new_listings");
    cardRow.innerHTML = '';
    state.data.forEach(function (listing) {
        renderItem(listing, cardRow)
    })
}


function test() {
    $("#submit").submit()
        let item = {
            category: $(".dropdown-item").attr("value"),
            name: $("#name").val(),
            color: $("#color").val(),
            description: $("#desc").val(),
            size: $("#size").val(),
            price: $("#price").val(),
            gender: $('input[name=genderRadio]:checked', '#genderForm').val(),
            images: "images/premade_json_images/adidas_shoe_1.png"
        };
        console.log(item);
state.data.push(item);
renderNewListing();
}
// Select value from #category dropdown button
$(".dropdown-item").click(function () {
    console.log($(this).attr("value"));
});

// Select value from #name text box
$("#name").on("input", function () {
    console.log($(this).attr("id"))
    console.log($(this).val());
})

// Select value from #color text box
$("#color").on("input", function () {
    console.log($(this).attr("id"))
})

// Select value from #description text box
$("#desc").on("input", function () {
    console.log($(this).attr("id"))
})

// Select value from #size text box
$("#size").on("input", function () {
    console.log($(this).attr("id"))
})

// Select value from #price text box
$("#price").on("input", function () {
    console.log($(this).attr("id"))
})

// Select value from gender radio buttons
$('#genderForm input').on('change', function () {
    console.log($('input[name=genderRadio]:checked', '#genderForm').val());
});

// Image upload stuff

$('.custom-file-input').on('change', function () {
    var fileName = $(this).val();
    console.log(fileName);
})

$('.custom-file-input').on('change', function () {
    let fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').addClass("selected").html(fileName);
});

// Keeps the "Select a Category" dropdown box on it's selection
$(".dropdown-menu li").click(function () {
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});