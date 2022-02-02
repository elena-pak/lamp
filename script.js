document.addEventListener("DOMContentLoaded", main)

function main() {
    document.querySelector("button").addEventListener("click", toggle)
}

function toggle() {
    const btn = document.querySelector("button")
    const lamp = document.querySelector("div")
    if (lamp.style.backgroundColor === "yellow"){
        lamp.style.backgroundColor = "white"
        btn.innerHTML = "Turn On"
    } else{
        lamp.style.backgroundColor = "yellow"
        btn.innerHTML = "Turn On"
    }
}