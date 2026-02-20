# Ejecutar PRP Web SEO — Implementación de Páginas Web Profesionales

## 🎯 Archivo PRP: $ARGUMENTS

Implementar un sitio web profesional usando el PRP generado con `generate-prp-web-seo.md`. Desarrollo página por página con SEO transaccional, branding coherente y diseño moderno.

**Stack:** React, Next.js 14 (App Router), Tailwind CSS
**MCPs:** Archon (documentación), Serena (análisis simbólico)
**Skills:** SEO, React, Next.js, Tailwind, Frontend Design

---

## 📋 Proceso de Ejecución

### FASE 0: Preparación y Verificación ⚙️

#### 0.1 Cargar y Analizar PRP
```yaml
Acciones:
  1. Leer el PRP completo especificado en $ARGUMENTS
  2. Identificar todas las secciones:
     - Información del negocio
     - Sistema de diseño / branding (colores, fonts, tokens)
     - Lista completa de páginas a desarrollar
     - Plan sección por sección de cada página
     - Metadata SEO por página (meta título, descripción, schema)
     - Componentes compartidos a crear
     - Criterios de validación
  3. Contar total de páginas a desarrollar
  4. Verificar que cada página tiene textos exactos y wireframe
```

#### 0.2 Verificar MCPs
```yaml
Verificar Archon:
  - comando: rag_get_available_sources()
  - buscar: Next.js, React, TypeScript fuentes disponibles

Verificar Serena:
  - Si proyecto existente: get_symbols_overview('.')
  - Si proyecto nuevo: Se configurará en Tarea 0
```

#### 0.3 Identificar Skills Requeridas
```yaml
Del PRP, anotar las skills por fase:
  SEO: seo-fundamentals, seo-audit, schema-markup, web-performance-optimization
  Frontend: react-patterns, nextjs-best-practices, tailwind-patterns
  Diseño: frontend-design, ui-ux-pro-max, web-design-guidelines
  Validación: lint-and-validate, verification-before-completion
```

#### 0.4 Crear TODOs
```yaml
TodoWrite([
  { id: "task-0", content: "Setup proyecto + Branding + Design System", status: "pending" },
  { id: "task-1", content: "Componentes compartidos (Header, Footer, UI base)", status: "pending" },
  { id: "task-2", content: "Página: Home", status: "pending" },
  { id: "task-3", content: "Página: [Servicio X]", status: "pending" },
  // ... una tarea por cada página del PRP
  { id: "task-final", content: "Validación SEO global + Lighthouse", status: "pending" }
], merge=false)
```

---

### FASE 1: TAREA 0 — Setup del Proyecto (⚡ OBLIGATORIO)

