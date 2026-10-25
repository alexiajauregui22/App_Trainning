import Reveal from "@/components/Reveal";
import { memberships } from "@/lib/data";

export default function Memberships() {
  return (
    <section className="section" id="membresias" aria-labelledby="membresias-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Planes de membresía</span>
          <h2 id="membresias-title">Elige el nivel de tu transformación.</h2>
        </Reveal>

        <div className="grid-3" style={{ alignItems: "stretch" }}>
          {memberships.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 110}
              as="article"
              className={`card plan ${m.featured ? "featured" : ""}`}
            >
              {m.featured && <span className="tag">Más elegido</span>}
              <div>
                <h3>{m.name}</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.92rem" }}>{m.description}</p>
              </div>
              <div className="plan-price">
                €{m.price}
                <small> {m.period}</small>
              </div>
              <ul>
                {m.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="/dashboard" className={`btn ${m.featured ? "btn-primary" : "btn-ghost"}`}>
                Inscribirme
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
