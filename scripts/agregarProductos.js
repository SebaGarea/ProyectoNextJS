// import { db } from "../firebase.js";
// import { collection, addDoc } from "firebase/firestore";
// import { productos } from "../assets/products.js";

// async function agregarProductos() {
//   for (const producto of productos) {
//     try {
//       await addDoc(collection(db, "products"), producto);
//       console.log("Producto agregado:", producto.name);
//     } catch (e) {
//       console.error("Error al agregar producto:", producto.name, e);
//     }
//   }
//   console.log("Carga masiva finalizada");
// }

// // Ejecuta la función si corres este archivo directamente
// agregarProductos();
