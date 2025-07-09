"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/providers/CartProvider";


function ProductList({ productos }) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const handleAddToCart = (producto) => {
    // Por defecto: cantidad 1, color y tamaño nulos (o puedes elegir valores por defecto)
    addToCart(producto, 1, null, null);
    setTimeout(() => {
      router.push("/carrito");
    }, 100);
  };

  return (
    <>
      {productos.map((producto) => {
        return(
        <div
          key={producto.id}
          className="group relative block overflow-hidden rounded-lg shadow-lg"
        >
          <Link 
          href={`/favorites`}
          className=" absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <div className="w-8 h-8 flex items-center justify-center"><Heart /></div>
          </Link>

          <div className="relative h-64 sm:h-72">
            <Image
              src={producto.image1}
              alt={producto.name || "Producto"}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative border border-gray-100 bg-white p-6">
            <p className="text-gray-700">
              ${producto.price}
              <span className="text-gray-400 line-through ml-3.5"> ${producto.price2}</span>
            </p>

            <h3 className="mt-1.5 text-lg font-medium text-gray-900">
              {producto.name}
            </h3>

            <p className="mt-1.5 line-clamp-3 text-gray-700">
              {producto.description}
            </p>


            <div className="mt-4 flex gap-4">
              <button
                className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105 text-center"
                onClick={() => handleAddToCart(producto)}
              >
                Agregar al carrito
              </button>

              <Link
                href={`/product/${producto.id}`}
                className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 text-center"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
        )
      })}
    </>
  );
}

export default ProductList;
