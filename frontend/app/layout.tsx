import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gesundheitsforum Dienstbier",
  description:
    "Plataforma fitness premium: musculación, cardio, yoga, sauna, nutrición y seguimiento de tu progreso.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
