name: "PRP — MG Eventos Fase 2: Analytics, Legalidad y Formulario SMTP"
version: "1.0-ES"
stack: "Next.js 14 App Router, TypeScript, Tailwind CSS, Nodemailer, @next/third-parties"
descripcion: |
  PRP de continuación del proyecto MG Eventos. La Fase 1 entregó el sitio completo en Vercel.
  La Fase 2 añade medición (GTM → GA4), banner RGPD/GDPR con bloqueo condicional, tres páginas
  legales, actualización del Footer y formulario de contacto funcional vía SMTP con doble correo.

---

## 🎯 Objetivo

MG Eventos Fase 2 — Añadir a la web ya productiva en Vercel la capa de medición (GTM + GA4 + Search Console), cumplimiento legal RGPD (banner de cookies, páginas legales), Footer completo y formulario de contacto con envío SMTP real a empresa y cliente.

## 💡 Por Qué

- **Medición:** Sin GTM/GA4, el cliente no sabe de dónde vienen sus leads ni qué páginas convierten.
- **Legalidad:** La web opera en la UE; sin banner RGPD y páginas legales hay riesgo de sanción.
- **Conversión:** El formulario de contacto que no envía correos no convierte ni genera leads reales.
- **Confianza:** Footer con enlaces legales completos transmite profesionalidad y transparencia.

## 📋 Qué

5 módulos sobre el codebase existente:
1. GTM integrado condicionalmente con `@next/third-parties`
2. Banner RGPD propio (sin librerías) con 3 niveles de consentimiento
3. 3 páginas legales construidas desde el contenido ya redactado en `docs/pages/`
4. Footer actualizado con todos los enlaces legales + botón "Gestionar cookies"
5. API route SMTP + doble email (empresa + cliente) con Nodemailer

### Criterios de Éxito
- [ ] GTM se carga **solo** si el usuario acepta cookies analíticas
- [ ] Banner aparece en primer acceso, no reaparece si hay preferencia guardada
- [ ] `/politica-de-cookies`, `/politica-de-privacidad`, `/aviso-legal` son accesibles
- [ ] Las 3 páginas legales tienen `robots: noindex, nofollow`
- [ ] Footer muestra los 3 links legales + "Gestionar cookies"
- [ ] Formulario de contacto envía 2 emails reales cuando SMTP está configurado
- [ ] Si SMTP no está configurado, la API devuelve 503 sin romper la UI
- [ ] `npx next lint` y `npx tsc --noEmit` sin errores

---

## 🏢 Información del Negocio

```yaml
nombre: "MG Eventos"
sector: "Animación y música para eventos en Galicia"
propuesta_valor: "Animadores de fiesta en Galicia con +10 años de experiencia. DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos."
publico_objetivo: "Particulares y empresas en Galicia que organizan bodas, fiestas privadas y eventos corporativos"
ubicacion: "Pontecesures, Galicia, España"
alcance: "Local / Regional (Galicia)"
tono_voz: "Cercano, profesional, energético. Transmite experiencia y confianza"
url_objetivo: "mgeventos.es"
email_contacto: "info@mgeventos.es"
telefono: "636 20 33 45"
direccion_fiscal: "Rúa Carlos Maside SN, 36640 Pontecesures"
titular_fiscal: "IVÁN MATA GASPAR — CIF/NIF: 44821622G"
```

---

## 🎨 Sistema de Diseño (Heredado de Fase 1 — No Modificar)

### Paleta de Colores

```yaml
primary:
  DEFAULT: "#1E1B4B"   # Headers, footer, fondos oscuros
  light: "#312E81"     # Hover en fondos oscuros
  dark: "#0F0D2E"      # Footer bottom, primary muy oscuro

secondary:
  DEFAULT: "#7C3AED"   # Botones principales, acentos UI
  light: "#8B5CF6"
  dark: "#6D28D9"

accent:
  DEFAULT: "#F59E0B"   # CTAs principales, highlights, "Aceptar todas"
  light: "#FBBF24"
  warm: "#D97706"

whatsapp: "#25D366"
surface: "#FFFFFF"

neutral:
  50: "#F8FAFC"
  100: "#F1F5F9"
  200: "#E2E8F0"
  300: "#CBD5E1"
  400: "#94A3B8"
  500: "#64748B"
  600: "#475569"
  700: "#334155"
  800: "#1E293B"
  900: "#0F172A"
```

### Tipografías

```yaml
heading:
  nombre: "Plus Jakarta Sans"
  pesos: [600, 700, 800]
  variable: "--font-jakarta"
  clase: "font-heading"
  uso: "Títulos H1-H6, labels en mayúsculas"
  import: "@fontsource/plus-jakarta-sans/{600,700,800}.css"

body:
  nombre: "Inter"
  pesos: [400, 500]
  variable: "--font-inter"
  clase: "font-body"
  uso: "Párrafos, texto general, inputs"
  import: "@fontsource/inter/{400,500}.css"
```

### Animaciones disponibles (Tailwind keyframes existentes)

```yaml
animate-fade-in: "fadeIn 0.6s ease-out forwards"
animate-slide-up: "slideUp 0.6s ease-out forwards"
animate-slide-in-left: "slideInLeft 0.6s ease-out forwards"
animate-slide-in-right: "slideInRight 0.6s ease-out forwards"
animate-float: "float 3s ease-in-out infinite"
```

---

## 🗺️ Arquitectura de la Fase 2

### Nuevas URLs

```yaml
paginas_nuevas:
  - url: "/politica-de-cookies"
    robots: "noindex, nofollow"
    schema: "WebPage"
    prioridad_sitemap: 0.2

  - url: "/politica-de-privacidad"
    robots: "noindex, nofollow"
    schema: "WebPage"
    prioridad_sitemap: 0.2

  - url: "/aviso-legal"
    robots: "noindex, nofollow"
    schema: "WebPage"
    prioridad_sitemap: 0.2

endpoints_nuevos:
  - url: "/api/contacto"
    metodo: "POST"
    runtime: "nodejs"  # NO Edge — Nodemailer requiere Node
    acceso: "Server-side only"
```

### Mapa de Archivos

