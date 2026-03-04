import { orderRepository } from './order.repository';
import { orderServiceContract } from './order.types';

export const orderService: orderServiceContract = {
    async addProductToOrder(orderId, productData) {
        return orderRepository.addProductToOrder(orderId, productData);
    },

    async getProductsInOrder(orderId) {
        return orderRepository.getProductsInOrder(orderId);
    },

    async createOrder(userId, orderData) {
        return orderRepository.createOrder(userId, orderData);
    },

    async getOrderById(orderId) {
        return orderRepository.getOrderById(orderId);
    }
};