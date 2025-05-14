"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

const colors = ["red", "blue", "green"];
const sizes = ["xs", "s", "m", "l", "xl"];

export function ProductOptions() {
  const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<
      (typeof colors)[number] | null
    >(null);
    const [selectedSize, setSelectedSize] = useState<
      (typeof sizes)[number] | null
    >(null);

  return (
    <>
      <div className="flex flex-col mt-2">
        <h4>Colors:</h4>

        <div className="flex items-center gap-1 mt-1">
          {colors.map((color, index) => (
            <Button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={cn(
                `h-8 w-8 rounded-full`,
                color === 'red' && `bg-red-500/60 hover:bg-red-600`,
                color === 'blue' && `bg-blue-500/60 hover:bg-blue-600`,
                color === 'green' && `bg-green-500/60 hover:bg-green-600`,
                selectedColor === color && "border border-black/60"
              )}
              variant="outline"
              size="icon"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <h4>Size:</h4>

        <div className="flex items-center gap-1 mt-1">
          {sizes.map((size) => (
            <Button
              key={size}
              className={cn(
                "rounded-full uppercase",
                selectedSize === size && " bg-gray-100"
              )}
              variant="outline"
              onClick={() => setSelectedSize(size)}
              size="icon"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h4>Quantity:</h4>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setQuantity((prev) => prev - 1)}
            className="rounded-full"
            disabled={quantity === 1}
          >
            <ArrowLeftIcon size={16} />
          </Button>

          <span>{quantity}</span>

          <Button
            size="icon"
            variant="outline"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="rounded-full"
            disabled={quantity === 5}
          >
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>
    </>
  );
}
