import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5846119/pexels-photo-5846119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-medium md:text-6xl">
            Soluciones Industriales Personalizadas
          </h1>
          <p className="mb-5">
            Transformamos tus espacios con muebles industriales y trabajos de
            herrería únicos. Diseñamos a medida para combinar funcionalidad,
            resistencia y estilo, creando piezas que marcan la diferencia
          </p>

          <div className="flex flex-col sm:flex-col justify-center gap-4">
            <button className="px-4 py-3 text-lg font-semibold text-black bg-gray-100 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-70">
              Solicita tu presupuesto
            </button>
            <Link href="/proyectos" legacyBehavior>
              <a className="px-6 py-3 text-lg font-semibold text-black bg-gray-100 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-70 block rounded">
                Explora nuestros proyectos
              </a>
            </Link>
            <Link href="/nosotros" legacyBehavior>
              <a className="px-6 py-3 text-lg font-semibold text-black bg-gray-100 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-70 block">
                Contáctanos
              </a>
            </Link>
            <div className="ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
