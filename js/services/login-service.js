import * as userService from './user-service.js'

export async function validateUser(userLogin) {

    const result = await userService.getAllUsers();

    var validate = false;

    for (var i = 0; i < result.length; i++) {
        if (userLogin.email === result[i].email && userLogin.password === result[i].password) {
            userLogin.id = result[i].id
            validate = true;
        }
    }
    return validate;
}

export function getErrors(user) {
    const errors = {};

    if (!user.email || user.email == "") {
        errors.email = "Campo requerido";
    }

    if (!user.password || user.password == "") {
        errors.password = "Campo requerido";
    }
    return errors;
}