const productContainer = document.querySelector('.card-wrapper');
const modal = document.getElementById('modal-product');

const select = (element) => document.querySelector(element);



function State() {

    this.btnPurchase = null;

    this.order = null;

    this.cart = [];

}

const state = new State();

export function init() {

    getAllProducts();

    state.order = document.querySelector('.order');

    changeQuantity();

}

const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}

let quantityItens = 1;

const changeQuantity = () => {
    select('.product-info--qtmais').addEventListener('click', () => {
        quantityItens++;
        select('.product-info--qt').innerHTML = quantityItens;
    })

    select('.product-info--qtmenos').addEventListener('click', () => {
        if(quantityItens > 1) {
            quantityItens--;
            select('.product-info--qt').innerHTML = quantityItens;
        }
    })
}

select('.card-item').addEventListener('click', handleOpenModalClick);

function handleOpenModalClick() {
    modal.classList.add('hide');
    modal.addEventListener('click', (event) => {
        if (event.target.id == 'modal-product' || event.target.className == 'close-modal') {
            modal.classList.remove('hide');
        }
    })
}

export const getAllProducts = async () => {
    const APIResponse = await fetch(`http://localhost:8080/products?page=0&linesPerPage=12&direction=ASC&orderBy=id`);
    const data = await APIResponse.json();

    data.content.map((product) => {

        const cardItem = document.createElement('article');
        cardItem.classList.add('card-item');
        cardItem.addEventListener('click', () => {
            console.log(quantityItens)
            quantityItens = 1;
            handleOpenModalClick()
            select('.product-image img').src = product.imgUrl;
            select('.product-info h1').innerHTML = product.name;
            select('.product-info--actualPrice').innerHTML = formatCurrency(product.price);

        });

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