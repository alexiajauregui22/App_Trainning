# Base de datos (rol: Datos — PostgreSQL + Prisma)

Estado: **pendiente**. No hay conexión ni esquema todavía.

## Entidades previstas

- `User` (perfil, rol, datos de contacto)
- `Membership` / `Plan` (básico, premium, élite)
- `Subscription` (usuario ↔ plan, fechas de renovación)
- `Payment` (monto, estado, proveedor)
- `Booking` (clase, entrenador o sauna; fecha y hora)
- `Class`, `Trainer`, `SaunaSession`
- `WorkoutLog` (historial de entrenamientos)
- `BodyMetric` (peso, masa muscular, % grasa, IMC, fecha)
- `ProgressPhoto` (referencia al archivo almacenado)
- `Notification`

El esquema Prisma irá en `database/prisma/schema.prisma` cuando se apruebe el diseño.
