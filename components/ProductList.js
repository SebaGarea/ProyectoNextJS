import Link from "next/link";
import Image from "next/image";

function ProductList({ productos }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <div key={producto.id} className="flex flex-col items-center justify-center w-full max-w-xs mx-auto">
          <div className="w-full h-64 relative bg-gray-300 rounded-lg shadow-md overflow-hidden">
            <Image
              src={producto.thumbnail}
              alt={`Thumbnail de ${producto.title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full h-auto -mt-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="my-3 font-medium tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {producto.title}
            </h3>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">${producto.price}</span>
              <button className="px-5 py-3 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Add to cart
              </button>
              <Link href={`/product/${producto.id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
