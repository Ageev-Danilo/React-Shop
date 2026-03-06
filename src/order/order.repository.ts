import { client } from '../client/client';
import { orderRepositoryContract } from './order.types';

export const orderRepository: orderRepositoryContract = {
    async addProductToOrder(orderId, productData) {
        return client.productOnOrder.create({
            data: {
                orderId: +orderId,
                productId: productData.id,
                count: productData.count,
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
                payment: orderData.payment ?? null,
                comment: orderData.comment ?? null,
                totalPrice: orderData.totalPrice ?? null,
                deliveryStatus: orderData.deliveryStatus,
            },
        });
    },

    /*async getOrderById(orderId) {
        const order = await client.order.findMany({
            where: { userId: +orderId ===   },
            include: {
                products: {
                    include: { product: true }
                }
            }
        });

        if (!order) throw new Error('Order not found');

        return order;
    }*/

    async getAllOrders() {
        return client.order.findMany();
    }
};