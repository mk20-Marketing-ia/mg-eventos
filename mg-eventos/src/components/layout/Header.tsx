"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="text-xl md:text-2xl font-heading font-extrabold text-white hover:text-accent transition-colors"
            >
              MG Eventos
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-body text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Inicio
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-3 py-2 text-sm font-body text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center gap-1">
                  Servicios
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden transition-all duration-200",
                    servicesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  )}
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.slug}
                      className="block px-4 py-3 text-sm text-neutral-700 hover:bg-secondary/5 hover:text-secondary transition-colors border-b border-neutral-100 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contacto"
                className="px-3 py-2 text-sm font-body text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Contacto
              </Link>

              <Link
                href="/contacto"
                className="ml-4 bg-secondary hover:bg-secondary-light text-white font-heading font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:shadow-glow"
              >
                Contáctanos
              </Link>
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
