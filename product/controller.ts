import { Request, Response } from "express";
import { productService } from "./service";

export const productController = {
  async getAll(req: Request, res: Response) {
    try {
      const products = await productService.getAll()
      res.json(products)
    } catch (err) {
      res.status(500).json({ message: "Server error" })
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const product = await productService.getById(id)

      if (!product) {
        return res.status(404).json({ message: "Product not found" })
      }

      res.json(product)
    } catch (err) {
      res.status(500).json({ message: "Server error" })
    }
  }
}