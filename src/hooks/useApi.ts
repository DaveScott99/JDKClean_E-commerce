import axios from "axios"
import { UserRegistry } from "../types/User";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const useApi = () => ({

    products: async () => {
        const response = await api.get('/products?page=0&linesPerPage=12&direction=ASC&orderBy=id');
        return response.data;
    },

   productById: async (id: number | null) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
   },

   registry: async (userRegistry: UserRegistry) => {
        const { firstName, lastName, email, password } = userRegistry;
        await api.post(`/users`, { firstName, lastName, email, password })
                .then((response) => console.log(response))
                .catch((error) => console.log(error.response.data.errors))
   }

})