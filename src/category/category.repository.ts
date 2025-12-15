import { client } from "../client/client";
import { CategoryRepositoryContract } from "./category.types";

export const categoryRepository: CategoryRepositoryContract = {
  async getAll() {
    return client.category.findMany()
  }
}