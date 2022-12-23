import axios from "axios"

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
   }

})