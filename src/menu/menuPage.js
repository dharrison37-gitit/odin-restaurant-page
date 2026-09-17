import "./menu-module.css";

export default function menuPage() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    menuDiv.textContent = "Menu page!";

    return menuDiv;
}
