
const allIds = ["home", "news", "contact", "about"];


function doClickAction() {
    location.href = "./login/index.html";
}
function doDoubleClickAction() {
    location.href = "./404.html";
}

var timer = 0;
var delay = 400;
var prevent = false;

$("#mybtn")
    .on("click", function () {
        timer = setTimeout(function () {
            if (!prevent) {
                doClickAction();
            }
            prevent = false;
        }, delay);
    })
    .on("dblclick", function () {
        clearTimeout(timer);
        prevent = true;
        doDoubleClickAction();
    });
function changeNavBar(wichOne) {
    for (var i of allIds) {
        document.getElementById(i).className = "nill";
    }
    document.getElementById(wichOne).className = "active";
}


function test(name, pfp, role, info) {
    // Create card element
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = pfp;
    card.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerText = name;
    card.appendChild(h2);

    const span = document.createElement("span");
    span.innerText = role;
    card.appendChild(span);

    const p = document.createElement("p");
    p.innerText = info;
    card.appendChild(p);

    // Add card to container
    const container = document.getElementById("card-container");
    container.appendChild(card);
}