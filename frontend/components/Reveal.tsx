"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";

type RevealProps = {
  children?: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "li";
};

// Envoltorio que añade la clase .is-visible cuando el elemento entra en pantalla.
export default function Reveal({ children, delay = 0, className = "", style, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mergedStyle = { "--delay": `${delay}ms`, ...style } as CSSProperties;
  const classes = `reveal ${className}`.trim();

  switch (as) {
    case "section":
      return <section ref={ref as RefObject<HTMLElement>} className={classes} style={mergedStyle}>{children}</section>;
    case "article":
      return <article ref={ref as RefObject<HTMLElement>} className={classes} style={mergedStyle}>{children}</article>;
    case "li":
      return <li ref={ref as RefObject<HTMLLIElement>} className={classes} style={mergedStyle}>{children}</li>;
    default:
      return <div ref={ref as RefObject<HTMLDivElement>} className={classes} style={mergedStyle}>{children}</div>;
  }
}
