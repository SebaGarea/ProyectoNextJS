import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";
import AuthContextProvider  from "@/providers/AuthProvider";
import CartProvider from "@/providers/CartProvider";

export const metadata = {
  title: "Comision 71810",
  description: "Aplicacion de comercio electronico",
  keywords: "comercio electronico, aplicacion, nextjs, tailwind, sass, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <CartProvider>
            <Header />
            <main className="grow pb-4">{children}</main>
            <Footer />
          </CartProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
