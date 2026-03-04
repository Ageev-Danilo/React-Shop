export interface OrderData {
    userId: number;
    [key: string]: any;
}

export interface ProductData {
    productId: number;
    quantity: number;
    [key: string]: any;
}

export interface Order {
    id: number;
    userId: number;
    [key: string]: any;
}

export interface orderServiceContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<any>;
    getProductsInOrder(orderId: number): Promise<any>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getOrderById(orderId: number): Promise<Order>;
}

export interface orderControllerContract {
    addProductToOrder(req: any, res: any): Promise<void>;
    getProductsInOrder(req: any, res: any): Promise<void>;
    createOrder(req: any, res: any): Promise<void>;
    getOrderById(req: any, res: any): Promise<void>;
}

export interface orderRepositoryContract {
    addProductToOrder(orderId: number, productData: ProductData): Promise<any>;
    getProductsInOrder(orderId: number): Promise<any>;
    createOrder(userId: number, orderData: OrderData): Promise<Order>;
    getOrderById(orderId: number): Promise<Order>;
}