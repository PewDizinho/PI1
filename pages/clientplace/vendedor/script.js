const monthSellers = [
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Paulo.jpg",
        name: "Paulo Eduardo Konopka",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "150",
        sellAllTime: "150",
        aboutMe: "Hey, me chamo Paulo e tenho um conhecimento em desenvolvimento Web! Estou a procura de uma vaga de emprego para desenvolvedor Junior, se precisar de algo, me envie uma mensagem no twitter!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/josé.jpg",
        name: "José Augusto",
        category: "design",
        curso: "Designer",
        title: "Designer do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bryan.jpg",
        name: "Bryan Alexandre",
        category: "publicity",
        curso: "Publicidade",
        title: "Publicitário do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bruno.jpg",
        name: "Bruno Eufrasio",
        category: "Marketing",
        curso: "Marketing",
        title: "Marketing do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Trobojão.jpg",
        name: "João Scarante",
        category: "audiosvisuais",
        curso: "Auddios Visuais",
        title: "Audios Visuais do mês",
        university: "UniOpet",
        stars: "★★★☆☆☆",
        sellsThisMonth: "140",
        sellAllTime: "140",
        aboutMe: "Olá! Essa é uma bio muito bacana!",
        memberSince: "2023",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/JoãoTrizotte.jpg",
        name: "João Trizotte",
        category: "programmer",
        curso: "Análise e Desenvolvimento de Sistemas",
        title: "Programador do Mês",
        university: "UniOpet",
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
