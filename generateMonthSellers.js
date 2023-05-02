const monthSellers = [
    {
        imgUrl: "",
        name: "Paulo Eduardo Konopka",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    }
]





function generateCard() {

    for (let seller of monthSellers) {

        // Create card element
        const card = document.createElement("div");
        card.className = "menuBoxInside";

        const img = document.createElement("img");
        img.src = seller;
        card.appendChild(img);

        const h2 = document.createElement("h2");
        h2.innerText = name;
        card.appendChild(h2);


        // Add card to container
        const container = document.getElementById("card-container");
        container.appendChild(card);
    }

}