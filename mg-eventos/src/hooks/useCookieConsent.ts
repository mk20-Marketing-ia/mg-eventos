"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getStoredConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/cookieConsent";

export interface UseCookieConsentReturn {
  consent: ConsentState;
  isLoaded: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  deny: () => void;
  openBanner: () => void;
}

export function useCookieConsent(): UseCookieConsentReturn {
  // Estado inicial SSR-safe: null para evitar hidratación mismatch
  const [consent, setConsent] = useState<ConsentState>({
    level: null,
    timestamp: null,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    // Mostrar banner solo si no hay preferencia guardada (primer acceso)
    if (stored.level === null) {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent("all");
    setConsent({ level: "all", timestamp: Date.now() });
    setShowBanner(false);
  }, []);

  const acceptEssential = useCallback(() => {
    saveConsent("essential");
    setConsent({ level: "essential", timestamp: Date.now() });
    setShowBanner(false);
  }, []);

  const deny = useCallback(() => {
    saveConsent("denied");
    setConsent({ level: "denied", timestamp: Date.now() });
    setShowBanner(false);
  }, []);

  const openBanner = useCallback(() => {
    setShowBanner(true);
  }, []);

  return {
    consent,
    isLoaded,
    showBanner,
    acceptAll,
    acceptEssential,
    deny,
    openBanner,
  };
}
