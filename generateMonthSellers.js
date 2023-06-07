const monthSellers = [
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Paulo.jpg",
        name: "Paulo Eduardo Konopka",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/josé.jpg",
        name: "José Augusto",
        category: "design",
        curso: "Designer",
        title: "Designer do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bryan.jpg",
        name: "Bryan Alexandre",
        category: "publicity",
        curso: "Publicidade",
        title: "Publicitário do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bruno.jpg",
        name: "Bruno Eufrasio",
        category: "Marketing",
        curso: "Marketing",
        title: "Marketing do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Trobojão.jpg",
        name: "João Scarante",
        category: "audiosvisuais",
        curso: "Auddios Visuais",
        title: "Audios Visuais do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/JoãoTrizotte.jpg",
        name: "João Trizotte",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador do Mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "NaN",
        sellAllTime: "NaN",
        aboutme: "Sou um entusiasta em programação, tendo conhecimento em desenvolvimento web e mobile, tenho interesse em desenvolvimentos de jogos e design",
        profileUrl: "",
    },
]




function filterCategory(index) {
    const categories = ["programmer", "design", "marketing", "nutrition", "audiosvisuais", "publicity"];
    const parentElement = document.getElementById('menuBoxInside');

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    for (let seller of monthSellers) {
        if (seller.category.toLowerCase() == categories[index] || index == 6) {
            document.getElementById("menuBoxTitle").innerText = seller.title;
            document.getElementById("menuBoxInside").appendChild(new SellerOfTheMonthCard(seller).newCard);
            if (index == 6) {

                document.getElementById("menuBoxTitle").innerText = "Vendedores do Mês";
            }
        }
    }
    if (parentElement.firstChild == null) {
        document.getElementById("menuBoxInside").appendChild(new SellerOfTheMonthCard().emptyCard);
        document.getElementById("menuBoxTitle").innerText = "Não Localizado";
    }
}
function generateCard() {
    for (let seller of monthSellers) {
        const container = document.getElementById("menuBoxInside");
        container.appendChild(new SellerOfTheMonthCard(seller).newCard);
    }
}

class SellerOfTheMonthCard {

    constructor(obj) {
        this.seller = obj;
    }
    get newCard() {
        const card = document.createElement("div");
        const flipCardInner = document.createElement("div");
        const flipCardFront = document.createElement("div");
        const flipCardback = document.createElement("div");
        const infoLeft = document.createElement("div");
        const infoRight = document.createElement("div");
        const spacer = document.createElement("div");
        const aboutMe = document.createElement("p");
        const name = document.createElement("p");
        const title = document.createElement("p");
        const area = document.createElement("p");
        const university = document.createElement("p");
        const stars = document.createElement("p");
        const sellsThisMonth = document.createElement("p");
        const sellAllTime = document.createElement("p");
        const img = document.createElement("img");
        const imgBack = document.createElement("img");



        aboutMe.innerText = `"${this.seller.aboutme}"`;
        name.innerText = this.seller.name;
        title.innerText = this.seller.title;
        area.innerText = this.seller.curso;
        stars.innerText = this.seller.stars;
        sellsThisMonth.innerText = `Vendas realizadas esse mês: ${this.seller.sellsThisMonth}`;
        sellAllTime.innerText = `Vendas realizadas no total: ${this.seller.sellAllTime}`;
        img.src = this.seller.imgUrl;
        imgBack.src = this.seller.imgUrl;

        card.className = "flip-card";
        flipCardInner.className = "flip-card-inner";
        flipCardFront.className = "flip-card-front";
        flipCardback.className = "flip-card-back";
        title.className = "menuBoxInfo txtShadow";
        name.className = "menuBoxInfo txtShadow";
        area.className = "menuBoxInfo txtShadow";
        aboutMe.className = "menuBoxInfo txtShadow";
        university.className = "menuBoxInfo txtShadow";
        stars.className = "menuBoxInfo txtShadow";
        sellsThisMonth.className = "menuBoxInfo txtShadow";
        sellAllTime.className = "menuBoxInfo txtShadow";
        spacer.className = "spacer";
        img.className = "menuBoxIcon";
        imgBack.className = "menuBoxIcon";
        infoLeft.className = "menuBoxInfo";
        infoRight.className = "menuBoxInfo";


        infoLeft.appendChild(name);
        infoLeft.appendChild(title);
        infoLeft.appendChild(area);
        flipCardFront.appendChild(img);

        infoRight.appendChild(sellsThisMonth);
        infoRight.appendChild(sellAllTime);
        infoRight.appendChild(stars);
        flipCardFront.appendChild(infoLeft);
        flipCardFront.appendChild(spacer);

        flipCardFront.appendChild(infoRight);




        flipCardback.appendChild(imgBack);

        flipCardback.appendChild(aboutMe)

        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardback);
        card.appendChild(flipCardInner);


        return card;
    }
    get getCard() {
        const card = document.createElement("div");
        card.className = "menuBoxCard row justify";
        const img = document.createElement("img");
        img.className = "menuBoxIcon"
        img.src = this.seller.imgUrl;
        card.appendChild(img);
        const infoLeft = document.createElement("div");
        infoLeft.className = "menuBoxInfo column justify";
        const infoRight = document.createElement("div");
        infoRight.className = "menuBoxInfo column";
        const name = document.createElement("p");
        const area = document.createElement("p");
        const university = document.createElement("p");
        const stars = document.createElement("p");
        const sellsThisMonth = document.createElement("p");
        const sellAllTime = document.createElement("p");
        name.innerText = this.seller.name;
        area.innerText = `Área: ${this.seller.area}`;
        university.innerText = `Faculdade: ${this.seller.university}`;
        stars.innerText = `Nota: ${this.seller.stars}`;
        sellsThisMonth.innerText = `Vendas realizadas esse mês: ${this.seller.sellsThisMonth}`;
        sellAllTime.innerText = `Vendas realizadas no total: ${this.seller.sellAllTime}`;

        name.className = "menuBoxInfo";
        area.className = "menuBoxInfo";
        university.className = "menuBoxInfo";
        stars.className = "menuBoxInfo";
        sellsThisMonth.className = "menuBoxInfo end";
        sellAllTime.className = "menuBoxInfo end";
        const spacer = document.createElement("div");
        spacer.className = "spacer";
        infoLeft.appendChild(name);
        infoLeft.appendChild(area);
        infoLeft.appendChild(university);
        infoLeft.appendChild(stars);
        infoRight.appendChild(sellsThisMonth);
        infoRight.appendChild(sellAllTime);
        card.appendChild(infoLeft);
        card.appendChild(spacer);
        card.appendChild(infoRight);

        return card;
    }
    get emptyCard() {
        const card = document.createElement("div");
        card.className = "menuBoxCard row justify";

        const infoLeft = document.createElement("div");
        infoLeft.className = "menuBoxInfo column justify";

        const name = document.createElement("p");

        name.innerText = "Infelizmente não possuímos um estudante dessa área [Card in WIP]";

        name.className = "menuBoxInfo";

        const spacer = document.createElement("div");
        spacer.className = "spacer";
        infoLeft.appendChild(name);

        card.appendChild(infoLeft);
        card.appendChild(spacer);


        return card;
    }

}
