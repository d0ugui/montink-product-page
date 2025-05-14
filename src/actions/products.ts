"use server"

import { ProductsRequest } from "@/entities/ProductsRequest";

interface GetProductsProps {
  page: number;
  limit: number;
}

export async function getProducts({ page, limit }: GetProductsProps): Promise<ProductsRequest> {
  const offset = (page - 1) * limit;

  const data = await fetch(`https://dummyjson.com/products/?limit=${limit}&skip=${offset}`)
  const res = await data.json();

  return res;
}
