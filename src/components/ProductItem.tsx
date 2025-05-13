import Link from "next/link";
import Image from "next/image";
import { Product } from "@/entities/Product";
import { Badge } from "./Badge";

export const ProductItem = ({ product }: { product: Product}) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col gap-4 rounded-md">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent md:h-[260px] md:min-w-[180px] bg-white">
          <Image
            src={product.images[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] hover:scale-125 transition-all"
            style={{
              objectFit: "contain",
            }}
            alt={product.title}
          />

          <Badge title={product.category} className="absolute top-2 left-4" variant={product.category}/>
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">
            {product.title}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                  R$ 20.00
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ 20.00
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                R$ 20.00
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
