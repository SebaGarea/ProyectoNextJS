import { ShoppingCart } from "lucide-react";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="bg-gray-700 border-b flex items-center p-10 font-medium h-10 ">
      <nav className="flex justify-center gap-4 text-white flex-1 ">
        <Link href="/">Home</Link>
        <Link href="/products">Productos</Link>
        <Link href="/nosotros">Nosotros</Link>
      </nav>

      <nav className="flex justify-end gap-4">
        <Link href="/carrito">
        <ShoppingCart className="w-6 h-6 text-white" />
        </Link>
        <Link className="text-white" href="/admin ">
        Admin
        </Link>
        <div className="ml-auto"></div>
      </nav>

    </header>
  );
};
