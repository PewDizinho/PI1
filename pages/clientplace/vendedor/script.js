const monthSellers = [
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Paulo.jpg",
        name: "Paulo Eduardo Konopka",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador do mês",
        university: "Tuiuti",
        stars: "★★★☆☆☆",
        sellsThisMonth: "150",
        sellAllTime: "150",
        aboutMe: "Hey, me chamo Paulo e tenho um conhecimento em desenvolvimento Web! Estou a procura de uma vaga de emprego para desenvolvedor Junior, se precisar de algo, me envie uma mensagem no twitter!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/joao.jpeg",
        name: "João Gualberto Boissa Netto",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador",
        university: "Tuiuti",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Audrei.jpeg",
        name: "Audrey Cristhiny",
        category: "design",
        curso: "Designer",
        title: "Designer do mês",
        university: "Tuiuti",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bagi.jpeg",
        name: "Gabi Bagi Rocca Lobo da Costa",
        category: "design",
        curso: "Designer",
        title: "Designer",
        university: "Tuiuti",
        stars: "★☆☆☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/cabeludo.jpeg",
        name: "João Cabeludo Gabriel",
        category: "marketing",
        curso: "Marketing",
        title: "Marketero do mês",
        university: "Tuiuti",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/luiz.jpeg",
        name: "Luiz Henrique Pago",
        category: "marketing",
        curso: "Marketing",
        title: "Marketero",
        university: "Tuiuti",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
]

const userName = new URLSearchParams(window.location.search).get('user');

let result = monthSellers.filter(x => x.name === userName)[0];


setElementTxtContent("name", userName);
setElementTxtContent("title", result.title);
setElementTxtContent("university", result.university);
setElementTxtContent("curso", result.curso);
setElementTxtContent("memberSince", `Membro Desde ${result.memberSince}`);
setElementTxtContent("bio", result.aboutMe);
setElementTxtContent("sellAllTime", `${result.sellAllTime} Trabalhos Concluidos`);
setElementTxtContent("sellThisMonth", `${result.sellsThisMonth} Trabalhos Realizados esse mês`);
setElementTxtContent("stars", `Média de nota <br>${result.stars}`);


document.getElementById("profilePicture").src = result.imgUrl;




function setElementTxtContent(name, content) {
    document.getElementById(name).innerHTML = content;
}
