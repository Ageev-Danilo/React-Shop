import { Request, Response } from 'express';
import { productService } from './product.service';
import { ProductControllerContract, ErrorResponse } from './product.types';

export const productController: ProductControllerContract = {
    async getAll(req, res) {
        try {
            const products = await productService.getAll();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    async getById(req, res) {
        try {
            const id = Number(req.params.id);
            const product = await productService.getById(id);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.json(product);
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    async getSuggestions(req, res) {
        try {
            const { isNew, popular, limit, offset } = req.query;

            if (
                isNew === undefined ||
                popular === undefined ||
                limit === undefined ||
                offset === undefined
            ) {
                return res.status(400).json({ message: 'Missing query parameters' });
            }

            const isNewBool = isNew === 'true';
            const popularBool = popular === 'true';
            const limitNum = Number(limit);
            const offsetNum = Number(offset);

            if (isNaN(limitNum) || isNaN(offsetNum)) {
                return res.status(400).json({ message: 'Invalid limit or offset' });
            }

            const suggestions = await productService.getSuggestions(
                popularBool,
                isNewBool,
                limitNum,
                offsetNum,
            );

            res.json(suggestions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Unhandled Error' });
        }
    },

    async getSame(req, res) {
        try {
            const id = Number(req.params.id);

            const product = await productService.getById(id);
            if (!product) {
                return res.status(404).json({ message: 'Not found' });
            }

            const sameProducts = await productService.getSame(product.id);
            res.json(sameProducts);
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    async getSamePrice(req, res) {
        try {
            const id = Number(req.params.id);

            if (!isNaN(id)) {
                const product = await productService.getById(id);

                if (!product) {
                    return res.status(404).json({ message: 'Not found' });
                }

                const samePriceProducts = await productService.getSamePrice(product.id);
                res.json(samePriceProducts);
            } else res.status(400).json({ message: 'Invalid id' });
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    async getSameCategory(req, res) {
        try {
            const id = Number(req.params.id);

            if (!isNaN(id)) {
                const product = await productService.getById(id);
                if (!product) {
                    return res.status(404).json({ message: 'Not found' });
                }
                const sameCategoryProducts = await productService.getSameCategory(product.id);
                res.json(sameCategoryProducts);
            } else res.status(400).json({ message: 'Invalid id' });
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    }
};
