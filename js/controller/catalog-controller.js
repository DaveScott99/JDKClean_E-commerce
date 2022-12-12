const productContainer = document.querySelector('.card-wrapper');

function State() {

    this.btnPurchase = null;

    this.order = null;

    this.cart = [];

}

const state = new State();

export function init() {

    getAllProducts();

    state.order = document.querySelector('.order');

}

function handleBtnPurchaseClick() {
    console.log("CLICOU");
    state.order.innerHTML = 1;
}

function addCart(product) {
    state.cart.push(product);
    console.log(state.cart);
    state.order.innerHTML = state.cart.length;
}

export const getAllProducts = async () => {
    const APIResponse = await fetch(`http://localhost:8080/products?page=0&linesPerPage=12&direction=ASC&orderBy=id`);
    const data = await APIResponse.json();

    data.content.map((product) => {

        const cardItem = document.createElement('article');
        cardItem.classList.add('card-item');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');

        const imgUrl = document.createElement('img');
        imgUrl.classList.add('img-thumbnail');
        imgUrl.src = product.imgUrl;

        cardImage.appendChild(imgUrl)

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const name = document.createElement('p')
        name.classList.add('fs-6');
        name.classList.add('fw-light');

        const price = document.createElement('p')
        price.classList.add('fs-5')
        price.classList.add('fw-bold')

        name.innerText = product.name;

        price.innerHTML = "R$ " + product.price.toFixed(2);

        cardItem.appendChild(cardImage);
        cardContent.appendChild(name);
        cardContent.appendChild(price);
        cardItem.appendChild(cardContent);

        productContainer.appendChild(cardItem);

    })
}