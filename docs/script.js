const allIds = ["home", "news", "contact", "about"];



document.getElementById("mybtn").onclick = () => {
    location.href = "./login/index.html";

};


function changeNavBar(wichOne) {
    for (var i of allIds) {
        document.getElementById(i).className = "nill";
    }
    document.getElementById(wichOne).className = "active";
    if (wichOne == "home") {
        document.getElementById("title").className = "active";
    } else {
        document.getElementById("title").className = "title";
    }
    switch (wichOne) {
        case "home":

            break;

        case "new":

            break;
        case "contact":

            break;

        case "about":
            location.href = "./subpages/sobre/index.html"
            break;
    }
}