```yaml
NUEVOS:
  - src/lib/cookieConsent.ts
  - src/hooks/useCookieConsent.ts
  - src/components/cookies/CookieConsentProvider.tsx
  - src/components/cookies/GTMConditionalLoader.tsx
  - src/components/cookies/CookieBanner.tsx
  - src/app/politica-de-cookies/page.tsx
  - src/app/politica-de-privacidad/page.tsx
  - src/app/aviso-legal/page.tsx
  - src/app/api/contacto/route.ts
  - .env.local

MODIFICADOS:
  - src/app/layout.tsx          # + CookieProvider + GTMLoader + CookieBanner
  - src/components/layout/Footer.tsx  # + 2 links legales + "Gestionar cookies"
  - src/app/contacto/page.tsx   # setTimeout → fetch POST /api/contacto
```

---

## 🧰 Skills del Proyecto

```yaml
nextjs-best-practices:
  cuándo: "Siempre al escribir código Next.js 14"
  obligatorio: true

react-patterns:
  cuándo: "Context Provider, hooks, componentes client"
  obligatorio: true

tailwind-patterns:
  cuándo: "Al escribir estilos del banner y páginas legales"
  obligatorio: true

frontend-design:
  cuándo: "Diseño del banner de cookies"
  obligatorio: true

cc-skill-security-review:
  cuándo: "Al implementar la API route SMTP (credenciales, validación)"
  obligatorio: true

analytics-tracking:
  cuándo: "Configurar GTM condicional y eventos GA4"
  obligatorio: true

lint-and-validate:
  cuándo: "Después de CADA tarea completada"
  obligatorio: true

verification-before-completion:
  cuándo: "Antes de declarar la Fase 2 completa"
  obligatorio: true
```

---

## 🔌 Guía de MCPs

### MCP Archon
```yaml
queries_relevantes:
  - "Next.js Script component third-party"
  - "Next.js API route POST handler"
  - "React context provider pattern"
  - "Next.js metadata robots noindex"
```

### MCP Serena
```yaml
uso_principal: "Leer y editar simbólicamente layout.tsx, Footer.tsx y contacto/page.tsx sin leer archivos completos"
herramientas:
  - find_symbol('RootLayout', 'src/app/layout.tsx', True)
  - find_symbol('Footer', 'src/components/layout/Footer.tsx', True)
  - replace_symbol_body() para ediciones quirúrgicas
```

---

## 📦 Codebase

### Estructura Actual (Fase 1 entregada)

```
src/
├── app/
│   ├── layout.tsx              ← MODIFICAR: añadir providers
│   ├── page.tsx
│   ├── contacto/
│   │   ├── layout.tsx
│   │   └── page.tsx            ← MODIFICAR: conectar SMTP
│   ├── discotecas-moviles-en-galicia/page.tsx
│   ├── dj-para-bodas-en-galicia/page.tsx
│   ├── dj-para-eventos-en-galicia/page.tsx
│   ├── dj-para-fiestas-en-galicia/page.tsx
│   ├── escenario-movil-para-eventos/page.tsx
│   ├── fotomaton-en-galicia/page.tsx
│   ├── pantallas-led-para-eventos-en-galicia/page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Footer.tsx          ← MODIFICAR: 3 links legales + gestionar cookies
│   │   ├── Header.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/ [8 componentes]
│   ├── seo/ [6 componentes Schema]
│   └── ui/ [15 componentes]
├── hooks/
│   └── useIntersectionObserver.ts
├── lib/
│   ├── constants.ts
│   ├── metadata.ts
│   └── utils.ts
└── styles/
    └── globals.css
```

### Gotchas Conocidos

```yaml
Next.js 14:
  - "CRÍTICO: API route con Nodemailer necesita export const runtime = 'nodejs'"
  - "CRÍTICO: Variables SMTP sin NEXT_PUBLIC_ son solo Server-side (seguras)"
  - "CRÍTICO: GTM_ID necesita NEXT_PUBLIC_ porque se usa en client component"
  - "PATRÓN: useEffect para leer cookies del browser (SSR no accede a document.cookie)"
  - "GOTCHA: El Context Provider debe ser 'use client'; layout.tsx puede ser Server Component importándolo"

Cookies RGPD:
  - "PATRÓN: Guardar en cookie (no solo localStorage) para futura compatibilidad SSR"
  - "GOTCHA: Hidratación — el banner no debe renderizarse en SSR para evitar mismatch"
  - "PATRÓN: useState con null inicial + useEffect para leer preferencia guardada"

SMTP / Nodemailer:
  - "CRÍTICO: Verificar SMTP_HOST, SMTP_USER, SMTP_PASS antes de crear transporter"
  - "PATRÓN: Si faltan variables → return 503 con mensaje claro"
  - "GOTCHA: Gmail requiere App Password (no contraseña principal) si 2FA activo"
  - "PATRÓN: Usar try/catch separados para cada sendMail (empresa y cliente)"

Tailwind:
  - "PATRÓN: Usar cn() de lib/utils.ts para clases condicionales"
  - "GOTCHA: bg-primary-dark, text-accent etc. ya están definidos, no redefinir"
```

---

## 📝 Lista de Tareas

---

### TAREA 1: Tipos, Utilidades y Hook de Consentimiento

**Herramientas:**
- 📚 Skills: react-patterns, nextjs-best-practices
- 🔧 MCP Serena: Consultar `src/lib/utils.ts` para patrón existente

**Objetivo:** Base tipada del sistema de consentimiento de cookies, reutilizable en todos los componentes posteriores.

**Archivo a crear: `src/lib/cookieConsent.ts`**

```typescript
// Tipos
export type ConsentLevel = 'all' | 'essential' | 'denied' | null;

export interface ConsentState {
  level: ConsentLevel;
  timestamp: number | null;
}

// Constantes
export const CONSENT_COOKIE_NAME = 'mg-cookie-consent';
export const CONSENT_COOKIE_DAYS = 365;

// Utilidades
export function getStoredConsent(): ConsentState
  // Leer cookie `mg-cookie-consent` del document.cookie
  // Parsear JSON guardado: { level, timestamp }
  // Si no existe o está malformado → return { level: null, timestamp: null }

export function saveConsent(level: Exclude<ConsentLevel, null>): void
  // Crear cookie con nombre CONSENT_COOKIE_NAME
  // Valor: JSON.stringify({ level, timestamp: Date.now() })
  // Expires: CONSENT_COOKIE_DAYS días desde ahora
  // Path: /
  // SameSite: Lax

export function clearConsent(): void
  // Eliminar la cookie (expires en el pasado)

export function shouldLoadAnalytics(level: ConsentLevel): boolean
  // Retorna true SOLO si level === 'all'
```

