const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

/* const randomData1 = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then(res => res.json())
        .then(data => {
            if (data[0].image_url) {
                getRandomBeer(data)
            }
            else randomData1()
        })
}

const getRandomBeer = (data) =>  {
    $(".card__title").innerText = data[0].name
    $("#img").src = data[0].image_url
    $(".card__description").innerText = data[0].description
}

$("button").addEventListener("click", () => randomData1()) */

let savedData

const randomData2 = () => {
    fetch("https://api.punkapi.com/v2/beers/")
        .then(res => res.json())
        .then(data => {
            generateCards(data)
            savedData = data
        })
}

const generateCards = (beers) => {
    $(".cards-container").innerHTML = ""
    for (const { name, image_url, description, abv } of beers) {
        $(".cards-container").innerHTML += `
        <div id="card" class="card">
            <h2 class="card__title">${name}</h2>
            <img
              id="img"
              src=${image_url}
              alt="beer"
              height="180"
            />
            <p class="card__abv">
                abv: ${abv}
            </p>
            <p class="card__description">
                ${description}
            </p>
          </div> `
    }
}
randomData2()

const filterByAbv = (range) => {
    const abvFiltered = savedData.filter(({ abv }) => {
        if (range === "low") return abv >= 0 && abv <= 5
        else if (range === "md") return abv >= 5.1 && abv <= 7.5
        else if (range === "hg") return abv >= 7.1 && abv <= 50
        else if (range === "all") return abv
    })
    return abvFiltered
}

for (const btn of $$("button")) {
    btn.addEventListener("click", (e) => generateCards(filterByAbv(e.target.name)))
}