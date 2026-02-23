"use client";

import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";
import { useCookieConsentContext } from "./CookieConsentProvider";
import { shouldLoadAnalytics } from "@/lib/cookieConsent";

export function GTMConditionalLoader() {
  const { consent, isLoaded } = useCookieConsentContext();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gtmId) return null;
  if (!isLoaded) return null;
  if (!shouldLoadAnalytics(consent.level)) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}

export { sendGTMEvent };
