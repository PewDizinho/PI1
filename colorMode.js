const cookieConsent = localStorage.getItem("cookie_consent");
const colors = [
    /**
     * Com as variaveis dentro do :root você utiliza:

     {
        cssVar: "NOME DA VAR",
        whiteColor: "VALOR NO MODO CLARO",
        blackColor: "VALOR NO MODO ESCURO"
     },
     
     * Sempre adicione os "" as , e : utilizando os mesmos nomes "cssVar", "whiteColor" e "blackColor"
     */
    {
        cssVar: "--background-color",
        whiteColor: "green",
        blackColor: "rgb(0, 44, 0)",
    },
    {
        cssVar: "--button-color",
        whiteColor: "black",
        blackColor: "white",
    },
    {
        cssVar: "--button-txt-color",
        whiteColor: "white",
        blackColor: "black",
    },
];

//Essa parte do código vocês ignoram
let root = document.querySelector(':root').style;
let whiteMode = getMode() ?? true;
function mudarModo() {
    whiteMode = !whiteMode;
    setMode(whiteMode);
    initMode()
}


function initMode() {
    setTimeout(() => {
        for (let i of colors) {
            root.setProperty(i.cssVar, (whiteMode ? i.whiteColor : i.blackColor));
        }
        console.log("Whitemode ligado? " + whiteMode)
        document.getElementById("modoEscuro").innerText = whiteMode ? "Modo Escuro" : "Modo Claro";

    }, 2000);

}
function setMode(mode) {
    if (cookieConsent) {
        const date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        console.log(mode)

        document.cookie = `whiteMode=${mode}; expires=${date.toGMTString()}; path=/`;
        console.log(document.cookie)
    }
}

function getMode() {
    const name = "whiteMode=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name)) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}



// if (!cookieConsent) {
//     const banner = document.createElement("div");
//     banner.className = "cookie-banner";
//     banner.innerHTML = `
//     <p>This website uses cookies to improve your experience. By continuing to use this site, you consent to our use of cookies.</p>
//     <button class="cookie-accept">Accept</button>
//     <button class="cookie-decline">Decline</button>
//   `;
//     document.body.appendChild(banner);
//     const acceptBtn = banner.querySelector(".cookie-accept");
//     acceptBtn.addEventListener("click", () => {
//         localStorage.setItem("cookie_consent", "true");
//         banner.style.display = "none";
//     });
//     const declineBtn = banner.querySelector(".cookie-decline");
//     declineBtn.addEventListener("click", () => {
//         localStorage.setItem("cookie_consent", "false");
//         banner.style.display = "none";
//     });
// }
