import User from '../models/User.js';

export function createUser(user) {
    fetch(`http://localhost:8080/users/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

export function getErrors(user) {
    const errors = {};

    if (!user.name || user.name == "") {
        errors.name = "Campo requerido";
    }

    if (!user.email || user.email == "") {
        errors.email = "Campo requerido";
    }

    if (!user.password || user.password == "") {
        errors.password = "Campo requerido";
    }

    if (!user.phone || user.phone == "") {
        errors.phone = "Campo requerido";
    }

    return errors;
}