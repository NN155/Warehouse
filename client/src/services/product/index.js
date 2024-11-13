import axios from 'axios';

class ProductService {
    constructor() {
        this.apiUrl = process.env.REACT_APP_API_URL + "/product"; 
    }

    getByStore = async (storeId) => {
        try {
            const response = await axios.get(`${this.apiUrl}/get?storeId=${storeId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    };
    update = async (data) => {
        try {
            const response = await axios.put(`${this.apiUrl}/update`, data);
            return response.data;
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    }
    create = async (data) => {
        try {
            const response = await axios.post(`${this.apiUrl}/create`, data);
            return response.data;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error;
        }
    }
    delete = async (id) => {
        try {
            const response = await axios.delete(`${this.apiUrl}/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    }
}

export default new ProductService();
