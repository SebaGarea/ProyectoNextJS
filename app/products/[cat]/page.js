import { getProducts } from "@/actions/getProducts";
import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";

function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-");
}

export default async function ProductsByCategoryPage(props) {
  const params = await props.params;
  const cat = params?.cat || "";
  // Buscar productos por categoría normalizada
  const { payload: products, error, message } = await getProducts(cat);

  // Mostrar el nombre de la categoría original (capitalizado)
  const displayCat = cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, " ");

  return (
    <>
      <PageTitle>Productos de {displayCat}</PageTitle>
      {error || !products || products.length === 0 ? (
        <div className="text-center text-gray-500 py-16 text-lg">
          Actualmente no hay productos en esta categoría.<br />
          Elegí otra desde el menú lateral.
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProductList productos={products} />
        </section>
      )}
    </>
  );
}
