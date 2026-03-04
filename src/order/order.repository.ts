import { client } from '../client/client';
import { orderRepositoryContract } from './order.types';

export const orderRepository: orderRepositoryContract = {
    async addProductToOrder(orderId, productData) {
        return client.productOnOrder.create({
            data: {
                orderId: +orderId,
                productId: productData.productId,
                count: productData.quantity,
            },
        });
    },

    async getProductsInOrder(orderId) {
        return client.productOnOrder.findMany({
            where: { orderId: +orderId },
            include: { product: true },
        });
    },

    async createOrder(userId, orderData) {
        return client.order.create({
            data: {
                userId: +userId,
                deliveryStatus: orderData.status,
            },
        });
    },

    async getOrderById(orderId) {
        const order = await client.order.findUnique({
            where: { id: +orderId },
            include: {
                products: {
                    include: { product: true }
                }
            }
        });

        if (!order) throw new Error('Order not found');

        return order;
    }
};