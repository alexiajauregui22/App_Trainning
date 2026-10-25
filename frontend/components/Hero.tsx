import { disciplines } from "@/lib/data";

// Hero a pantalla completa con video de fondo cinematográfico.
// Si no existe /video/hero.mp4 se muestra el degradado de la paleta.
export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow" style={{ color: "var(--lime)" }}>
            Fitness · Bienestar · Rendimiento
          </span>
          <h1 id="hero-title">
            Entrena.<br />
            Recupérate.<br />
            <span className="accent">Transfórmate.</span>
          </h1>
          <p className="lead">
            Un espacio premium donde la fuerza, el cardio, el yoga, la sauna y la nutrición
            forman parte de una sola experiencia integral.
          </p>
          <div className="hero-actions">
            <a href="#membresias" className="btn btn-primary">Empieza hoy</a>
            <a href="#servicios" className="btn btn-ghost">Explorar servicios</a>
          </div>
        </div>

        <span className="hero-scroll" aria-hidden="true">Desliza</span>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...disciplines, ...disciplines].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}
