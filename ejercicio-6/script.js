const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $container = $("#container")
const $commentaries = $("#commentaries")

const BASE_URL = "https://my-json-server.typicode.com/matiasbenary/dbJsonDogs/dogs/"
const endpoint = "/comments"

const cleanContainer = (selector) => selector.innerHTML = ""

const getDogsInfo = () => {
    fetch(`${BASE_URL}`)
        .then(res => res.json())
        .then(data => generateCards(data))
}

const getDogComments = (id) => {
    fetch(`${BASE_URL}${id}${endpoint}`)
        .then(res => res.json())
        .then(data => commentsModal(data))
}

const generateCards = (dogs) => {
    cleanContainer($container)
    for (const { id, img, like, name } of dogs) {
        $container.innerHTML += `
            <div class="card" id="${id}">
                <img src="${img}" alt="${name}">
                <h2>${name}</h2>
                <div class="card__footer"><i class="fas fa-paw"></i> ${like}</div>
            </div>
        `
    }
    setEvent()
}

const commentsModal = (comments) => {
    cleanContainer($commentaries)
    for (const { avatar, commentary, user } of comments) {
        $commentaries.innerHTML += `
        <div class="commentary">
        <img class="commentary__img" src="${avatar}" alt="">
        <div>
        <h4>${user}</h4>
        <p>${commentary}</p>
        </div>
        </div>
        `
    }
}

const setEvent = () => {
    for (const card of $$(".card")) {
        card.addEventListener("click", () => {
            getDogComments(card.id)
            $("#myModal").classList.add("is-visible")
        })
    }
}

$("#close").addEventListener("click", () => $("#myModal").classList.remove("is-visible"))

window.addEventListener("load", () => getDogsInfo())