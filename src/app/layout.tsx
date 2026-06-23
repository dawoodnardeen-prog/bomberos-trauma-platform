import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bomberos Trauma Platform | Guatemala",
  description:
    "Plataforma de apoyo prehospitalario para bomberos y socorristas en Guatemala. Didácticas de trauma, notificación prehospitalaria, comunidad de práctica y registro de trauma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-[#f9f7f7]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
