document.getElementById("mybtn").onclick = () => {
    location.href = "./login/index.html";
};

const allIds = ["home", "news", "contact", "about"];
function changeNavBar(wichOne) {
    for (var i of allIds) {
        document.getElementById(i).className = "desactived";
    }
    document.getElementById(wichOne).className = "active";
}