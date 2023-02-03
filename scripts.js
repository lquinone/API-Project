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
let movies = {
    {
        title: "title1",
        description: "description1"
    }

    {
        title: "title1",
        description: "description1"
    }
    {
        title: "title1",
        description: "description1"
    }
    {
        title: "title1",
        description: "description1"
    }
}

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

