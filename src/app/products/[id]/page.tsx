import Image from "next/image"
import { ProductImages } from "../components/ProductImages"
import { getProductById } from "@/actions/productById"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { ProductInfo } from "../components/ProductInfo";

// Eu poderia utilizar os dados da listagem da página inicial
// Mas eu achei ideal implementar a rota dinâmica com a chamada

export default async function ProductPage({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return (
    <div className="flex flex-col md:m-auto md:w-full md:max-w-6xl py-12 px-4 xl:px-0">
      <div className="xl:my-10 xl:flex xl:gap-8">
        <Suspense fallback={<Loading />}>
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </Suspense>
      </div>
    </div>
  )
}
