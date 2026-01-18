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
  }, 
  async getSuggestions(popular: boolean, isNew: boolean, limit: number, offset: number) {
      return client.product.findMany({
          take: limit,
          skip: offset,
          where: {
              ...(popular ? { popular: true } : {}),
              ...(isNew ? { isNew: true } : {})
          },
          orderBy: { id: "asc" }
      });
  }
}