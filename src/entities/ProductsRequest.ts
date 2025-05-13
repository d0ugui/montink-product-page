import { Product } from "./Product";

export interface ProductsRequest {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
