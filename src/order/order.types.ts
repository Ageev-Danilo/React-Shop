import { Request, Response } from 'express';

export interface OrderData {
    userId: number;
    status?: string;
}

export interface ProductData {
    id: number;
    count: number;
}

export interface Order {
    id: number;
    userId: number;
    deliveryStatus?: string;
    products?: ProductOnOrder[];
}

export interface ProductOnOrder {
    id: number;
    count: number;
}

export interface orderServiceContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<void>;
    getProductsInOrder(orderId: number): Promise<ProductOnOrder[]>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getOrderById(orderId: number): Promise<Order>;
}

export interface orderControllerContract {
    addProductToOrder(req: Request, res: Response): Promise<void>;
    getProductsInOrder(req: Request, res: Response): Promise<void>;
    createOrder(req: Request, res: Response): Promise<void>;
    getOrderById(req: Request, res: Response): Promise<void>;
}

export interface orderRepositoryContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<void>;
    getProductsInOrder(orderId: number): Promise<ProductOnOrder[]>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getOrderById(orderId: number): Promise<Order>;
}