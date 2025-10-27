const games = [
  {
    name: "Cyberpunk 2077",
    year: 2020,
    genre: "Action RPG",
    platform: "PC, PS5, Xbox Series X",
    cover: "https://image.api.playstation.com/vulcan/ap/rnd/202010/1321/5RkT9VbLk1W7i3yVQ1m5q7Mo.png"
  },
  {
    name: "The Witcher 3: Wild Hunt",
    year: 2015,
    genre: "Action RPG",
    platform: "PC, PS4, Switch, Xbox",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
  },
  {
    name: "God of War: Ragnarök",
    year: 2022,
    genre: "Action / Adventure",
    platform: "PS4, PS5",
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8a/God_of_War_Ragnar%C3%B6k_cover.jpg"
  },
  {
    name: "Red Dead Redemption 2",
    year: 2018,
    genre: "Action / Adventure",
    platform: "PC, PS4, Xbox One",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
  }
];

const container = document.getElementById("game-container");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.cover}" alt="${game.name}" />
    <div class="game-info">
      <h2>${game.name}</h2>
      <p><strong>Çykýan ýyly:</strong> ${game.year}</p>
      <p><strong>Janr:</strong> ${game.genre}</p>
      <p><strong>Platforma:</strong> ${game.platform}</p>
    </div>
  `;
  container.appendChild(card);
});
