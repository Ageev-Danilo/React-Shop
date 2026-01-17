import { client } from "../client/client";
import { ProductRepositoryContract, Product } from "./product.types";

export const productRepository: ProductRepositoryContract = {
  async getAll() {
    return client.product.findMany();
  },

  async getById(id) {
    return client.product.findUnique({
      where: { id }
    });
  }, 

  async getSuggestions(popularProducts, newProducts, limit, offset) {
    let orderBy: any = {};

    if (newProducts) {
      orderBy = { id: 'desc' };
    } else if (popularProducts) {
      orderBy = { 
        orders: { 
          _count: 'desc' 
        } 
      };
    } else {
      orderBy = { id: 'asc' };
    }

    return client.product.findMany({
      take: limit,  
      skip: offset,  
      orderBy: orderBy,
    });
  }
};