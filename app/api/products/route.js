import { db } from "@/firebase";
import { collection, getDocs, where, query, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


//Route Handlers
export async function GET(request) {

  const searchParams = request.nextUrl.searchParams
  const categoria = searchParams.get("categoria")
  const id = searchParams.get("id")

  const productsCollection = collection(db, "products")

  try{

    // Si viene un id, buscamos solo ese producto
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

    // Si viene una categoría, filtramos con normalización
    if (categoria) {
      // Función para normalizar: minúsculas, sin tildes, sin espacios
      const normalize = (str) => str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");

      // Traemos todos los productos y filtramos en memoria
      const snapshot = await getDocs(productsCollection);
      const productosFinales = snapshot.docs
        .map((documentRef) => {
          const id = documentRef.id;
          const productoData = documentRef.data();
          productoData.id = id;
          return productoData;
        })
        .filter((producto) =>
          producto.category && normalize(producto.category) === normalize(categoria)
        );

      return NextResponse.json({
        message: "Productos obtenidos con exito",
        error: false,
        payload: productosFinales
      });
    }

    // Si no hay categoría ni id, traemos todos
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
    console.log('API PRODUCTS ERROR:', error);
    return NextResponse.json({
      message: "Error al obtener los productos",
      error: true,
      payload: null
    });
  }
  
  
}

export async function POST(req) {
  console.log("POST");
  //Asi se obtiene el body de la peticion
  //fetch("url", {body : JSON.stringify({name: "Horacio"})})
  console.log(await req.json());

  return NextResponse.json({ message: "POST" });
}
