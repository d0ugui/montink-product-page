"use server"

import { cookies } from "next/headers";

export interface ProductCookies {
  productId: number;
  size?: string | null;
  color?: string | null;
}

export async function setProductCookies({ productId, size, color }: ProductCookies) {
  const cookiesStore = await cookies();

  cookiesStore.set({
    name: 'products-info',
    value: JSON.stringify({ productId, size, color }),
    maxAge: 15 * 60, // 15 Minutos
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  });
}
