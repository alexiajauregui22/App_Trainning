import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

// Tarjetas visuales: cada servicio tiene su propio fondo (después será video o foto).
export default function Services() {
  return (
    <section className="section section-dark" id="servicios" aria-labelledby="servicios-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Servicios</span>
          <h2 id="servicios-title">Una experiencia completa, en un solo lugar.</h2>
        </Reveal>

        <div className="grid-4">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={(i % 4) * 90}
              as="article"
              className="card service-card"
            >
              <div style={{ position: "absolute", inset: 0, background: s.bg, zIndex: 0 }} />
              <span className="service-number">0{i + 1}</span>
              <span className="tag service-tag">{s.tag}</span>
              <h3 className="service-title">{s.title}</h3>
              <p style={{ marginTop: "0.5rem" }}>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