```yaml
⚠️ CRÍTICO: Completar ANTES de cualquier página

Paso 1 - Inicializar proyecto (si es nuevo):
  comandos:
    npx create-next-app@latest [nombre] --typescript --tailwind --eslint --app --src-dir
  verificar:
    - next.config.js existe
    - tailwind.config.ts existe
    - tsconfig.json existe
    - src/app/layout.tsx existe

Paso 2 - Instalar dependencias adicionales:
  evaluar_necesidad:
    - framer-motion (animaciones)
    - @vercel/analytics (analytics)
    - sharp (optimización de imágenes)
    - clsx o cn (utilidad de clases)
  comando: npm install [dependencias necesarias]

Paso 3 - Configurar Branding en Tailwind:
  archivo: tailwind.config.ts
  acción: |
    Aplicar TODOS los design tokens del PRP:
    - colors: primary, secondary, accent, neutral, background, surface
    - fontFamily: heading, body, accent
    - spacing: escala personalizada si aplica
    - borderRadius: valores del branding
    - boxShadow: niveles del branding
  
  skill: tailwind-patterns
  archon: rag_search_knowledge_base(query="Tailwind CSS custom config", source_id="src_tailwind", match_count=5)

Paso 4 - Configurar fuentes del branding:
  archivo: src/app/layout.tsx
  acción: |
    - Importar Google Fonts o fuentes locales según branding
    - Configurar next/font para optimización automática
    - Aplicar como CSS variables para Tailwind
  
  archon: rag_search_knowledge_base(query="Next.js font optimization", source_id="src_nextjs", match_count=5)

Paso 5 - Configurar metadata global:
  archivo: src/app/layout.tsx
  incluir:
    - Metadata base del sitio (title template, description)
    - Open Graph defaults
    - Twitter card defaults
    - Favicon y apple-touch-icon
    - Theme color del branding
  
  archon: rag_search_knowledge_base(query="Next.js metadata API", source_id="src_nextjs", match_count=5)

Paso 6 - Crear archivos SEO globales:
  crear:
    - src/app/robots.ts (Allow/Disallow, sitemap URL)
    - src/app/sitemap.ts (todas las URLs del sitio)
    - src/app/not-found.tsx (404 con branding)
    - src/lib/metadata.ts (helpers para generar metadata)
    - src/lib/constants.ts (URLs base, nombre del sitio, redes sociales)

Paso 7 - Configurar estilos globales:
  archivo: src/styles/globals.css
  incluir:
    - Tailwind directives (@tailwind base, components, utilities)
    - CSS custom properties del branding
    - Estilos base (smooth scroll, selection color, etc.)
    - Clases utilitarias del branding

Paso 8 - Activar Serena:
  comando: get_symbols_overview('src/')
  verificar: Serena responde correctamente

Criterios de Aceptación:
  - [ ] npm run dev arranca sin errores
  - [ ] Tailwind config tiene TODOS los tokens del branding
  - [ ] Fuentes del branding cargando correctamente
  - [ ] Metadata global configurada
  - [ ] robots.ts y sitemap.ts creados
  - [ ] Serena funcionando

TodoWrite([{ id: "task-0", status: "completed" }], merge=true)
```

---

### FASE 2: TAREA 1 — Componentes Compartidos

```yaml
Objetivo: Crear componentes reutilizables alineados con el branding

Paso 1 - Consultar mejores prácticas:
  archon:
    - rag_search_knowledge_base(query="React server component patterns", source_id="src_react", match_count=5)
    - rag_search_code_examples(query="Next.js header footer", source_id="src_nextjs", match_count=3)
  skills: react-patterns, frontend-design, ui-ux-pro-max

Paso 2 - Crear componentes UI base:
  src/components/ui/:
    - Button.tsx (primary, secondary, ghost, link, sizes, loading state)
    - Card.tsx (variantes: default, elevated, outlined)
    - Badge.tsx (colores del branding)
    - Container.tsx (max-width responsive)
    - Section.tsx (padding, backgrounds del branding)
    - Heading.tsx (H1-H6 con estilos del branding)
    - Image.tsx (wrapper de next/image con aspect ratio y placeholder)

Paso 3 - Crear componentes de layout:
  src/components/layout/:
    - Header.tsx:
      * Logo del branding
      * Navegación responsive (desktop/mobile)
      * Menú hamburguesa animado
      * Sticky/transparent en scroll
      * CTAs en navbar si aplica
    - Footer.tsx:
      * Logo, descripción breve
      * Links organizados por columnas
      * Redes sociales
      * Legal (privacidad, términos)
      * Copyright
    - MobileMenu.tsx (if needed):
      * Slide-in o fullscreen
      * Links con animación

Paso 4 - Crear componentes de secciones reutilizables:
  src/components/sections/:
    - HeroSection.tsx (variantes: con imagen, con video, con gradiente)
    - FeaturesGrid.tsx (grid de features con iconos)
    - CTASection.tsx (call to action con fondo de acento)
    - TestimonialsSection.tsx (slider o grid)
    - FAQSection.tsx (accordion con schema markup)
    - StatsSection.tsx (counters animados)
    - ContactSection.tsx (formulario + info de contacto)

Paso 5 - Crear componentes SEO:
  src/components/seo/:
    - JsonLd.tsx (componente genérico para structured data)
    - Breadcrumbs.tsx (navegación + schema BreadcrumbList)
    - SchemaOrganization.tsx (schema Organization del negocio)

Paso 6 - Validar:
  - npx next lint
  - npx tsc --noEmit
  - Verificar responsive en cada componente
  - Verificar coherencia con branding

Criterios de Aceptación:
  - [ ] Todos los componentes usan colores/fonts del branding
  - [ ] Header responsive con menú mobile
  - [ ] Footer con todos los links necesarios
  - [ ] Componentes SEO funcionando
  - [ ] Sin errores de TypeScript/ESLint
  - [ ] Componentes son Server Components donde posible

TodoWrite([{ id: "task-1", status: "completed" }], merge=true)
```

