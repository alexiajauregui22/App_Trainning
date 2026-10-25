import Reveal from "@/components/Reveal";
import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section className="section" id="beneficios" aria-labelledby="beneficios-title">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">Por qué elegirnos</span>
            <h2 id="beneficios-title">
              Todo lo que necesitas para <span className="accent">rendir mejor</span>.
            </h2>
          </div>
          <p className="lead">
            Cada detalle está pensado para que entrenes con intención, te recuperes con calidad
            y mantengas la constancia.
          </p>
        </Reveal>

        <div className="grid-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} as="article" className="card benefit-card">
              <span className="benefit-index">0{i + 1}</span>
              <h3>{b.title}</h3>
              <p style={{ marginTop: "0.75rem" }}>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
