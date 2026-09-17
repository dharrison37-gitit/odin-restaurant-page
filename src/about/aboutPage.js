import "./about-module.css";

export default function aboutPage() {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    aboutDiv.textContent = "About page!";

    return aboutDiv;
}
