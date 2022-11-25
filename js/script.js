function User(name, email, phone, password) {

    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    
}

const fetchUser = async (id) => {
    const APIResponse = await fetch(`http://localhost:8080/users/${id}`);
    const data = await APIResponse.json();
    return data;
}

const userFindById = async (id) => {

    const data = await fetchUser(id);

    const user = new User();

    user.name = data.name;
    user.email = data.email;
    user.phone = data.phone;
    user.password = data.password;

    console.log(user);
} 

userFindById(1);



