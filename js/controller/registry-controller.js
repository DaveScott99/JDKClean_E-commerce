import User from '../models/User.js';
import * as userService from '../services/user-service.js';
import * as pageController from './page-controller.js'

function State() {

    this.user = new User();

    this.btnRegistry = null;

    this.inputName = null;
    this.inputEmail = null;
    this.inputPassword = null;
    this.inputPhone = null;

    this.errorName = null;
    this.errorEmail = null;
    this.errorPassword = null;
    this.errorPhone = null;

}

const state = new State();

export function init() {

    state.inputName = document.forms.newRegistry.name;
    state.inputEmail = document.forms.newRegistry.email;
    state.inputPassword = document.forms.newRegistry.password;
    state.inputPhone = document.forms.newRegistry.phone;

    state.btnRegistry = document.forms.newRegistry.btnRegistry;

    state.errorName = document.querySelector('[data-error="name"]');
    state.errorEmail = document.querySelector('[data-error="email"]');
    state.errorPassword = document.querySelector('[data-error="password"]');
    state.errorPhone = document.querySelector('[data-error="phone"]');

    state.inputName.addEventListener('change', handleInputNameChange);
    state.inputEmail.addEventListener('change', handleInputEmailChange);
    state.inputPassword.addEventListener('change', handleInputPasswordChange);
    state.inputPhone.addEventListener('change', handleInputPhoneChange);

    state.inputName.addEventListener('keyup', handleInputNameKeyup);
    state.inputEmail.addEventListener('keyup', handleInputEmailKeyup);
    state.inputPassword.addEventListener('keyup', handleInputPasswordKeyup);
    state.inputPhone.addEventListener('keyup', handleInputPhoneKeyup);

    state.btnRegistry.addEventListener('click', handleBtnRegistryClick);

    pageController.init();

}

function handleInputNameKeyup(event) {
    state.user.name = event.target.value;
}

function handleInputEmailKeyup(event) {
    state.user.email = event.target.value;
}

function handleInputPasswordKeyup(event) {
    state.user.password = event.target.value;
}

function handleInputPhoneKeyup(event) {
    state.user.phone = event.target.value;
}

function handleBtnRegistryClick(event) {
    event.preventDefault();

    const errors = userService.getErrors(state.user);

    const keys = Object.keys(errors);

    if (keys.length > 0) {
        keys.forEach(key => {
            setFormError(key, errors[key]);
        })
    }
    else {
        userService.createUser(state.user);
        console.log(state.user);
        clearForm();
    }
}

function handleInputNameChange(event) {

    if (event.target.value == "") {
        setFormError("name", "Campo requerido");
    }
    else {
        setFormError("name", "");
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

function handleInputPhoneChange(event) {

    if (event.target.value == "") {
        setFormError("phone", "Campo requerido");
    }
    else {
        setFormError("phone", "");
    }

}

function clearForm() {
    state.inputName.value = "";
    state.inputEmail.value = "";
    state.inputPassword.value = "";
    state.inputPhone.value = "";

    state.user = new User();

    state.inputName.focus();

}

function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}