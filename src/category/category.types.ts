import { Request, Response } from 'express';
import { Category } from '../generated/prisma/client';

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