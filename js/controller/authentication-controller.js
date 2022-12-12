import * as userService from '../services/user-service.js'; 
import * as loginController from './login-controller.js';
import User from '../models/User.js';

function State() {

    this.userLogin = new User();

    this.btnLogin = null;

    this.dropdownMenu = null;

    this.btnProfile = null;
    this.btnLogout = null;

}

const state = new State();

export async function init() {

    state.btnLogin = document.querySelector(".btn-login");

    state.dropdownMenu = document.querySelector(".dropdown-content");

    state.btnProfile = document.querySelector(".profile");
    state.btnLogout = document.querySelector(".logout");

    state.btnProfile.addEventListener('click', handleBtnProfileClick);
    state.btnLogout.addEventListener('click', handleBtnLogoutClick);

    btnLoginState();
    
}

function btnLoginState() {

    const storageLogin = localStorage.getItem('id');

    if (storageLogin != null) {
        replaceButton(localStorage.getItem('id'));
    }
    else {
        state.btnLogin.addEventListener('click', handleBtnLoginClick);

    }

}

function handleBtnLoginClick() {
    location.href = "login.html";
}

function handleBtnProfileClick() {
    location.href = "profile.html";
}

function handleBtnLogoutClick() {
    localStorage.removeItem('id');
    location.href = "index.html";
}

export async function replaceButton(id) {
    const loginUser = await userService.getUserById(id);

    state.btnLogin.innerHTML = "Olá, " + loginUser.name;
}