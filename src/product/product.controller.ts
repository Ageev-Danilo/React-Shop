import { Request, Response } from "express";
import { productService } from "./product.service";
import { ProductControllerContract, ErrorResponse } from "./product.types";


export const productController: ProductControllerContract = {
  async getAll(req, res) {
    try {
      const products = await productService.getAll()
      res.json(products)
    } catch (err) {
      res.status(500).json({ message: "Server error" })
    }
  },

  async getById(req, res) {
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
  },
  async getSuggestions (req, res){
    try {
      const popularProducts  =req.query.popularProducts
      const newProducts  = req.query.newProducts
      const limit  =req.query.limitPerPage
      const offset  =req.query.offsetPage
    } catch (error) {
         console.log(error)
            res.status(500).json("Unhandled Error")
    }
  }
}