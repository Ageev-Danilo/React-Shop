import { PrismaClient } from "../../prisma/client";

const prisma = new PrismaClient()

export const productRepository = {
  async getAll() {
    return prisma.product.findMany()
  },

  async getById(id: number) {
    return prisma.product.findUnique({
      where: { id }
    })
  }
}