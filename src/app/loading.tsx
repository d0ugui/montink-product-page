import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col gap-8 md:m-auto md:w-full md:max-w-6xl py-12  px-4 xl:px-0">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 flex-1">
        {Array.from({ length: 12}).map((_, index) => (
          <div className="space-y-2" key={index}>
            <Skeleton className="w-[260px] h-[264px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
