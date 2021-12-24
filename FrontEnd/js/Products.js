class Products {
    constructor() {
        this.products = [];
    }
    async getProducts(url) {
        try {
            const data = await axios.get(url);
            this.products = data.data;
            return this.products;
        } catch (error) {
            console.log(error);
        }
    }
}

export default Products;