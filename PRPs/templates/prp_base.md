name: "Template Base PRP Web SEO — Páginas Web Profesionales con SEO Transaccional"
version: "1.0-ES"
stack: "React, Next.js 14 (App Router), Tailwind CSS"
descripcion: |
  Template optimizado para generar PRPs de sitios web profesionales con SEO transaccional.
  Incluye sistema de diseño basado en branding, plan sección por sección con textos exactos,
  metadata SEO completa, schema markup, y validación Lighthouse.

## Principios Fundamentales
1. **Contenido es Rey**: Vaciar EXACTAMENTE el contenido proporcionado en los documentos
2. **Branding Inmutable**: Los colores, tipografías y tono NO se modifican, se respetan al 100%
3. **SEO Transaccional**: Cada página está diseñada para posicionar y convertir
4. **Mobile-First**: Diseñar para móvil primero, escalar a desktop
5. **Server Components**: Usar React Server Components por defecto en Next.js 14
6. **Rendimiento**: Lighthouse > 90 en todas las métricas
7. **Cada Página, Su Carpeta**: Estructura limpia de archivos
8. **Skills en Equipo**: SEO + Frontend + Diseño en cada tarea
9. **MCPs Estratégicos**: Archon para docs, Serena para código

---

## 🎯 Objetivo

[Nombre del sitio web] — Sitio web profesional para [nombre del negocio] con [X] páginas optimizadas para SEO transaccional, diseño único basado en el branding de la marca y contenido escrito previamente.

## 💡 Por Qué

- [Valor de negocio: presencia digital profesional, captación de clientes, posicionamiento]
- [Diferenciación: diseño único alineado con la identidad de marca]
- [SEO: posicionamiento orgánico en búsquedas transaccionales del sector]

## 📋 Qué

Sitio web completo con:
- [X] páginas desarrolladas con contenido profesional
- SEO transaccional (meta tags, schema markup, sitemap, internal linking)
- Diseño coherente con branding (colores, tipografías, logo)
- Responsive mobile-first
- Core Web Vitals optimizados
- Elementos dinámicos y diseño moderno

### Criterios de Éxito
- [ ] Todas las páginas desarrolladas con contenido EXACTO
- [ ] Lighthouse SEO > 95 en todas las páginas
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Schema markup válido en cada página
- [ ] Meta título y descripción únicos por página
- [ ] Branding 100% coherente
- [ ] Responsive en todos los breakpoints

---

## 🏢 Información del Negocio

```yaml
nombre: "[Nombre del negocio]"
sector: "[Sector/industria]"
propuesta_valor: "[Propuesta de valor principal]"
publico_objetivo: "[Descripción del público]"
ubicacion: "[Ciudad, País / Global]"
alcance: "[Local / Nacional / Internacional]"
tono_voz: "[Profesional, cercano, técnico, etc.]"
competidores: ["Competidor 1", "Competidor 2"]
url_objetivo: "[dominio.com]"
```

---

## 🎨 Sistema de Diseño (Branding)

### Paleta de Colores
```yaml
primary: "#XXXXXX"      # Uso: CTAs principales, headers, elementos clave
secondary: "#XXXXXX"    # Uso: fondos secundarios, bordes, badges
accent: "#XXXXXX"       # Uso: highlights, hover, elementos de acento
neutral:
  50: "#XXXXXX"         # Fondos más claros
  100: "#XXXXXX"
  200: "#XXXXXX"
  300: "#XXXXXX"
  400: "#XXXXXX"
  500: "#XXXXXX"        # Texto secundario
  600: "#XXXXXX"
  700: "#XXXXXX"
  800: "#XXXXXX"        # Texto principal
  900: "#XXXXXX"        # Headings
background: "#XXXXXX"   # Fondo general del sitio
surface: "#XXXXXX"      # Fondo de tarjetas y secciones
success: "#XXXXXX"
error: "#XXXXXX"
warning: "#XXXXXX"
```

### Tipografías
```yaml
heading:
  nombre: "[Nombre de la fuente]"
  peso: [700, 600]
  uso: "H1-H6, títulos de secciones"
  import: "[Google Fonts URL o local]"

body:
  nombre: "[Nombre de la fuente]"
  peso: [400, 500]
  uso: "Párrafos, texto general"
  import: "[Google Fonts URL o local]"

accent:
  nombre: "[Nombre de la fuente]"
  peso: [500, 600]
  uso: "CTAs, labels, botones"
  import: "[Google Fonts URL o local]"
```

