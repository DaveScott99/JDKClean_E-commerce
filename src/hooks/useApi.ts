import axios from "axios"

const API_URL = 'http://localhost:8080';

export const fetchProducts = () => {
    return axios(`${API_URL}/products?page=0&linesPerPage=12&direction=ASC&orderBy=id`)
}