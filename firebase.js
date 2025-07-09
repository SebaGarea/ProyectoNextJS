
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBGMSEt6PvsE4Y2xNVA0zgFxd32_uPwbfE",
  authDomain: "proyecto-nextjs-990e6.firebaseapp.com",
  projectId: "proyecto-nextjs-990e6",
  storageBucket: "proyecto-nextjs-990e6.firebasestorage.app",
  messagingSenderId: "667941156257",
  appId: "1:667941156257:web:7f6a601ed89046452807e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
