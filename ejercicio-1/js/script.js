const $ = (selector) => document.querySelector(selector)

const getImgURL = () => {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => randomFox(data))
}

const randomFox = (data) => {
    $("#img").src = data.image
    $("#img").classList.remove("hidden")
}

$("#btn").addEventListener("click", () => {
    getImgURL()
})

getImgURL()