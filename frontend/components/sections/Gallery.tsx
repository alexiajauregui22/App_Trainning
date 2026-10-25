import Reveal from "@/components/Reveal";
import { galleryItems } from "@/lib/data";

// Galería / tour visual de las instalaciones.
export default function Gallery() {
  return (
    <section className="section" id="instalaciones" aria-labelledby="galeria-title">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">Tour virtual</span>
            <h2 id="galeria-title">Explora nuestras instalaciones.</h2>
          </div>
          <p className="lead">Pesas, cardio, zonas funcionales, sauna, vestidores y cafetería saludable.</p>
        </Reveal>

        <div className="gallery">
          {galleryItems.map((g, i) => (
            <Reveal
              key={g.label}
              delay={(i % 3) * 100}
              className={`gallery-item ${g.size}`}
            >
              <div style={{ position: "absolute", inset: 0, background: g.bg }} />
              <span>{g.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
