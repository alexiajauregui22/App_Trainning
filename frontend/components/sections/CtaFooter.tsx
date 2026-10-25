import Link from "next/link";
import Reveal from "@/components/Reveal";
import { brand } from "@/lib/data";

export function CtaBand() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="card cta-band" style={{ padding: "clamp(2rem,5vw,4rem)", background: "var(--black)", color: "var(--ivory)", borderColor: "var(--black)" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--lime)" }}>Empieza hoy</span>
            <h2 id="cta-title">Tu mejor versión empieza con el primer entrenamiento.</h2>
          </div>
          <a href="#membresias" className="btn btn-primary">Únete ahora</a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <div className="footer-links">
          <a href="#beneficios">Beneficios</a>
          <a href="#membresias">Membresías</a>
          <Link href="/dashboard">Mi zona</Link>
          <Link href="/admin">Administración</Link>
        </div>
      </div>
    </footer>
  );
}
