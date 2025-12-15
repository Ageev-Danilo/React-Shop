import { client } from "../client/client";
import { ProductRepositoryContract } from "./product.types";


export const productRepository: ProductRepositoryContract = {
  async getAll() {
    return client.product.findMany()
  },

  async getById(id) {
    return client.product.findUnique({
      where: { id }
    })
  }
}