import * as pageController from './page-controller.js';
import * as loginSevice from '../services/login-service.js';

function UserLogin(email, password) {
    this.id = null;
    this.email = email;
    this.password = password;
}

export function State() {

    this.userLogin = new UserLogin();

    this.inputEmail = null;
    this.inputPassword = null;

    this.btnLogin = null;

    this.errorEmail = null;
    this.errorPassword = null;
}

const state = new State();

export function init(){

    state.inputEmail = document.forms.newLogin.email;
    state.inputPassword = document.forms.newLogin.password;

    state.btnLogin = document.forms.newLogin.btnLogin;

    state.errorLogin = document.querySelector('[data-error="login"]');

    state.errorEmail = document.querySelector('[data-error="email"]');
    state.errorPassword = document.querySelector('[data-error="password"]');

    state.inputEmail.addEventListener('change', handleInputEmailChange);
    state.inputPassword.addEventListener('change', handleInputPasswordChange);

    state.inputEmail.addEventListener('keyup', handleInputEmailKeyup);
    state.inputPassword.addEventListener('keyup', handleInputPasswordKeyup)

    state.btnLogin.addEventListener('click', handleBtnLoginClick)

    pageController.init();
}

function handleInputEmailKeyup(event) {
    state.userLogin.email = event.target.value;
}

function handleInputPasswordKeyup(event) {
    state.userLogin.password = event.target.value;
}

async function handleBtnLoginClick(event) {
    event.preventDefault();

    const errors = loginSevice.getErrors(state.userLogin);

    const keys = Object.keys(errors);

    if (keys.length > 0) {
        keys.forEach(key => {
            setFormError(key, errors[key]);
        })
    }
    else {
        const validateUser = await loginSevice.validateUser(state.userLogin);
        if (validateUser) {
            state.errorLogin.style.display = "none";
            const id = 'id'
            localStorage.setItem(id, JSON.stringify(state.userLogin.id));
            location.href = 'index.html'
        }
        else {
            state.errorLogin.style.display = "block";
        }
    }
}

function handleInputEmailChange(event) {

    if (event.target.value == "") {
        setFormError("email", "Campo requerido");
    }
    else {
        setFormError("email", "");
    }

}

function handleInputPasswordChange(event) {

    if (event.target.value == "") {
        setFormError("password", "Campo requerido");
    }
    else {
        setFormError("password", "");
    }

}

function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}