### Logo
```yaml
variantes:
  - principal: "public/images/logo.svg"
  - horizontal: "public/images/logo-horizontal.svg"
  - icono: "public/images/logo-icon.svg"
  - fondo_oscuro: "public/images/logo-white.svg"
zona_segura: "[Descripción de espaciado mínimo]"
tamaño_header: "[altura en px]"
tamaño_footer: "[altura en px]"
```

### Design Tokens para Tailwind
```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#XXXXXX', light: '#XXXXXX', dark: '#XXXXXX' },
        secondary: { DEFAULT: '#XXXXXX', light: '#XXXXXX', dark: '#XXXXXX' },
        accent: { DEFAULT: '#XXXXXX' },
        // ... todos los colores del branding
      },
      fontFamily: {
        heading: ['Nombre Font Heading', 'sans-serif'],
        body: ['Nombre Font Body', 'sans-serif'],
        accent: ['Nombre Font Accent', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'Xpx',
        lg: 'Xpx',
        xl: 'Xpx',
      },
      boxShadow: {
        sm: '...',
        DEFAULT: '...',
        lg: '...',
      }
    }
  }
}
```

### Componentes Base del Branding
```yaml
boton_primario:
  bg: "bg-primary hover:bg-primary-dark"
  text: "text-white font-accent font-semibold"
  padding: "px-6 py-3"
  radius: "rounded-lg"
  transition: "transition-all duration-300"

boton_secundario:
  bg: "bg-transparent border-2 border-primary hover:bg-primary hover:text-white"
  text: "text-primary font-accent font-semibold"

tarjeta:
  bg: "bg-surface"
  shadow: "shadow-md hover:shadow-lg"
  radius: "rounded-xl"
  padding: "p-6"
  transition: "transition-shadow duration-300"

seccion:
  padding: "py-16 md:py-24"
  max_width: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

---

## 🗺️ Arquitectura SEO Transaccional

### Mapa del Sitio
```yaml
paginas:
  - url: "/"
    nombre: "Home"
    keyword: "[keyword principal home]"
    schema: "Organization + WebSite"
    prioridad: 1.0

  - url: "/[servicio-1]"
    nombre: "[Servicio 1]"
    keyword: "[keyword servicio 1]"
    schema: "Service"
    prioridad: 0.8

  - url: "/[servicio-2]"
    nombre: "[Servicio 2]"
    keyword: "[keyword servicio 2]"
    schema: "Service"
    prioridad: 0.8

  # ... TODAS las páginas

internal_linking:
  - desde: "Home"
    hacia: ["Servicio 1", "Servicio 2", "Contacto"]
  - desde: "Servicio 1"
    hacia: ["Home", "Servicio 2", "Contacto"]
  # ... mapa completo de links internos
```

### Estructura de URLs
```yaml
patron: "/keyword-principal-en-slug"
jerarquia:
  - / (Home)
  - /servicios/servicio-x
  - /servicios/servicio-y
  - /sobre-nosotros
  - /contacto
  - /blog (si aplica)
  - /blog/[slug] (si aplica)
reglas:
  - Solo minúsculas
  - Guiones medios para separar palabras
  - Sin trailing slash
  - Keywords en la URL
  - Máximo 3 niveles de profundidad
```

---

## 🧰 Skills del Proyecto

### SEO
```yaml
seo-fundamentals:
  cuándo: "Al diseñar estructura de cada página"
  aporta: "E-E-A-T, Core Web Vitals, principios Google"
  obligatorio: true

schema-markup:
  cuándo: "Al implementar JSON-LD de cada página"
  aporta: "Structured data correcto por tipo de página"
  obligatorio: true

seo-audit:
  cuándo: "Validación final del sitio completo"
  aporta: "Checklist exhaustivo de SEO técnico"
  obligatorio: true

web-performance-optimization:
  cuándo: "Optimización y validación Lighthouse"
  aporta: "Core Web Vitals, bundle, caching"
  obligatorio: true
```

### Frontend
```yaml
nextjs-best-practices:
  cuándo: "Siempre al escribir código Next.js"
  aporta: "App Router, Server Components, metadata API"
  obligatorio: true

react-patterns:
  cuándo: "Al crear componentes interactivos"
  aporta: "Hooks, composición, performance"

tailwind-patterns:
  cuándo: "Al escribir estilos"
  aporta: "CSS-first config, responsive, design tokens"
  obligatorio: true

frontend-design:
  cuándo: "Al diseñar cada página"
  aporta: "UI profesional, anti-genérica, production-grade"
  obligatorio: true

