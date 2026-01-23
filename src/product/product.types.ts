import { Request, Response } from 'express';
import { Product } from '../generated/prisma'; 

export type { Product }; 

export interface ErrorResponse {
    message: string;
}

export interface GetSuggestionsQuery {
    popularProducts?: string;
    newProducts?: string;
    limitPerPage?: string;
    offsetPage?: string;
}

export interface ProductControllerContract {
    getAll: (req: Request, res: Response<Product[] | ErrorResponse>) => void;
    getById: (req: Request<{ id: string }>, res: Response<Product | ErrorResponse>) => void;
    getSuggestions: (
        req: Request<any, any, any, GetSuggestionsQuery>, 
        res: Response<Product[] | ErrorResponse>
    ) => void;
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>;
    getById: (id: number) => Promise<Product | null>;
    getSuggestions: (
        popularProducts: boolean, 
        newProducts: boolean, 
        limit: number, 
        offset: number
    ) => Promise<Product[]>;
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>;
    getById: (id: number) => Promise<Product | null>;
    getSuggestions: (
        popularProducts: boolean, 
        newProducts: boolean, 
        limit: number, 
        offset: number
    ) => Promise<Product[]>;
}