/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about/aboutPage.js"
/*!********************************!*\
  !*** ./src/about/aboutPage.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n\n\nfunction aboutPage() {\n    const aboutDiv = document.createElement(\"div\");\n    aboutDiv.classList.add(\"about\");\n\n    aboutDiv.textContent = \"About page!\";\n\n    return aboutDiv;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about/aboutPage.js?\n}");

/***/ },

/***/ "./src/home/homePage.js"
/*!******************************!*\
  !*** ./src/home/homePage.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n\n\nfunction homePage() {\n    const homeDiv = document.createElement(\"div\");\n    homeDiv.classList.add(\"home\");\n\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Waffles Diner\";\n    homeDiv.appendChild(header);\n\n    const hours = document.createElement(\"div\");\n    hours.classList.add(\"info\", \"hours\");\n    hours.textContent = \"Open 24 hours a day\";\n    homeDiv.appendChild(hours);\n\n    const image = document.createElement(\"img\");\n    image.src = \"https://placehold.co/1000x400\";\n    image.alt = \"Food image\";\n    image.classList.add(\"mainImg\");\n    homeDiv.appendChild(image);\n\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"info\");\n    const addy = document.createElement(\"p\");\n    addy.textContent = \"Located at 123 Elm Street, Downtown\";\n    const numby = document.createElement(\"p\");\n    numby.textContent = \"(123) 456 - 7890\";\n    contact.appendChild(addy);\n    contact.appendChild(numby);\n    homeDiv.appendChild(contact);\n\n    return homeDiv;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home/homePage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homePage.js */ \"./src/home/homePage.js\");\n/* harmony import */ var _menu_menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menuPage.js */ \"./src/menu/menuPage.js\");\n/* harmony import */ var _about_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/aboutPage.js */ \"./src/about/aboutPage.js\");\n\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\nconst controls = document.querySelector(\"nav\");\nconst buttons = document.querySelectorAll(\".btn\");\n\nlet page = (0,_home_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\ncontent.appendChild(page);\n\ncontrols.addEventListener(\"click\", (e) => {\n    clearContent();\n    setActive(e);\n\n    switch (e.target.id) {\n        case \"home\":\n            page = (0,_home_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            break;\n        case \"menu\":\n            page = (0,_menu_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            break;\n        case \"about\":\n            page = (0,_about_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            break;\n        default:\n            break;\n    }\n\n    setActive(e);\n    content.appendChild(page);\n});\n\nfunction clearContent() {\n    while (content.lastElementChild) {\n        content.removeChild(content.lastElementChild);\n    }\n}\n\nfunction setActive(e) {\n    for (let i = 0; i < buttons.length; i++) {\n        if (buttons[i].id === e.target.id) {\n            buttons[i].classList.add(\"active\");\n        } else {\n            buttons[i].classList.remove(\"active\");\n        }\n    }\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu/menuPage.js"
/*!******************************!*\
  !*** ./src/menu/menuPage.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n\n\nclass FoodItem {\n    id = crypto.randomUUID();\n\n    constructor(itemImg, itemName, itemDescription, itemPrice) {\n        this.itemImg = itemImg;\n        this.itemName = itemName;\n        this.itemDescription = itemDescription;\n        this.itemPrice = itemPrice;\n    }\n}\n\nfunction menuPage() {\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.classList.add(\"menu\");\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Currently Available Items\";\n    menuDiv.appendChild(h2);\n\n    const items = [\n        new FoodItem(\n            \"https://placehold.co/700x200\",\n            \"Item 1\",\n            \"Description 1\",\n            \"Price 1\",\n        ),\n        new FoodItem(\n            \"https://placehold.co/700x200\",\n            \"Item 2\",\n            \"Description 2\",\n            \"Price 2\",\n        ),\n        new FoodItem(\n            \"https://placehold.co/700x200\",\n            \"Item 3\",\n            \"Description 3\",\n            \"Price 3\",\n        ),\n    ];\n\n    const gridContainer = document.createElement(\"div\");\n    gridContainer.classList.add(\"grid-container\");\n\n    items.forEach((item) => {\n        const itemContainer = document.createElement(\"div\");\n        itemContainer.classList.add(\"item\");\n\n        const itemImg = document.createElement(\"img\");\n        itemImg.src = item.itemImg;\n        itemImg.alt = \"Food Item Image\";\n\n        const itemName = document.createElement(\"p\");\n        itemName.textContent = item.itemName;\n\n        const itemDescription = document.createElement(\"p\");\n        itemDescription.textContent = item.itemDescription;\n\n        const itemPrice = document.createElement(\"p\");\n        itemPrice.textContent = `${item.itemPrice}`;\n\n        itemContainer.appendChild(itemImg);\n        itemContainer.appendChild(itemName);\n        itemContainer.appendChild(itemDescription);\n        itemContainer.appendChild(itemPrice);\n\n        gridContainer.appendChild(itemContainer);\n    });\n    menuDiv.appendChild(gridContainer);\n\n    return menuDiv;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menuPage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;