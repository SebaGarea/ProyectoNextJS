import Link from "next/link";

export default function ProyectosPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">¡Próximamente!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        La sección de proyectos está en proceso de creación.
        <br />
        Muy pronto vas a poder ver nuestros trabajos y casos de éxito.
      </p>
      <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold mb-8">
        Volvé pronto para descubrir más
      </span>
      <div className="h-12" />
      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <Link
          href="/"
          className="px-8 py-3 bg-gray-100 rounded-lg text-lg font-medium text-gray-800 hover:bg-gray-200 transition shadow border border-gray-200 text-center"
        >
          Volver al Home
        </Link>
        <Link
          href="/products"
          className="px-8 py-3 bg-indigo-600 rounded-lg text-lg font-medium text-white hover:bg-indigo-700 transition shadow border border-indigo-700/10 text-center"
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}
