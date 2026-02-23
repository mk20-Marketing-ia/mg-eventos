"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useCookieConsentContext } from "./CookieConsentProvider";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const {
    isLoaded,
    showBanner,
    acceptAll,
    acceptEssential,
    deny,
  } = useCookieConsentContext();

  if (!isLoaded || !showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-primary-dark text-white",
        "shadow-2xl border-t border-white/10",
        "animate-slide-up-from-bottom"
      )}
    >
      <div className="max-w-7xl mx-auto p-4 md:p-6 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex-1 pr-10 md:pr-0">
            <div className="flex items-start gap-3">
              <Cookie
                className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <div>
                <h2 className="font-heading font-bold text-lg text-white mb-1">
                  Usamos cookies
                </h2>
                <p className="font-body text-sm text-neutral-300 leading-relaxed">
                  Utilizamos cookies propias y de terceros para analizar el
                  tráfico y mejorar tu experiencia de navegación. Consulta
                  nuestra{" "}
                  <Link
                    href="/politica-de-cookies"
                    className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
                  >
                    Política de cookies
                  </Link>{" "}
                  y{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
                  >
                    Política de privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={acceptEssential}
            aria-label="Cerrar y usar solo cookies esenciales"
            className="absolute top-4 right-4 md:top-6 md:right-6 p-1 text-neutral-400 hover:text-white transition-colors rounded"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={acceptAll}
              className={cn(
                "px-5 py-2.5 rounded-lg font-heading font-bold",
                "bg-accent hover:bg-accent-warm text-primary-dark",
                "transition-colors duration-200"
              )}
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={acceptEssential}
              className={cn(
                "px-5 py-2.5 rounded-lg font-body text-sm",
                "bg-transparent border border-white/30",
                "hover:border-white hover:bg-white/10 text-white",
                "transition-colors duration-200"
              )}
            >
              Solo esenciales
            </button>
            <button
              type="button"
              onClick={deny}
              className={cn(
                "px-4 py-2.5 font-body text-sm",
                "bg-transparent hover:bg-white/5",
                "text-neutral-400 hover:text-white",
                "transition-colors duration-200"
              )}
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
