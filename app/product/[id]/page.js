import { notFound } from "next/navigation";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage(props) {
  const params = await props.params;
  const id = params?.id;
  
  // Construir URL absoluta para server components
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
  
  const res = await fetch(`${baseUrl}/api/products?id=${id}`);
  const result = await res.json();
  const product = result.payload && result.payload.length > 0 ? result.payload[0] : null;

  if (!product) return notFound();

  return <ProductDetailsClient product={product} />;
}