import { prisma } from "../prisma/client";
import { ProductRepositoryContract } from "./product.types";


export const productRepository: ProductRepositoryContract = {
  async getAll() {
    return prisma.product.findMany()
  },

  async getById(id) {
    return prisma.product.findUnique({
      where: { id }
    })
  }
}