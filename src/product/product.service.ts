import { productRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const productService: ProductServiceContract = {
  async getAll() {
    return productRepository.getAll()
  },

  async getById(id) {
    return productRepository.getById(id)
  },
  async getSuggestions(popularProducts, newProducts, limitPerPage, offsetPage) {
    return productRepository.getSuggestions(popularProducts, newProducts, limitPerPage, offsetPage)
}