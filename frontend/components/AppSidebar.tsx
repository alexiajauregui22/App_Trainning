import Link from "next/link";
import { brand } from "@/lib/data";

type Props = {
  active: "dashboard" | "admin";
};

// Navegación lateral compartida por las zonas privadas (cliente y administración).
export default function AppSidebar({ active }: Props) {
  const clientLinks = [
    { href: "/dashboard", label: "Resumen", key: "dashboard" },
  ];
  const adminLinks = [{ href: "/admin", label: "Panel general", key: "admin" }];

  return (
    <aside className="sidebar">
      <Link href="/" className="logo" style={{ color: "var(--ivory)" }}>
        <span className="logo-mark">{brand.short}</span>
        <span>{brand.name}</span>
      </Link>

      <nav aria-label="Zona privada">
        <span className="eyebrow" style={{ color: "rgba(245,245,240,.5)", marginBottom: "0.5rem" }}>
          Cliente
        </span>
        {clientLinks.map((l) => (
          <Link key={l.href} href={l.href} className={active === l.key ? "active" : ""}>
            {l.label}
          </Link>
        ))}
        <span className="eyebrow" style={{ color: "rgba(245,245,240,.5)", margin: "1rem 0 0.5rem" }}>
          Administración
        </span>
        {adminLinks.map((l) => (
          <Link key={l.href} href={l.href} className={active === l.key ? "active" : ""}>
            {l.label}
          </Link>
        ))}
      </nav>

      <Link href="/" style={{ marginTop: "auto", fontSize: "0.85rem", color: "rgba(245,245,240,.6)" }}>
        ← Volver al sitio
      </Link>
    </aside>
  );
}
