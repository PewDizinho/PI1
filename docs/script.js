const allIds = ["home", "news", "contact", "about"];



document.getElementById("mybtn").onclick = () => {
    location.href = "./login/index.html";

};


function changeNavBar(wichOne) {
    for (var i of allIds) {
        document.getElementById(i).className = "nill";
    }
    document.getElementById(wichOne).className = "active";
}


