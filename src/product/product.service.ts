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
        const firstWord = product.name?.split(" ")[0].toLowerCase() ?? "";

        const sameProducts = allProducts.filter((p) => {
            if (!p || !p.name) return false;
        
            return (
                p.id !== product.id &&
                p.name.toLowerCase().includes(firstWord)
            );
        });


        return sameProducts;
    }
};