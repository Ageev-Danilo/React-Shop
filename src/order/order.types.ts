import { Request, Response } from 'express';

export interface OrderData {
    userId: number;
    payment?: string;
    comment?: string;
    totalPrice?: number;
    deliveryStatus: string;
}

export interface ProductData {
    id: number;
    count: number;
}

export interface Order {
    id: number;
    userId: number;
    deliveryStatus: string;
    products?: ProductOnOrder[];
}

export interface ProductOnOrder {
    id: number;
    count: number;
}

export interface Resp {
    message: string;
}

export interface ErrorResponce {
    message?: string;
}

export interface orderServiceContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<ProductOnOrder>;
    getProductsInOrder(orderId: number): Promise<ProductOnOrder[]>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getOrderById(orderId: number): Promise<Order[] | []>;
    getAllOrders(): Promise<Order[]>;
}

export interface orderControllerContract {
    addProductToOrder(req: Request<{id: string}, Resp | ErrorResponce, ProductOnOrder, void>, res: Response<Resp | ErrorResponce>): Promise<void>;
    getProductsInOrder(req: Request<{id: string}, ProductOnOrder[] | ErrorResponce, void, void>, res: Response<ProductOnOrder[] | ErrorResponce>): Promise<void>;
    createOrder(req: Request<{id: string}, Resp | ErrorResponce, Order, void>, res: Response<Resp | ErrorResponce>): Promise<void>;
    getOrderById(req: Request<{id: string}, Order[] | [] | ErrorResponce, void, void>, res: Response<Order[] | [] | ErrorResponce>): Promise<void>;
    getAllOrders(req: Request<void, Order[] | ErrorResponce, void, void>, res: Response<Order[] | ErrorResponce>): Promise<void>;
}

export interface orderRepositoryContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<ProductOnOrder>;
    getProductsInOrder(orderId: number): Promise<ProductOnOrder[]>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}