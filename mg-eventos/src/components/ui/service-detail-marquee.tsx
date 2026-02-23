"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StatItem } from "@/types";
import { ReactNode } from "react";

/* ─── Marquee helper ─────────────────────────────────────────── */
interface MarqueeRowProps {
  images: string[];
  reverse?: boolean;
  speed?: number;
}

function MarqueeRow({ images, reverse = false, speed = 28 }: MarqueeRowProps) {
  return (
    <div
      className="group flex overflow-hidden gap-3"
      style={{ "--duration": `${speed}s`, "--gap": "0.75rem" } as React.CSSProperties}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-3 animate-marquee",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative w-44 h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-md"
            >
              <Image src={src} alt={`MG Eventos galería ${idx + 1}`} fill className="object-cover" sizes="176px" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export interface ServiceDetailMarqueeProps {
  tag?: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  cta?: { text: string; href: string };
  stats?: StatItem[];
  marqueeImages: string[];
  children?: ReactNode;
  className?: string;
}

export function ServiceDetailMarquee({
  tag,
  title,
  paragraphs,
  listItems,
  cta,
  stats = [],
  marqueeImages,
  children,
  className,
}: ServiceDetailMarqueeProps) {
  // Dividir imágenes en dos filas
  const half = Math.ceil(marqueeImages.length / 2);
  const row1 = marqueeImages.slice(0, half);
  const row2 = marqueeImages.slice(half);

  return (
    <section className={cn("w-full bg-white overflow-hidden py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Columna izquierda — contenido ─────────── */}
          <div className="text-center md:text-left">
            {tag && (
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                {tag}
              </span>
            )}

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 leading-tight mb-5">
              {title}
            </h2>

            {paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-600 font-body text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {listItems && listItems.length > 0 && (
              <ul className="mt-2 mb-8 space-y-2.5">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700 font-body">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-secondary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Stats horizontales */}
            {stats.length > 0 && (
              <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 pt-6 border-t border-neutral-100">
                {stats.map((s) => (
                  <div key={s.label} className="text-center min-w-[80px]">
                    <p className="font-heading font-extrabold text-3xl md:text-4xl text-secondary leading-none">
                      <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className="font-body text-xs uppercase tracking-widest text-neutral-500 mt-1.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {children}

            {cta && (
              <div className="flex justify-center md:justify-start">
                <a
                  href={cta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-secondary text-white font-heading font-bold text-sm hover:bg-secondary/90 shadow-md shadow-secondary/20 transition-all group"
                >
                {cta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              </div>
            )}
          </div>

          {/* ── Columna derecha — marquee ──────────────── */}
          <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px" }}>
            <div className="absolute inset-0 flex flex-col gap-3 py-2">
              <MarqueeRow images={row1} reverse speed={28} />
              <MarqueeRow images={row2} speed={32} />
            </div>
            {/* Vignettas superior e inferior para suavizar */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
