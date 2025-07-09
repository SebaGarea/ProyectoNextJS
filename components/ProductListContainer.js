"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/actions/getProducts";
import PageTitle from "./PageTitle";
import ProductList from "./ProductList";

function ProductListContainer({ categoria }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const { payload, error, message } = await getProducts(categoria);
      if (error) {
        setError(true);
        setMessage(message);
      } else {
        setProducts(payload);
        setError(false);
        setMessage("");
      }
    }
    fetchProducts();
  }, [categoria]);

  if (error) {
    return (
      <>
        <PageTitle>Error</PageTitle>
        <p>{message}</p>
      </>
    );
  }
  return <ProductList productos={products} />;
}

export default ProductListContainer;
