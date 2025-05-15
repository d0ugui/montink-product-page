import { ProductsList } from "@/components/ProductsList";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

interface SearchParamsProps {
  page?: string;
  limit?: string;
}

export const metadata: Metadata = {
  title: 'Montink Product Page',
  description: 'A page with a lot of products...',
}

export default async function Home(props: { searchParams?: Promise<SearchParamsProps>}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 12;

  return (
    <main className="flex flex-col  md:m-auto md:w-full md:max-w-6xl py-12 px-4 xl:px-0">
      <div>
        <h2 className="text-2xl font-bold">Product List</h2>
        <p className="text-gray-500">Buy your favorites items in real time.</p>
      </div>

      <Suspense fallback={<Loading />}>
        <ProductsList currentPage={currentPage} limit={limit} />
      </Suspense>
    </main>
  );
}
