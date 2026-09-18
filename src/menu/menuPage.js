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
            "Item 1",
            "Description 1",
            "Price 1",
        ),
        new FoodItem(
            "https://placehold.co/700x200",
            "Item 2",
            "Description 2",
            "Price 2",
        ),
        new FoodItem(
            "https://placehold.co/700x200",
            "Item 3",
            "Description 3",
            "Price 3",
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
        itemName.textContent = item.itemName;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.itemDescription;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `${item.itemPrice}`;

        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        gridContainer.appendChild(itemContainer);
    });
    menuDiv.appendChild(gridContainer);

    return menuDiv;
}
