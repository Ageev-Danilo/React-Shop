import { orderService } from './order.service';
import { orderControllerContract } from './order.types';


export const orderController: orderControllerContract = {
    async addProductToOrder(req, res) {
        try {
            const data = await orderService.addProductToOrder(req.params.id, req.body);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    async getProductsInOrder(req, res) {
        try {
            const data = await orderService.getProductsInOrder(req.params.id);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    async createOrder(req, res) {
        try {
            const data = await orderService.createOrder(req.params.id, req.body);
            res.status(201).json(data);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    async getOrderById(req, res) {
        try {
            const data = await orderService.getOrderById(req.params.id);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
};