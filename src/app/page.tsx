import { getProducts } from "@/actions/products";
import { ProductItem } from "@/components/ProductItem";

export default async function Home() {
  const { products} = await getProducts();

  return (
    <main className="flex flex-col gap-8 md:m-auto md:w-full md:max-w-6xl py-12 px-4 xl:px-0">
      <div>
        <h2 className="text-2xl font-bold">Product List</h2>
        <p className="text-gray-500">Buy your favorites items in real time.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 flex-1">
        {products?.map((productItem) => (
          <ProductItem product={productItem} key={productItem.id} />
        ))}
      </div>
    </main>
  );
}
