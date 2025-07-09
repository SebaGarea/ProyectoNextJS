import { productos } from "@/assets/products";
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";

export async function migrateProducts() {
  const productsCollection = collection(db, "products"); 

  productos.forEach((product) => {
    addDoc(productsCollection, product)
        .then(() => {
            console.log("Producto Agregado", product.id);
        });
  });
}