**Archivo a crear: `src/hooks/useCookieConsent.ts`**

```typescript
'use client';
// Hook que expone el estado de consentimiento y las acciones
export function useCookieConsent(): {
  consent: ConsentState;
  isLoaded: boolean;    // false mientras lee la cookie (evita mismatch hidratación)
  acceptAll: () => void;
  acceptEssential: () => void;
  deny: () => void;
  openBanner: () => void;  // Para el botón "Gestionar cookies" del footer
}
// Estado inicial: { level: null, timestamp: null }, isLoaded: false
// useEffect al montar: leer getStoredConsent(), setear estado, setIsLoaded(true)
```

**Criterios:**
- [ ] `ConsentLevel`, `ConsentState` exportados y tipados correctamente
- [ ] Cookie se guarda con `SameSite=Lax; Path=/`
- [ ] `shouldLoadAnalytics` retorna `false` para `null`, `'essential'` y `'denied'`
- [ ] Hook retorna `isLoaded: false` en SSR (evita hidratación mismatch)

---

### TAREA 2: Context Provider y GTM Conditional Loader

**Herramientas:**
- 📚 Skills: react-patterns, nextjs-best-practices, analytics-tracking
- 🔧 MCP Archon: `rag_search_knowledge_base(query="Next.js third-party scripts GTM", match_count=5)`

**Objetivo:** Provider que expone el estado de consentimiento globalmente + componente que solo carga GTM si el usuario aceptó analíticas.

**Archivo a crear: `src/components/cookies/CookieConsentProvider.tsx`**

```typescript
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { getStoredConsent, saveConsent, clearConsent, ConsentState, ConsentLevel } from '@/lib/cookieConsent';

interface CookieConsentContextType {
  consent: ConsentState;
  isLoaded: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  deny: () => void;
  openBanner: () => void;
}

export const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  // Estado inicial SSR-safe: level null, isLoaded false, showBanner false
  // useEffect al montar:
  //   1. Leer getStoredConsent()
  //   2. Si level === null → setShowBanner(true)  (primer acceso)
  //   3. setIsLoaded(true)
  // acceptAll: saveConsent('all'), setConsent, setShowBanner(false)
  // acceptEssential: saveConsent('essential'), setConsent, setShowBanner(false)
  // deny: saveConsent('denied'), setConsent, setShowBanner(false)
  // openBanner: setShowBanner(true)  (para el footer)
}

export function useCookieConsentContext(): CookieConsentContextType {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsentContext must be used inside CookieConsentProvider');
  return ctx;
}
```

**Archivo a crear: `src/components/cookies/GTMConditionalLoader.tsx`**

```typescript
'use client';
import { useEffect } from 'react';
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google';
import { useCookieConsentContext } from './CookieConsentProvider';
import { shouldLoadAnalytics } from '@/lib/cookieConsent';

export function GTMConditionalLoader() {
  const { consent, isLoaded } = useCookieConsentContext();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  // Si no hay gtmId configurado, no renderizar nada
  if (!gtmId) return null;
  // Si no está cargado el consentimiento aún, no renderizar (SSR-safe)
  if (!isLoaded) return null;
  // Si no acepta analíticas, no renderizar
  if (!shouldLoadAnalytics(consent.level)) return null;

  // Solo llega aquí si consent.level === 'all'
  return <GoogleTagManager gtmId={gtmId} />;
}

// Exportar también para uso en componentes de formulario
export { sendGTMEvent };
```

**Criterios:**
- [ ] GTMConditionalLoader no renderiza nada si `NEXT_PUBLIC_GTM_ID` no está definida
- [ ] GTMConditionalLoader no renderiza nada hasta que `isLoaded === true`
- [ ] GTMConditionalLoader solo renderiza `<GoogleTagManager>` si `consent.level === 'all'`
- [ ] Provider no produce error de hidratación (estado inicial SSR-neutral)

---

### TAREA 3: Banner de Cookies RGPD/GDPR

**Herramientas:**
- 📚 Skills: frontend-design, react-patterns, tailwind-patterns
- 🎨 Design system: colores `primary-dark`, `accent`, `neutral-300`

**Objetivo:** Banner visual RGPD compliant, diseño alineado al sistema de diseño, con animación de entrada, tres acciones y enlaces a páginas legales.

**Archivo a crear: `src/components/cookies/CookieBanner.tsx`**

**Diseño exacto del banner:**

```
Layout: fixed bottom-0 left-0 right-0 z-50
Fondo: bg-primary-dark (azul oscuro #1E1B4B)
Sombra: shadow-2xl + border-t border-white/10
Animación entrada: translate-y desde 100% → 0 (0.4s ease-out)
Padding: p-4 md:p-6
Max-width interior: max-w-7xl mx-auto

┌─────────────────────────────────────────────────────────────────────────────┐
│  [🍪 icono]  Usamos cookies                                    [X cerrar]   │
│                                                                              │
│  Utilizamos cookies propias y de terceros para analizar el                  │
│  tráfico y mejorar tu experiencia de navegación.                             │
│  Consulta nuestra [Política de cookies] y [Política de privacidad].          │
│                                                                              │
│  [Rechazar]          [Solo esenciales]          [Aceptar todas]             │
└─────────────────────────────────────────────────────────────────────────────┘

Mobile (stacked):
- Texto arriba
- Botones en columna (Aceptar todas arriba, luego esenciales, luego rechazar)
```

**Especificación de botones:**

