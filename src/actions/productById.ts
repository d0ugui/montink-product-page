"use server"

import { cache } from "react";

async function getProductById(id: number) {
  const data = await fetch(`https://dummyjson.com/products/${id}`)
  const res = await data.json();

  return res;
}

export default cache(getProductById)
