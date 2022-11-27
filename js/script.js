const productContainer = document.querySelector('.card-wrapper');

const getAllProducts = async () => {
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


getAllProducts();

function User(name, email, password, phone) {

    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;

}


function State() {

    this.user = new User();

    this.btnRegistry = null;

    this.inputName = null;
    this.inputEmail = null;
    this.inputPassword = null;
    this.inputPhone = null;

}


const state = new State();

function init() {

    state.inputName = document.forms.newRegistry.name;
    state.inputEmail = document.forms.newRegistry.email;
    state.inputPassword = document.forms.newRegistry.password;
    state.inputPhone = document.forms.newRegistry.phone;

    state.btnRegistry = document.forms.newRegistry.btnRegistry;

    state.inputName.addEventListener('keyup', handleInputNameKeyup);
    state.inputEmail.addEventListener('keyup', handleInputEmailKeyup);
    state.inputPassword.addEventListener('keyup', handleInputPasswordKeyup);
    state.inputPhone.addEventListener('keyup', handleInputPhoneKeyup);

    state.btnRegistry.addEventListener('click', handleBtnRegistryClick);

}

function handleInputNameKeyup(event) {
    state.user.name = event.target.value;
    console.log(state.user.name);
}

function handleInputEmailKeyup(event) {
    state.user.email = event.target.value;
    console.log(state.user.email);
}

function handleInputPasswordKeyup(event) {
    state.user.password = event.target.value;
    console.log(state.user.password);
}

function handleInputPhoneKeyup(event) {
    state.user.phone = event.target.value;
    console.log(state.user.phone);
}

function handleBtnRegistryClick(event) {

    event.preventDefault();

    fetch(`http://localhost:8080/users/`, {
        method: "POST",
        body: JSON.stringify(state.user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));

    clearForm();

}

function clearForm() {
    state.inputName.value = "";
    state.inputEmail.value = "";
    state.inputPassword.value = "";
    state.inputPhone.value = "";

    state.user = new User();

    state.inputName.focus();

}


init();

