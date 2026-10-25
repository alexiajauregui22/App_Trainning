# Backend (rol: Backend — NestJS)

Estado: **estructura creada, sin lógica implementada**. La lógica se escribirá
cuando el diseño visual esté aprobado.

## Módulos planificados

Cada carpeta dentro de `src/modules/` corresponde a un dominio del negocio:

| Módulo          | Responsabilidad                                                     |
| --------------- | ------------------------------------------------------------------- |
| `auth`          | Registro, inicio de sesión, JWT                                     |
| `users`         | Perfiles personales y roles (cliente / entrenador / administrador)  |
| `memberships`   | Planes (básico, premium, élite) y suscripciones                     |
| `payments`      | Pagos online (Stripe o Mercado Pago), estado de pagos               |
| `bookings`      | Reservas de clases, entrenadores personales y sauna                 |
| `progress`      | Peso, masa muscular, % grasa, IMC, fotos de progreso, historial     |
| `notifications` | Renovaciones, promociones y recordatorios (Firebase)                |
| `ai`            | Futuro: recomendaciones deportivas, nutricionales y rutinas         |

Cada módulo seguirá la convención NestJS: `*.module.ts`, `*.controller.ts`,
`*.service.ts`, y `dto/` para validación de entrada.

## Stack objetivo

NestJS · PostgreSQL · Prisma · Redis · JWT · Stripe/Mercado Pago · Firebase.
