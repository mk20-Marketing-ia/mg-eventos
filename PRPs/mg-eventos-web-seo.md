name: "PRP — MG Eventos Web SEO"
version: "1.0"
proyecto: "MG Eventos — Sitio web corporativo"
stack: "Next.js 14 (App Router), React, TypeScript, Tailwind CSS"
descripcion: |
  PRP para el desarrollo completo del sitio web de MG Eventos: empresa de música,
  animación y producción de eventos en Galicia. 9 páginas con SEO transaccional,
  diseño premium nivel Silicon Valley, branding propio y contenido ya escrito.

---

## 🎯 Objetivo

**MG Eventos** — Sitio web profesional con 9 páginas optimizadas para SEO transaccional en el sector de música y animación de eventos en Galicia. Diseño premium, conversión a WhatsApp/formulario, y posicionamiento orgánico por servicios.

## 💡 Por Qué

- Presencia digital profesional que transmita confianza y energía para captar clientes de eventos (bodas, fiestas, corporativos) en Galicia
- Posicionamiento orgánico en búsquedas transaccionales: "DJ para bodas en Galicia", "fotomatón en Galicia", "discotecas móviles en Galicia", etc.
- Conversión directa: cada página empuja a contactar vía WhatsApp o formulario
- Diferenciación visual: diseño que no parezca template, sino experiencia de marca

## 📋 Qué

Sitio web completo con:
- 9 páginas: Home, Contacto, 7 páginas de servicio
- SEO transaccional (meta tags, schema markup, sitemap, internal linking, llms.txt)
- Sistema de diseño propio (no existe branding previo)
- Responsive mobile-first
- Core Web Vitals optimizados
- Animaciones cinematográficas con propósito
- WhatsApp como canal de conversión principal

### Criterios de Éxito
- [ ] 9 páginas desarrolladas con contenido EXACTO de docs/pages/
- [ ] Lighthouse SEO > 95 en todas las páginas
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Schema markup válido en cada página
- [ ] Meta título y descripción únicos por página
- [ ] Branding coherente en cada pixel
- [ ] Responsive perfecto (375px, 768px, 1280px+)

---

## 🏢 Información del Negocio

```yaml
nombre: "MG Eventos"
sector: "Música, animación y producción de eventos"
propuesta_valor: "Animadores de fiesta en Galicia con +10 años de experiencia — hacer que nadie se quede sentado"
publico_objetivo: "Personas que organizan bodas, fiestas privadas, cumpleaños, verbenas, eventos corporativos en Galicia"
ubicacion: "Santiago de Compostela, Galicia, España"
alcance: "Regional — toda Galicia"
tono_voz: "Cercano, profesional, energético. 'Galicia' y 'experiencia' como ejes."
telefono: "636 20 33 45"
email: "info@mgeventos.es"
whatsapp: "https://wa.me/34636203345"
datos_confianza:
  años: "+10 años de experiencia"
  eventos: "+1.600 eventos y fiestas"
  bodas: "+300 bodas"
  clientes: "+2.000 clientes satisfechos"
```

---

## 🎨 Sistema de Diseño (Branding — Creación Propia)

> No existe carpeta de branding. Se define aquí el sistema visual completo, inspirado en el sector eventos/música con tono premium y energético.

### Paleta de Colores

```yaml
primary:
  DEFAULT: "#1E1B4B"    # Indigo profundo — headers, nav, hero overlays, footer
  light: "#312E81"      # Hover en backgrounds
  dark: "#0F0D2E"       # Footer, secciones oscuras

secondary:
  DEFAULT: "#7C3AED"    # Violeta vibrante — CTAs principales, acentos, enlaces activos
  light: "#8B5CF6"      # Hover en botones
  dark: "#6D28D9"       # Active state

accent:
  DEFAULT: "#F59E0B"    # Ámbar/dorado — highlights, badges, detalles premium
  light: "#FBBF24"      # Hover
  warm: "#D97706"       # Detalles cálidos

whatsapp: "#25D366"     # Verde WhatsApp — botones WA fijos y CTAs WA

neutral:
  50: "#F8FAFC"         # Fondo general claro
  100: "#F1F5F9"        # Secciones alternas claras
  200: "#E2E8F0"        # Bordes, separadores
  300: "#CBD5E1"        # Bordes hover
  400: "#94A3B8"        # Texto placeholder
  500: "#64748B"        # Texto secundario
  600: "#475569"        # Texto body
  700: "#334155"        # Subtítulos
  800: "#1E293B"        # Texto principal
  900: "#0F172A"        # Headings sobre fondo claro

background: "#F8FAFC"   # Fondo general
surface: "#FFFFFF"      # Tarjetas, secciones elevadas

success: "#10B981"
error: "#EF4444"
warning: "#F59E0B"
```

