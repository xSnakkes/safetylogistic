let buttons = document.querySelectorAll(".button__attendance")
let tab = document.querySelectorAll(".tab")
let tabClass = ''

buttons.forEach((item, id) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")
        tabClass = '._tab' + (id + 1)
        document.querySelector("._active").classList.remove("_active")
        let tabContent = document.querySelector(tabClass)
        tabContent.classList.add("_active")
    });
});