import { Request, Response } from "express";
import { categoryService } from "./category.service";
import { CategoryControllerContract } from "./category.types";

export const categoryController: CategoryControllerContract = {
  async getAll(req, res) {
    try {
      const categories = await categoryService.getAll();
      res.json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
}