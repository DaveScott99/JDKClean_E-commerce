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
    },

    signin: async (email: string, password: string) => {
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);
        params.append('grant_type', 'password')
        const response = await api.post('/oauth/token', params, {
            auth: {
                username: 'jdkclean',
                password: 'jdk123'
            }
        })
        return {
            user: { id: response.data.userId, firstName: response.data.userFirstName, lastName: response.data.userLastName, email: response.data.userEmail },
            token: response.data.access_token
        }
    },

    logout: async () => {
        return { status: true }
        const response = await api.post('/logout');
        return response.data;
    },

    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Davi', email: 'davi@gmail.com' }
        };

        const response = await api.post('/validate', { token });
        return response.data;
    }

})