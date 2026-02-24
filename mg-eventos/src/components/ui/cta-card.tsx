"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CtaCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      primaryCta,
      secondaryCta,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100, damping: 12 },
      },
    };
    const titleVariants = {
      hidden: { y: -28, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl shadow-xl min-h-[320px]",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Dark gradient overlay — más oscuro para legibilidad y contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        {/* Halo decorativo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <motion.div
          className="relative z-10 grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Texto — sombra para contraste sobre imagen */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left text-white">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight text-center md:text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]"
              variants={titleVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-lg text-white font-body leading-relaxed text-center md:text-left text-justify drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          {/* CTAs — sombra para mejor contraste */}
          <motion.div
            className="flex flex-col items-center md:items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-heading font-bold text-base hover:bg-neutral-100 shadow-xl shadow-black/30 transition-all group"
            >
              {primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/70 text-white font-heading font-semibold text-base hover:bg-white/15 backdrop-blur-sm transition-all shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              {secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