---

### FASE 3: Desarrollo Página por Página 🚀

**Para CADA página listada en el PRP (Tarea 2, 3, 4, ... N):**

```yaml
## Estructura de Ejecución por Página

PASO 1 - LEER PLAN DE LA PÁGINA EN EL PRP:
  leer_completo:
    - Metadata SEO (meta título, descripción, keywords, schema)
    - Plan sección por sección
    - Textos EXACTOS (H1, H2, párrafos, CTAs)
    - Wireframe/layout de cada sección
    - Imágenes planificadas
    - Elementos dinámicos descritos

PASO 2 - INVOCAR SKILLS:
  obligatorias:
    - frontend-design: "Diseñar página profesional y única"
    - nextjs-best-practices: "Patrones correctos de Next.js 14"
    - seo-fundamentals: "SEO técnico correcto"
    - schema-markup: "Structured data de la página"
  
  según_necesidad:
    - scroll-experience: Si hay animaciones scroll-driven
    - ui-ux-pro-max: Si necesita diseño complejo
    - react-patterns: Si tiene interactividad compleja

PASO 3 - CONSULTAR ARCHON SI NECESARIO:
  si_duda_sobre_nextjs:
    rag_search_knowledge_base(query="Next.js [tema]", source_id="src_nextjs", match_count=5)
  si_duda_sobre_react:
    rag_search_knowledge_base(query="React [tema]", source_id="src_react", match_count=5)

PASO 4 - USAR SERENA PARA CONTEXTO:
  antes_de_crear:
    - get_symbols_overview('src/components/') → ver componentes disponibles
    - find_symbol('Header', 'src/components/layout/Header.tsx', include_body=True) → si necesitas el header
  
  para_reutilizar:
    - Verificar qué secciones ya existen en components/sections/
    - No duplicar componentes, reutilizar y parametrizar

PASO 5 - IMPLEMENTAR LA PÁGINA:
  
  5.1 - Crear carpeta y archivo:
    crear: src/app/[ruta-de-la-pagina]/page.tsx
    estructura:
      ```tsx
      import { Metadata } from 'next'
      // imports de componentes

      export const metadata: Metadata = {
        title: "[Meta título EXACTO del PRP]",
        description: "[Meta descripción EXACTA del PRP]",
        openGraph: {
          title: "[Título OG]",
          description: "[Descripción OG]",
          images: [{ url: "/og/[pagina].jpg", width: 1200, height: 630 }],
        },
        alternates: { canonical: "/[ruta]" }
      }

      export default function NombrePage() {
        return (
          <>
            <JsonLd schema={schemaData} />
            <Breadcrumbs items={[...]} />
            {/* Secciones en orden del PRP */}
            <HeroSection ... />
            <SeccionDos ... />
            ...
          </>
        )
      }
      ```
  
  5.2 - Implementar CADA sección según el PRP:
    para_cada_seccion:
      - Usar layout/wireframe descrito en el PRP
      - Usar textos EXACTOS del PRP (H1, H2, párrafos, CTAs)
      - Aplicar colores del branding según indicación
      - Añadir imágenes con alt text del PRP
      - Implementar elementos dinámicos descritos
      - Hacer responsive (mobile-first)
      
    complementar_con_experiencia:
      - Animaciones de entrada sutiles (fade-in, slide-up)
      - Hover effects en CTAs y cards
      - Micro-interacciones (botones, links)
      - Gradientes y sombras del branding
      - Iconos SVG relevantes al sector
      - Separadores visuales entre secciones
      - Background patterns o shapes decorativas
      - Counter animations para estadísticas
      - Parallax sutil donde mejore la experiencia
  
  5.3 - Implementar Schema Markup:
    según_tipo_pagina:
      - Home: Organization + WebSite + SearchAction
      - Servicios: Service + FAQ (si tiene preguntas)
      - Producto: Product + AggregateRating
      - Blog: Article + BreadcrumbList
      - Contacto: LocalBusiness + ContactPoint
      - FAQ: FAQPage
    validar: https://validator.schema.org/

  5.4 - Implementar Internal Linking:
    - Links a páginas relacionadas dentro del contenido
    - CTAs que apunten a otras páginas del sitio
    - Breadcrumbs con links funcionales
    - Footer links actualizados

PASO 6 - VALIDAR LA PÁGINA:
  
  Nivel 1 - Código:
    npx next lint
    npx tsc --noEmit
  
  Nivel 2 - SEO de la página:
    verificar:
      - [ ] H1 único y contiene keyword principal
      - [ ] Jerarquía H1 > H2 > H3 correcta
      - [ ] Meta título implementado (max 60 chars)
      - [ ] Meta descripción implementada (max 155 chars)
      - [ ] Alt text en todas las imágenes
      - [ ] Schema markup JSON-LD presente y válido
      - [ ] URL canónica configurada
      - [ ] Open Graph tags completos
      - [ ] Breadcrumbs visibles y con schema
      - [ ] Internal links funcionales
  
  Nivel 3 - Visual y Branding:
    verificar:
      - [ ] Colores del branding correctos
      - [ ] Tipografías del branding
      - [ ] Logo en header correcto
      - [ ] Responsive: mobile, tablet, desktop
      - [ ] Elementos dinámicos funcionando
      - [ ] Coherencia visual con resto del sitio

PASO 7 - ACTUALIZAR TODO:
  TodoWrite([{ id: "task-N", status: "completed" }], merge=true)

PASO 8 - CONTINUAR A SIGUIENTE PÁGINA:
  Repetir PASOS 1-7 para la siguiente página del PRP
```

