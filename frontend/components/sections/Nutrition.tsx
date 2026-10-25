import Reveal from "@/components/Reveal";
import { nutritionTopics } from "@/lib/data";

export default function Nutrition() {
  return (
    <section className="section section-dark" id="nutricion" aria-labelledby="nutricion-title">
      <div className="container nutrition-grid">
        <Reveal className="nutrition-visual" />

        <Reveal delay={150}>
          <span className="eyebrow">Nutrición y bienestar</span>
          <h2 id="nutricion-title">
            Lo que comes también <span className="accent">entrena</span>.
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Contenido y acompañamiento para alimentarte, recuperarte y cuidar tu bienestar integral.
          </p>

          <ul className="topic-list">
            {nutritionTopics.map((t) => (
              <li key={t.title}>
                {t.title}
                <span>{t.tag}</span>
              </li>
            ))}
          </ul>

          <a href="/dashboard" className="btn btn-primary">Ver planes nutricionales</a>
        </Reveal>
      </div>
    </section>
  );
}
