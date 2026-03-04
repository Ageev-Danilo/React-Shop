import { client } from '../client/client';
import { orderRepositoryContract } from './order.types';

export const orderRepository: orderRepositoryContract = {
    async addProductToOrder(orderId, productData) {
        return client.orderProduct.create({
            data: {
                orderId: parseInt(orderId),
                productId: productData.productId,
                quantity: productData.quantity,
            },
        });
    },

    async getProductsInOrder(orderId) {
        return client.orderProduct.findMany({
            where: { orderId: parseInt(orderId) },
            include: { product: true },
        });
    },

    async createOrder(userId, orderData) {
        return client.order.create({
            data: {
                userId: parseInt(userId),
                status: orderData.status,
            },
        });
    },

    async getOrderById(orderId) {
        return client.order.findUnique({
            where: { id: parseInt(orderId) },
            include: { orderProducts: { include: { product: true } } },
        });
    }
};