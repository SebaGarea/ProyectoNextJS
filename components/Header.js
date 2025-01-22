import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-gray-700 border-b flex items-center p-10 font-medium h-10 ">
   
       {/* <div className="flex items-center">
        <Image src="/public/logo1.png" alt="Logo" width={32} height={32} />
      </div>  */}

      <nav className="flex justify-center gap-4 text-white flex-1 " >
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/nosotros">Nosotros</Link>
      </nav>
      <nav className="flex justify-end gap-4">
        <ShoppingCart className="w-6 h-6" /> 
        <div className="ml-auto"></div>
      </nav>
    </header>
  );
};