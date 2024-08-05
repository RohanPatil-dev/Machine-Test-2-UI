import axios from 'axios';

const token = localStorage.getItem("uid")

const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/products',{
                headers : {
                  Authorization: `Bearer ${token}`
                }
            });
            return response.data.products;
        } catch (error) {
            throw new Error('Empty products');
        }
    },

    getUserEmail: async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/me',{
                headers : {
                  Authorization: `Bearer ${token}`
                }
            });
            return response.data.data;
        } catch (error) {
            throw new Error('Empty products');
        }
    },
};

export default ProductService;