ui-ux-pro-max:
  cuándo: "Diseño complejo, paletas, tipografías"
  aporta: "50 estilos, 21 paletas, 50 font pairings"
```

### Validación
```yaml
lint-and-validate:
  cuándo: "Después de CADA página implementada"
  obligatorio: true

verification-before-completion:
  cuándo: "Antes de declarar sitio completo"
  obligatorio: true
```

---

## 🔌 Guía de MCPs

### MCP Archon 🎯
```yaml
Flujo:
  1. rag_get_available_sources() → Listar fuentes
  2. rag_search_knowledge_base(query="Next.js [tema]", source_id="src_nextjs", match_count=5)
  3. rag_search_code_examples(query="[patrón]", source_id="src_xxx", match_count=3)

Queries frecuentes:
  - "Next.js metadata generateMetadata"
  - "Next.js App Router sitemap"
  - "Next.js image optimization next/image"
  - "Next.js font optimization"
  - "React server components"
  - "Tailwind responsive"
```

### MCP Serena ⚡
```yaml
Filosofía: "No leer archivos completos. Análisis simbólico."

Herramientas:
  - get_symbols_overview('src/') → Estructura general
  - find_symbol('Component', 'path/file.tsx', True) → Leer componente
  - search_for_pattern('export.*metadata', 'src/app/') → Buscar patrones
  - replace_symbol_body() → Ediciones quirúrgicas
```

---

## 📦 Codebase

### Estructura Actual (si existe)
```bash
# Completar con tree o Serena get_symbols_overview
```

### Estructura Objetivo
```bash
src/
├── app/
│   ├── layout.tsx                    # Layout raíz + fonts + metadata global
│   ├── page.tsx                      # Home
│   ├── sitemap.ts                    # Sitemap dinámico
│   ├── robots.ts                     # robots.txt
│   ├── not-found.tsx                 # 404 personalizado
│   ├── [pagina-1]/
│   │   └── page.tsx                  # Página 1
│   ├── [pagina-2]/
│   │   └── page.tsx                  # Página 2
│   └── ...                           # Cada página en su carpeta
├── components/
│   ├── ui/                           # Button, Card, Badge, Container, etc.
│   ├── sections/                     # Hero, Features, CTA, Testimonials, FAQ
│   ├── layout/                       # Header, Footer, MobileMenu
│   └── seo/                          # JsonLd, Breadcrumbs, SchemaOrg
├── lib/
│   ├── metadata.ts                   # Helpers de metadata
│   ├── constants.ts                  # URLs, nombre sitio, redes sociales
│   └── utils.ts                      # cn(), formatters, etc.
├── styles/
│   └── globals.css                   # Tailwind + custom CSS
├── types/
│   └── index.ts                      # Tipos compartidos
└── public/
    ├── images/                       # Imágenes optimizadas
    ├── icons/                        # Favicons
    └── og/                           # Open Graph images (1200x630)
```

### Gotchas Conocidos
```yaml
Next.js 14:
  - "CRÍTICO: metadata export SOLO en Server Components"
  - "CRÍTICO: 'use client' desactiva metadata export"
  - "PATRÓN: Usar generateMetadata() para metadata dinámica"
  - "GOTCHA: App Router no soporta getStaticProps/getServerSideProps"
  - "PATRÓN: Usar fetch() con cache options en Server Components"

SEO:
  - "CRÍTICO: Solo 1 H1 por página"
  - "CRÍTICO: Meta título max 60 caracteres"
  - "CRÍTICO: Meta descripción max 155 caracteres"
  - "GOTCHA: display:none no es técnica SEO válida"
  - "PATRÓN: Canonical URL en CADA página"
  - "PATRÓN: Open Graph image 1200x630px"

Tailwind:
  - "GOTCHA: Clases dinámicas no se purgan (usar safelist si necesario)"
  - "PATRÓN: Usar cn() para merge de clases condicionales"
  - "CRÍTICO: Configurar content paths en tailwind.config.ts"

Performance:
  - "CRÍTICO: LCP < 2.5s, CLS < 0.1, FID < 100ms"
  - "PATRÓN: next/image para TODAS las imágenes"
  - "PATRÓN: next/font para fuentes"
  - "PATRÓN: Lazy load below the fold"
  - "GOTCHA: Demasiadas animaciones impactan CLS"
