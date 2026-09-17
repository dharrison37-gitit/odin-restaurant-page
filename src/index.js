import "./styles.css";

import homePage from "./home/homePage.js";
import menuPage from "./menu/menuPage.js";
import aboutPage from "./about/aboutPage.js";

const content = document.querySelector("#content");
const controls = document.querySelector("nav");

content.appendChild(homePage());

controls.addEventListener("click", (e) => {
    clearContent();
    let page = null;

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

    content.appendChild(page);
});

function clearContent() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}
