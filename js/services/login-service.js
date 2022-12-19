import * as userService from './user-service.js'

export async function validateUser(userLogin) {

    const login = await userService.login(userLogin);

    console.log(login);

    if (login == null) {
        return false;
    }

    return true;
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