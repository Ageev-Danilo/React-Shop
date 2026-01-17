import { Response, Request } from 'express';
import { Prisma, Product } from '../generated/prisma'; 

export { Product }; 

export interface ErrorResponse {
    message?: string;
}

export interface ProductControllerContract {
    getAll: (req: Request<void, Product[] | ErrorResponse, void, void>, res: Response<Product[] | ErrorResponse>) => void;
    getById: (req: Request<{ id: number }, Product | ErrorResponse, void>, res: Response<Product | ErrorResponse>) => void;
    getSuggestions: (
        req: Request<void, Product[] | ErrorResponse, void, {
            popularProducts?: string, 
            newProducts?: string, 
            limitPerPage?: string, 
            offsetPage?: string
        }>, 
        res: Response<Product[] | ErrorResponse>
    ) => void;
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>;
    getById: (id: number) => Promise<Product | null>;
    getSuggestions: (popularProducts: boolean, newProducts: boolean, limit: number, offset: number) => Promise<Product[]>;
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>;
    getById: (id: number) => Promise<Product | null>;
    getSuggestions: (popularProducts: boolean, newProducts: boolean, limit: number, offset: number) => Promise<Product[]>;
}