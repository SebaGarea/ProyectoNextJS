import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 mr-2.5 shadow-lg ">
      
      <div className="flex justify-between items-center ">

        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="ml-2">Imagen</span>
        </div>

        <a className="text-gray-100 text-sm font-light italic ">© 2025 El Portal Herreria. Todos los derechos reservados</a>

          <ul className="flex gap-5 ml-auto ">
            <li className=" flex gap-4">
              <Link href="/"> <Instagram /></Link>
            </li>
            <li className="mr-4">
              <Link href="/"> <Facebook/></Link>
            </li>
            <div className="ml-auto"></div>
          </ul>
        
      </div>
    </footer>
  );
};

export default Footer;
