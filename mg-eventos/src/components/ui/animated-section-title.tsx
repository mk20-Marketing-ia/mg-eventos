"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3";

interface AnimatedSectionTitleProps {
  as?: Tag;
  className?: string;
  children: ReactNode;
  fromY?: number;
  delay?: number;
  duration?: number;
}

export function AnimatedSectionTitle({
  as: Tag = "h2",
  className,
  children,
  fromY = -28,
  delay = 0,
  duration = 0.55,
}: AnimatedSectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <div ref={ref}>
      <MotionTag
        initial={{ y: fromY, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: fromY, opacity: 0 }}
        transition={{ delay, duration, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(className)}
      >
        {children}
      </MotionTag>
    </div>
  );
}
