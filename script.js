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