```yaml
boton_aceptar_todas:
  bg: "bg-accent hover:bg-accent-warm"
  text: "text-primary-dark font-heading font-bold"
  padding: "px-5 py-2.5"
  radius: "rounded-lg"
  transition: "transition-colors duration-200"

boton_solo_esenciales:
  bg: "bg-transparent border border-white/30 hover:border-white hover:bg-white/10"
  text: "text-white font-body text-sm"
  padding: "px-5 py-2.5"
  radius: "rounded-lg"

boton_rechazar:
  bg: "bg-transparent hover:bg-white/5"
  text: "text-neutral-400 hover:text-white font-body text-sm"
  padding: "px-4 py-2.5"
  underline: "no underline, solo hover color change"

boton_cerrar_X:
  posicion: "absolute top-4 right-4 md:top-6 md:right-6"
  icono: "X de lucide-react, tamaño w-5 h-5"
  color: "text-neutral-400 hover:text-white"
  accion: "acceptEssential()"  # cerrar sin aceptar = esenciales
```

**Links dentro del texto:**

```yaml
enlace_politica_cookies:
  href: "/politica-de-cookies"
  classes: "text-accent hover:text-accent-light underline underline-offset-2"

enlace_politica_privacidad:
  href: "/politica-de-privacidad"
  classes: "text-accent hover:text-accent-light underline underline-offset-2"
```

**Renderizado condicional:**

```typescript
// Solo renderizar cuando isLoaded && showBanner
// Para el responsive stacked usar flex-col en mobile, flex-row en md:
// En mobile los botones van debajo del texto, en desktop van a la derecha
```

**Criterios:**
- [ ] Banner no aparece en SSR (solo client-side tras leer cookie)
- [ ] Animación suave de entrada desde abajo (translate-y 100% → 0)
- [ ] Los 3 botones funcionan y cierran el banner
- [ ] Links a `/politica-de-cookies` y `/politica-de-privacidad` visibles
- [ ] Responsive: stacked en mobile, horizontal en desktop
- [ ] No rompe el layout de ninguna página

---

### TAREA 4: Actualizar Root Layout

**Herramientas:**
- 🔧 MCP Serena: `find_symbol('RootLayout', 'src/app/layout.tsx', True)` → edición quirúrgica
- 📚 Skills: nextjs-best-practices

**Objetivo:** Integrar el sistema de cookies y el loader de GTM en el layout raíz sin romper nada existente.

**`src/app/layout.tsx` — Estructura objetivo:**

```tsx
import { GoogleTagManager } from '@next/third-parties/google';
import { CookieConsentProvider } from '@/components/cookies/CookieConsentProvider';
import { GTMConditionalLoader } from '@/components/cookies/GTMConditionalLoader';
import { CookieBanner } from '@/components/cookies/CookieBanner';
// ... imports existentes (fonts, Header, Footer, WhatsAppFloat)

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* GTMConditionalLoader se coloca aquí pero es 'use client',
          internamente decide si renderiza <GoogleTagManager> o null */}
      <body className="antialiased">
        <CookieConsentProvider>
          <GTMConditionalLoader />
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
```

> **Nota arquitectural:** `RootLayout` puede seguir siendo Server Component. Los componentes `CookieConsentProvider`, `GTMConditionalLoader` y `CookieBanner` son `'use client'` internamente. Next.js 14 maneja correctamente la composición Server + Client Components de esta manera.

**Criterios:**
- [ ] Layout compila sin errores TypeScript
- [ ] `npx next lint` sin warnings
- [ ] Header, Footer y WhatsAppFloat siguen funcionando igual
- [ ] El Provider envuelve todo lo que necesita acceso al contexto

---

### TAREA 5: Página — `/politica-de-cookies`

**Herramientas:**
- 🔧 MCP Serena: Consultar `SchemaBreadcrumb` y `Breadcrumbs` para reutilizar patrón existente
- 📚 Skills: nextjs-best-practices, seo-fundamentals

**Metadata SEO:**

```yaml
meta_titulo: "Política de Cookies — MG Eventos"
meta_descripcion: "Información sobre las cookies utilizadas en mgeventos.es y cómo gestionarlas según la normativa española y europea."
robots: "noindex, nofollow"
url_canonica: "/politica-de-cookies"
breadcrumb: "Inicio > Política de cookies"
```

**Estructura de la página:**

```yaml
Sección 1 — Hero (patrón existente en otras páginas internas):
  fondo: "bg-primary pt-28 pb-16 md:pt-36 md:pb-20"
  contenido:
    breadcrumbs: true  # Componente Breadcrumbs existente con clases white
    h1: "Política de Cookies"
    subtitulo: "Información sobre el uso de cookies en mgeventos.es"
  schema: SchemaBreadcrumb (mismo patrón que contacto/page.tsx)

Sección 2 — Contenido legal:
  fondo: "bg-white py-12 md:py-16"
  layout: "max-w-3xl mx-auto" (texto legal centrado, no full-width)
  last_updated: "Última actualización: Febrero 2026"
  contenido_fuente: "docs/pages/politica-de-cookies.md"
  interpretacion_estructura:
    - Párrafo inicial: intro sobre normativa
    - H2: "¿Qué son las cookies?"
    - H2: "Tipos de cookies"  → lista numerada (1-9 tipos)
    - H2: "Tipos de cookies utilizadas por este sitio web"
    - H2: "Deshabilitación de las cookies" → lista de navegadores
    - Párrafo final: info sobre Analytics restringido

  estilos_contenido:
    h2: "font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4"
    parrafo: "font-body text-neutral-700 leading-relaxed mb-4"
    lista_numerada: "list-decimal list-inside space-y-2 font-body text-neutral-700"
    lista_bullets: "list-disc list-inside space-y-1 font-body text-neutral-600 ml-4"
    enlace: "text-secondary hover:text-secondary-dark underline"
    last_updated: "text-sm text-neutral-400 font-body mb-8 italic"
```

**`src/app/politica-de-cookies/page.tsx`:**

```typescript
import type { Metadata } from 'next';
// Server Component — no 'use client'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre las cookies utilizadas en mgeventos.es y cómo gestionarlas según la normativa española y europea.',
  robots: { index: false, follow: false },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <SchemaBreadcrumb items={[{ name: 'Inicio', href: '/' }, { name: 'Política de cookies', href: '/politica-de-cookies' }]} />
      {/* Hero + Contenido */}
    </>
  );
}
```

**Criterios:**
- [ ] Página accesible en `/politica-de-cookies`
- [ ] `robots: noindex, nofollow` verificado en `<head>`
- [ ] Breadcrumbs funcionales con Schema
- [ ] TODO el contenido del `.md` presente (nada omitido)
- [ ] Jerarquía H1 → H2 correcta
- [ ] Responsive y alineado al design system

