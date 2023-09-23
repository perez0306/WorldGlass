import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import Whatsapp from "@/atoms/whatsapp/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "World Glass - Polarizados en bogota",
  description:
    "World Glass: Polarizados en Bogotá. Mejora la seguridad y estética con los expertos en polarizado en Bogotá. World Glass ofrece servicios de alta calidad para automóviles. Protege tu privacidad y ahorra energía. Contáctanos para un presupuesto gratuito.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
