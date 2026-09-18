import "./menu-module.css";

class FoodItem {
    id = crypto.randomUUID();

    constructor(itemImg, itemName, itemDescription, itemPrice) {
        this.itemImg = itemImg;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
    }
}

export default function menuPage() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.textContent = "Currently Available Items";
    menuDiv.appendChild(h2);

    const items = [
        new FoodItem(
            "https://placehold.co/700x200",
            "Creme filled Waffles",
            "Vanilla creme filled buttermilk waffles, layered with whipped creme and your choice of drizzle.",
            "3.99",
        ),
        new FoodItem(
            "https://placehold.co/700x200",
            "Double Stack Waffles",
            "Like the original, but doubled up on everything including your choice of topping.",
            "7.50",
        ),
        new FoodItem(
            "https://placehold.co/700x200",
            "Waffles n Chicken",
            "For the protein seeking, this one leaves out the sweetness and adds the chicken.",
            "10.00",
        ),
    ];

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    items.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item");

        const itemImg = document.createElement("img");
        itemImg.src = item.itemImg;
        itemImg.alt = "Food Item Image";

        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.textContent = item.itemName;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = item.itemDescription;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = `$${item.itemPrice}`;

        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        gridContainer.appendChild(itemContainer);
    });

    menuDiv.appendChild(gridContainer);

    return menuDiv;
}
