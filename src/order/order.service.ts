import { get } from 'http';
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
        const orders = await this.getAllOrders();

        const userOrders = orders.filter(
            o =>
                o.userId == orderId
        );

        console.log(userOrders);
        return userOrders;
        //return orderRepository.getOrderById(orderId);
    },

    async getAllOrders() {
        return orderRepository.getAllOrders();
    }
};