"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/entities/Product";

interface ProductImagesProps {
  product: Product;
}

export function ProductImages({ product }: ProductImagesProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="relative flex h-[380px] w-full items-center justify-center bg-accent xl:h-[550px] xl:w-[35vw] xl:rounded-lg">
        <Image
          src={product.images[imageIndex]}
          alt={product.title}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-5">
        {product.images.map((imageUrl, index) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent xl:h-[120px] xl:w-[120px] ${
              index === imageIndex &&
              "border-2 border-solid border-gray-300"
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={imageUrl}
              alt={product.title}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