---

### TAREA 6: Página — `/politica-de-privacidad`

**Metadata SEO:**

```yaml
meta_titulo: "Política de Privacidad — MG Eventos"
meta_descripcion: "Información sobre el tratamiento de tus datos personales en mgeventos.es según el RGPD y la normativa española."
robots: "noindex, nofollow"
url_canonica: "/politica-de-privacidad"
breadcrumb: "Inicio > Política de privacidad"
```

**Estructura de la página:**

```yaml
Sección 1 — Hero:
  mismo patrón que politica-de-cookies

Sección 2 — Contenido legal:
  contenido_fuente: "docs/pages/politica-de-privacidad.md"
  interpretacion_estructura:
    - H2: "1. Responsable del tratamiento"
    - H2: "2. Datos tratados, finalidades y plazos de conservación"
      - H3: "2.1 Datos tratados"
      - H3: "2.2 Finalidades"  → lista de 3 puntos
      - H3: "2.3 Conservación"
    - H2: "3. Legitimación del tratamiento"
    - H2: "4. Destinatarios y cesiones"
    - H2: "5. Ejercicio de derechos"
      → párrafo sobre derechos ARCO + portabilidad
      → indicar dirección y email del aviso legal para ejercer derechos
  
  estilos: mismos que politica-de-cookies
```

**Criterios:** Idénticos a TAREA 5.

---

### TAREA 7: Página — `/aviso-legal`

**Metadata SEO:**

```yaml
meta_titulo: "Aviso Legal — MG Eventos"
meta_descripcion: "Condiciones de uso, identificación del prestador y legislación aplicable del sitio web mgeventos.es."
robots: "noindex, nofollow"
url_canonica: "/aviso-legal"
breadcrumb: "Inicio > Aviso legal"
```

**Estructura de la página:**

```yaml
Sección 1 — Hero:
  mismo patrón

Sección 2 — Contenido legal:
  contenido_fuente: "docs/pages/aviso-legal.md"
  interpretacion_estructura:
    - H2: "1. Identificación del prestador"
      → tabla o lista con: Titular fiscal, CIF/NIF, Dirección, CP, Municipio, Email, Teléfono
    - H2: "2. Objeto"
    - H2: "3. Responsabilidad"
    - H2: "4. Propiedad intelectual e industrial"
    - H2: "5. Condiciones de acceso y uso"
      → lista de prohibiciones (I a IX)
    - H2: "6. Modificación y terminación de servicios"
    - H2: "7. Legislación y jurisdicción aplicable"

  datos_identificacion:
    titular: "IVÁN MATA GASPAR"
    cif: "44821622G"
    direccion: "Rúa Carlos Maside SN"
    cp: "36640"
    municipio: "Pontecesures"
    email: "info@mgeventos.es"
    telefono: "636 20 33 45"
  
  estilos_identificacion: "tabla con fondo neutral-50 o lista con dd/dt"
```

**Criterios:** Idénticos a TAREA 5.

---

### TAREA 8: Actualizar Footer

**Herramientas:**
- 🔧 MCP Serena: `find_symbol('Footer', 'src/components/layout/Footer.tsx', True)` → edición quirúrgica
- 📚 Skills: react-patterns

**Objetivo:** Añadir los 2 links legales que faltan en la columna "Legal" + botón "Gestionar cookies" en el pie del copyright.

**Estado actual de la columna Legal (líneas 89-103 de Footer.tsx):**
```tsx
<div>
  <h3>Legal</h3>
  <ul>
    <li><Link href="/politica-de-privacidad">Política de privacidad</Link></li>
  </ul>
</div>
```

**Estado objetivo de la columna Legal:**
```tsx
<div>
  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300 mb-4">
    Legal
  </h3>
  <ul className="space-y-2">
    <li>
      <Link href="/politica-de-privacidad"
        className="text-neutral-400 hover:text-white text-sm font-body transition-colors">
        Política de privacidad
      </Link>
    </li>
    <li>
      <Link href="/politica-de-cookies"
        className="text-neutral-400 hover:text-white text-sm font-body transition-colors">
        Política de cookies
      </Link>
    </li>
    <li>
      <Link href="/aviso-legal"
        className="text-neutral-400 hover:text-white text-sm font-body transition-colors">
        Aviso legal
      </Link>
    </li>
  </ul>
</div>
```

**Estado actual del pie del Footer (copyright):**
```tsx
<div className="mt-12 pt-8 border-t border-white/10 text-center">
  <p className="text-neutral-500 text-sm font-body">
    © {year} {SITE_NAME}. Todos los derechos reservados.
  </p>
</div>
```

**Estado objetivo del pie (añadir botón Gestionar cookies):**

```tsx
// Footer necesita convertirse en 'use client' para usar el contexto
// O bien, crear un sub-componente CookieSettingsButton separado como 'use client'
// Preferir la segunda opción para mantener Footer como Server Component

// src/components/cookies/CookieSettingsButton.tsx ('use client')
export function CookieSettingsButton() {
  const { openBanner } = useCookieConsentContext();
  return (
    <button
      onClick={openBanner}
      className="text-neutral-500 hover:text-neutral-300 text-sm font-body transition-colors underline underline-offset-2 ml-4"
    >
      Gestionar cookies
    </button>
  );
}

// En Footer.tsx:
<div className="mt-12 pt-8 border-t border-white/10 text-center">
  <p className="text-neutral-500 text-sm font-body">
    © {year} {SITE_NAME}. Todos los derechos reservados.
    <CookieSettingsButton />
  </p>
</div>
```

> **Nota arquitectural:** Esta estrategia mantiene Footer como Server Component (sin `'use client'`) añadiendo solo el pequeño sub-componente interactivo. Patrón recomendado en Next.js 14 App Router.

**Criterios:**
- [ ] Footer muestra 3 links en columna "Legal": privacidad, cookies, aviso legal
- [ ] Los 3 links apuntan a rutas correctas
- [ ] Botón "Gestionar cookies" visible junto al copyright
- [ ] Clic en "Gestionar cookies" reabre el banner
- [ ] Footer sigue siendo Server Component (sin 'use client' en el Footer principal)
- [ ] TypeScript sin errores

---

