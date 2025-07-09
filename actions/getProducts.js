export async function getProducts(categoria) {
  try {
    // Construir URL absoluta para server components
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const url = categoria
      ? `${baseUrl}/api/products?categoria=${categoria}`
      : `${baseUrl}/api/products`;

    const data = await fetch(url);
    const { payload: products } = await data.json();

    return {
      payload: products,
      message: "Se obtuvieron los productos",
      error: false,
    };
  } catch (error) {
    console.log('getProducts error:', error);
    return {
      payload: null,
      message: "No se pudieron obtener los productos",
      error: true,
    };
  }
}