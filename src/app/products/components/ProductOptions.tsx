"use client";

import { ProductCookies, setProductCookies } from "@/actions/setCookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Address } from "@/entities/Address";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const colors = ["red", "blue", "green"];
const sizes = ["xs", "s", "m", "l", "xl"];

export function ProductOptions({
  productId,
  cookies,
}: {
  productId: number;
  cookies: ProductCookies;
}) {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<
    (typeof colors)[number] | null
  >(cookies?.color ?? null);
  const [selectedSize, setSelectedSize] = useState<
    (typeof sizes)[number] | null
  >(cookies?.size ?? null);

  async function handleChangeSize(size: string) {
    setSelectedSize(size);

    await setProductCookies({
      productId,
      size,
      ...(selectedColor && { color: selectedColor }),
    });
  }

  async function handleChangeColor(color: string) {
    setSelectedColor(color);

    await setProductCookies({
      productId,
      color,
      ...(selectedSize && { size: selectedSize }),
    });
  }

  async function handleFetchCep() {
    const address = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const res = await address.json();

    if (res.erro) {
      setError(true);
      return;
    }

    setAddress(res);
  }

  useEffect(() => {
    if (cep.length >= 8) {
      handleFetchCep();
      return;
    }

    setError(false);
    setAddress(null);
  }, [cep]);

  return (
    <>
      <div className="flex flex-col mt-2">
        <h4>Colors:</h4>

        <div className="flex items-center gap-1 mt-1">
          {colors.map((color, index) => (
            <Button
              key={index}
              onClick={() => handleChangeColor(color)}
              className={cn(
                `h-8 w-8 rounded-full`,
                color === "red" && `bg-red-500/60 hover:bg-red-600`,
                color === "blue" && `bg-blue-500/60 hover:bg-blue-600`,
                color === "green" && `bg-green-500/60 hover:bg-green-600`,
                selectedColor === color && "border-2 border-black/60"
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
                selectedSize === size && "bg-gray-100 border-2 border-black/60"
              )}
              variant="outline"
              onClick={() => handleChangeSize(size)}
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

      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="email">CEP:</Label>
        <Input
          type="email"
          id="email"
          maxLength={8}
          placeholder="00000000"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className={cn("", error && "border-red-600")}
        />

        {address && (
          <p className="text-sm text-gray-700">
            {`${address?.logradouro}, ${address?.localidade} - ${address?.uf}`}
          </p>
        )}

        {error && <p className="text-red-600 text-sm">CEP Inválido!</p>}
      </div>
    </>
  );
}
