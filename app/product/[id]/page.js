import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage(props) {
  const params = await props.params;
  const id = params?.id;
  
  const res = await fetch(`http://localhost:3000/api/products?id=${id}`);
  const result = await res.json();
  const product = result.payload && result.payload.length > 0 ? result.payload[0] : null;

  if (!product) return notFound();

  return <ProductDetailsClient product={product} />;
}