---

### FASE 4: Validación SEO Global 🎯

```yaml
Después de completar TODAS las páginas:

PASO 1 - VALIDACIÓN SEO COMPLETA:
  
  Sitemap:
    - Verificar src/app/sitemap.ts incluye TODAS las URLs
    - Verificar que genera XML válido en /sitemap.xml
    - Verificar que todas las URLs son accesibles
  
  Robots:
    - Verificar src/app/robots.ts
    - Verificar que /robots.txt referencia el sitemap
    - Verificar que no bloquea páginas importantes
  
  Meta Tags:
    - Verificar meta título ÚNICO en cada página
    - Verificar meta descripción ÚNICA en cada página
    - Verificar Open Graph en cada página
    - Verificar Twitter Cards en cada página
  
  Schema Markup:
    - Validar CADA schema con validator.schema.org
    - Verificar que Organization schema está en home
    - Verificar BreadcrumbList en todas las páginas
  
  Internal Linking:
    - Verificar que TODAS las páginas son alcanzables
    - Verificar que no hay links rotos
    - Verificar breadcrumbs en todas las páginas
  
  Headings:
    - Verificar H1 único por página
    - Verificar jerarquía correcta en cada página
    - Verificar keywords en H1s

PASO 2 - LIGHTHOUSE AUDIT:
  
  comandos: |
    npx next build
    npx next start
    # En otra terminal:
    npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-home.html
    npx lighthouse http://localhost:3000/servicios --output=html
    # ... para cada página importante
  
  targets:
    Performance: > 90
    SEO: > 95
    Accessibility: > 90
    Best Practices: > 90
  
  si_score_bajo:
    Performance:
      - Verificar imágenes optimizadas (next/image)
      - Verificar fonts preloaded
      - Verificar no hay JS innecesario en client
      - Verificar lazy loading below the fold
    SEO:
      - Verificar meta tags completos
      - Verificar alt texts
      - Verificar heading hierarchy
      - Verificar canonical URLs
    Accessibility:
      - Verificar contraste de colores
      - Verificar alt texts
      - Verificar aria labels
      - Verificar focus states

PASO 3 - MOBILE RESPONSIVE CHECK:
  verificar_en:
    - iPhone SE (375px)
    - iPhone 14 Pro (393px)
    - iPad (768px)
    - iPad Pro (1024px)
    - Desktop (1280px)
    - Wide (1536px)
  
  por_cada_breakpoint:
    - Navegación funcional
    - Textos legibles
    - Imágenes no desbordadas
    - CTAs accesibles (touch targets > 44px)
    - No horizontal scroll
```

