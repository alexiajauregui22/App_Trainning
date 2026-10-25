"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

// Barra superior fija: cambia de estilo al hacer scroll.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link href="/" className="logo" aria-label={brand.name}>
          <span className="logo-mark">{brand.short}</span>
          <span>{brand.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Principal">
          <a href="#beneficios">Beneficios</a>
          <a href="#servicios">Servicios</a>
          <a href="#resultados">Resultados</a>
          <a href="#membresias">Membresías</a>
          <a href="#nutricion">Nutrición</a>
          <Link href="/dashboard">Mi zona</Link>
          <a href="#membresias" className="btn btn-primary nav-cta">Únete</a>
        </nav>
      </div>
    </header>
  );
}