### TAREA 9: API Route SMTP — `/api/contacto`

**Herramientas:**
- 📚 Skills: cc-skill-security-review, nextjs-best-practices, nodejs-best-practices
- 🔧 MCP Archon: `rag_search_knowledge_base(query="Next.js API route POST handler validation", match_count=5)`

**Objetivo:** Endpoint POST que valida el formulario, envía 2 emails con Nodemailer y devuelve respuestas tipadas.

**Archivo a crear: `src/app/api/contacto/route.ts`**

```typescript
export const runtime = 'nodejs'; // CRÍTICO: Nodemailer no funciona en Edge

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Tipos
interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

// Validación de entrada
function validateFormData(data: unknown): ContactFormData | null {
  // Verificar que data es objeto con nombre, email, mensaje (strings no vacíos)
  // telefono es opcional
  // email debe tener formato válido (regex básico)
  // Si falla → return null
}

// Verificación de configuración SMTP
function isSMTPConfigured(): boolean {
  return !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_FROM &&
    process.env.SMTP_TO
  );
}

// Crear transporter
function createTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  // 1. Parsear body
  // 2. Validar datos → 400 si inválidos
  // 3. Verificar SMTP configurado → 503 si no
  // 4. Crear transporter
  // 5. Enviar email empresa (try/catch propio)
  // 6. Enviar email cliente (try/catch propio — no debe fallar si empresa falla)
  // 7. Retornar 200 con { success: true, message: '...' }
  // 8. En catch global → 500
}
```

**Template HTML Email 1 — Notificación Empresa:**

```html
<!-- Asunto: 🎉 Nuevo mensaje de contacto — [NOMBRE] -->
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0F0D2E;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#1E1B4B;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#F59E0B;padding:24px 32px;">
              <h1 style="margin:0;color:#1E1B4B;font-size:22px;font-weight:700;">
                🎉 Nuevo mensaje de contacto
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="color:#CBD5E1;margin:0 0 24px;font-size:15px;line-height:1.6;">
                Has recibido un nuevo mensaje desde el formulario de contacto de <strong style="color:#fff;">mgeventos.es</strong>:
              </p>
              <!-- Datos del formulario -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#0F0D2E;border-radius:8px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;width:120px;vertical-align:top;">
                    Nombre
                  </td>
                  <td style="padding:12px 16px;color:#fff;font-size:15px;font-weight:600;">
                    {{NOMBRE}}
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Email
                  </td>
                  <td style="padding:12px 16px;">
                    <a href="mailto:{{EMAIL}}" style="color:#8B5CF6;font-size:15px;">{{EMAIL}}</a>
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Teléfono
                  </td>
                  <td style="padding:12px 16px;color:#fff;font-size:15px;">
                    {{TELEFONO}}
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Mensaje
                  </td>
                  <td style="padding:12px 16px;color:#CBD5E1;font-size:14px;line-height:1.6;">
                    {{MENSAJE}}
                  </td>
                </tr>
              </table>
              <!-- CTA Responder -->
              <table cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td>
                    <a href="mailto:{{EMAIL}}"
                       style="display:inline-block;background:#F59E0B;color:#1E1B4B;padding:12px 24px;
                              border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                      Responder a {{NOMBRE}}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer email -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.1);">
              <p style="margin:0;color:#475569;font-size:12px;">
                MG Eventos · info@mgeventos.es · 636 20 33 45<br>
                Rúa Carlos Maside SN, 36640 Pontecesures
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

**Template HTML Email 2 — Confirmación Cliente:**

```html
<!-- Asunto: Hemos recibido tu mensaje — MG Eventos -->
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;
                      box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#1E1B4B;padding:32px;">
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">
                MG Eventos
              </h1>
              <p style="margin:4px 0 0;color:#94A3B8;font-size:13px;">
                Animadores de fiesta en Galicia
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 16px;color:#1E1B4B;font-size:22px;font-weight:700;">
                ¡Gracias, {{NOMBRE}}!
              </h2>
              <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 20px;">
                Hemos recibido tu mensaje correctamente. Nuestro equipo revisará
                tu consulta y te responderemos lo antes posible,
                normalmente <strong>en menos de 24 horas</strong>.
              </p>
              <!-- Caja del mensaje -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#F8FAFC;border-radius:8px;border-left:4px solid #7C3AED;
                            margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 8px;color:#7C3AED;font-size:12px;font-weight:700;
                               text-transform:uppercase;letter-spacing:0.05em;">
                      Tu mensaje
                    </p>
                    <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;">
                      {{MENSAJE}}
                    </p>
                  </td>
                </tr>
              </table>
              <p style="color:#475569;font-size:14px;margin:0 0 16px;">
                Mientras tanto, puedes contactarnos directamente:
              </p>
              <!-- Datos de contacto -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:4px 0;">
                    <a href="tel:+34636203345"
                       style="color:#7C3AED;font-size:14px;text-decoration:none;">
                      📞 636 20 33 45
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">
                    <a href="https://wa.me/34636203345"
                       style="color:#25D366;font-size:14px;text-decoration:none;">
                      💬 WhatsApp: 636 20 33 45
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">
                    <a href="mailto:info@mgeventos.es"
                       style="color:#7C3AED;font-size:14px;text-decoration:none;">
                      📧 info@mgeventos.es
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer email -->
          <tr>
            <td style="padding:20px 32px;background:#F8FAFC;border-top:1px solid #E2E8F0;">
              <p style="margin:0;color:#94A3B8;font-size:12px;line-height:1.5;">
                MG Eventos · Rúa Carlos Maside SN, 36640 Pontecesures · Galicia, España<br>
                Este es un mensaje automático de confirmación. Por favor, no respondas a este correo.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

**Criterios:**
- [ ] `export const runtime = 'nodejs'` presente en el archivo
- [ ] Validación devuelve 400 con mensaje claro si faltan campos o email inválido
- [ ] Si SMTP no está configurado → 503 `{ error: 'Servicio de correo no disponible temporalmente' }`
- [ ] Email a empresa llega a `SMTP_TO` con todos los datos del formulario
- [ ] Email a cliente llega al email del formulario con confirmación personalizada
- [ ] En caso de error SMTP → 500 `{ error: 'Error al enviar el mensaje. Inténtalo de nuevo.' }`
- [ ] TypeScript tipado correctamente (sin `any`)

