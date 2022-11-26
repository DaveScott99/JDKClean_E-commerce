function User(name, email, phone, password) {

    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    
}

const productContainer = document.querySelector('.product-container');

const getAllProducts = async () => {
    const APIResponse = await fetch(`http://localhost:8080/products/`);
    const data = await APIResponse.json();

    data.map((product) => {

        const div = document.createElement('div')
        const name = document.createElement('h2')
        const price = document.createElement('p')
        const imgUrl = document.createElement('img')

        name.innerText = product.name;
        price.innerText = product.price;
        imgUrl.innerText = product.imgUrl;

        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(imgUrl);

        productContainer.appendChild(div);

    })
}

const userFindById = async (id) => {
    const data = await fetch(`http://localhost:8080/products/${id}`);
    const user = new User(data.name, data.email, data.phone, data.password);
    return user;
}

getAllProducts();