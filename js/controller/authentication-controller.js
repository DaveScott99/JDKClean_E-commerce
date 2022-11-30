import * as userService from '../services/user-service.js'; 
import * as loginController from './login-controller.js';
import User from '../models/User.js';

function State() {

    this.userLogin = new User();

    this.btnLogin = null;

}

const state = new State();

export async function init() {

    
    replaceButton(localStorage.getItem('id'));


}

export async function replaceButton(id) {

    state.btnLogin = document.querySelector(".btn-login");

    const loginUser = await userService.getUserById(id);

    state.btnLogin.innerHTML = "Olá, " + loginUser.name;
}