---

### TAREA 10: Actualizar Formulario de Contacto

**Herramientas:**
- 🔧 MCP Serena: `find_symbol('ContactoPage', 'src/app/contacto/page.tsx', True)`
- 📚 Skills: react-patterns

**Objetivo:** Reemplazar el `setTimeout` simulado por una llamada real a `/api/contacto`, manejar todos los estados de respuesta y disparar evento GTM en éxito.

**Cambio en `handleSubmit` de `src/app/contacto/page.tsx`:**

```typescript
// ANTES (simulado):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setStatus('sent');
};

// DESPUÉS (real):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus('sent');
      // Disparar evento GTM solo si está disponible y hay consentimiento
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'contact_form_submit',
          category: 'lead',
          label: 'contacto',
        });
      }
    } else {
      setStatus('error');
      setErrorMessage(data.error || 'Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  } catch {
    setStatus('error');
    setErrorMessage('Error de conexión. Comprueba tu internet e inténtalo de nuevo.');
  }
};
```

**Estado de error a añadir:**

```tsx
// Añadir estado errorMessage
const [errorMessage, setErrorMessage] = useState('');

// Añadir bloque de error en el JSX (junto al bloque status === 'sent')
{status === 'error' && (
  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
    <p className="text-red-800 font-heading font-bold">Error al enviar</p>
    <p className="text-red-700 font-body text-sm mt-1">{errorMessage}</p>
    <button
      onClick={() => setStatus('idle')}
      className="mt-3 text-sm text-red-700 underline font-body"
    >
      Volver al formulario
    </button>
  </div>
)}
```

**Tipo global para dataLayer (añadir a `src/types/index.ts`):**

```typescript
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
```

**Criterios:**
- [ ] Formulario llama a `POST /api/contacto` con los datos reales
- [ ] Estado `sending` muestra "Enviando..." durante la petición
- [ ] Estado `sent` muestra mensaje de éxito (ya existe, sin cambios)
- [ ] Estado `error` muestra mensaje de error descriptivo con opción de reintentar
- [ ] Evento GTM se dispara en éxito sin romper si GTM no está cargado
- [ ] TypeScript sin errores (`window.dataLayer` tipado)

---

### TAREA 11: Variables de Entorno y `.env.local`

**Objetivo:** Crear el archivo `.env.local` de referencia con todas las variables necesarias para que el desarrollador sepa qué configurar.

**Archivo a crear: `.env.local`**

```env
# ==============================================
# MG EVENTOS — Variables de Entorno Fase 2
# ==============================================

# Google Tag Manager
# Obtener en: https://tagmanager.google.com
# Crear cuenta > Contenedor mgeventos.es > Tipo Web > obtener GTM-XXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# ==============================================
# SMTP — Configuración de Correo Electrónico
# ==============================================
# Instrucciones según proveedor:
#
# IONOS/1&1: SMTP_HOST=smtp.ionos.es, SMTP_PORT=587, SMTP_SECURE=false
# Gmail:     SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_SECURE=false
#            (requiere App Password: Cuenta Google > Seguridad > Contraseñas de aplicación)
# Zoho:      SMTP_HOST=smtp.zoho.eu, SMTP_PORT=587, SMTP_SECURE=false
#
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@mgeventos.es
SMTP_PASS=tu_contraseña_smtp
SMTP_FROM=info@mgeventos.es
SMTP_TO=info@mgeventos.es
```

**Instrucciones para configurar en Vercel:**

```
1. Ir a https://vercel.com/dashboard
2. Seleccionar proyecto mg-eventos
3. Settings → Environment Variables
4. Añadir CADA variable (sin comillas en los valores)
5. Aplicar a: Production + Preview + Development
6. Hacer clic en "Save"
7. Redeploy desde Deployments → "..." → "Redeploy"
```

**Criterios:**
- [ ] `.env.local` creado en la raíz del proyecto
- [ ] `.env.local` en `.gitignore` (ya debería estarlo, verificar)
- [ ] Instrucciones claras en comentarios sobre cómo obtener cada valor
- [ ] Instrucciones de Vercel documentadas en este PRP

---

### TAREA 12: Dependencias — Instalar Paquetes

**Objetivo:** Instalar los dos paquetes nuevos necesarios para la Fase 2.

**Comandos:**

```bash
cd /home/mk20/mg-eventos-v1/mg-eventos

# GTM / Third parties (oficial Next.js/Vercel)
npm install @next/third-parties@latest

# SMTP email
npm install nodemailer
npm install --save-dev @types/nodemailer
```

**Verificación post-instalación:**

```bash
# Comprobar que se añadieron a package.json
cat package.json | grep -E "third-parties|nodemailer"

# Verificar que el build no rompe
npm run build
```

**Criterios:**
- [ ] `@next/third-parties` en `dependencies`
- [ ] `nodemailer` en `dependencies`
- [ ] `@types/nodemailer` en `devDependencies`
- [ ] `npm run build` exitoso

---

### TAREA FINAL: Validación Completa

**Herramientas:**
- 📚 Skills: lint-and-validate, verification-before-completion, seo-audit

**Objetivo:** Confirmar que todos los módulos funcionan correctamente y no hay regresiones en la Fase 1.

**Comandos de validación:**

```bash
cd /home/mk20/mg-eventos-v1/mg-eventos

# Linting y TypeScript
npx next lint
npx tsc --noEmit

# Build productivo
npm run build
```

**Checklist funcional:**

