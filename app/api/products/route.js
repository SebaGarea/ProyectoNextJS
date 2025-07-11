import { db } from "@/firebase";
import { collection, getDocs, where, query, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const categoria = searchParams.get("categoria")
  const id = searchParams.get("id")

  const productsCollection = collection(db, "products")

  try{
    if (id) {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        return NextResponse.json({
          message: "Producto no encontrado",
          error: false,
          payload: []
        });
      }
      const productoData = docSnap.data();
      productoData.id = docSnap.id;
      return NextResponse.json({
        message: "Producto obtenido con exito",
        error: false,
        payload: [productoData]
      });
    }

    if (categoria) {
      const normalize = (str) => str
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");

      const snapshot = await getDocs(productsCollection);
      const productosFinales = snapshot.docs
        .map((documentRef) => {
          const id = documentRef.id;
          const productoData = documentRef.data();
          productoData.id = id;
          return productoData;
        })
        .filter((producto) => {
          const catProd = producto.category ? normalize(producto.category) : '';
          const catParam = normalize(categoria);
          return catProd === catParam;
        });

      return NextResponse.json({
        message: "Productos obtenidos con exito",
        error: false,
        payload: productosFinales
      });
    }

    const snapshot = await getDocs(productsCollection);
    const productosFinales = snapshot.docs.map((documentRef) =>{
      const id = documentRef.id;
      const productoData = documentRef.data();
      productoData.id = id;
      return productoData;
    })
    
    return NextResponse.json({
      message: "Productos obtenidos con exito",
      error: false,
      payload: productosFinales
    });
  }

  catch(error){
    return NextResponse.json({
      message: "Error al obtener los productos",
      error: true,
      payload: null
    });
  }
}

export async function POST(req) {
  console.log("POST");
  console.log(await req.json());
  return NextResponse.json({ message: "POST" });
}
