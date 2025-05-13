import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <section className="py-4 px-4 xl:px-0 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">
            <strong className="text-purple-700">M</strong>ontik.
          </h1>

          <ul className="hidden lg:flex items-center ml-20 gap-4 text-gray-700 font-medium">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Tools</li>
            <li>Books</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-2 border-gray-200 px-3 h-8 rounded-md">
            <ShoppingCart width={24} height={20} className="text-purple-700" />
            <p className="text-sm">4</p>
          </div>

          <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </section>
  );
}