```yaml
GTM y Cookies:
  - [ ] Banner aparece en primera visita (abrir en modo incógnito)
  - [ ] Banner NO aparece en segunda visita (cookie guardada)
  - [ ] "Aceptar todas" → cookie mg-cookie-consent=all → GTM se carga (verificar en DevTools > Network)
  - [ ] "Solo esenciales" → cookie mg-cookie-consent=essential → NO hay requests a GTM
  - [ ] "Rechazar" → cookie mg-cookie-consent=denied → NO hay requests a GTM
  - [ ] Botón "Gestionar cookies" en Footer reabre el banner
  - [ ] Si NEXT_PUBLIC_GTM_ID no está definida → no hay error, simplemente no carga GTM

Páginas Legales:
  - [ ] /politica-de-cookies → devuelve 200, contenido visible
  - [ ] /politica-de-privacidad → devuelve 200, contenido visible
  - [ ] /aviso-legal → devuelve 200, contenido visible
  - [ ] Las 3 páginas tienen <meta name="robots" content="noindex, nofollow"> en el HTML
  - [ ] Breadcrumbs funcionales en las 3 páginas

Footer:
  - [ ] Columna "Legal" muestra: Política de privacidad, Política de cookies, Aviso legal
  - [ ] Los 3 links apuntan a rutas correctas
  - [ ] Botón "Gestionar cookies" visible junto al copyright

Formulario de Contacto:
  - [ ] Sin SMTP configurado: formulario muestra error 503 de forma elegante
  - [ ] Con SMTP configurado: 2 emails llegan (empresa + cliente)
  - [ ] Estado de error muestra mensaje descriptivo
  - [ ] Botón "Volver al formulario" resetea el estado

Regresiones Fase 1:
  - [ ] Home carga correctamente
  - [ ] Las 7 páginas de servicio cargan
  - [ ] Header y menú mobile funcionan
  - [ ] WhatsApp float visible
  - [ ] Sitemap accesible en /sitemap.xml
  - [ ] Robots accesible en /robots.txt
```

**Actualización del sitemap tras añadir páginas legales:**

```typescript
// src/app/sitemap.ts — verificar que NO incluye las páginas legales
// (tienen noindex, no deben estar en sitemap)
// O incluirlas con prioridad mínima — depende de la estrategia, 
// pero lo más limpio es excluirlas dado que son noindex.
```

---

## 🔄 Bucle de Validación

### Nivel 1: Código
```bash
npx next lint        # Sin errores
npx tsc --noEmit     # Sin errores TypeScript
```

### Nivel 2: Funcional
```yaml
Cookie consent: Probar los 3 flujos (all/essential/denied) en modo incógnito
GTM: Verificar en DevTools que solo carga con consent=all
SMTP: Test con credenciales reales o con Mailtrap.io para staging
Páginas legales: Verificar contenido y robots meta
Footer: Verificar 3 links y botón Gestionar cookies
```

### Nivel 3: Build
```bash
npm run build   # Build productivo exitoso
```

---

## ✅ Checklist de Validación Final

```yaml
Código:
  - [ ] npx next lint — sin errores
  - [ ] npx tsc --noEmit — sin errores
  - [ ] npm run build — exitoso

Sistema de Cookies:
  - [ ] CookieConsentProvider correctamente tipado
  - [ ] Banner sin hidratación mismatch
  - [ ] GTMConditionalLoader solo carga con consent=all
  - [ ] Cookie persiste 365 días
  - [ ] Botón Gestionar cookies funciona

Páginas Legales:
  - [ ] 3 páginas accesibles y con contenido completo
  - [ ] robots: noindex en las 3
  - [ ] Breadcrumbs y Schema en las 3
  - [ ] Alineadas al design system (colores, fonts)

Footer:
  - [ ] 3 links legales presentes
  - [ ] Footer sigue siendo Server Component

API SMTP:
  - [ ] runtime = 'nodejs' declarado
  - [ ] Validación de inputs implementada
  - [ ] 503 cuando SMTP no configurado
  - [ ] Templates HTML de los 2 emails limpios
  - [ ] Credenciales solo en variables de entorno Server-side

Formulario:
  - [ ] Estado error implementado con mensaje descriptivo
  - [ ] Evento GTM disparado en éxito (sin romper si GTM no cargó)

Regresiones:
  - [ ] Todas las páginas de Fase 1 siguen funcionando
  - [ ] Sitemap y robots intactos
```

---

## ❌ Anti-Patrones a Evitar

- ❌ `SMTP_PASS` en variable `NEXT_PUBLIC_` (exposición de credenciales al cliente)
- ❌ `runtime = 'edge'` en la route de contacto (Nodemailer no funciona en Edge)
- ❌ Leer `document.cookie` en SSR sin protección `typeof window !== 'undefined'`
- ❌ Añadir `'use client'` al `Footer.tsx` completo (usar sub-componente separado)
- ❌ Inventar textos en las páginas legales (copiar exacto de los `.md`)
- ❌ Modificar el `tailwind.config.ts` existente (design system no cambia en Fase 2)
- ❌ Incluir páginas legales (noindex) en el sitemap
- ❌ Banner que se renderiza en SSR (causaría hidratación mismatch)
- ❌ `sendGTMEvent` sin verificar que `window.dataLayer` existe

---

## 📚 Referencias

```yaml
proyecto_base: "/home/mk20/mg-eventos-v1/mg-eventos/"
initial_fase2: "/home/mk20/mg-eventos-v1/initial.md"
contenido_legal:
  - "/home/mk20/mg-eventos-v1/docs/pages/politica-de-cookies.md"
  - "/home/mk20/mg-eventos-v1/docs/pages/politica-de-privacidad.md"
  - "/home/mk20/mg-eventos-v1/docs/pages/aviso-legal.md"
design_system: "/home/mk20/mg-eventos-v1/mg-eventos/tailwind.config.ts"
constantes: "/home/mk20/mg-eventos-v1/mg-eventos/src/lib/constants.ts"
prp_fase1: "/home/mk20/mg-eventos-v1/PRPs/mg-eventos-web-seo.md"
template_base: "/home/mk20/mg-eventos-v1/PRPs/templates/prp_base.md"
documentacion_gtm: "https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries"
```

---

## 📊 Score de Confianza: 9/10

```yaml
razon: |
  - Todos los módulos tienen especificación exacta archivo por archivo
  - Los templates de email están completos con HTML inline CSS
  - Los tipos TypeScript están especificados
  - Los gotchas críticos (runtime nodejs, SSR mismatch, NEXT_PUBLIC_) están documentados
  - Los patrones de composición Server/Client Components están explicados
  - El contenido legal viene de archivos `.md` ya escritos (no hay que inventar nada)
  - La única incógnita (-1 punto) son las credenciales SMTP reales del cliente,
    pero el sistema está diseñado para funcionar parcialmente sin ellas (503 elegante)
```

---

*Fin del PRP — MG Eventos Fase 2. Listo para ejecución one-pass.*
