import {  Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-2.5 shadow-lg fixed bottom-0 left-0 right-0 z-50  ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Image src="/assets/logo3.jpg" alt="Logo" width={80} height={80} />
        </div>

        <a className="text-gray-100 text-sm font-light italic ">
          © 2025 El Portal Herreria. Todos los derechos reservados
        </a>

        <ul className="flex gap-5 ml-auto ">
          <li className=" flex gap-4">
            <Link href="https://www.instagram.com/el.portal.herreria/">
              {" "}
              <Instagram />
            </Link>
          </li>
          <li className="flex gap-4">
            <Link href="/">
              {" "}
              <FaWhatsapp />
            </Link>
          </li>
          <div className="ml-auto"></div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
