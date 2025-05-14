"use server"

export async function getProductById(id: number) {
  const data = await fetch(`https://dummyjson.com/products/${id}`)
  const res = await data.json();

  return res;
}
