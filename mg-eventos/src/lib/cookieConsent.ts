export type ConsentLevel = "all" | "essential" | "denied" | null;

export interface ConsentState {
  level: ConsentLevel;
  timestamp: number | null;
}

export const CONSENT_COOKIE_NAME = "mg-cookie-consent";
export const CONSENT_COOKIE_DAYS = 365;

export function getStoredConsent(): ConsentState {
  if (typeof document === "undefined") {
    return { level: null, timestamp: null };
  }

  try {
    const match = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith(`${CONSENT_COOKIE_NAME}=`));

    if (!match) return { level: null, timestamp: null };

    const raw = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(raw) as ConsentState;

    if (
      parsed &&
      typeof parsed === "object" &&
      ["all", "essential", "denied", null].includes(parsed.level)
    ) {
      return parsed;
    }

    return { level: null, timestamp: null };
  } catch {
    return { level: null, timestamp: null };
  }
}

export function saveConsent(level: Exclude<ConsentLevel, null>): void {
  if (typeof document === "undefined") return;

  const state: ConsentState = { level, timestamp: Date.now() };
  const value = encodeURIComponent(JSON.stringify(state));
  const expires = new Date();
  expires.setDate(expires.getDate() + CONSENT_COOKIE_DAYS);

  document.cookie = [
    `${CONSENT_COOKIE_NAME}=${value}`,
    `expires=${expires.toUTCString()}`,
    "path=/",
    "SameSite=Lax",
  ].join("; ");
}

export function clearConsent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

export function shouldLoadAnalytics(level: ConsentLevel): boolean {
  return level === "all";
}