```

---

## 📝 Lista de Tareas

### TAREA 0: Setup del Proyecto + Branding + Design System

**Herramientas:**
- ⚡ MCP Archon: `rag_search_knowledge_base(query="Next.js project setup", source_id="src_nextjs", match_count=5)`
- 🔧 MCP Serena: Onboarding del proyecto
- 📚 Skills: environment-setup-guide, nextjs-best-practices, tailwind-patterns

**Objetivo:** Proyecto Next.js 14 con Tailwind CSS configurado, branding integrado como design tokens, metadata global y archivos SEO base.

**Pasos:**
1. Inicializar proyecto con create-next-app (TypeScript, Tailwind, App Router, src/)
2. Configurar tailwind.config.ts con TODOS los design tokens del branding
3. Configurar next/font con fuentes del branding
4. Implementar layout.tsx con metadata global y fonts
5. Crear robots.ts, sitemap.ts, not-found.tsx
6. Crear lib/constants.ts y lib/metadata.ts
7. Crear globals.css con custom properties del branding
8. Activar Serena

**Criterios:**
- [ ] npm run dev sin errores
- [ ] Tailwind tiene tokens del branding
- [ ] Fonts cargando correctamente
- [ ] Metadata global en layout.tsx
- [ ] robots.ts + sitemap.ts creados

**Comandos de validación:**
```bash
npm run dev
npx next lint
npx tsc --noEmit
```

---

### TAREA 1: Componentes Compartidos y Sistema de Diseño

**Herramientas:**
- ⚡ MCP Archon: React component patterns
- 🔧 MCP Serena: Análisis de componentes creados
- 📚 Skills: react-patterns, frontend-design, ui-ux-pro-max, core-components

**Objetivo:** Librería de componentes reutilizables 100% alineada con branding.

**Archivos a crear:**
- src/components/ui/Button.tsx
- src/components/ui/Card.tsx
- src/components/ui/Container.tsx
- src/components/ui/Section.tsx
- src/components/ui/Heading.tsx
- src/components/ui/OptimizedImage.tsx
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/layout/MobileMenu.tsx
- src/components/sections/HeroSection.tsx
- src/components/sections/FeaturesGrid.tsx
- src/components/sections/CTASection.tsx
- src/components/sections/TestimonialsSection.tsx
- src/components/sections/FAQSection.tsx
- src/components/sections/StatsSection.tsx
- src/components/seo/JsonLd.tsx
- src/components/seo/Breadcrumbs.tsx
- src/lib/utils.ts (cn function)

**Criterios:**
- [ ] Componentes usan colores/fonts del branding
- [ ] Header responsive con menú mobile
- [ ] Footer completo
- [ ] Server Components donde posible
- [ ] TypeScript sin errores

---

### TAREA 2+: [Página — /ruta] (REPETIR POR CADA PÁGINA)

**Herramientas:**
- ⚡ MCP Archon: Next.js metadata, schema markup
- 🔧 MCP Serena: Reutilizar componentes existentes
- 📚 Skills: frontend-design, seo-fundamentals, schema-markup, nextjs-best-practices

**Metadata SEO:**
```yaml
meta_titulo: "[Texto exacto — max 60 chars]"
meta_descripcion: "[Texto exacto — max 155 chars]"
keyword_principal: "[keyword]"
keywords_secundarias: ["kw1", "kw2", "kw3"]
schema_type: "[Organization/Service/Product/FAQ]"
imagen_destacada: "[Descripción]"
url_canonica: "/[ruta]"
breadcrumb: "Home > [Sección] > [Página]"
og_image: "/og/[pagina].jpg (1200x630)"
```

**Secciones detalladas:**

```yaml
Sección 1 — [Nombre: Hero/Features/etc.]:
  layout: "[Descripción del wireframe]"
  h1: "[Texto EXACTO del H1]"  # Solo en primera sección si es Hero
  h2: "[Texto EXACTO del H2]"
  parrafo: |
    [Texto COMPLETO del párrafo]
  cta_primario:
    texto: "[Texto del botón]"
    destino: "[/ruta-destino]"
  cta_secundario:
    texto: "[Texto del botón]"
    destino: "[/ruta-destino]"
  imagen:
    descripcion: "[Qué muestra la imagen]"
    alt: "[Texto alt SEO-friendly]"
    posicion: "[Derecha/Izquierda/Fondo/Arriba]"
  fondo: "[Color del branding / gradiente / imagen]"
  elementos_dinamicos: "[Animaciones, parallax, counters, etc.]"
  elementos_graficos: "[Iconos, shapes, decoradores, patterns]"
  responsivo:
    mobile: "[Adaptaciones]"
    tablet: "[Adaptaciones]"

Sección 2 — [Nombre]:
  # ... mismo formato
  
