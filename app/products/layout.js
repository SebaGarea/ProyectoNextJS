'use client';

import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductLayout({ children }) {
  const categorias = [
    { id: 1, name: "Exterior" },
    { id: 2, name: "Interior" },
    { id: 3, name: "Comedor" },
    { id: 4, name: "Living" },
    { id: 5, name: "Dormitorio" },
    { id: 6, name: "Oficina" },
    { id: 7, name: "Iluminacion" },
    { id: 8, name: "Estanteria" },
    { id: 9, name: "Sala" },
    { id: 10, name: "Almacenamiento" },
  ];

  // Normaliza igual que el endpoint y los links
  function normalizar(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");
  }

  // Detectar la categoría activa desde la URL
  const pathname = usePathname();
  const activeCat = pathname.split("/products/")[1]?.split("/")[0] || "";

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="min-w-[220px] md:min-w-[250px] bg-white rounded-xl shadow p-6 h-fit sticky top-8 self-start">
        <PageTitle>Filtros</PageTitle>
        <nav className="flex flex-col gap-2 mt-4">
          <Link
            href="/products"
            className={`px-3 py-2 rounded transition font-medium ${
              !activeCat
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Todos
          </Link>
          {categorias.map((categoria) => {
            const catNorm = normalizar(categoria.name);
            const isActive = activeCat === catNorm;
            return (
              <Link
                key={categoria.id}
                href={`/products/${catNorm}`}
                className={`px-3 py-2 rounded transition font-medium ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {categoria.name}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="grow">{children}</div>
    </div>
  );
}
