const allIds = ["home", "news", "contact", "about"];



document.getElementById("mybtn").onclick = () => {
    location.href = "./login/index.html";

};


function changeNavBar(wichOne) {
    for (var i of allIds) {
        document.getElementById(i).className = "nill";
    }

    alert(wichOne)
    switch (wichOne) {
        case "home":
            location.href = "https://PewDizinho.github.io/PI1/"
            break;

        case "new":

            break;
        case "contact":

            break;

        case "about":
            location.href = "https://PewDizinho.github.io/PI1/subpages/sobre/index.html"
            break;
    }
    document.getElementById(wichOne).className = "active";
}


