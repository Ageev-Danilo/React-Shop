import { Response, Request } from 'express';
import { Prisma } from '../generated/prisma/client';



export type Product = Prisma.ProductGetPayload<{}>


export interface ProductControllerContract {
    getAll: (req: Request<void, Product[] | ErrorResponse, void, void>, res: Response<Product[] | ErrorResponse>) => void;
    getById: (req: Request<{ id: number }, Product | ErrorResponse, void>, res: Response<Product | ErrorResponse>) => void;
    getSuggestions: (
        req: Request<void, Product[] | ErrorResponse, void, {
            popular?: string;
            isNew?: string;
            limit?: string;
            offset?: string;
        }>,
        res: Response<Product[] | ErrorResponse>
    ) => void;
    getSame: (req: Request<{id: number}, Product[] | ErrorResponse, void, void>, res: Response<Product[] | ErrorResponse>) => void;
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popular: boolean, isNew: boolean, limit: number, offset: number) => Promise<Product[]>
    getSame: (id: number) => Promise<Product[]>
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popular: boolean, isNew: boolean, limit: number, offset: number) => Promise<Product[]>
    getSame: (id: number) => Promise<Product[]>
}

export interface ErrorResponse {
    message?: string 
}