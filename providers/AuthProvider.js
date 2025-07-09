"use client";

import React, { useEffect, createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const handleLogin = async () => {
    const resultado = await signInWithEmailAndPassword(
      auth,
      "test1@test.com",
      "123456"
    );
    console.log("🚀 ~ handleLogin ~ resultado:", resultado);
  };

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
