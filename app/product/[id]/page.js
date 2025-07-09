import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  
  const res = await fetch(`/api/products?id=${id}`);
  const result = await res.json();
  const product = result.payload && result.payload.length > 0 ? result.payload[0] : null;

  if (!product) return notFound();

  return <ProductDetailsClient product={product} />;
}