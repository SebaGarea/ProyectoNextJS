"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, cantidad = 1, color = null, tamanio = null) => {
    setCart((prev) => {
      // Buscar si ya existe el producto con mismo id, color y tamaño
      const idx = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === color &&
          item.tamanio === tamanio
      );
      if (idx !== -1) {
        // Si existe, sumar cantidad
        const updated = [...prev];
        updated[idx].cantidad += cantidad;
        return updated;
      } else {
        // Si no existe, agregar nuevo
        return [
          ...prev,
          { ...product, cantidad, color, tamanio }
        ];
      }
    });
  };

  const removeFromCart = (id, color, tamanio) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.tamanio === tamanio)
      )
    );
  };

  const clearCart = () => setCart([]);

  const increaseQuantity = (id, color, tamanio) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.tamanio === tamanio
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, color, tamanio) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.color === color && item.tamanio === tamanio && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
