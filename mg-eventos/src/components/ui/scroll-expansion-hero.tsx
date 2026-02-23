"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  tagline?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  tagline,
  scrollToExpand = "Desliza para descubrir",
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as unknown as ReactWheelEvent;
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = we.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: Event) => {
      const te = e as unknown as ReactTouchEvent;
      setTouchStartY(te.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const te = e as unknown as ReactTouchEvent;
      if (!touchStartY) return;
      const touchY = te.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const newProgress = Math.min(Math.max(scrollProgress + deltaY * scrollFactor, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => setTouchStartY(0);

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const check = (): void => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Fondo que desaparece al expandir */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="MG Eventos — Fondo"
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover object-center"
              priority
            />
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Contenedor del video/imagen que se expande */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 60px rgba(0,0,0,0.5)",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      disablePictureInPicture
                    />
                    {/* Overlay sobre el video */}
                    <motion.div
                      className="absolute inset-0 bg-black/40"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.45 - scrollProgress * 0.25 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || "MG Eventos"}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Textos laterales (tagline y scroll hint) */}
              <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                {tagline && (
                  <p
                    className="text-sm md:text-base font-heading font-semibold tracking-[0.2em] uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {tagline}
                  </p>
                )}
                {scrollToExpand && (
                  <p
                    className="text-xs md:text-sm font-body text-white mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>

              {/* Título principal — las dos palabras se separan al scrollear */}
              <div
                className={`flex items-center justify-center text-center gap-3 md:gap-6 w-full relative z-10 transition-none flex-col pointer-events-none ${
                  textBlend ? "mix-blend-difference" : "mix-blend-normal"
                }`}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-none drop-shadow-2xl transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-center text-white tracking-tight leading-none drop-shadow-2xl transition-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h1>
              </div>

              {/* Indicador de scroll animado */}
              {!mediaFullyExpanded && (
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                  animate={{ opacity: scrollProgress > 0.3 ? 0 : 1, y: [0, 6, 0] }}
                  transition={{ y: { repeat: Infinity, duration: 1.5 }, opacity: { duration: 0.3 } }}
                >
                  <p className="text-white/50 text-xs font-body tracking-widest uppercase">
                    scroll
                  </p>
                  <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
              )}
            </div>

            {/* Contenido post-expansión — aparece cuando el video ocupa toda la pantalla */}
            <motion.section
              className="flex flex-col w-full px-6 py-12 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
