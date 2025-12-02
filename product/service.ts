import { productRepository } from "./repository";

export const productService = {
  async getAll() {
    return productRepository.getAll()
  },

  async getById(id: number) {
    return productRepository.getById(id)
  }
}