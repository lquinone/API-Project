// Elements
let filmsContainer = document.getElementById('filmsContainer')

// API URL by films
//const baseURL= 'https://ghibliapi.herokuapp.com/films';

/*fetch(baseURL)
.then(res => res.json())
.then(json => getMovies(json))*/

// function test (data){
//     console.log(data[0].description)
//     let p = document.createElement('p')
//     p.innerText=data[0].description;
//     filmsContainer.appendChild(p)
// }

/*async function fetchFilms() {
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    displayFilmInfo(json)
}*/
let movies = [
    {
        title: "My Neighbor Totoro",
        description: "When Satsuki and her sister Mei move with their father to a new home in the countryside, they find country life is not as simple as it seems. They soon discover that the house and nearby woods are full of strange and delightful creatures."
    },

    {
        title: "Ponyo",
        description: "When Sosuke, a young boy who lives on a clifftop overlooking the sea, rescues a stranded goldfish named Ponyo he discovers more than he bargained for. Ponyo is a curious, energetic young creature who yearns to be human, but even as she causes chaos around the house, her father, a powerful sorcerer, schemes to return Ponyo to the sea."
    },
    {
        title: "Howl's Moving Castle",
        description: "Sophie, a quiet girl working in a hat shop, finds her life thrown into turmoil when she is literally swept off her feet by a handsome but mysterious wizard named Howl. The vain and vengeful Witch of the Waste, jealous of their friendship, puts a curse on Sophie and turns her into a 90-year-old woman. On a quest to break the spell, Sophie climbs aboard Howl's magnificent moving castle and into a new life of wonder and adventure. But as the true power of Howl's wizardry is revealed, Sophie finds herself fighting to protect them both from a dangerous war of sorcery that threatens their world."
    },
    {
        title: "Castle in the Sky",
        description: "This high-flying adventure begins when Pazu, an engineer's apprentice, spies a young girl, Sheeta, floating down from the sky, held aloft by a glowing pendant. Both Sheeta and Pazu are searching for the legendary floating castle, Laputa, and they vow to travel there together to unravel the mystery of the luminous crystal. But their quest won't be easy, as soon they are being pursued by greedy air pirates, the military, and secret government agents, who all seek the power Sheeta alone can control."
    },
    {
        title: "Kiki's Delivery Service",
        description: "It is a tradition for all young witches to leave their families on the night of a full moon and fly off into the wide world to learn their craft. When that night comes for Kiki, she embarks on her new journey with her sarcastic black cat, Jiji, landing the next morning in a seaside village, where her unique skills make her an instant sensation."
    },
]

getMovies(movies);

function getMovies(movies) {
    
    // if (films == undefined) {
    //     clear.innerHTML = "";
    // }

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    console.log(movies[i].description);
    var card = document.createElement("div");
    card.setAttribute("class", "cardBackground col-md-4 col-sm-12 p-3");

    var h1 = document.createElement("h1");
    h1.textContent = movies[i].title;

    var p = document.createElement("p");
    p.textContent = movies[i].description;

    var img = document.createElement("img");
    img.src = "./assets/displayCard.png";
    img.setAttribute("class","divbackground");

    var imgTwo = document.createElement("img");
    imgTwo.src = "./assets/displayCard2.png";
    imgTwo.setAttribute("class","divbackgroundClose")

    var innerCard = document.createElement("div");
    innerCard.setAttribute("class", "px-3 pt-5 pb-3");

    card.appendChild(innerCard);
    filmsContainer.appendChild(card);

    innerCard.appendChild(h1);
    innerCard.appendChild(p);
    innerCard.appendChild(img);
    innerCard.appendChild(imgTwo);
}
  console.log(movies);
}

// let newFilm = () => {

// fetch(baseURL)
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {

// })
// }

