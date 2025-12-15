import { Request, Response } from 'express';
// import { Category } from '../generated/prisma/client';
import { Prisma } from '../generated/prisma/client';

export interface Category{
    id: number
    name: string
}

// export type Category = Prisma.CategoryGetPayload<{}>
export interface ErrorResponse {
    message?: string 
}

export interface CategoryControllerContract {
    getAll: (req: Request<void, Category[] | ErrorResponse, void, void>, res: Response<Category[] | ErrorResponse>) => void
}

export interface CategoryServiceContract {
    getAll: () => Promise<Category[]>
}

export interface CategoryRepositoryContract {
    getAll: () => Promise<Category[]>
}