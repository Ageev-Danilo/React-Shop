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
    let orderBy: any = { id: 'asc' };
    let whereClause: any = {};

    if (newProducts) {
      whereClause = { new: true };
      orderBy = { id: 'desc' }; 
    } else if (popularProducts) {
      whereClause = { popular: true };
      orderBy = { 
        orders: { 
          _count: 'desc' 
        } 
      };
    }

    return client.product.findMany({
      take: limit,   
      skip: offset,  
      where: whereClause,
      orderBy: orderBy,  
    });
  }
};