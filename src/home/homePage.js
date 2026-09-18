import "./home-module.css";

export default function homePage() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");

    const header = document.createElement("h1");
    header.textContent = "Waffles Diner";
    homeDiv.appendChild(header);

    const hours = document.createElement("div");
    hours.classList.add("info", "hours");
    hours.textContent = "Open 24 hours a day";
    homeDiv.appendChild(hours);

    const image = document.createElement("img");
    image.src = "https://placehold.co/1000x400";
    image.alt = "Food image";
    image.classList.add("mainImg");
    homeDiv.appendChild(image);

    const contact = document.createElement("div");
    contact.classList.add("info");
    const addy = document.createElement("p");
    addy.textContent = "Located at 123 Elm Street, Downtown";
    const numby = document.createElement("p");
    numby.textContent = "(123) 456 - 7890";
    contact.appendChild(addy);
    contact.appendChild(numby);
    homeDiv.appendChild(contact);

    return homeDiv;
}
