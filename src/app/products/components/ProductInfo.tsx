import { Button } from "@/components/ui/button";
import { Product } from "@/entities/Product";
import { ProductOptions } from "./ProductOptions";
import { cookies } from "next/headers";

export async function ProductInfo({ product }: { product: Product }) {
  const cookiesStore = (await cookies()).get("products-info");
  const productsInfo = cookiesStore && JSON.parse(cookiesStore?.value);

  const userCookies = productsInfo?.productId === product.id ? productsInfo : null;

  return (
    <div className="flex flex-col gap-2 mt-6">
      <h2 className="text-lg xl:text-4xl font-medium">{product.title}</h2>

      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2 bg-purple-400/10 rounded-md p-2 w-fit">
          <h1 className="text-xl font-medium xl:text-[28px]">
            R$ {product.price.toFixed(2)}
          </h1>
        </div>

        <p className="text-xl font-bold text-green-500">
          Save {product.discountPercentage.toFixed()}%
        </p>
      </div>

      <div className="flex flex-col mt-2">
        <p className="xl:line-clamp-9 text-justify text-sm opacity-70">
          {product.description}
        </p>
      </div>

      <ProductOptions productId={product.id} cookies={userCookies} />

      <div className="mt-auto">
        <Button
          className="bg-violet-700 mt-8 w-full font-bold xl:text-lg py-6 hover:bg-violet-400 transition-colors"
          // onClick={handleAddToCartClick}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}
