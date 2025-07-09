"use client";
import PageTitle from "@/components/PageTitle";
import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";
import Image from "next/image";

function CarritoPage() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );
  const vat = Math.round(subtotal * 0.21); // 21% IVA ejemplo
  const discount = 0; // Puedes agregar lógica de descuento
  const total = subtotal + vat - discount;

  return (
    <section className="flex justify-center items-start min-h-[80vh]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-full flex justify-center">
        <div className="mx-auto max-w-3xl w-full">
          <header className="text-center mb-4">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Mi Carrito
            </h1>
          </header>

          <div className="mt-8">
            {cart.length === 0 ? (
              <>
                <p className="text-gray-600 text-center">El carrito está vacío.</p>
                <div className="flex justify-center mt-6">
                  <a
                    href="/products"
                    className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Volver a productos
                  </a>
                </div>
              </>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 bg-white rounded shadow p-2"
                    >
                      <div className="size-16 relative">
                        <Image
                          src={item.image1}
                          alt={item.name}
                          fill
                          className="object-cover rounded-sm"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm text-gray-900">{item.name}</h3>
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          {item.tamanio && (
                            <div>
                              <dt className="inline">Tamaño:</dt>
                              <dd className="inline"> {item.tamanio}</dd>
                            </div>
                          )}
                          {item.color && (
                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline"> {item.color}</dd>
                            </div>
                          )}
                        </dl>
                      </div>
                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button
                          className="h-8 w-8 rounded bg-gray-200 text-gray-700 text-lg flex items-center justify-center hover:bg-gray-300"
                          onClick={() => decreaseQuantity(item.id, item.color, item.tamanio)}
                          disabled={item.cantidad <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.cantidad}
                          readOnly
                          className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 focus:outline-hidden"
                        />
                        <button
                          className="h-8 w-8 rounded bg-gray-200 text-gray-700 text-lg flex items-center justify-center hover:bg-gray-300"
                          onClick={() => increaseQuantity(item.id, item.color, item.tamanio)}
                        >
                          +
                        </button>
                        <button
                          className="text-gray-600 transition hover:text-red-600 ml-2"
                          onClick={() =>
                            removeFromCart(item.id, item.color, item.tamanio)
                          }
                        >
                          <span className="sr-only">Eliminar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${subtotal}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>IVA</dt>
                        <dd>${vat}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Descuento</dt>
                        <dd>-${discount}</dd>
                      </div>
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${total}</dd>
                      </div>
                    </dl>
                    <div className="flex justify-end gap-6"> {/* gap-6 para aún más separación */}
                      <a
                        href="/products"
                        className="inline-flex items-center justify-center rounded-full bg-gray-100 px-8 py-3 text-gray-900 border border-gray-300 hover:bg-gray-200 transition text-base font-medium"
                      >
                        Volver a productos
                      </a>
                      <button
                        onClick={clearCart}
                        className="inline-flex items-center justify-center rounded-full bg-red-100 px-8 py-3 text-red-700 text-base font-medium"
                      >
                        Vaciar carrito
                      </button>
                      <a
                        href="#"
                        className="block rounded-sm bg-gray-700 px-8 py-3 text-base text-gray-100 transition hover:bg-gray-600 font-medium"
                      >
                        Finalizar compra
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarritoPage;