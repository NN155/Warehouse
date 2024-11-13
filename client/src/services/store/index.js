import axios from 'axios';

class StoreService {
    constructor() {
        this.apiUrl = process.env.REACT_APP_API_URL + "/store"; 
    }

    getAllStores = async () => {
        try {
            const response = await axios.get(`${this.apiUrl}/get`);
            return response.data; 
        } catch (error) {
            console.error("Error fetching stores:", error);
            throw error; 
        }
    };
}

export default new StoreService();
