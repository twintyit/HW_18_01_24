class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async fetchById(endpoint, id) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}/${id}`);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error(`Error fetching product with id ${id}:`, error);
            throw error;
        }
    }
}

export default ApiClient;