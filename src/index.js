import "./styles.css";

import homePage from "./home/homePage.js";
import menuPage from "./menu/menuPage.js";
import aboutPage from "./about/aboutPage.js";

const content = document.querySelector("#content");
const controls = document.querySelector("nav");
const buttons = document.querySelectorAll(".btn");

let page = homePage();

content.appendChild(page);

controls.addEventListener("click", (e) => {
    clearContent();
    setActive(e);

    switch (e.target.id) {
        case "home":
            page = homePage();
            break;
        case "menu":
            page = menuPage();
            break;
        case "about":
            page = aboutPage();
            break;
        default:
            break;
    }

    setActive(e);
    content.appendChild(page);
});

function clearContent() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}

function setActive(e) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === e.target.id) {
            buttons[i].classList.add("active");
        } else {
            buttons[i].classList.remove("active");
        }
    }
}
