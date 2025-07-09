import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  // Cambia esta URL por la de tu API real si es necesario
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products?id=${id}`);
  const result = await res.json();
  const product = result.payload && result.payload.length > 0 ? result.payload[0] : null;

  if (!product) return notFound();

  return <ProductDetailsClient product={product} />;
}