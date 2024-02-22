const PLAYERS = [
    "Spiderman", 
    "Captain America", 
    "Wonderwoman", 
    "Popcorn", 
    "Gemwoman", 
    "Bolt",
    "Antwoman", 
    "Mask", 
    "Tiger", 
    "Captain", 
    "Catwoman", 
    "Fish", 
    "Hulk", 
    "Ninja",
    "Black Cat", 
    "Volverine", 
    "Thor", 
    "Slayer", 
    "Vader", 
    "Slingo"
];

const initPlayers = (players) => {
    return players.map((name, index) => ({
        name,
        strength: getRandomStrength(),
        type: index % 2 === 0 ? "hero" : "villain",
        image: `images/super-${index + 1}.png`
    }));
}

const getRandomStrength = () => Math.ceil(Math.random() * 100);

const buildPlayers = (players, type) => {
    return players
        .filter(player => player.type === type)
        .map(player => `
            <div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>`
        )
        .join("");
}

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}