# Plataforma Digital Entrenamiento

Plataforma digital fitness para el gimnasio **Gesundheitsforum Dienstbier**.

> **Estado actual:** fase de diseño visual. El frontend es una simulación en localhost.
> Aún no hay conexión a base de datos, Docker ni lógica de negocio. Esa lógica se
> implementará una vez aprobado el diseño.

## Estructura por roles

```
gesundheitsforum-dienstbier/
├── frontend/   → Rol: Frontend (Next.js) — web pública, dashboard cliente y admin (visual)
├── backend/    → Rol: Backend (NestJS) — API, módulos de dominio (vacío por ahora)
├── database/   → Rol: Datos (PostgreSQL + Prisma) — esquema y migraciones (pendiente)
├── design/     → Rol: Diseño (UI/UX, identidad, assets, Figma exports)
└── docs/       → Rol: Producto / documentación (decisiones, sistema de diseño)
```

## Requisitos

- Node.js 20 o superior
- npm
- VS Code (recomendado)

## Cómo ejecutar el frontend en localhost

```bash
cd frontend
npm install
npm run dev
```

Abrir <http://localhost:3000>.

Rutas disponibles:

| Ruta         | Descripción                                   |
| ------------ | --------------------------------------------- |
| `/`          | Landing principal (hero cinematográfico)      |
| `/dashboard` | Zona privada del cliente (datos simulados)    |
| `/admin`     | Dashboard administrativo (datos simulados)    |

## Paleta de colores

| Nombre          | HEX       | Uso                         |
| --------------- | --------- | --------------------------- |
| Ivory White     | `#f5f5f0` | Fondos claros               |
| Fresh Lime Green| `#9acd32` | Acentos y llamadas a la acción |
| Charcoal Gray   | `#4a4a4a` | Texto secundario            |
| Dark Graphite   | `#2d2d2d` | Superficies oscuras         |
| Deep Black      | `#1a1a1a` | Texto principal y fondos    |

Los tokens están definidos en `frontend/app/globals.css` (`:root`).

## Flujo de trabajo con Git

- Rama principal: `main` (protegida cuando haya equipo).
- Ramas de trabajo: `feature/<rol>-<descripcion>`, por ejemplo `feature/frontend-hero`.
- Commits en español o inglés, con prefijo: `feat:`, `fix:`, `style:`, `docs:`, `chore:`.