---

### FASE 5: Completitud y Reporte 📊

```yaml
PASO 1 - RELEER PRP COMPLETO:
  verificar:
    - TODAS las páginas desarrolladas
    - TODOS los textos vaciados correctamente
    - TODA la metadata SEO implementada
    - TODO el branding aplicado
    - TODOS los componentes compartidos creados

PASO 2 - VERIFICAR TODOs:
  esperado: Todos con status="completed"
  si_hay_pending: Completar antes de reportar

PASO 3 - REPORTAR:
  generar_reporte:
    paginas_completadas: X/X
    lighthouse_scores:
      home: { perf: XX, seo: XX, a11y: XX, bp: XX }
      servicio_x: { perf: XX, seo: XX, a11y: XX, bp: XX }
      ...
    seo_status:
      meta_tags: "✅ Todos únicos"
      schema_markup: "✅ Validado"
      sitemap: "✅ Todas las URLs"
      internal_links: "✅ Sin enlaces rotos"
    branding_status: "✅ Coherente en todas las páginas"
    responsive_status: "✅ Mobile-first verificado"

PASO 4 - DOCUMENTAR DESVIACIONES:
  si_hubo_cambios:
    - Qué se cambió respecto al PRP
    - Por qué se cambió
    - Mejora que aporta el cambio

PASO 5 - ESTADO FINAL:
  confirmar:
    - "✅ Todas las páginas desarrolladas con contenido exacto"
    - "✅ Branding 100% coherente"
    - "✅ SEO transaccional completo"
    - "✅ Lighthouse > 90 en todas las categorías"
    - "✅ Responsive mobile-first"
    - "✅ Ready para deploy"
```

---

## 🔧 Guía de Herramientas

### MCP Archon 🎯

```yaml
Cuándo usar:
  - Dudas sobre Next.js 14 API (metadata, routing, etc.)
  - Mejores prácticas de React Server Components
  - Patrones de Tailwind CSS
  - Documentación oficial de cualquier librería

Queries frecuentes para web SEO:
  - "Next.js metadata generateMetadata"
  - "Next.js sitemap generation"
  - "Next.js image optimization"
  - "Next.js font loading"
  - "React server components patterns"
  - "Tailwind CSS responsive design"
```

### MCP Serena ⚡

```yaml
Filosofía: "❌ NO leer archivos completos. ✅ Análisis simbólico"

Flujo por página:
  1. get_symbols_overview('src/components/sections/') → ver qué secciones existen
  2. find_symbol('HeroSection', 'src/components/sections/HeroSection.tsx', True) → ver implementación
  3. Reutilizar o extender, NO duplicar
  4. Después de crear: get_symbols_overview('src/app/[pagina]/') → verificar estructura
```

### Skills Clave

```yaml
SEO (usar en CADA página):
  - seo-fundamentals: Principios E-E-A-T, Core Web Vitals
  - schema-markup: JSON-LD por tipo de página
  - web-performance-optimization: Lighthouse targets

Frontend (usar al implementar):
  - nextjs-best-practices: Server Components, routing
  - react-patterns: Hooks, composición
  - tailwind-patterns: Design tokens, responsive
  - frontend-design: UI profesional y única
  - ui-ux-pro-max: Diseño de alto nivel

Validación (usar al completar):
  - lint-and-validate: Después de cada página
  - verification-before-completion: Antes de declarar listo
  - seo-audit: Auditoría SEO final
```

