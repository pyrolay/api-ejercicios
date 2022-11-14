const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const getRandomFood = (category) => {
    fetch(`https://foodish-api.herokuapp.com/api/images/${category}`)
        .then(res => res.json())
        .then(data => {
            $("img").src = data.image
            $("img").classList.remove("hidden")
        })
}

const getRandomCategory = () => {
    fetch(`https://foodish-api.herokuapp.com/api/`)
        .then(res => res.json())
        .then(data => {
            $("img").src = data.image
            $("img").classList.remove("hidden")
        })
}

for (const btn of $$("button")) {
    btn.addEventListener("click", (e) => {
        if (e.target.name === "all") getRandomCategory()
        else getRandomFood(e.target.name)
    })
}