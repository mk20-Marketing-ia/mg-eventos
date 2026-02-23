"use client";

import { useCookieConsentContext } from "./CookieConsentProvider";

export function CookieSettingsButton() {
  const { openBanner } = useCookieConsentContext();

  return (
    <button
      type="button"
      onClick={openBanner}
      className="text-neutral-500 hover:text-neutral-300 text-sm font-body transition-colors underline underline-offset-2 ml-4"
    >
      Gestionar cookies
    </button>
  );
}
