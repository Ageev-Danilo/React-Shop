import { categoryRepository } from "./category.repository";
import { CategoryServiceContract } from "./category.types";

export const categoryService: CategoryServiceContract = {
  async getAll() {
    return categoryRepository.getAll();
  }
}