import { Response, Request } from 'express';
import { Prisma } from '../src/generated/prisma/browser';


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

export interface ProductControllerContract {
    getAll: (req: Request<void, Product[] | Error, void, void>, res: Response<Product[] | Error>) => void
    getById: (req: Request<{id: number}, Product | Error, void>, res: Response<Product | Error>) => void
}

export interface ProductServiceContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
}

export interface ProductRepositoryContract {
    getAll: () => Promise<Product[]>
    getById: (id: number) => Promise<Product | null>
}