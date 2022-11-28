const productContainer = document.querySelector('.card-wrapper');

export const getAllProducts = async () => {
    const APIResponse = await fetch(`http://localhost:8080/products/`);
    const data = await APIResponse.json();

    data.map((product) => {

        const cardItem = document.createElement('div');
        cardItem.classList.add('card-item');

        const imgUrl = document.createElement('img');
        imgUrl.src = product.imgUrl;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const name = document.createElement('h4')

        const price = document.createElement('p')

        const buttonPurchase = document.createElement('button');

        name.innerText = product.name;

        price.innerHTML = "R$ " + product.price.toFixed(2);
        buttonPurchase.innerText = "Comprar";

        cardItem.appendChild(imgUrl);
        cardContent.appendChild(name);
        cardContent.appendChild( price);
        cardContent.appendChild(buttonPurchase);
        cardItem.appendChild(cardContent);

        productContainer.appendChild(cardItem);

    })
}