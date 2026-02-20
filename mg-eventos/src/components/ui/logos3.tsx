"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image?: string;
  text?: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  subheading?: string;
  logos?: Logo[];
}

const Logos3 = ({
  heading = "Nuestros colaboradores",
  subheading,
  logos = [],
}: Logos3Props) => {
  // Duplicamos para que el loop infinito se vea fluido
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center mb-8 md:mb-12">
        <p className="text-xs font-heading font-semibold tracking-[0.18em] uppercase text-secondary/60 mb-2">
          Con la confianza de
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">
          {heading}
        </h2>
        {subheading && (
          <p className="text-neutral-500 font-body mt-3 max-w-xl">{subheading}</p>
        )}
      </div>

      <div className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.2 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {allLogos.map((logo, index) => (
              <CarouselItem
                key={`${logo.id}-${index}`}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="mx-6 md:mx-10 flex shrink-0 items-center justify-center h-16">
                  {logo.image ? (
                    <Image
                      src={logo.image}
                      alt={logo.description}
                      width={120}
                      height={32}
                      className={logo.className ?? "h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"}
                    />
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-100 bg-neutral-50 hover:border-secondary/30 hover:bg-secondary/5 transition-colors group">
                      <span className="text-sm font-heading font-semibold text-neutral-400 group-hover:text-secondary transition-colors whitespace-nowrap">
                        {logo.text ?? logo.description}
                      </span>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade lateral izquierdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Fade lateral derecho */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export { Logos3 };
