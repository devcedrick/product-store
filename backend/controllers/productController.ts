import { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
  res.send('Get all products');
}

export const createProduct = async (req: Request, res: Response) => {
  res.send('Create a product');
}