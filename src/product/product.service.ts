import { productRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";

export const productService: ProductServiceContract = {
    async getAll() {
        return productRepository.getAll();
    },

    async getById(id) {
        return productRepository.getById(id);
    },

    async getSuggestions(popular, isNew, limit, offset) {
        return productRepository.getSuggestions(popular, isNew, limit, offset);
    },

    async getSame(id) {
        const product = await productRepository.getById(id);

        if (!product) {
            return [];
        }

        const allProducts = await productRepository.getAll();

        const sameProducts = allProducts.filter((p) => {
            return (
                p.id !== product.id &&
                p.name.toLowerCase().startsWith(product.name.toLowerCase())
            );
        });

        return sameProducts;
    }
};