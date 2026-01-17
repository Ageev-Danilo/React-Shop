import { Request, Response } from "express";
import { productService } from "./product.service";
import { ProductControllerContract } from "./product.types";

export const productController: ProductControllerContract = {
  async getAll(req, res) {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
          return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const product = await productService.getById(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json(product);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async getSuggestions(req, res) {
    try {
      const isPopular = req.query.popularProducts === 'true';
      const isNew = req.query.newProducts === 'true';
      
      const limit = req.query.limitPerPage ? Number(req.query.limitPerPage) : 10;
      const offset = req.query.offsetPage ? Number(req.query.offsetPage) : 0;

      if (isPopular && isNew) {
        return res.status(400).json({ 
            message: "Parameters 'new' and 'popular' cannot be used together." 
        });
      }

      const products = await productService.getSuggestions(isPopular, isNew, limit, offset);
      res.json(products);
      
    } catch (error) {
      console.error("Error in getSuggestions:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};