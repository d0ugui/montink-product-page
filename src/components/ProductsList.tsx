import { getProducts } from "@/actions/products";
import { ProductItem } from "./ProductItem";
import { ProductsPagination } from "./ProductsPagination";

interface ProductsListProps {
  currentPage: number;
  limit: number;
}

export async function ProductsList({ currentPage, limit }: ProductsListProps) {
  const { products, total: totalItems } = await getProducts({
    page: currentPage,
    limit
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 flex-1 mt-12">
        {products?.map((productItem) => (
          <ProductItem product={productItem} key={productItem.id} />
        ))}
      </div>

      <ProductsPagination />
    </>
  )
}