---

## ⚠️ Puntos Críticos

### ❌ NO HACER:
```yaml
- NO inventar textos que no estén en el PRP (usar los EXACTOS)
- NO cambiar colores del branding por "mejores" alternativas
- NO saltar metadata SEO de ninguna página
- NO usar Client Components donde Server Components funcionan
- NO poner más de 1 H1 por página
- NO dejar imágenes sin alt text
- NO crear componentes duplicados (reutilizar)
- NO ignorar responsive mobile
- NO hardcodear URLs (usar constants.ts)
- NO saltar validación Lighthouse
```

### ✅ SIEMPRE HACER:
```yaml
- ✅ Usar textos EXACTOS del PRP para H1, H2, párrafos, CTAs
- ✅ Respetar branding en cada componente (colores, fonts)
- ✅ Implementar metadata SEO en CADA página
- ✅ Schema markup en CADA página
- ✅ Alt text en CADA imagen
- ✅ Responsive mobile-first en CADA página
- ✅ Internal linking entre páginas
- ✅ Server Components por defecto
- ✅ next/image para TODAS las imágenes
- ✅ Validar con Lighthouse después de cada página
- ✅ Verificar branding visual después de cada página
```

---

## 📊 Checklist de Ejecución

```yaml
PREPARACIÓN:
  - [ ] PRP leído completamente
  - [ ] Total de páginas contado
  - [ ] Branding documentado
  - [ ] Skills identificadas
  - [ ] TODOs creados

TAREA 0 - SETUP:
  - [ ] Proyecto Next.js 14 inicializado
  - [ ] Tailwind con design tokens del branding
  - [ ] Fonts del branding configuradas
  - [ ] Metadata global
  - [ ] robots.ts + sitemap.ts
  - [ ] Serena activo

TAREA 1 - COMPONENTES:
  - [ ] Header/Navbar responsive
  - [ ] Footer completo
  - [ ] Componentes UI base
  - [ ] Secciones reutilizables
  - [ ] Componentes SEO (JsonLd, Breadcrumbs)

PÁGINAS (para CADA una):
  - [ ] Textos exactos del PRP vaciados
  - [ ] Meta título único implementado
  - [ ] Meta descripción única implementada
  - [ ] Schema markup implementado
  - [ ] H1 único con keyword
  - [ ] Alt text en imágenes
  - [ ] Branding coherente
  - [ ] Responsive verificado
  - [ ] Internal links funcionales
  - [ ] Elementos dinámicos implementados

VALIDACIÓN FINAL:
  - [ ] Sitemap con TODAS las URLs
  - [ ] Robots.txt correcto
  - [ ] Schema markup validado (todos)
  - [ ] No links rotos
  - [ ] Lighthouse Performance > 90
  - [ ] Lighthouse SEO > 95
  - [ ] Lighthouse Accessibility > 90
  - [ ] Mobile responsive verificado
  - [ ] Branding 100% coherente

COMPLETITUD:
  - [ ] PRP releído completamente
  - [ ] Todos los TODOs completed
  - [ ] Métricas reportadas
  - [ ] Ready para deploy
```

---

## 🎯 Meta del Proceso

**Sitio web completo, profesional y optimizado mediante:**

1. ✅ Contenido EXACTO del PRP vaciado en cada página
2. ✅ Branding 100% coherente en todo el sitio
3. ✅ SEO transaccional completo (meta, schema, sitemap, OG)
4. ✅ Diseño profesional con elementos dinámicos modernos
5. ✅ Responsive mobile-first en todas las páginas
6. ✅ Lighthouse > 90 en todas las categorías
7. ✅ Zero desviaciones no documentadas

**Resultado esperado**: Sitio web listo para producción en un solo ciclo de ejecución.
