import "./about-module.css";

export default function aboutPage() {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    const h2 = document.createElement("h2");
    h2.textContent = "About Us";
    aboutDiv.appendChild(h2);

    const p = document.createElement("p");
    p.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt debitis nostrum eum alias itaque voluptate voluptatem animi laborum modi necessitatibus, repudiandae hic maiores, qui, doloremque sint unde. Vitae, sapiente distinctio. Eligendi officia sint minima? Sunt illo dolorem ratione deleniti ullam eius officia perferendis natus doloribus consequuntur tempora unde qui rem, explicabo labore dolore exercitationem culpa nostrum quam! Laudantium, autem! Delectus. Mollitia magni rem, libero accusantium nobis saepe ipsa rerum dolore aut pariatur cupiditate quo porro voluptatum recusandae corporis distinctio eveniet reiciendis eius repellendus? Sed molestias dolorum animi modi fugit quia.";
    aboutDiv.appendChild(p);

    return aboutDiv;
}
