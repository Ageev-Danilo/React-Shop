import { client } from "../client/client";
import { ProductRepositoryContract } from "./product.types";


export const productRepository: ProductRepositoryContract = {
    async getAll() {
        return client.product.findMany();
    },

    async getById(id: number) {
        return client.product.findUnique({
            where: { id }
        });
    },

    async getSuggestions(popular, isNew, limit, offset) {
        return client.product.findMany({
            take: limit,
            skip: offset,
            where: {
                ...(popular ? { popular: true } : {}),
                ...(isNew ? { isNew: true } : {})
            }
        });
    },

    async getSame(id: number) {
        return client.product.findMany({
            where: {
                NOT: { id }
            },
            take: 4
        });
    },

    async getSamePrice(id: number) {
        const product = await client.product.findUnique({
            where: { id }
        });

        if (!product?.price) return [];

        return client.product.findMany({
            where: {
                NOT: { id },
                price: { gt: product.price }
            },
            take: 4
        });
    }
};