"use client";

import { createContext, useContext } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import type { ConsentState } from "@/lib/cookieConsent";

export interface CookieConsentContextType {
  consent: ConsentState;
  isLoaded: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  deny: () => void;
  openBanner: () => void;
}

export const CookieConsentContext =
  createContext<CookieConsentContextType | null>(null);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useCookieConsent();
  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext(): CookieConsentContextType {
  const ctx = useContext(CookieConsentContext);
  if (!ctx)
    throw new Error(
      "useCookieConsentContext must be used inside CookieConsentProvider"
    );
  return ctx;
}
