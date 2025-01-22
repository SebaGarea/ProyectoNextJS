import Footer from "@/components/Footer";
import { Header } from "../components/Header";
import "./globals.css";


export const metadata = {
  title: "Comision 71810",
  description: "Aplicacion de comercio electronico",
  keywords:"comercio electronico, aplicacion, nextjs, tailwind, sass, react"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="grow p-4"></main>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
