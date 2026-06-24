"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/didactics", label: "Didácticas", labelShort: "Didácticas" },
  { href: "/notificacion", label: "Notificación Prehospitalaria", labelShort: "Notificación" },
  { href: "/comunidad", label: "Comunidad de Práctica", labelShort: "Comunidad" },
  { href: "/registro", label: "Registro de Trauma", labelShort: "Registro" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#7D1A1A] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg leading-tight">
            <span className="hidden sm:block text-sm leading-tight">
              RESPOND inicio
            </span>
            <span className="sm:hidden text-sm font-bold">RESPOND inicio</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#5c1212] text-white"
                    : "hover:bg-[#9b2020] text-white/90"
                }`}
              >
                {link.labelShort}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-[#9b2020]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-3 border-t border-[#9b2020] mt-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded text-sm font-medium mb-1 ${
                  pathname === link.href ? "bg-[#5c1212]" : "hover:bg-[#9b2020]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
