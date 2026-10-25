import Reveal from "@/components/Reveal";
import { transformations } from "@/lib/data";

// Resultados reales. Las cifras y fotos son de ejemplo hasta contar con consentimiento de los clientes.
export default function Transformations() {
  return (
    <section className="section section-graphite" id="resultados" aria-labelledby="resultados-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Resultados reales</span>
          <h2 id="resultados-title">Transformaciones que hablan por sí solas.</h2>
        </Reveal>

        <div className="grid-3">
          {transformations.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} as="article" className="card transform-card">
              <div className="ba">
                <div className="ba-frame">Antes</div>
                <div className="ba-frame after">Después</div>
              </div>
              <h3 className="transform-name">{t.name}</h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>{t.quote}</p>
              <div className="transform-stats">
                <div>
                  <strong>{t.weight}</strong>
                  <span>Peso</span>
                </div>
                <div>
                  <strong>{t.muscle}</strong>
                  <span>Músculo</span>
                </div>
                <div>
                  <strong>{t.fat}</strong>
                  <span>Grasa</span>
                </div>
              </div>
              <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>Tiempo: {t.time}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
