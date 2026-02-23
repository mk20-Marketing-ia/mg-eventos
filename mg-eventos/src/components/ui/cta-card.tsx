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
        {/* Dark gradient overlay — más oscuro a la izquierda para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
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
          {/* Texto */}
          <div className="flex flex-col items-start text-left text-white">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl font-heading leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-lg text-white/80 font-body leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col items-start md:items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-heading font-bold text-base hover:bg-neutral-100 shadow-lg transition-all group"
            >
              {primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-heading font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-all"
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
