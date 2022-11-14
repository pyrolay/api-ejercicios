const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const randomGatite = (img) => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(res => res.json())
        .then(data => img.src = `${data[0].url}`)
}

$("#btn").addEventListener("click", () => {
    $("#img1").classList.remove("hidden")
    $("#img2").classList.remove("hidden")
    randomGatite($("#img1"))
    randomGatite($("#img2"))
})