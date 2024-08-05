import productData from "../services/products"

const ProductController = {
    fetchAllProducts: async (setProducts) => {
        try {
            const products = await productData.getAllProducts();
            setProducts(products);
        } catch (error) {
           throw Error("Empty Data !")
        }
    },
    fetchUserEmail: async (setProducts) => {
        try {
            const products = await productData.getUserEmail();
            setProducts(products);
        } catch (error) {
           throw Error("Empty Data !")
        }
    },
};

export default ProductController;