**Justificación de la paleta:**
- Indigo profundo (#1E1B4B): transmite profesionalidad y sofisticación nocturna — alineado con ambiente de eventos/fiestas
- Violeta vibrante (#7C3AED): energía, diversión, creatividad — refuerza el carácter festivo
- Ámbar/dorado (#F59E0B): premium, calidez, destaca sobre fondos oscuros — perfecto para datos de confianza y badges
- Verde WhatsApp (#25D366): reconocimiento instantáneo del canal de conversión principal

### Tipografías

```yaml
heading:
  nombre: "Plus Jakarta Sans"
  peso: [700, 800]
  uso: "H1-H6, títulos de secciones, nombre de marca"
  import: "Google Fonts — font-display: swap"
  fallback: "system-ui, sans-serif"

body:
  nombre: "Inter"
  peso: [400, 500]
  uso: "Párrafos, texto general, listas, descripciones"
  import: "next/font/google — subsets: ['latin']"
  fallback: "system-ui, sans-serif"

accent:
  nombre: "Plus Jakarta Sans"
  peso: [600]
  uso: "CTAs, botones, labels, badges, datos destacados"
```

**Justificación:** Plus Jakarta Sans es geométrica y moderna con personalidad, no genérica. Inter es la tipografía más legible en web para cuerpo de texto. Ambas son Google Fonts gratuitas y optimizables con next/font.

### Logo

```yaml
variantes:
  principal: "Texto 'MG Eventos' en Plus Jakarta Sans 800 — sin imagen de logo (se creará textual)"
  claro: "text-white sobre fondos oscuros"
  oscuro: "text-primary sobre fondos claros"
zona_segura: "padding equivalente a 1x la altura del texto"
tamaño_header: "text-xl md:text-2xl font-extrabold"
tamaño_footer: "text-lg font-extrabold"
nota: |
  No hay assets de logo proporcionados. Se implementa como texto estilizado.
  Si el cliente proporciona logo en el futuro, se sustituye el componente.
```

### Iconografía

```yaml
set: "Lucide React"
estilo: "outline (stroke-width: 1.5-2)"
tamaño_base: "w-6 h-6 (24px)"
tamaño_section: "w-10 h-10 md:w-12 md:h-12 (secciones de valor)"
color: "text-secondary o text-accent según contexto"
uso: "Bloques de valor, listas de servicios, features, CTAs"
```

### Design Tokens para Tailwind

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E1B4B",
          light: "#312E81",
          dark: "#0F0D2E",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#6D28D9",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          warm: "#D97706",
        },
        whatsapp: "#25D366",
        surface: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
        glow: "0 0 20px rgb(124 58 237 / 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideInLeft: { "0%": { opacity: "0", transform: "translateX(-30px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        slideInRight: { "0%": { opacity: "0", transform: "translateX(30px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
```

### Componentes Base del Branding

```yaml
boton_primario:
  clases: "bg-secondary hover:bg-secondary-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
  uso: "CTAs principales de cada sección"

boton_secundario:
  clases: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300"
  uso: "CTAs secundarios, 'Saber más'"

boton_whatsapp:
  clases: "bg-whatsapp hover:bg-green-600 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
  icono: "Lucide MessageCircle o WhatsApp SVG"
  uso: "Todos los CTAs de WhatsApp"

tarjeta_servicio:
  clases: "bg-surface rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
  imagen: "rounded-lg overflow-hidden aspect-[16/10]"
  titulo: "font-heading font-bold text-lg text-neutral-900 group-hover:text-secondary transition-colors"
  descripcion: "text-neutral-600 font-body text-sm leading-relaxed"

seccion_clara:
  clases: "py-16 md:py-24 bg-neutral-50"
  contenido: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

seccion_oscura:
  clases: "py-16 md:py-24 bg-primary text-white"
  contenido: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

heading_seccion:
  h2: "font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900"
  h2_oscuro: "font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white"
  subtitulo: "text-neutral-500 font-body text-lg md:text-xl mt-4 max-w-2xl"

stats_block:
  numero: "font-heading font-extrabold text-4xl md:text-5xl text-accent"
  label: "font-body text-sm text-neutral-500 uppercase tracking-wider"
  animacion: "Counter animation on scroll (IntersectionObserver)"

separadores:
  wave_svg: "SVG wave entre secciones clara→oscura y oscura→clara"
  gradiente: "bg-gradient-to-r from-secondary via-accent to-secondary h-1 rounded-full"
```

---

## 🗺️ Arquitectura SEO Transaccional

### Mapa del Sitio

```yaml
paginas:
  - url: "/"
    nombre: "Home"
    keyword: "música para eventos en Galicia"
    schema: "Organization + WebSite + SearchAction"
    prioridad: 1.0
    archivo_contenido: "docs/pages/home.md"

  - url: "/dj-para-eventos-en-galicia"
    nombre: "DJ para eventos en Galicia"
    keyword: "DJ para eventos en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/DJ para eventos en Galicia.md"

  - url: "/dj-para-fiestas-en-galicia"
    nombre: "DJ para fiestas en Galicia"
    keyword: "DJ para fiestas en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/DJ para fiestas en Galicia.md"

  - url: "/dj-para-bodas-en-galicia"
    nombre: "DJ para bodas en Galicia"
    keyword: "DJ para bodas en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/dj para bodas en galicia.md"

  - url: "/fotomaton-en-galicia"
    nombre: "Fotomatón en Galicia"
    keyword: "fotomatón en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/Fotomatón en Galicia.md"

  - url: "/pantallas-led-para-eventos-en-galicia"
    nombre: "Pantallas LED para eventos en Galicia"
    keyword: "pantallas LED para eventos en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/Pantallas LED para eventos en Galicia.md"

  - url: "/discotecas-moviles-en-galicia"
    nombre: "Discotecas móviles en Galicia"
    keyword: "discotecas móviles en Galicia"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/Discotecas móviles en Galicia.md"

  - url: "/escenario-movil-para-eventos"
    nombre: "Escenario móvil para eventos"
    keyword: "escenario móvil para eventos"
    schema: "Service + BreadcrumbList"
    prioridad: 0.8
    archivo_contenido: "docs/pages/Escenario móvil para eventos.md"

  - url: "/contacto"
    nombre: "Contacto"
    keyword: "contacto MG Eventos"
    schema: "ContactPage + BreadcrumbList"
    prioridad: 0.7
    archivo_contenido: "docs/pages/contacto.md"

internal_linking:
  - desde: "Home"
    hacia: ["DJ eventos", "DJ fiestas", "DJ bodas", "Fotomatón", "Pantallas LED", "Discomóvil", "Escenario móvil", "Contacto"]
  - desde: "DJ eventos"
    hacia: ["Home", "Contacto", "Pantallas LED", "Fotomatón"]
  - desde: "DJ fiestas"
    hacia: ["Home", "Contacto", "Escenario móvil", "Discomóvil", "Fotomatón"]
  - desde: "DJ bodas"
    hacia: ["Home", "Contacto", "Fotomatón"]
  - desde: "Fotomatón"
    hacia: ["Home", "Contacto", "DJ bodas"]
  - desde: "Pantallas LED"
    hacia: ["Home", "Contacto", "DJ eventos", "Fotomatón"]
  - desde: "Discomóvil"
    hacia: ["Home", "Contacto", "DJ bodas", "Escenario móvil"]
  - desde: "Escenario móvil"
    hacia: ["Home", "Contacto", "DJ fiestas"]
  - desde: "Contacto"
    hacia: ["Home"]
```

### Estructura de URLs

```yaml
patron: "/keyword-principal-en-slug"
jerarquia:
  - / (Home)
  - /dj-para-eventos-en-galicia
  - /dj-para-fiestas-en-galicia
  - /dj-para-bodas-en-galicia
  - /fotomaton-en-galicia
  - /pantallas-led-para-eventos-en-galicia
  - /discotecas-moviles-en-galicia
  - /escenario-movil-para-eventos
  - /contacto
reglas:
  - Solo minúsculas
  - Guiones medios para separar palabras
  - Sin trailing slash
  - Keywords SEO en la URL
  - Un solo nivel de profundidad (flat, no /servicios/xxx)
  - Sin tildes ni ñ en URLs (fotomaton, moviles, escenario movil)
```

---

## 🧰 Skills del Proyecto

### SEO
```yaml
seo-fundamentals: { cuándo: "Diseño de cada página", obligatorio: true }
schema-markup: { cuándo: "JSON-LD de cada página", obligatorio: true }
seo-audit: { cuándo: "Validación final", obligatorio: true }
web-performance-optimization: { cuándo: "Lighthouse + Core Web Vitals", obligatorio: true }
geo-fundamentals: { cuándo: "Crear llms.txt", obligatorio: true }
```

### Frontend
```yaml
nextjs-best-practices: { cuándo: "Todo código Next.js", obligatorio: true }
react-patterns: { cuándo: "Componentes interactivos", obligatorio: true }
tailwind-patterns: { cuándo: "Todos los estilos", obligatorio: true }
frontend-design: { cuándo: "Diseño de cada página", obligatorio: true }
ui-ux-pro-max: { cuándo: "Diseño complejo, paletas, efectos", obligatorio: true }
react-best-practices: { cuándo: "Optimización de componentes", obligatorio: false }
scroll-experience: { cuándo: "Animaciones scroll-driven del hero y secciones", obligatorio: false }
```

### Validación
```yaml
lint-and-validate: { cuándo: "Después de CADA tarea", obligatorio: true }
verification-before-completion: { cuándo: "Antes de declarar completitud", obligatorio: true }
```

---

## 🔌 Guía de MCPs

### MCP Archon 🎯
```yaml
source_id_nextjs: "77b8a4a07d5230b5"
source_id_react: "a931698c21fb8f24"

queries_frecuentes:
  - rag_search_knowledge_base(query="Next.js metadata generateMetadata", source_id="77b8a4a07d5230b5", match_count=5)
  - rag_search_knowledge_base(query="Next.js sitemap robots", source_id="77b8a4a07d5230b5", match_count=5)
  - rag_search_knowledge_base(query="Next.js image optimization", source_id="77b8a4a07d5230b5", match_count=5)
  - rag_search_knowledge_base(query="Next.js font loading", source_id="77b8a4a07d5230b5", match_count=5)
  - rag_search_knowledge_base(query="React server components", source_id="a931698c21fb8f24", match_count=5)
```

### MCP Serena ⚡
```yaml
filosofía: "No leer archivos completos. Análisis simbólico."
herramientas:
  - get_symbols_overview('src/') → Ver estructura
  - find_symbol('ComponentName', 'path', true) → Leer componente
  - replace_symbol_body() → Ediciones quirúrgicas
  - search_for_pattern('pattern', 'src/') → Buscar en código
```

---

## 📦 Estructura del Proyecto (Objetivo)

```bash
src/
├── app/
│   ├── layout.tsx                                  # Layout raíz: fonts, metadata global, Header/Footer
│   ├── page.tsx                                    # Home
│   ├── sitemap.ts                                  # Sitemap dinámico (9 URLs)
│   ├── robots.ts                                   # robots.txt
│   ├── not-found.tsx                               # 404 personalizado
│   ├── contacto/
│   │   └── page.tsx
│   ├── dj-para-eventos-en-galicia/
│   │   └── page.tsx
│   ├── dj-para-fiestas-en-galicia/
│   │   └── page.tsx
│   ├── dj-para-bodas-en-galicia/
│   │   └── page.tsx
│   ├── fotomaton-en-galicia/
│   │   └── page.tsx
│   ├── pantallas-led-para-eventos-en-galicia/
│   │   └── page.tsx
│   ├── discotecas-moviles-en-galicia/
│   │   └── page.tsx
│   └── escenario-movil-para-eventos/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx                              # Primary, Secondary, WhatsApp, Ghost
│   │   ├── Card.tsx                                # ServiceCard, ValueCard
│   │   ├── Container.tsx                           # Max-width wrapper
│   │   ├── Section.tsx                             # Light/Dark section wrapper
│   │   ├── Heading.tsx                             # H1-H6 con estilos de branding
│   │   ├── OptimizedImage.tsx                      # Wrapper next/image con placeholder
│   │   ├── Badge.tsx                               # Badges y tags
│   │   ├── AnimatedCounter.tsx                     # Counter animation para stats
│   │   └── WhatsAppFloat.tsx                       # Botón flotante WA (mobile)
│   ├── sections/
│   │   ├── HeroSection.tsx                         # Hero reutilizable (título, subtítulo, CTA, imagen)
│   │   ├── ValueProps.tsx                          # 3 bloques de valor (icono + título + texto)
│   │   ├── ServicesGrid.tsx                        # Grid de tarjetas de servicios
│   │   ├── CTASection.tsx                          # CTA con fondo oscuro/gradiente
│   │   ├── StatsSection.tsx                        # Números animados (+10 años, +1600 eventos...)
│   │   ├── WhyMGSection.tsx                        # "¿Por qué MG Eventos?" reutilizable
│   │   ├── BudgetCTA.tsx                           # "Solicita presupuesto" reutilizable
│   │   ├── ServiceDetailBlock.tsx                  # H2 + párrafo + lista + CTA (patrón repetido en servicios)
│   │   └── CollaboratorsSection.tsx                # Sección colaboradores (Home)
│   ├── layout/
│   │   ├── Header.tsx                              # Navbar responsive
│   │   ├── Footer.tsx                              # Footer completo
│   │   ├── MobileMenu.tsx                          # Menú hamburguesa
│   │   └── WaveSeparator.tsx                       # SVG wave entre secciones
│   └── seo/
│       ├── JsonLd.tsx                              # Wrapper genérico JSON-LD
│       ├── SchemaOrganization.tsx                  # Schema Organization
│       ├── SchemaService.tsx                       # Schema Service (reutilizable)
│       ├── SchemaWebSite.tsx                       # Schema WebSite + SearchAction
│       ├── SchemaBreadcrumb.tsx                    # Schema BreadcrumbList
│       └── Breadcrumbs.tsx                         # Breadcrumbs visuales
├── lib/
│   ├── metadata.ts                                 # createMetadata() helper
│   ├── constants.ts                                # SITE_URL, PHONE, EMAIL, NAV_ITEMS, SERVICES
│   └── utils.ts                                    # cn(), formatPhone()
├── hooks/
│   └── useIntersectionObserver.ts                  # Para animaciones on-scroll
├── styles/
│   └── globals.css                                 # Tailwind directives + custom CSS
├── types/
│   └── index.ts                                    # Tipos compartidos
└── public/
    ├── images/                                     # Imágenes (placeholders inicialmente)
    │   ├── placeholder-hero.jpg
    │   ├── placeholder-service.jpg
    │   └── ...
    ├── icons/
    │   ├── favicon.ico
    │   ├── apple-touch-icon.png
    │   └── site.webmanifest
    ├── og/                                         # Open Graph images (1200x630)
    │   ├── home.jpg
    │   └── ...
    └── llms.txt                                    # Optimización GEO
```

---

## 🔔 Gotchas Conocidos

```yaml
Next.js 14:
  - "CRÍTICO: metadata export SOLO en Server Components — 'use client' lo desactiva"
  - "PATRÓN: Usar generateMetadata() para metadata por página"
  - "GOTCHA: App Router no soporta getStaticProps/getServerSideProps"
  - "PATRÓN: next/font para cargar Plus Jakarta Sans e Inter (optimización automática)"
  - "PATRÓN: Usar loading.tsx para estados de carga"

SEO:
  - "CRÍTICO: Solo 1 H1 por página"
  - "CRÍTICO: Meta título max 60 caracteres"
  - "CRÍTICO: Meta descripción max 155 caracteres"
  - "GOTCHA: display:none no es técnica SEO válida"
  - "PATRÓN: Canonical URL en CADA página"
  - "PATRÓN: Open Graph image 1200x630px"
  - "CRÍTICO: No modificar el copy de docs/pages/ — solo estructurarlo"

Tailwind:
  - "GOTCHA: Clases dinámicas no se purgan — usar safelist si necesario"
  - "PATRÓN: Usar cn() (clsx + tailwind-merge) para merge condicional"
  - "CRÍTICO: Configurar content paths en tailwind.config.ts"

Performance:
  - "CRÍTICO: LCP < 2.5s, CLS < 0.1, FID < 100ms"
  - "PATRÓN: next/image para TODAS las imágenes"
  - "PATRÓN: Lazy load below the fold"
  - "GOTCHA: Demasiadas animaciones impactan CLS — usar will-change y transform"

Contenido:
  - "CRÍTICO: El contenido de docs/pages/ NO se modifica — solo se estructura"
  - "PATRÓN: Bloques repetidos entre páginas ('¿Por qué MG Eventos?') se implementan como componente reutilizable"
  - "GOTCHA: Algunos números varían entre páginas (ej: escenario-movil dice +8 años, +1752 clientes) — respetar lo que dice cada archivo"
```

---

## 📝 Lista de Tareas

---

### TAREA 0: Setup del Proyecto + Design System

**Herramientas:**
- ⚡ MCP Archon: `rag_search_knowledge_base(query="Next.js project setup", source_id="77b8a4a07d5230b5", match_count=5)`
- 🔧 MCP Serena: Onboarding del proyecto tras crear archivos
- 📚 Skills: nextjs-best-practices, tailwind-patterns, environment-setup-guide

**Objetivo:** Proyecto Next.js 14 con Tailwind CSS, tipografías, design tokens del branding definido arriba, metadata global, y estructura de carpetas lista.

**Pasos:**
1. `npx create-next-app@14 . --typescript --tailwind --app --src-dir --import-alias "@/*"` (o la versión más reciente de Next 14)
2. Instalar dependencias: `lucide-react`, `clsx`, `tailwind-merge`
3. Configurar `tailwind.config.ts` con TODOS los design tokens (colores, fonts, shadows, animations, keyframes) — copiar la configuración exacta de la sección "Design Tokens para Tailwind" de este PRP
4. Configurar `src/app/layout.tsx`:
   - Import Plus Jakarta Sans e Inter con `next/font/google`
   - Metadata global: `{ metadataBase: new URL('https://mgeventos.es'), title: { default: 'MG Eventos — Música para eventos en Galicia', template: '%s | MG Eventos' }, description: '...', openGraph: {...}, twitter: {...} }`
   - Variable CSS para fonts: `--font-jakarta`, `--font-inter`
   - `<html lang="es">` siempre
5. Crear `src/lib/constants.ts`:
   ```
   SITE_NAME, SITE_URL, PHONE, EMAIL, WHATSAPP_URL, WHATSAPP_NUMBER
   NAV_ITEMS (array con nombre + href de cada página)
   SERVICES (array con nombre, slug, descripción corta para reutilizar)
   STATS (array con número, label para "+10 años", "+1600 eventos", etc.)
   ```
6. Crear `src/lib/utils.ts`: función `cn()` con clsx + tailwind-merge
7. Crear `src/lib/metadata.ts`: helper `createMetadata({ title, description, slug, ogImage? })` que genera el objeto Metadata completo con canonical, OG, Twitter
8. Crear `src/styles/globals.css` con Tailwind directives + custom scrollbar + smooth scroll
9. Crear `src/app/robots.ts` (ver TAREA P3 para contenido)
10. Crear `src/app/sitemap.ts` (ver TAREA P2 para contenido)
11. Crear `src/app/not-found.tsx` — página 404 memorable con diseño del branding

**Criterios:**
- [ ] `npm run dev` sin errores
- [ ] Tailwind tiene TODOS los tokens del branding (colores, fonts, shadows, animations)
- [ ] Plus Jakarta Sans e Inter cargando con next/font
- [ ] Metadata global en layout.tsx con lang="es"
- [ ] robots.ts + sitemap.ts creados
- [ ] lib/constants.ts con datos del negocio
- [ ] lib/metadata.ts con helper reutilizable
- [ ] Estructura de carpetas creada

**Validación:**
```bash
npm run dev
npx next lint
npx tsc --noEmit
```

---

### TAREA 1: Componentes Compartidos

**Herramientas:**
- ⚡ MCP Archon: `rag_search_knowledge_base(query="React server components", source_id="a931698c21fb8f24", match_count=5)`
- 🔧 MCP Serena: Análisis simbólico de componentes creados
- 📚 Skills: react-patterns, frontend-design, ui-ux-pro-max, core-components, scroll-experience

**Objetivo:** Librería de componentes reutilizables con el branding de MG Eventos, listos para componer las 9 páginas.

**Archivos a crear (en orden de dependencia):**

**1. UI Base:**
- `src/components/ui/Container.tsx` — max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- `src/components/ui/Section.tsx` — wrapper con variantes: light (bg-neutral-50), dark (bg-primary), white (bg-white). Props: `variant`, `className`, `children`, `id`
- `src/components/ui/Heading.tsx` — componente para H1-H6 con estilos del branding. Props: `as` (h1-h6), `className`, `children`
- `src/components/ui/Button.tsx` — variantes: primary (bg-secondary), secondary (outline), whatsapp (bg-whatsapp), ghost. Props: `variant`, `size`, `href`, `children`, `icon`. Si `href` → renderiza `<Link>`, si no → `<button>`
- `src/components/ui/Card.tsx` — tarjeta base con hover effect. Props: `className`, `children`
- `src/components/ui/OptimizedImage.tsx` — wrapper de next/image con placeholder blur, loading lazy, responsive sizes
- `src/components/ui/Badge.tsx` — badge pequeño para tags/labels
- `src/components/ui/AnimatedCounter.tsx` — 'use client' — Counter que anima de 0 al número cuando entra en viewport (IntersectionObserver). Props: `value` (number), `prefix` ("+"), `suffix`, `duration` (ms)
- `src/components/ui/WhatsAppFloat.tsx` — 'use client' — Botón flotante fijo (bottom-right) con icono WhatsApp, visible en mobile, oculto si scroll está en top. Link a wa.me/34636203345

**2. Layout:**
- `src/components/layout/Header.tsx` — navbar fija:
  - Logo "MG Eventos" texto (Plus Jakarta Sans 800)
  - Nav links: Home, Servicios (dropdown con 7 servicios), Contacto
  - CTA "Contáctanos" botón secondary en desktop
  - Menú hamburguesa en mobile
  - bg-primary/90 backdrop-blur en scroll
  - Transición suave: transparente → solid al scrollear
- `src/components/layout/MobileMenu.tsx` — 'use client' — slide-in menu con todos los links + CTA WhatsApp
- `src/components/layout/Footer.tsx`:
  - bg-primary-dark
  - Logo "MG Eventos" + descripción corta
  - Links a servicios (7)
  - Datos de contacto: teléfono (tel:), email (mailto:), WhatsApp
  - Copyright "© {year} MG Eventos. Todos los derechos reservados."
  - Link a política de privacidad (placeholder href)
- `src/components/layout/WaveSeparator.tsx` — SVG wave decorativo para transiciones entre secciones

**3. Secciones reutilizables:**
- `src/components/sections/HeroSection.tsx`:
  - Props: `preTitle?`, `title`, `highlight?` (parte del título en color accent), `subtitle`, `ctaPrimary` ({text, href}), `ctaSecondary?`, `backgroundImage?`
  - Layout: full-width, min-h-[70vh], overlay gradiente oscuro, contenido centrado
  - Animaciones: fade-in del título, slide-up del subtítulo, stagger de CTAs
  - Breadcrumbs opcionales debajo del nav

- `src/components/sections/ValueProps.tsx`:
  - Props: `items` (array de {icon: LucideIcon, title, description})
  - Layout: grid 1-col mobile, 3-col desktop
  - Cada item: icono en círculo bg-secondary/10, título bold, descripción
  - Animación: stagger fade-in on scroll

- `src/components/sections/ServicesGrid.tsx` (solo Home):
  - Props: `services` (array de {title, description, href, image?})
  - Layout: grid responsive (1-2-3 columnas)
  - Tarjeta: imagen, título, descripción, link "Ver servicio →"
  - Hover: elevación + borde secondary

- `src/components/sections/CTASection.tsx`:
  - Props: `title`, `description`, `ctaText`, `ctaHref`, `variant` ('dark'|'gradient'|'whatsapp')
  - Layout: sección con fondo oscuro/gradiente, texto centrado, botón grande
  - Variante WhatsApp: fondo verde, icono WA

- `src/components/sections/StatsSection.tsx`:
  - Props: `stats` (array de {value, label, prefix?}), `title?`, `description?`
  - Layout: grid 2x2 mobile, 4-col desktop
  - Números con AnimatedCounter
  - Fondo: sección oscura con gradiente sutil

- `src/components/sections/WhyMGSection.tsx`:
  - Componente reutilizado en casi todas las páginas de servicio
  - Props: `title?` (default "¿Por qué MG Eventos?"), `subtitle?`, `description`, `stats`
  - Texto + bloque de stats con counters

- `src/components/sections/BudgetCTA.tsx`:
  - Componente para "Solicita presupuesto para..." que aparece en todos los servicios
  - Props: `title`, `description`, `ctaText`, `ctaHref`
  - Diseño: fondo gradiente secondary→primary, texto blanco, botón accent

- `src/components/sections/ServiceDetailBlock.tsx`:
  - Bloque H2 + párrafos + lista opcional + CTA — patrón repetido en servicios
  - Props: `title`, `paragraphs` (string[]), `listItems?` (string[]), `cta?` ({text, href}), `stat?` ({value, label})

- `src/components/sections/CollaboratorsSection.tsx` (solo Home):
  - 3 imágenes/logos en fila
  - Placeholders para L12.png, L4.png, L7.png

**4. SEO:**
- `src/components/seo/JsonLd.tsx` — wrapper genérico: `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}} />`
- `src/components/seo/SchemaOrganization.tsx` — Schema Organization + LocalBusiness
- `src/components/seo/SchemaService.tsx` — Props: `serviceName`, `description`, `url`
- `src/components/seo/SchemaWebSite.tsx` — WebSite + SearchAction
- `src/components/seo/SchemaBreadcrumb.tsx` — Props: `items` ({name, url}[])
- `src/components/seo/Breadcrumbs.tsx` — Breadcrumbs visuales (nav > ol > li)

**5. Hooks:**
- `src/hooks/useIntersectionObserver.ts` — 'use client' — Hook para detectar cuando un elemento entra en viewport. Usado por AnimatedCounter y animaciones on-scroll.

**Criterios:**
- [ ] Todos los componentes usan colores y fonts del branding
- [ ] Header responsive con dropdown servicios y menú mobile
- [ ] Footer completo con todos los datos
- [ ] Server Components por defecto, 'use client' solo donde necesario (AnimatedCounter, WhatsAppFloat, MobileMenu, Header scroll)
- [ ] TypeScript sin errores
- [ ] Animaciones de entrada suaves
- [ ] WhatsApp float funcional

**Validación:**
```bash
npx next lint
npx tsc --noEmit
```

---

### TAREA 2: Página Home — /

**Herramientas:**
- ⚡ MCP Archon: metadata, image optimization
- 🔧 MCP Serena: reutilizar componentes de TAREA 1
- 📚 Skills: frontend-design, seo-fundamentals, schema-markup, nextjs-best-practices, ui-ux-pro-max

**Metadata SEO:**
```yaml
meta_titulo: "MG Eventos — Música para eventos en Galicia"
meta_descripcion: "Animadores de fiesta en Galicia con +10 años de experiencia. DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos."
keyword_principal: "música para eventos en Galicia"
keywords_secundarias: ["animadores de fiesta Galicia", "DJ eventos Galicia", "música bodas Galicia"]
schema_type: "Organization + WebSite + SearchAction"
url_canonica: "/"
breadcrumb: "Home"
og_image: "/og/home.jpg"
```

**Secciones detalladas:**

```yaml
Sección 1 — Hero:
  layout: "Full-width, min-h-[80vh], imagen de fondo con overlay gradiente primary→transparent"
  h1: "MG Eventos"
  subtitulo_h2_visual: "Música para eventos en Galicia"
  parrafo: |
    En cada evento hay un momento en el que todo cobra vida. Ese instante en el que la gente se
    levanta, sonríe y empieza a disfrutar de verdad. Ahí es donde entramos nosotros. Somos
    animadores de fiesta en Galicia, y nuestra misión es una sola: hacer que nadie se quede sentado.
  cta_primario:
    texto: "¡Contáctanos!"
    destino: "/contacto"
  imagen:
    descripcion: "Placeholder hero — evento/fiesta con iluminación profesional"
    alt: "MG Eventos — Música y animación para eventos en Galicia"
    posicion: "Fondo con overlay"
  fondo: "Imagen de fondo + overlay bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"
  elementos_dinamicos:
    - "Fade-in del H1 (0.3s delay)"
    - "Slide-up del párrafo (0.5s delay)"
    - "Fade-in del CTA (0.7s delay)"
    - "Scroll indicator sutil (flecha animada abajo)"
  responsivo:
    mobile: "Texto centrado, overlay completo, min-h-[60vh], padding extra top para navbar"
    tablet: "Texto alineado izquierda, overlay parcial"

Sección 2 — Colaboradores:
  layout: "Contenedor centrado, fila de 3 imágenes con título"
  h2_visual: "Nuestros colaboradores"
  contenido: "3 imágenes/logos (L12.png, L4.png, L7.png) — placeholders"
  imagen:
    descripcion: "3 logos de colaboradores"
    alt: "Colaboradores de MG Eventos"
  fondo: "bg-white"
  elementos_dinamicos: "Fade-in stagger de logos"
  responsivo:
    mobile: "Stack vertical o carrusel"

Sección 3 — Tres Pilares:
  layout: "Grid 3 columnas con icono/imagen + título + texto"
  items:
    - titulo: "Iluminación profesional"
      texto: "Transforma cualquier espacio en el escenario perfecto. Iluminación y efectos dinámicos para la pista de baile"
      icono: "Lucide Sparkles o Lightbulb"
    - titulo: "Evento inolvidable"
      texto: "Creamos experiencias que dejan huella en la memoria de tus invitados, lo damos todo para que disfrutéis desde el principio hasta el último baile."
      icono: "Lucide PartyPopper o Heart"
    - titulo: "Animación de eventos"
      texto: "Sabemos conectar con el público, mantener el ritmo y llenar de vida cada celebración, desde bodas hasta verbenas y eventos corporativos"
      icono: "Lucide Music o Mic2"
  fondo: "bg-neutral-50"
  elementos_dinamicos: "Stagger slide-up de cada bloque"
  responsivo:
    mobile: "1 columna, stack vertical"

Sección 4 — Sobre MG Eventos:
  layout: "Split: texto izquierda (60%) + dato destacado derecha (40%)"
  h2: "Sobre MG Eventos"
  h3: "Servicio de música para eventos"
  parrafo: |
    Cada evento tiene su propio carácter, y por eso no existe una fórmula única para animar un evento.
    Lo que sí hay es experiencia, intuición y muchas ganas de pasarlo bien. En MG Eventos sabemos que
    una buena fiesta no se improvisa: se construye con energía, ritmo y un toque personal que hace que
    todos se sientan parte de la fiesta.
  lista:
    - "Fiestas privadas"
    - "Bodas"
    - "Verbenas"
    - "Cumpleaños"
    - "Y el evento que tú quieras..."
  cta:
    texto: "¡Háblanos por WhatsApp!"
    destino: "https://wa.me/34636203345"
    variante: "whatsapp"
  dato_destacado:
    valor: "+10"
    label: "Años de experiencia"
  fondo: "bg-white"
  elementos_dinamicos: "Slide-in-left del texto, slide-in-right del dato, counter animation"
  responsivo:
    mobile: "Stack vertical, dato centrado"

Sección 5 — Servicios:
  layout: "Título + intro + grid de 5 tarjetas de servicio"
  h2: "Servicios de MG Eventos"
  h3: "Contrata música para tu evento"
  intro: "Nuestro trabajo no es solo poner música, sino hacer que todo el evento funcione como un conjunto."
  cta_intro:
    texto: "Hablemos"
    destino: "/contacto"
  servicios:
    - titulo: "Servicio de DJ"
      descripcion: "Creamos la mejor atmósfera para eventos con música adaptada a cada momento. Tú eliges el estilo, nosotros hacemos que suene perfecto."
      href: "/dj-para-eventos-en-galicia"
      imagen_alt: "Servicio de DJ para eventos en Galicia"
    - titulo: "Disco móvil"
      descripcion: "Nuestra discomóvil lleva la fiesta donde tú quieras. Montaje rápido, sonido de alta calidad e iluminación espectacular para disfrutar al máximo"
      href: "/discotecas-moviles-en-galicia"
      imagen_alt: "Discoteca móvil para eventos en Galicia"
    - titulo: "Camión escenario"
      descripcion: "Perfecto para verbenas, conciertos o ferias, incluye estructura, sonido e iluminación profesional. Rápido de montar, versátil y con gran impacto visual."
      href: "/escenario-movil-para-eventos"
      imagen_alt: "Camión escenario para eventos en Galicia"
    - titulo: "Pantallas LED"
      descripcion: "Desde conciertos hasta conferencias o bodas, adaptamos el tamaño y la configuración a cada evento. Una experiencia visual inolvidable."
      href: "/pantallas-led-para-eventos-en-galicia"
      imagen_alt: "Pantallas LED para eventos en Galicia"
    - titulo: "Fotomatón"
      descripcion: "Divertido, moderno y totalmente personalizable, ideal para bodas, cumpleaños y fiestas. Ríe, posa y guarda un recuerdo único de tu celebración."
      href: "/fotomaton-en-galicia"
      imagen_alt: "Fotomatón para eventos en Galicia"
  fondo: "bg-neutral-50"
  elementos_dinamicos: "Stagger fade-in de tarjetas, hover: scale + shadow + borde secondary"
  responsivo:
    mobile: "1 columna scroll vertical"
    tablet: "2 columnas + 1 centrada"
    desktop: "3 columnas primera fila + 2 centradas"

Sección 6 — CTA WhatsApp:
  layout: "Full-width, fondo oscuro/gradiente, texto centrado"
  linea_1: "¡Mándanos un WhatsApp!"
  parrafo: "Háblanos por WhatsApp y te asesoraremos para encontrar tu fiesta ideal"
  cta_primario:
    texto: "Háblanos"
    destino: "https://wa.me/34636203345"
    variante: "whatsapp"
  linea_2: "Anima la fiesta con MG Eventos"
  parrafo_2: "Habla con nosotros y te asesoraremos a la hora de elegir lo que puede animar mejor tu evento"
  cta_secundario:
    texto: "¡Contáctanos!"
    destino: "/contacto"
  fondo: "bg-gradient-to-br from-primary via-primary-light to-secondary"
  elementos_dinamicos: "Parallax sutil del fondo, fade-in del texto"

Sección 7 — Animador de Bodas + Stats:
  layout: "Texto + bloque de stats (4 números)"
  h2: "MG Eventos es tu Animador de bodas en Galicia"
  parrafo: |
    Las bodas son momentos únicos, y tener un animador profesional marca la diferencia entre una fiesta
    bonita y una que se recuerda toda la vida. Nuestro equipo sabe cuándo subir el ritmo, cuándo dejar
    espacio a la emoción y cómo conseguir que todos, desde los novios hasta los abuelos, se sientan parte
    del ambiente
  subtitulo: "Nuestra experiencia"
  intro_stats: "+10 años animando eventos. En MG Eventos llevamos muchos años ayudando a animar la fiesta"
  stats:
    - valor: 1600, prefix: "+", label: "Eventos y fiestas"
    - valor: 300, prefix: "+", label: "Bodas"
    - valor: 2000, prefix: "+", label: "Clientes satisfechos"
  fondo: "bg-white"
  elementos_dinamicos: "Counter animations on scroll, slide-up del texto"
  responsivo:
    mobile: "Stack vertical, stats en grid 2x2"
```

**Archivos:**
- `src/app/page.tsx`

**Criterios:**
- [ ] H1 "MG Eventos" único
- [ ] Meta título y descripción implementados
- [ ] Schema Organization + WebSite + SearchAction JSON-LD
- [ ] 5 tarjetas de servicio con enlaces internos
- [ ] Stats con counter animation
- [ ] CTAs WhatsApp funcionales
- [ ] Imágenes con alt text (placeholders)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Branding coherente
- [ ] Animaciones de entrada

---

### TAREA 3: Página DJ para eventos — /dj-para-eventos-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "DJ para eventos en Galicia — MG Eventos"
meta_descripcion: "Contrata un DJ para eventos en Galicia. Música personalizada, sonido profesional e iluminación adaptada. +10 años de experiencia. Presupuesto sin compromiso."
keyword_principal: "DJ para eventos en Galicia"
keywords_secundarias: ["DJ eventos corporativos Galicia", "DJ cumpleaños Galicia", "contratar DJ evento"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/dj-para-eventos-en-galicia"
breadcrumb: "Home > DJ para eventos en Galicia"
og_image: "/og/dj-eventos.jpg"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "DJ para eventos en Galicia"
  pre_titulo: "¡Contrata un dj para tu evento!"
  parrafo: |
    ¿Buscas un DJ para eventos en Galicia? En MG Eventos te ofrecemos un servicio cercano y
    totalmente adaptado. Buscamos que cada evento en Galicia tenga la música adecuada, el ambiente
    perfecto y la energía que haga que tus invitados disfruten al máximo.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  fondo: "Hero imagen + overlay primary"

Sección 2 — Value Props (3 bloques):
  items:
    - titulo: "Música personalizada"
      texto: "Cada celebración es diferente. Con nuestro equipo podrás contar con un DJ que entiende tus gustos, prepara la música y crea una banda sonora única para tu celebración."
      icono: "Music"
    - titulo: "Sonido e iluminación adaptados"
      texto: "No solo llevamos la música. Nuestro servicio incluye sonido profesional e iluminación ajustada a cada espacio, desde salones pequeños hasta grandes exteriores."
      icono: "Speaker"
    - titulo: "DJ para cumpleaños en Galicia"
      texto: "Un cumpleaños siempre merece una celebración especial, y tener un DJ para cumpleaños es la mejor forma de asegurar diversión desde el primer minuto."
      icono: "Cake"
  fondo: "bg-neutral-50"

Sección 3 — DJ corporativos:
  etiqueta: "Para empresas"
  h2: "DJ para eventos corporativos en Galicia"
  parrafo: |
    Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos
    en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo
    que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso
    trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece.
  lista: ["Cenas de empresa", "Presentaciones corporativas", "Congresos"]
  cta: { texto: "Hablemos", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }
  fondo: "bg-white"

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu DJ de eventos en Galicia"
  parrafo: |
    ¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu
    disposición un DJ para eventos en Galicia con la experiencia y la cercanía que necesitas.
    Te asesoramos sin compromiso, resolvemos todas tus dudas y te ayudamos a elegir el servicio
    que mejor encaje con tu fiesta, con las mejores condiciones y siempre al mejor precio.
  cta: { texto: "¡Pregúntanos!", destino: "/contacto" }
  fondo: "Gradiente secondary→primary"

Sección 5 — Ambiente profesional:
  h2: "Ambiente profesional con música y equipos de calidad"
  pre_titulo: "Monta tu evento con un"
  parrafo: |
    En un evento corporativo, la imagen lo es todo. Por eso, además de un DJ profesional en Galicia,
    contamos con pantallas LED para eventos para reforzar la comunicación de tu marca, presentaciones
    o vídeos. Y si buscas un toque más cercano y divertido para los asistentes, nuestro fotomatón
    para eventos es perfecto para crear recuerdos que quedarán ligados a tu empresa.
  parrafo_2: |
    Unimos música, sonido, iluminación y recursos visuales en un servicio completo que aporta la
    seriedad necesaria en lo profesional y el entretenimiento que hace que tu evento sea recordado.
  links_internos:
    - { texto: "pantallas LED para eventos", href: "/pantallas-led-para-eventos-en-galicia" }
    - { texto: "fotomatón para eventos", href: "/fotomaton-en-galicia" }
  fondo: "bg-neutral-50"

Sección 6 — DJ eventos pequeños:
  etiqueta: "Para empresas"
  h2: "DJ para eventos pequeños en Galicia"
  parrafo: |
    Sea cual sea el evento de tu empresa, en MG Eventos te ofrecemos un DJ para eventos corporativos
    en Galicia capaz de adaptarse a cada ocasión. Sabemos que no es lo mismo animar una cena de equipo
    que acompañar un congreso con música ambiental o dinamizar una presentación de producto. Por eso
    trabajamos de manera flexible, siempre buscando que tu evento tenga la imagen profesional que merece.
  lista: ["Cenas de empresa", "Presentaciones corporativas", "Congresos"]
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  fondo: "bg-white"

Sección 7 — ¿Por qué MG Eventos?:
  h2: "¿Por qué MG Eventos?"
  subtitulo: "Servicio de DJ con experiencia y cercanía"
  parrafo: |
    En MG Eventos ofrecemos un servicio de DJ en Galicia pensado para que disfrutes sin preocupaciones.
    Nuestro equipo no solo lleva la música, también aporta la energía y la confianza de un profesional
    que sabe adaptarse a cada tipo de público y celebración.
  stats:
    - { valor: 10, prefix: "+", label: "Años de experiencia" }
    - { valor: 2000, prefix: "+", label: "Clientes satisfechos" }
    - { valor: 1600, prefix: "+", label: "Eventos y fiestas" }
  fondo: "bg-primary (sección oscura)"
```

**Archivos:** `src/app/dj-para-eventos-en-galicia/page.tsx`

**Criterios:**
- [ ] H1 único, meta, schema Service, breadcrumb
- [ ] Links internos a Pantallas LED y Fotomatón
- [ ] Stats con counters
- [ ] Responsive + branding

---

### TAREA 4: Página DJ para fiestas — /dj-para-fiestas-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "DJ para fiestas en Galicia — MG Eventos"
meta_descripcion: "DJ para fiestas en Galicia: verbenas, cumpleaños, fiestas privadas. Sonido, iluminación y animación profesional. +10 años de experiencia. Presupuesto gratis."
keyword_principal: "DJ para fiestas en Galicia"
keywords_secundarias: ["DJ fiestas privadas Galicia", "DJ verbenas Galicia", "DJ cumpleaños Galicia"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/dj-para-fiestas-en-galicia"
breadcrumb: "Home > DJ para fiestas en Galicia"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "DJ para fiestas en Galicia"
  pre_titulo: "¡Contrata un dj para tus fiestas!"
  parrafo: |
    En MG Eventos ponemos a tu disposición un DJ fiesta en Galicia capaz de transformar cualquier
    celebración en un momento único. Nos adaptamos a fiestas de todo tipo y en cualquier lugar,
    llevando la música, el sonido y la iluminación necesarios para que la diversión esté garantizada.
    Con años de experiencia en la zona de Santiago y en toda la comunidad, sabemos cómo hacer que
    tu fiesta tenga ritmo y energía de principio a fin.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props (3 bloques):
  items:
    - titulo: "Dj para verbenas"
      texto: "Las fiestas de parroquia y celebraciones al aire libre en Galicia tienen algo especial: reúnen a vecinos, amigos y visitantes en torno a la música"
      icono: "Tent"
    - titulo: "Reuniones familiares y de amigos"
      texto: "Ya sea un aniversario, una comunión o una simple quedada entre amigos, la música transforma cualquier espacio en una pista de baile."
      icono: "Users"
    - titulo: "DJ para cumpleaños en Galicia"
      texto: "Un cumpleaños siempre merece una celebración especial, y tener un DJ para cumpleaños es la mejor forma de asegurar diversión desde el primer minuto."
      icono: "Cake"

Sección 3 — Fiestas privadas:
  etiqueta: "Algo íntimo"
  h2: "DJ para fiestas privadas en Galicia"
  parrafo: |
    En MG Eventos sabemos que una celebración en casa, en una finca o en un local especial necesita
    un toque único. Por eso ofrecemos un DJ para fiestas privadas en Galicia capaz de adaptar la
    música y la animación al ambiente que quieras crear. Desde reuniones familiares más íntimas hasta
    celebraciones con amigos o pequeños grupos de empresa, contamos con la experiencia y el equipo
    necesario para que tu fiesta sea recordada.
  parrafo_2: |
    La ventaja de contar con un servicio profesional es que no tienes que preocuparte de nada:
    llevamos sonido, iluminación y toda la energía para que la música no falte en ningún momento.
    Además, nuestro DJ para fiestas privadas en Galicia se desplaza a cualquier lugar, ya sea en
    Santiago de Compostela o en cualquier rincón de la comunidad.
  lista: ["Cumpleaños", "Celebraciones", "Fiestas íntimas"]
  cta: { texto: "Hablemos", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu fiesta con DJ en Galicia"
  parrafo: |
    ¿Quieres que tu próxima celebración sea inolvidable? En MG Eventos ponemos a tu disposición un
    DJ para fiestas en Galicia con sonido, iluminación y animación adaptados a cada ocasión. Te
    asesoramos sin compromiso, resolvemos tus dudas y diseñamos un plan a medida para que disfrutes
    sin preocuparte de nada.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 5 — Ambiente profesional:
  h2: "Ambiente profesional con música y equipos de calidad"
  pre_titulo: "Monta tu evento con un"
  parrafo: "(Mismo contenido que DJ eventos — sección 5)"
  links_internos: [Pantallas LED, Fotomatón]

Sección 6 — Otros servicios:
  h2: "Otros servicios de fiesta"
  parrafo: |
    Si buscas un montaje completo, ponemos a tu disposición nuestro camión escenario, perfecto para
    fiestas patronales, conciertos y grandes celebraciones. Con él tendrás todo en uno: escenario,
    sonido profesional, iluminación y un DJ para fiestas en Galicia que se adapta al estilo de tu fiesta.
  parrafo_2: |
    Nuestras contrataciones de DJ para fiestas incluyen mucho más que pinchar música: asesoramiento
    previo, montaje de sonido e iluminación, discomóvil para fiestas y fotomatón para fiestas, siempre
    buscando las mejores condiciones para que tu fiesta sea un éxito sin complicaciones. y la
    tranquilidad de que todo funcione perfecto durante el evento. Nos encargamos de los detalles
    técnicos para que tú solo tengas que preocuparte de disfrutar.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  links_internos: [Escenario móvil, Discomóvil, Fotomatón]

Sección 7 — ¿Por qué MG Eventos?:
  "(Componente reutilizable WhyMGSection)"
  stats: [+10 años, +2000 clientes, +1600 eventos]
```

**Archivos:** `src/app/dj-para-fiestas-en-galicia/page.tsx`

---

### TAREA 5: Página DJ para bodas — /dj-para-bodas-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "DJ para bodas en Galicia — MG Eventos"
meta_descripcion: "DJ para bodas en Galicia con música personalizada y asesoramiento. +300 bodas animadas y +10 años de experiencia. Presupuesto sin compromiso."
keyword_principal: "DJ para bodas en Galicia"
keywords_secundarias: ["DJ boda Galicia", "música bodas Galicia", "animador bodas Galicia"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/dj-para-bodas-en-galicia"
breadcrumb: "Home > DJ para bodas en Galicia"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "DJ para bodas en Galicia"
  pre_titulo: "¡Contrata un dj para tu boda!"
  parrafo: |
    Elegir el DJ para bodas en Galicia es una de las decisiones más importantes para el gran día. La
    música no solo acompaña, sino que marca la emoción de cada momento. En MG Eventos contamos con un
    equipo de confianza, con años de experiencia y un trato cercano, para que disfrutes de tu boda sin
    preocuparte de nada.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props:
  items:
    - titulo: "Música personalizada"
      texto: "Un buen DJ boda sabe que no es lo mismo ambientar una ceremonia íntima que animar la fiesta final. En MG Eventos creamos una selección musical pensada para cada instante"
      icono: "Heart"
    - titulo: "Asesoramiento y planificación"
      texto: "Te acompañamos antes y durante el evento, resolviendo dudas y ajustando cada detalle para que el resultado sea perfecto."
      icono: "CalendarCheck"
    - titulo: "Entendemos tu estilo"
      texto: "Nuestros djs para bodas en Galicia preparan la música contigo, escuchando tus gustos y adaptándose a lo que quieras transmitir en tu día."
      icono: "Palette"

Sección 3 — ¿Qué incluye?:
  h2: "¿Qué incluye nuestro servicio de DJ para bodas?"
  parrafo: |
    Cuando reservas un DJ con MG Eventos, no solo contratas a alguien para poner música, sino que
    disfrutas de un servicio completo y personalizado que acompaña todo tu día. Estas son algunas
    de las cualidades que siempre incluimos:
  lista: ["Sonido profesional", "Iluminación y ambiente", "Asesoramiento cercano"]
  cta: { texto: "Pregúntanos", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu DJ de boda en Galicia"
  parrafo: |
    Tu boda merece la mejor música y un ambiente único. En MG Eventos ponemos a tu disposición un DJ
    para bodas en Galicia con experiencia, cercanía y un servicio completo para que no falte nada en
    tu gran día. Te asesoramos sin compromiso, te ayudamos a organizar cada detalle y nos adaptamos
    a tu estilo para que tu celebración sea recordada por todos.
  cta: { texto: "Hablemos", destino: "/contacto" }

Sección 5 — Fotomatón para bodas:
  h2: "Fotomatón para bodas"
  h3: "Otros servicios"
  parrafo: |
    Además del servicio de dj, puede que queráis hacer algo especial para vuestro día.
    Para que tus invitados se lleven un recuerdo divertido, ofrecemos el servicio de fotomatón
    con atrezzo y fotos instantáneas.
  bullets: ["Risas aseguradas", "Inmortaliza el momento", "Anima la fiesta"]
  link_interno: { texto: "Fotomatón para boda", href: "/fotomaton-en-galicia" }

Sección 6 — ¿Por qué MG Eventos?:
  subtitulo: "Tu DJ para tu día especial"
  parrafo: |
    Nuestro objetivo es sencillo: que tengas un DJ de boda que entienda tu estilo, que se adapte al
    ambiente que deseas crear y que haga que tú y tus invitados viváis una celebración inolvidable.
  stats: [+10 años, +2000 clientes, +300 bodas animadas]
```

**Archivos:** `src/app/dj-para-bodas-en-galicia/page.tsx`

---

### TAREA 6: Página Fotomatón — /fotomaton-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "Fotomatón en Galicia — Alquiler para bodas y fiestas"
meta_descripcion: "Alquila un fotomatón en Galicia para bodas, fiestas y eventos. Atrezzo, galería digital y diversión asegurada. Presupuesto sin compromiso. MG Eventos."
keyword_principal: "fotomatón en Galicia"
keywords_secundarias: ["alquiler fotomatón Galicia", "fotomatón bodas Galicia", "espejo fotomatón"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/fotomaton-en-galicia"
breadcrumb: "Home > Fotomatón en Galicia"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "Fotomatón en Galicia"
  pre_titulo: "¿Buscas un fotomatón para tu fiesta?"
  parrafo: |
    Un fotomatón es mucho más que una máquina de fotos: es un rincón que aporta espontaneidad, risas
    y recuerdos compartidos en uno de los días más importantes de tu vida. En MG Eventos lo hemos visto
    una y otra vez: mientras la música suena y la fiesta avanza, el fotomatón se convierte en el lugar
    donde todos quieren estar, desde los más jóvenes hasta los más mayores.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props:
  items:
    - titulo: "Diversión y recuerdos"
      texto: "La clave está en que une a los invitados en un ambiente desenfadado, generando momentos que complementan a la perfección la emoción y el estilo de cualquier evento."
      icono: "Camera"
    - titulo: "Galería digital"
      texto: "Después de la boda, tendrás acceso a un álbum con momentos de todos los invitados durante la boda, con momentos memorables y risas y anécdotas aseguradas."
      icono: "Image"
    - titulo: "Rincón especial para tus invitados"
      texto: "Lo que más sorprende es que siempre hay movimiento alrededor del fotomatón: grupos de amigos, familias enteras y hasta los abuelos disfrutan de participar."
      icono: "Users"

Sección 3 — Fotomatón para eventos:
  etiqueta: "Para fiestas"
  h2: "Fotomatón para eventos"
  parrafo: |
    Una foto siempre es una excusa perfecta para echarse unas risas, y tener un fotomatón le da un
    punto diferente a la celebración. No se trata solo de fotos, sino de crear un rincón en el que
    todos —niños y mayores— se divierten juntos probando complementos, inventando poses y compartiendo risas.
  lista: ["Atrezzo variado y original", "Galería digital", "Risas aseguradas"]
  cta: { texto: "Pregúntanos", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu espejo fotomatón"
  parrafo: |
    Tu boda es un día único y merece detalles que lo hagan inolvidable. Con el fotomatón para bodas
    en Galicia de MG Eventos, tus invitados tendrán un espacio para divertirse, reír y guardar
    recuerdos especiales. Te asesoramos sin compromiso, nos adaptamos a tu estilo y cuidamos cada
    detalle para que no tengas que preocuparte de nada.
  cta: { texto: "Hablemos", destino: "/contacto" }

Sección 5 — Fotomatón para bodas:
  etiqueta: "Tu gran día"
  h2: "Fotomatón para bodas"
  parrafo: |
    Cada boda es diferente, y por eso ofrecemos un espejo fotomatón que se adapta al estilo de tu
    celebración. Desde ambientes elegantes y románticos hasta fiestas modernas y desenfadadas, el
    fotomatón puede personalizarse para encajar con la decoración y la temática del evento. También
    contamos con servicio de DJ para bodas en Galicia.
  parrafo_2: |
    Es mucho más que una máquina de fotos: es un rincón que aporta espontaneidad, risas y recuerdos
    compartidos en uno de los días más importantes de tu vida. En MG Eventos lo hemos visto una y otra
    vez: mientras la música suena y la fiesta avanza, el fotomatón se convierte en el lugar donde todos
    quieren estar, desde los más jóvenes hasta los más mayores.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  link_interno: { texto: "DJ para bodas en Galicia", href: "/dj-para-bodas-en-galicia" }

Sección 6 — ¿Por qué MG Eventos?:
  stats: [+10 años, +2000 clientes, +1600 eventos]
```

**Archivos:** `src/app/fotomaton-en-galicia/page.tsx`

---

### TAREA 7: Página Pantallas LED — /pantallas-led-para-eventos-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "Pantallas LED para eventos en Galicia — MG Eventos"
meta_descripcion: "Alquiler de pantallas LED para eventos en Galicia. Interior y exterior, montaje profesional y asistencia técnica. Bodas, conferencias, ferias. Presupuesto gratis."
keyword_principal: "pantallas LED para eventos en Galicia"
keywords_secundarias: ["alquiler pantallas LED Galicia", "pantallas LED bodas", "pantallas LED conferencias"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/pantallas-led-para-eventos-en-galicia"
breadcrumb: "Home > Pantallas LED para eventos en Galicia"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "Pantallas LED para eventos en Galicia"
  pre_titulo: "¿Buscas las mejores pantallas para tu presentación?"
  parrafo: |
    En muchos eventos, lo visual marca la diferencia. Nuestras pantallas LED para eventos en Galicia
    permiten que todo se vea con la mejor calidad, ya sea una boda, una conferencia, una feria o
    una fiesta popular.
  parrafo_2: |
    Lo interesante es que no hay un único formato: trabajamos tanto con televisores de gran tamaño,
    perfectos para presentaciones o proyecciones en interiores, como con pantallas LED modulares,
    que se montan pieza a pieza y se adaptan al espacio. Esto hace que el servicio encaje igual en
    una discomóvil, en un concierto al aire libre o en un congreso empresarial en Santiago.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props:
  items:
    - titulo: "La mejor solución visual"
      texto: "En una fiesta o en una boda, las pantallas LED aportan algo más que imagen: crean ambiente. Pueden proyectar vídeos, animaciones, recuerdos de los protagonistas o mensajes personalizados que refuercen el momento."
      icono: "Monitor"
    - titulo: "Pantallas LED al aire libre"
      texto: "Las pantallas LED modulares funcionan igual de bien en exteriores que en interiores. En una plaza de pueblo o en un campo de fiesta, su potencia asegura que la imagen se vea nítida incluso de día."
      icono: "Sun"
    - titulo: "Montaje y asistencia"
      texto: "Organizar un evento con pantallas puede sonar complicado, pero en realidad es todo lo contrario. Nuestro servicio incluye montaje completo y asistencia técnica durante todo el evento, para que no tengas que preocuparte de nada."
      icono: "Wrench"

Sección 3 — Alquiler de pantallas:
  etiqueta: "Decoración digital"
  h2: "Alquiler de pantallas LED para eventos"
  parrafo: |
    El alquiler de pantallas LED para eventos en Galicia es cada vez más habitual porque permite que
    cualquier celebración gane en profesionalidad y en impacto visual. Ya no hablamos solo de
    proyectar imágenes, sino de crear una experiencia completa en la que el público se sienta parte
    del evento.
  parrafo_2: |
    En MG Eventos lo hemos comprobado en todo tipo de celebraciones: desde conferencias en Santiago
    donde los ponentes se ven con claridad hasta conciertos al aire libre en los que la pantalla se
    convierte en el foco de atención. Lo especial es que las pantallas no viajan solas, sino que se
    integran con otros servicios como el sonido, la iluminación o incluso nuestro DJ para eventos en
    Galicia, creando un conjunto perfecto para que la fiesta tenga ritmo e imagen a la vez.
  lista: ["Sonido profesional", "Iluminación y ambiente", "Asesoramiento cercano"]
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }
  link_interno: { texto: "DJ para eventos en Galicia", href: "/dj-para-eventos-en-galicia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu montaje de pantallas LED"
  parrafo: |
    Tu evento merece una imagen a la altura. En MG Eventos te ofrecemos pantallas LED en Galicia
    con montaje profesional, asistencia técnica y opciones totalmente adaptadas a tus necesidades.
    Te asesoramos sin compromiso, te ayudamos a elegir el formato ideal y nos encargamos de que
    todo se vea perfecto desde el primer minuto.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 5 — Interior/Exterior:
  etiqueta: "Todo tipo de eventos"
  h2: "Pantallas LED para el aire libre o interior"
  parrafo: |
    Las pantallas LED modulares funcionan igual de bien en exteriores que en interiores. En una plaza
    de pueblo o en un campo de fiesta, su potencia asegura que la imagen se vea nítida incluso de día.
    Y en espacios cerrados, como auditorios o fincas de boda, los televisores o pantallas de menor
    tamaño ofrecen la cercanía perfecta para seguir cada detalle.
  bullets: ["Visibilidad para todos los asistentes", "Presentaciones espectaculares", "Elementos visuales en fiestas"]
  links_internos:
    - { texto: "Fotomatón para boda", href: "/fotomaton-en-galicia" }
    - { texto: "música para eventos en galicia", href: "/" }

Sección 6 — Otros servicios / ¿Por qué?:
  h2: "Nuestro servicio de DJ"
  h3: "Otros servicios"
  parrafo: |
    Nuestro objetivo es sencillo: que tengas un DJ en Galicia que entienda tu estilo, que se adapte
    al ambiente que deseas crear y que haga que tú y tus invitados viváis una celebración inolvidable.
  stats: [+10 años, +2000 clientes, +300 bodas animadas]
```

**Archivos:** `src/app/pantallas-led-para-eventos-en-galicia/page.tsx`

---

### TAREA 8: Página Discotecas móviles — /discotecas-moviles-en-galicia

**Metadata SEO:**
```yaml
meta_titulo: "Discotecas móviles en Galicia — MG Eventos"
meta_descripcion: "Discomóvil en Galicia para bodas, verbenas y fiestas. Sonido, iluminación y animación profesional. Montaje versátil. +10 años de experiencia."
keyword_principal: "discotecas móviles en Galicia"
keywords_secundarias: ["discomóvil Galicia", "discomóvil bodas Galicia", "alquilar discoteca móvil"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/discotecas-moviles-en-galicia"
breadcrumb: "Home > Discotecas móviles en Galicia"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "Discotecas móviles en Galicia"
  parrafo: |
    En MG Eventos llevamos años montando discotecas móviles en Galicia que se adaptan a cada tipo de
    público. Es trasladar la experiencia de una sala de fiesta a cualquier lugar: un jardín, una plaza,
    una finca o el espacio que elijas para celebrar. Lo especial de este servicio es la flexibilidad:
    puedes tener el sonido, la iluminación y la animación de una discoteca real sin necesidad de desplazarte.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props:
  items:
    - titulo: "Música, sonido e iluminación"
      texto: "En plazas, campos de fiesta o jardines, lo importante es que la música llegue a todos y que la iluminación cree un ambiente festivo."
      icono: "Speaker"
    - titulo: "Ideal para verbenas y fiestas"
      texto: "No hay fiesta de pueblo sin música, y ahí es donde una discoteca móvil se convierte en protagonista. Hemos participado en verbenas, fiestas patronales en toda Galicia"
      icono: "Tent"
    - titulo: "Perfecta para el aire libre"
      texto: "Las fiestas al aire libre tienen un encanto propio, y una discoteca al aire libre en Galicia consigue aprovecharlo al máximo."
      icono: "TreePine"

Sección 3 — Discomóvil para bodas:
  etiqueta: "Días especiales"
  h2: "Discomóvil para bodas"
  parrafo: |
    La música es uno de los pilares de cualquier boda. Una discomóvil para bodas en Galicia permite que
    la celebración tenga todo lo necesario: sonido de calidad, iluminación que transforma el ambiente y
    un montaje que se adapta al espacio, ya sea en un pazo, una finca o un salón de banquetes.
  parrafo_2: |
    Nuestro equipo se encarga de todo el montaje y la animación musical, y si quieres una experiencia
    aún más completa puedes combinarla con nuestro DJ para bodas. Así tendrás un servicio que une la
    potencia técnica de la discomóvil con la cercanía y la personalización que aporta un DJ profesional.
  lista: ["Bodas al aire libre", "Eventos grandes", "Fiesta sin fin"]
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }
  link_interno: { texto: "DJ para bodas", href: "/dj-para-bodas-en-galicia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para disco móvil para fiestas"
  parrafo: |
    ¿Quieres asegurarte de que tu próxima celebración sea un éxito? En MG Eventos ponemos a tu
    disposición un DJ para eventos en Galicia con la experiencia y la cercanía que necesitas.
    Te asesoramos sin compromiso, resolvemos todas tus dudas y te ayudamos a elegir el servicio
    que mejor encaje con tu fiesta, con las mejores condiciones y siempre al mejor precio.
  cta: { texto: "Hablemos", destino: "/contacto" }

Sección 5 — Servicio flexible:
  etiqueta: "Para cualquier fiesta"
  h2: "Servicio flexible para cada tipo de evento"
  parrafo: |
    Cada celebración es distinta. En unas hay cien invitados, en otras apenas treinta, y en algunas
    miles de personas. Nuestra discomóvil se adapta a todas esas situaciones, con un montaje más
    sencillo para eventos íntimos o con una puesta en escena espectacular para grandes fiestas.
  parrafo_2: |
    Además, puedes elegir entre diferentes configuraciones: sonido, luces, pantallas LED e incluso un
    camión escenario móvil, todo pensado para que tu evento tenga justo lo que necesita y nada menos.
  links_internos:
    - { texto: "pantallas LED", href: "/pantallas-led-para-eventos-en-galicia" }
    - { texto: "camión escenario móvil", href: "/escenario-movil-para-eventos" }

Sección 6 — ¿Por qué alquilar?:
  etiqueta: "Beneficios"
  h2: "¿Por qué alquilar una discomóvil?"
  parrafo: |
    Elegir una discomóvil para tu fiesta o boda no es solo una cuestión de comodidad, es una forma
    de asegurar que el evento salga redondo. Estos son algunos de los beneficios más importantes:
  lista:
    - "Montaje versátil"
    - "Iluminación que crea ambiente"
    - "Potencia y calidad de sonido"
    - "Encaja con cualquier evento"
    - "Equipo técnico incluido"
  cta: { texto: "¡Pregúntanos!", destino: "/contacto" }

Sección 7 — ¿Por qué MG Eventos?:
  stats: [+10 años, +2000 clientes, +1600 eventos]
```

**Archivos:** `src/app/discotecas-moviles-en-galicia/page.tsx`

---

### TAREA 9: Página Escenario móvil — /escenario-movil-para-eventos

**Metadata SEO:**
```yaml
meta_titulo: "Escenario móvil para eventos en Galicia — MG Eventos"
meta_descripcion: "Alquiler de camión escenario en Galicia para verbenas, fiestas y conciertos. Montaje rápido, sonido e iluminación profesional. Presupuesto sin compromiso."
keyword_principal: "escenario móvil para eventos"
keywords_secundarias: ["camión escenario Galicia", "alquiler escenario móvil", "escenario verbenas Galicia"]
schema_type: "Service + BreadcrumbList"
url_canonica: "/escenario-movil-para-eventos"
breadcrumb: "Home > Escenario móvil para eventos"
```

**Secciones:**

```yaml
Sección 1 — Hero:
  h1: "Escenario móvil para eventos"
  pre_titulo: "¿Necesitas un escenario versátil?"
  parrafo: |
    En MG Eventos ponemos a tu disposición un DJ fiesta en Galicia capaz de transformar cualquier
    celebración en un momento único. Nos adaptamos a fiestas de todo tipo y en cualquier lugar,
    llevando la música, el sonido y la iluminación necesarios para que la diversión esté garantizada.
    Con años de experiencia en la zona de Santiago y en toda la comunidad, sabemos cómo hacer que
    tu fiesta tenga ritmo y energía de principio a fin.
  cta: { texto: "¡Contáctanos!", destino: "/contacto" }

Sección 2 — Value Props:
  items:
    - titulo: "Escenario adaptado"
      texto: "Cada evento es distinto y, sin embargo, el camión escenario encaja siempre. En una explanada se convierte en un punto de encuentro, en la plaza de una aldea pasa a ser el corazón de la fiesta."
      icono: "Frame"
    - titulo: "Montaje rápido y sin complicaciones"
      texto: "Tener un camión escenario significa montar todo en mucho menos tiempo y sin quebraderos de cabeza. En pocas horas está todo listo: estructura, sonido, luces… y el ambiente preparado para arrancar."
      icono: "Clock"
    - titulo: "Para eventos grandes y pequeños"
      texto: "Una de las grandes ventajas de este tipo de escenario es su versatilidad. Puede dar servicio a un festival con miles de personas, pero también encajar en una feria local, un mitin o una fiesta patronal más íntima."
      icono: "Scaling"

Sección 3 — Camión escenario:
  etiqueta: "Servicio de DJ"
  h2: "Camión escenario en Galicia"
  parrafo: |
    El alquiler de un camión escenario en Galicia es la solución más práctica para quienes organizan
    conciertos, fiestas o celebraciones al aire libre. Lo mejor es que no necesitas infraestructuras
    complicadas, solo un DJ para fiestas: el escenario llega sobre ruedas, se despliega en pocas
    horas y queda listo para recibir música y al público.
  lista: ["Verbenas", "Fiestas", "Eventos"]
  cta: { texto: "Hablemos", destino: "/contacto" }
  stat: { valor: 10, prefix: "+", label: "Años de experiencia" }
  link_interno: { texto: "DJ para fiestas", href: "/dj-para-fiestas-en-galicia" }

Sección 4 — Presupuesto:
  h2: "Solicita presupuesto para tu camión escenario en Galicia"
  parrafo: |
    Organizar un evento es más sencillo cuando cuentas con el apoyo adecuado. Con nuestro camión
    escenario en Galicia tendrás todo lo necesario para que tu celebración brille: estructura,
    sonido, luces y un montaje rápido que se adapta al espacio que elijas. Te asesoramos sin
    compromiso, buscamos la mejor configuración para tu evento y nos encargamos de cada detalle
    para que tú solo disfrutes del resultado.
  cta: { texto: "¡Pregúntanos!", destino: "/contacto" }

Sección 5 — Sonido e iluminación:
  etiqueta: "Servicio completo"
  h2: "Sonido e iluminación para tu evento"
  parrafo: |
    No se trata solo de tener un escenario: lo importante es que luzca y suene como debe. Por eso,
    en nuestro alquiler de camión escenario móvil incluimos equipos de sonido potentes y pantallas
    led adaptadas a cada evento.
  parrafo_2: |
    Esto significa que no tienes que preocuparte de coordinar a diferentes proveedores: el escenario,
    el sonido y las luces viajan juntos. Y puedes contar con nuestro DJ para fiestas Con un único
    servicio tienes todo lo necesario para arrancar la fiesta.
  links_internos:
    - { texto: "pantallas led", href: "/pantallas-led-para-eventos-en-galicia" }
    - { texto: "DJ para fiestas", href: "/dj-para-fiestas-en-galicia" }

Sección 6 — ¿Por qué MG Eventos?:
  NOTA: "Esta página usa números distintos: +8 años, +1752 clientes, +1401 eventos — RESPETAR"
  stats:
    - { valor: 8, prefix: "+", label: "Años de experiencia" }
    - { valor: 1752, prefix: "+", label: "Clientes satisfechos" }
    - { valor: 1401, prefix: "+", label: "Eventos y fiestas" }
```

**Archivos:** `src/app/escenario-movil-para-eventos/page.tsx`

---

### TAREA 10: Página Contacto — /contacto

**Metadata SEO:**
```yaml
meta_titulo: "Contacto — MG Eventos | Asesoramiento para fiestas"
meta_descripcion: "Contáctanos para contratar DJ, discomóvil, fotomatón o escenario móvil en Galicia. Te asesoramos sin compromiso. Llámanos: 636 20 33 45."
keyword_principal: "contacto MG Eventos"
keywords_secundarias: ["presupuesto eventos Galicia", "contratar DJ Galicia"]
schema_type: "ContactPage + BreadcrumbList"
url_canonica: "/contacto"
breadcrumb: "Home > Contacto"
```

**Secciones:**

```yaml
Sección 1 — Hero / Intro:
  h1: "Asesoramiento para fiestas"
  parrafo: |
    Contáctanos y te asesoramos en todo el proceso. Ya sea para contratar un dj con un pack completo
    o si quieres alquilar otro elemento para la decoración de tu evento o fiesta.
  fondo: "bg-primary, texto blanco, menor altura que hero de servicios"

Sección 2 — Formulario + Datos:
  layout: "Split 2 columnas — formulario izquierda (60%), datos contacto derecha (40%)"
  formulario:
    titulo: "Déjanos tus datos y te contestamos"
    campos:
      - { nombre: "Nombre", tipo: "text", required: true }
      - { nombre: "Correo electrónico", tipo: "email", required: true }
      - { nombre: "Teléfono", tipo: "tel", required: false }
      - { nombre: "Mensaje", tipo: "textarea", required: true }
    checkbox: "He leído y acepto la política de privacidad."
    cta: { texto: "Contáctanos", tipo: "submit" }
    nota_tecnica: |
      Formulario con validación client-side.
      Endpoint de envío: A DEFINIR (formspree, emailjs, o API route Next.js).
      El agente debe PREGUNTAR si no se sabe el endpoint.
  datos_contacto:
    titulo: "Contáctanos directamente"
    telefono: { valor: "636 20 33 45", link: "tel:+34636203345", icono: "Phone" }
    email: { valor: "info@mgeventos.es", link: "mailto:info@mgeventos.es", icono: "Mail" }
    whatsapp: { valor: "636 20 33 45", link: "https://wa.me/34636203345", icono: "MessageCircle" }
  fondo: "bg-white"
  elementos_dinamicos: "Fade-in del formulario, slide-in de datos de contacto"
  responsivo:
    mobile: "Stack vertical — formulario arriba, datos abajo"

⚠️ DATOS FALTANTES:
  obligatorios:
    - "¿Cuál es el endpoint para el envío del formulario? (formspree, emailjs, API route, u otro)"
    - "¿Existe página de política de privacidad? ¿URL?"
  opcionales:
    - "¿Se quiere integrar un mapa de Google Maps?"
    - "¿Hay dirección física para mostrar?"
    - "¿Redes sociales para incluir? (Instagram, Facebook, etc.)"
```

**Archivos:** `src/app/contacto/page.tsx`

---

### TAREA P1: Datos Estructurados Globales (Schema Markup)

**Herramientas:**
- 📚 Skills: schema-markup, seo-fundamentals

**Objetivo:** Schema markup JSON-LD validado en CADA página.

**Schemas a implementar:**

```yaml
Organization (Home):
  name: "MG Eventos"
  url: "https://mgeventos.es"
  description: "Animadores de fiesta en Galicia con +10 años de experiencia"
  telephone: "+34636203345"
  email: "info@mgeventos.es"
  sameAs: [] # ← PREGUNTAR redes sociales
  areaServed: "Galicia, España"
  # address: PREGUNTAR dirección física

WebSite + SearchAction (Home):
  url: "https://mgeventos.es"
  name: "MG Eventos"

Service (7 páginas de servicio — una por cada):
  provider: "MG Eventos"
  areaServed: "Galicia, España"
  name: "[Nombre del servicio]"
  description: "[Primer párrafo del servicio]"
  url: "[URL de la página]"

BreadcrumbList (TODAS las páginas excepto Home):
  Generado desde la jerarquía de URLs

ContactPage (Contacto):
  Schema ContactPage con datos de contacto
```

**⚠️ DATOS FALTANTES para Schema completo:**
```
OBLIGATORIOS:
1. ¿Cuál es el dominio definitivo? (asumido mgeventos.es — confirmar)
2. ¿Hay dirección física? (para LocalBusiness schema)

OPCIONALES:
3. ¿URLs de redes sociales? (para sameAs)
4. ¿Horario de atención?
5. ¿Año de fundación?
6. ¿Rango de precios de servicios?
```

**Archivos:**
- `src/components/seo/SchemaOrganization.tsx`
- `src/components/seo/SchemaService.tsx`
- `src/components/seo/SchemaWebSite.tsx`
- `src/components/seo/SchemaBreadcrumb.tsx`

**Criterios:**
- [ ] Schema Organization en Home
- [ ] Schema Service en cada página de servicio (7)
- [ ] Schema BreadcrumbList en TODAS excepto Home
- [ ] Schema WebSite + SearchAction en Home
- [ ] TODOS validados en validator.schema.org

---

### TAREA P2: Sitemap.xml Dinámico

**Archivo:** `src/app/sitemap.ts`

**Contenido:**
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mgeventos.es' // ← Confirmar dominio

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/dj-para-eventos-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/dj-para-fiestas-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/dj-para-bodas-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fotomaton-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pantallas-led-para-eventos-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/discotecas-moviles-en-galicia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/escenario-movil-para-eventos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

**⚠️ DATO FALTANTE:** Confirmar dominio de producción (asumido mgeventos.es)

**Criterios:**
- [ ] 9 URLs incluidas con prioridades correctas
- [ ] Accesible en /sitemap.xml
- [ ] XML válido

---

### TAREA P3: robots.txt

**Archivo:** `src/app/robots.ts`

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://mgeventos.es/sitemap.xml', // ← Confirmar dominio
  }
}
```

**Criterios:**
- [ ] Accesible en /robots.txt
- [ ] Enlace al sitemap con URL completa
- [ ] No bloquea páginas importantes

---

### TAREA P4: llms.txt — Optimización GEO

**Archivo:** `public/llms.txt`

```markdown
# MG Eventos

> Animadores de fiesta en Galicia con más de 10 años de experiencia. Música, sonido, iluminación y animación profesional para bodas, fiestas y eventos corporativos.

## Qué hacemos
MG Eventos ofrece servicios de música y animación para todo tipo de eventos en Galicia: bodas, fiestas privadas, verbenas, eventos corporativos y más. Contamos con DJ profesional, discomóvil, fotomatón, pantallas LED y camión escenario.

## Servicios
- DJ para eventos en Galicia: Música personalizada y sonido profesional para cualquier celebración — /dj-para-eventos-en-galicia
- DJ para fiestas en Galicia: Verbenas, cumpleaños y fiestas privadas con animación completa — /dj-para-fiestas-en-galicia
- DJ para bodas en Galicia: Música personalizada, asesoramiento y planificación para tu boda — /dj-para-bodas-en-galicia
- Fotomatón en Galicia: Espejo fotomatón con atrezzo, galería digital y diversión para todos — /fotomaton-en-galicia
- Pantallas LED para eventos: Interior y exterior, montaje profesional y asistencia técnica — /pantallas-led-para-eventos-en-galicia
- Discotecas móviles en Galicia: Experiencia de sala de fiesta en cualquier ubicación — /discotecas-moviles-en-galicia
- Escenario móvil para eventos: Camión escenario con sonido e iluminación profesional — /escenario-movil-para-eventos

## Ubicación y Contacto
- Web: https://mgeventos.es
- Email: info@mgeventos.es
- Teléfono: 636 20 33 45
- WhatsApp: 636 20 33 45
- Ubicación: Galicia, España (Santiago de Compostela y toda la comunidad)

## Información Adicional
- Sector: Música y animación de eventos
- Público: Personas que organizan bodas, fiestas, verbenas, cumpleaños y eventos corporativos en Galicia
- Diferencial: +10 años de experiencia, +1.600 eventos, +300 bodas, +2.000 clientes satisfechos. Trato cercano y servicio integral.
```

**Criterios:**
- [ ] Accesible en /llms.txt
- [ ] Información completa y precisa
- [ ] Servicios listados con URLs
- [ ] Tono profesional y conciso

---

### TAREA FINAL: Validación SEO Global + Performance + Entrega

**Herramientas:**
- 📚 Skills: seo-audit, web-performance-optimization, verification-before-completion

**Objetivo:** Sitio completo validado y listo para producción.

**Pasos:**
1. `npx next build` — sin errores
2. `npx next lint` — sin errores
3. `npx tsc --noEmit` — sin errores
4. Verificar sitemap.xml incluye las 9 URLs
5. Verificar robots.txt con enlace al sitemap
6. Verificar llms.txt accesible
7. Validar schema markup de CADA página (validator.schema.org)
8. Verificar meta tags únicos en cada una de las 9 páginas
9. Verificar internal linking completo (ningún huérfano)
10. Imágenes con alt text en TODAS
11. Responsive verificado: 375px, 768px, 1280px+
12. Lighthouse audit en cada página principal
13. Verificar CTAs WhatsApp funcionales
14. Verificar formulario contacto (si hay endpoint)
15. Breadcrumbs visuales y schema en todas las páginas
16. Animaciones y transiciones funcionando
17. 404 personalizado atractivo

**Criterios:**
- [ ] Lighthouse Performance > 90 (todas)
- [ ] Lighthouse SEO > 95 (todas)
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] Schema markup válido (9 páginas)
- [ ] Zero links rotos
- [ ] Sitemap completo (9 URLs)
- [ ] robots.txt correcto
- [ ] llms.txt accesible
- [ ] Mobile responsive perfecto
- [ ] Branding coherente en todo el sitio
- [ ] Contenido EXACTO de docs/pages/ respetado
- [ ] WhatsApp float funcional

---

## 🔄 Bucle de Validación

### Nivel 1: Código & Estilo
```bash
npx next lint
npx tsc --noEmit
```

### Nivel 2: SEO por Página
```yaml
Verificar en CADA página:
  - Meta título único (max 60 chars)
  - Meta descripción única (max 155 chars)
  - Solo 1 H1 por página
  - Jerarquía H1 > H2 > H3 correcta
  - Imágenes con alt text
  - Schema JSON-LD válido
  - URL canónica
  - Open Graph completo
  - Breadcrumbs (visual + schema)
  - Internal links funcionales
```

### Nivel 3: Lighthouse
```bash
npx next build && npx next start
# Performance > 90, SEO > 95, A11y > 90, BP > 90
```

---

## ✅ Checklist de Validación Final

```yaml
Código:
  - [ ] npx next lint — sin errores
  - [ ] npx tsc --noEmit — sin errores
  - [ ] npm run build — exitoso

SEO:
  - [ ] Meta título único por página (9)
  - [ ] Meta descripción única por página (9)
  - [ ] H1 único por página con keyword (9)
  - [ ] Schema Organization en Home
  - [ ] Schema WebSite + SearchAction en Home
  - [ ] Schema Service en 7 páginas de servicio
  - [ ] Schema BreadcrumbList en 8 páginas (todas menos Home)
  - [ ] Sitemap con 9 URLs y prioridades
  - [ ] robots.txt con enlace al sitemap
  - [ ] llms.txt accesible y completo
  - [ ] Canonical URLs configuradas (9)
  - [ ] Open Graph completo (9)
  - [ ] Breadcrumbs visuales (8)
  - [ ] Internal linking mapeado
  - [ ] Alt text en todas las imágenes

Performance:
  - [ ] Lighthouse Performance > 90
  - [ ] Lighthouse SEO > 95
  - [ ] Lighthouse Accessibility > 90
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1

Branding:
  - [ ] Colores primary (#1E1B4B), secondary (#7C3AED), accent (#F59E0B)
  - [ ] Plus Jakarta Sans en headings
  - [ ] Inter en body
  - [ ] Logo textual "MG Eventos" coherente
  - [ ] Lucide icons (outline) coherentes
  - [ ] Tono cercano, profesional, energético

Responsive:
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1280px+)

Conversión:
  - [ ] WhatsApp float funcional (mobile)
  - [ ] CTAs WhatsApp con wa.me/34636203345
  - [ ] Formulario contacto funcional
  - [ ] Teléfono y email clicables
```

---

## ❌ Anti-Patrones a Evitar

- ❌ Inventar textos que no están en docs/pages/
- ❌ Cambiar los colores definidos en el branding
- ❌ Más de 1 H1 por página
- ❌ Meta títulos duplicados entre páginas
- ❌ Imágenes sin alt text
- ❌ Client Components innecesarios ('use client' sin razón)
- ❌ Ignorar responsive mobile
- ❌ Hardcodear URLs en vez de usar constants.ts
- ❌ Saltarse schema markup en alguna página
- ❌ Ignorar los números de stats específicos por página (escenario-movil tiene números diferentes)
- ❌ Olvidar el WhatsApp float en mobile
- ❌ Formulario sin validación
- ❌ Duplicar componentes en vez de reutilizar (WhyMGSection, StatsSection, etc.)

---

## 📊 Score de Confianza: 9/10

```yaml
Fortalezas:
  - ✅ Contenido EXACTO vaciado de las 9 páginas
  - ✅ Branding completo definido con tokens, paleta, fonts
  - ✅ Tailwind config listo para copiar
  - ✅ SEO completo: meta, schema, sitemap, robots, llms.txt, breadcrumbs
  - ✅ Cada página con plan sección por sección y textos exactos
  - ✅ Componentes reutilizables identificados (WhyMG, Stats, BudgetCTA, etc.)
  - ✅ Internal linking mapeado
  - ✅ Skills y MCPs asignados
  - ✅ Protocolo de datos faltantes incluido

Gap para 10/10:
  - ⚠️ Falta confirmar dominio de producción
  - ⚠️ Falta endpoint del formulario de contacto
  - ⚠️ Falta dirección física (para LocalBusiness schema)
  - ⚠️ Faltan redes sociales (para sameAs)
  - ⚠️ Imágenes son placeholders hasta tener assets reales
```

---

## 📚 Referencias

- Fuente de contenido: `/home/mk20/mg-eventos-v1/docs/pages/*.md`
- Template base: `PRPs/templates/prp_base.md`
- Archon source_id Next.js: `77b8a4a07d5230b5`
- Archon source_id React: `a931698c21fb8f24`
- MCP Archon: documentación Next.js 14, React
- MCP Serena: análisis simbólico del código
- Skills SEO: seo-fundamentals, seo-audit, schema-markup, web-performance-optimization, geo-fundamentals
- Skills Frontend: nextjs-best-practices, react-patterns, tailwind-patterns, frontend-design, ui-ux-pro-max
- Skills Validación: lint-and-validate, verification-before-completion
