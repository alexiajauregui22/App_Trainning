# Sistema de diseño: Gesundheitsforum Dienstbier

## Dirección visual

Contemporáneo, minimalista y cinematográfico. La web debe sentirse como una
plataforma fitness de alto nivel, no como una página de gimnasio tradicional.
Referencias de tono: Apple Fitness+, Nike Training Club, Equinox, Technogym.

## Paleta

| Token              | HEX       | Rol                                  |
| ------------------ | --------- | ------------------------------------ |
| `--ivory`          | `#f5f5f0` | Fondo principal claro                |
| `--lime`           | `#9acd32` | Acento, CTA, indicadores de progreso |
| `--charcoal`       | `#4a4a4a` | Texto secundario, bordes sobre claro |
| `--graphite`       | `#2d2d2d` | Tarjetas y superficies oscuras       |
| `--black`          | `#1a1a1a` | Texto principal, secciones oscuras   |

### Reglas de uso

- El verde lima se usa con moderación: CTA principal, un acento por sección y datos clave.
- Texto sobre fondos oscuros: `--ivory`. Texto sobre fondos claros: `--black`.
- El verde lima sobre fondos claros no debe usarse para texto pequeño (contraste insuficiente). Usarlo como fondo de botón con texto negro.

## Tipografía

- Familia: sans-serif geométrica. Actualmente usa la pila del sistema
  (`Inter` si está instalada). Pendiente decidir fuente final y cargarla con `next/font`.
- Títulos: peso 700, interletrado ajustado (`-0.02em`), altura de línea cerrada.
- Etiquetas (eyebrow): mayúsculas, interletrado amplio (`0.2em`), tamaño pequeño.

## Movimiento

- Entradas con desplazamiento vertical suave al hacer scroll (`.reveal`).
- Hero con video de fondo a pantalla completa y banda animada de disciplinas.
- Respetar `prefers-reduced-motion`: sin animaciones para usuarios que lo solicitan.

## Componentes base

- Botones: `btn-primary` (lima), `btn-ghost` (contorno).
- Secciones: fondo claro (`ivory`) o oscuro (`black` / `graphite`).
- Tarjetas: radio 18px, borde sutil `rgba(26,26,26,.12)`.

## Pendientes de diseño

- [ ] Videos cinematográficos reales (hero y tarjetas de servicios).
- [ ] Fotografías de instalaciones y de transformaciones (con consentimiento).
- [ ] Logotipo oficial del gimnasio.
- [ ] Validación de la paleta en modo oscuro del dashboard.
