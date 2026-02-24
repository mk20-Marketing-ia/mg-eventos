"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, Variants, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ServiceCardItem {
  heading: string;
  description: string;
  imgSrc: string;
  href: string;
}

interface ColorChangeCardsProps {
  services: ServiceCardItem[];
  className?: string;
}

const ColorChangeCards = ({ services, className = "" }: ColorChangeCardsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const row1 = services.slice(0, 3);
  const row2 = services.slice(3);

  return (
    <div ref={ref} className={`px-4 py-4 md:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-6xl space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {row1.map((item, i) => (
            <ServiceCard key={i} index={i} isInView={isInView} {...item} />
          ))}
        </div>
        {row2.length > 0 && (
          <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 ${
              row2.length === 1
                ? "md:grid-cols-1 md:max-w-sm md:mx-auto"
                : "md:grid-cols-2 md:max-w-2xl md:mx-auto"
            }`}
          >
            {row2.map((item, i) => (
              <ServiceCard key={i + 3} index={i + 3} isInView={isInView} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- ServiceCard ---
type ServiceCardProps = ServiceCardItem & { index: number; isInView: boolean };

const ServiceCard = ({ heading, description, imgSrc, href, index, isInView }: ServiceCardProps) => {
  return (
    <Link href={href} className="block">
      <motion.div
        initial={{ y: -56, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut", staggerChildren: 0.035 }}
        whileHover="hover"
        className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-300"
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Contenido */}
        <div className="relative z-20 flex h-full flex-col justify-between p-5 text-white">
          <ArrowRight className="ml-auto text-2xl text-white/70 transition-transform duration-500 group-hover:-rotate-45 group-hover:text-white" />

          <div>
            <h4 className="font-heading font-bold text-2xl md:text-3xl mb-1">
              {heading.split("").map((letter, index) => (
                <AnimatedLetter letter={letter} key={index} />
              ))}
            </h4>
            {description ? <p className="font-body text-sm text-white/80 leading-snug">{description}</p> : null}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// --- AnimatedLetter ---
interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: { y: "-50%" },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <div className="inline-block h-[30px] md:h-[36px] overflow-hidden">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
