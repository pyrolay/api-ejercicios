const $ = (selector) => document.querySelector(selector)

const getRes = () => {
    fetch("https://yesno.wtf/api")
        .then(res => res.json())
        .then(data => {
            $("img").src = `${data.image}`
            $("h2").innerText = `${data.answer}`
            $("img").classList.remove("hidden")
        })
}

$("button").addEventListener("click", () => getRes())