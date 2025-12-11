import { productRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const productService: ProductServiceContract = {
  async getAll() {
    return productRepository.getAll()
  },

  async getById(id) {
    return productRepository.getById(id)
  }
}