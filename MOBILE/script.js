function topNavFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function carregarCard(name, pfp, role, info) {
  // Create card element
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = pfp;
  card.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerText = name;
  card.appendChild(h2);

  const span = document.createElement("span");
  span.innerText = role;
  card.appendChild(span);

  const p = document.createElement("p");
  p.innerText = info;
  card.appendChild(p);

  // Add card to container
  const container = document.getElementById("card-container");
  container.appendChild(card);
}