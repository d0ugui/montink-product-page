"use server"

import { ProductsRequest } from "@/entities/ProductsRequest";

export async function getProducts(): Promise<ProductsRequest> {
  const data = await fetch('https://dummyjson.com/products/?limit=12&skip=0')
  const res = await data.json();

  return res;
}
