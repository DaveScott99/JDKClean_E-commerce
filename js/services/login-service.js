
async function getAllUsers() {

    const APIResponse = await fetch(`http://localhost:8080/users/`)
    const data = await APIResponse.json();

    const result = data.map((obj) => {
        return {
            email: obj.email,
            password: obj.password
        }
    })

    return result;
}

export async function validateUser(userLogin) {

    const result = await getAllUsers();

    var validate = false;

    for (var i = 0; i < result.length; i++) {
        if (userLogin.email === result[i].email && userLogin.password === result[i].password) {
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