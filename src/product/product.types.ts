import { Response, Request } from 'express';
import { Prisma } from '../generated/prisma/client';



export type Product = Prisma.ProductGetPayload<{}>

/*export interface Product {
    id: number
    name: string
    price: number
    discount: number | null
    media: string | null
    description: string | null
    count: number
}*/
// Request < rootParamets, responseBody, requestBody, query >
// Response < responseBody >

export interface ProductControllerContract {
    getAll: (req: Request<void, Product[] | ErrorResponse, void, void>, res: Response<Product[] | ErrorResponse>) => void
    getById: (req: Request<{id: number}, Product | Error, void>, res: Response<Product | ErrorResponse>) => void
    getSuggestions: (req: Request<void, Product[] | ErrorResponse, void, {popularProducts: boolean, newProducts: boolean, limitPerPage: number, offsetPage: number}>, res: Response<Product[] | ErrorResponse>) => void
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popularProducts: boolean, newProducts:boolean, limitPerPage: number, offsetPage: number ) => Promise<Product[]>
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
    getSuggestions: (popularProducts: boolean, newProducts:boolean, limitPerPage: number, offsetPage: number ) => Promise<Product[]>
}

export interface ErrorResponse {
    message?: string 
}