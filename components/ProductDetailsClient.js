"use client";
import { useState, useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CartContext } from "@/providers/CartProvider";
import Image from "next/image";

export default function ProductDetailsClient({ product }) {
  const [cantidad, setCantidad] = useState(1);
  const variantesColor = ["Negro", "Blanco", "Madera"];
  const variantesTamanio = ["Chico", "Mediano", "Grande"];
  const stock = product.stock || 10;
  const { addToCart } = useContext(CartContext);
  const colorRef = useRef();
  const tamanioRef = useRef();
  const router = useRouter();

  const handleAddToCart = () => {
    const color = colorRef.current.value;
    const tamanio = tamanioRef.current.value;
    addToCart(product, cantidad, color, tamanio);
    setTimeout(() => {
      router.push("/carrito");
    }, 100);
  };

  return (
    <section className="flex justify-center items-start min-h-[80vh]" style={{paddingTop: '120px'}}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-full flex justify-center">
        <div className="mx-auto max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={product.image1}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-md max-h-80"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">${product.price}</p>
              <form className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  Cantidad:
                  <input
                    type="number"
                    min="1"
                    max={stock}
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                    className="border rounded px-2 py-1 w-20"
                  />
                </label>
                <label className="flex items-center gap-2">
                  Color:
                  <select ref={colorRef} className="border rounded px-2 py-1">
                    {variantesColor.map((color) => (
                      <option key={color}>{color}</option>
                    ))}
                  </select>
                </label>
                <label className="flex items-center gap-2">
                  Tamaño:
                  <select ref={tamanioRef} className="border rounded px-2 py-1">
                    {variantesTamanio.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <button
                  type="button"
                  className="bg-gray-900 text-white px-4 py-2 rounded mt-2 disabled:opacity-50 hover:bg-gray-800 transition"
                  disabled={stock === 0}
                  onClick={handleAddToCart}
                >
                  {stock === 0 ? "Sin stock" : "Agregar al carrito"}
                </button>
              </form>
              <Link href="/products" className="block mt-4 text-blue-600 hover:underline">Volver a productos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