# ... TODAS las secciones de la página
```

**Archivos a crear:**
- src/app/[ruta]/page.tsx
- src/components/sections/[nuevos-si-necesario].tsx

**Criterios:**
- [ ] H1 único con keyword principal
- [ ] Meta título y descripción implementados
- [ ] Schema JSON-LD válido
- [ ] Imágenes con alt text
- [ ] Responsive verificado
- [ ] Branding coherente
- [ ] Internal links funcionales

**Validación:**
```bash
npx next lint
npx tsc --noEmit
# Verificar visualmente en browser
```

---

### TAREA FINAL: Validación SEO Global + Lighthouse

**Herramientas:**
- 📚 Skills: seo-audit, web-performance-optimization, verification-before-completion

**Objetivo:** Sitio completo validado y optimizado para producción.

**Pasos:**
1. Verificar sitemap.ts incluye TODAS las URLs
2. Verificar robots.ts es correcto
3. Validar schema markup de CADA página (validator.schema.org)
4. Verificar meta tags únicos en cada página
5. Verificar internal linking completo
6. Ejecutar Lighthouse en cada página
7. Verificar responsive en múltiples breakpoints
8. Verificar branding coherente en todo el sitio

**Criterios:**
- [ ] Lighthouse Performance > 90 (todas las páginas)
- [ ] Lighthouse SEO > 95 (todas las páginas)
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Schema markup válido en todas las páginas
- [ ] Zero links rotos
- [ ] Sitemap completo
- [ ] Mobile responsive perfecto

**Comandos:**
```bash
npx next build
npx next start
# Lighthouse audit en http://localhost:3000
```

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
  - Schema markup JSON-LD válido
  - URL canónica
  - Open Graph completo
  - Breadcrumbs
  - Internal links funcionales
```

### Nivel 3: Lighthouse
```bash
npx next build && npx next start
# Targets: Performance > 90, SEO > 95, A11y > 90, BP > 90
```

---

## ✅ Checklist de Validación Final

```yaml
Código:
  - [ ] npx next lint — sin errores
  - [ ] npx tsc --noEmit — sin errores
  - [ ] npm run build — exitoso

SEO:
  - [ ] Meta título único por página
  - [ ] Meta descripción única por página
  - [ ] H1 único por página con keyword
  - [ ] Schema markup válido en todas las páginas
  - [ ] Sitemap con todas las URLs
  - [ ] Robots.txt correcto
  - [ ] Canonical URLs configuradas
  - [ ] Open Graph completo
  - [ ] Breadcrumbs en todas las páginas
  - [ ] Internal linking completo
  - [ ] Alt text en todas las imágenes

Performance:
  - [ ] Lighthouse Performance > 90
  - [ ] Lighthouse SEO > 95
  - [ ] Lighthouse Accessibility > 90
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1

Branding:
  - [ ] Colores del branding en toda la página
  - [ ] Tipografías correctas
  - [ ] Logo correcto en header/footer
  - [ ] Tono de voz coherente

Responsive:
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1280px+)
```

---

## ❌ Anti-Patrones a Evitar

- ❌ Inventar textos que no están en los documentos de contenido
- ❌ Cambiar colores del branding
- ❌ Más de 1 H1 por página
- ❌ Meta títulos duplicados entre páginas
- ❌ Imágenes sin alt text
- ❌ Client Components innecesarios ('use client' sin razón)
- ❌ Ignorar responsive mobile
- ❌ Hardcodear URLs en vez de usar constantes
- ❌ Saltarse schema markup
- ❌ Ignorar Lighthouse scores bajos
- ❌ Leer archivos completos sin usar Serena primero
- ❌ Buscar en web sin consultar Archon primero
- ❌ Duplicar componentes en vez de reutilizar

---

## 📚 Integración con Sistema de Generación

Cuando uses este template a través de `generate-prp-web-seo.md`:

1. **Carga `initial.md`** con toda la información del negocio
2. **Lee la carpeta de páginas** (docs/pages/) con contenido y wireframes
3. **Lee la carpeta de branding** con paleta, tipografías, logo
4. **El generador** crea un PRP específico usando este template
5. **El ejecutor** (`execute-prp-web-seo.md`) implementa el PRP página por página
6. **Archon** proporciona documentación oficial de Next.js, React, Tailwind
7. **Serena** analiza y edita código simbólicamente
8. **Skills SEO + Frontend** guían cada decisión

**Recuerda**: El contenido ya está escrito. Tu trabajo es maquetarlo profesionalmente.
