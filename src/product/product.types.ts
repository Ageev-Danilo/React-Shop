import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

export type ProductCreateInput = Prisma.ProductUncheckedCreateInput;



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
    getSame: (req: Request<{id: string}, Product[] | [] | ErrorResponse, void, void>, res: Response<Product[] | [] | ErrorResponse>) => void;
    getSamePrice: (req: Request<{id: string}, Product[] | [] | ErrorResponse, void, void>, res: Response<Product[] | [] | ErrorResponse>) => void;
    getSameCategory: (req: Request<{id: string}, Product[] | [] | ErrorResponse, void, void>, res: Response<Product[] | [] | ErrorResponse>) => void;
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popular: boolean, isNew: boolean, limit: number, offset: number) => Promise<Product[]>
    getSame: (id: number) => Promise<Product[]| []>
    getSamePrice: (id: number) => Promise<Product[]| []>
    getSameCategory: (id: number) => Promise<Product[]| []>
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popular: boolean, isNew: boolean, limit: number, offset: number) => Promise<Product[]>
    getSame: (id: number) => Promise<Product[] | []>
    getSamePrice: (id: number) => Promise<Product[] | []>
    getSameCategory: (id: number) => Promise<Product[] | []>
}

export interface ErrorResponse {
    message?: string 
}