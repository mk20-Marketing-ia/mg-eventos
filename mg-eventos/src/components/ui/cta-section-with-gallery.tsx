"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

interface GalleryGridCellProps extends Omit<MotionDivProps, "children"> {
  index: number;
  children?: React.ReactNode;
}

const SPRING_TRANSITION_CONFIG = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
};

const filterVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
  },
};

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3",
  "col-start-1 col-end-2 row-start-2 row-end-4",
  "col-start-1 col-end-2 row-start-4 row-end-6",
  "col-start-2 col-end-3 row-start-3 row-end-5",
];

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  MotionDivProps
>(({ transition, ...props }, ref) => {
  const stagger = (transition as { staggerChildren?: number; delayChildren?: number }) ?? {};
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        ...staggerVariants,
        visible: {
          transition: {
            staggerChildren: stagger.staggerChildren ?? 0.2,
            delayChildren: stagger.delayChildren ?? 0.2,
          },
        },
      }}
      {...props}
    />
  );
});
ContainerStagger.displayName = "ContainerStagger";

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  MotionDivProps
>(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={filterVariants}
      transition={{
        ...SPRING_TRANSITION_CONFIG,
        duration: 0.3,
        ...(transition as object),
      }}
      {...props}
    />
  );
});
ContainerAnimated.displayName = "ContainerAnimated";

export const GalleryGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 grid-rows-[50px_150px_50px_150px_50px] gap-4",
        className
      )}
      {...props}
    />
  );
});
GalleryGrid.displayName = "GalleryGrid";

export const GalleryGridCell = React.forwardRef<HTMLDivElement, GalleryGridCellProps>(
  ({ className, transition, index, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: index * 0.2,
          delayChildren: (transition as { delayChildren?: number })?.delayChildren ?? 0.2,
        }}
        className={cn(
          "relative overflow-hidden rounded-xl shadow-xl",
          areaClasses[index],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
GalleryGridCell.displayName = "GalleryGridCell";

export interface CtaSectionWithGalleryProps {
  tag?: string;
  title: string;
  description: string;
  listItems?: string[];
  ctaText: string;
  ctaHref: string;
  images: string[];
  className?: string;
}

export function CtaSectionWithGallery({
  tag,
  title,
  description,
  listItems = [],
  ctaText,
  ctaHref,
  images,
  className,
}: CtaSectionWithGalleryProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <ContainerStagger className="flex flex-col text-center md:text-left items-center md:items-start">
          {tag && (
            <ContainerAnimated className="mb-4 block text-xs font-medium text-secondary md:text-sm font-heading uppercase tracking-wider">
              {tag}
            </ContainerAnimated>
          )}
          <ContainerAnimated className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl font-heading text-center">
            {title}
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-neutral-600 md:my-6 md:text-lg font-body leading-relaxed text-center text-justify">
            {description}
          </ContainerAnimated>
          {listItems.length > 0 && (
            <ContainerAnimated className="my-4 space-y-2 md:my-6 text-left">
              {listItems.map((item) => (
                <div key={item} className="flex items-center gap-2 font-body text-neutral-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </div>
              ))}
            </ContainerAnimated>
          )}
          <ContainerAnimated>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-7 py-3.5 text-base font-heading font-semibold text-white shadow-md shadow-secondary/20 transition-all hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              {ctaText}
            </a>
          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {images.slice(0, 4).map((src, index) => (
            <GalleryGridCell index={index} key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="size-full object-cover object-center"
                src={src}
                alt=""
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  );
}
