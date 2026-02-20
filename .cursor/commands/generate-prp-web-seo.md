# Crear PRP Web SEO — Generador de Plan para Páginas Web Profesionales

## 🎯 Archivo de Entrada: $ARGUMENTS

Generar un PRP completo para el desarrollo de páginas web profesionales con SEO transaccional, diseño único y coherencia de marca. El `$ARGUMENTS` apunta al `initial.md` del proyecto que contiene la información del negocio, rutas a las páginas de contenido y al branding.

**Stack tecnológico:** React, Next.js 14 (App Router), Tailwind CSS
**MCPs:** Archon (documentación), Serena (análisis simbólico)
**Skills:** SEO, React, Next.js, Tailwind, Frontend Design, UI/UX

---

## 🧠 MINDSET Y FILOSOFÍA DE EJECUCIÓN

```yaml
QUIÉN ERES:
  rol_primario: |
    Actúa como el MEJOR frontend developer SEO del mundo. Tomas las riendas 
    del proyecto en cuestiones técnicas y de diseño, priorizando siempre lo 
    que te han dado actualmente como contenido y branding, pero complementándolo
    con tu expertise de nivel mundial.
  
  rol_secundario: |
    También actúa como el dueño de la mejor automatización con IA. Enfócate 
    en el 20% que produce el 80% en servicios rentables para el negocio al 
    que le estás desarrollando en este momento. Cada decisión de diseño y 
    estructura debe maximizar conversión y rentabilidad.

PRINCIPIO DE PARETO:
  filosofia: |
    Usa el principio de Pareto como filosofía central. Identifica las páginas 
    y secciones que generan el 80% del impacto (Home, páginas de servicio 
    principales, CTAs de conversión) y dales el tratamiento más premium.
    No desperdicies energía en detalles que no mueven la aguja.
  
  aplicacion:
    - Las páginas transaccionales (servicios, pricing) reciben diseño premium
    - Los CTAs principales son irresistibles (animación, contraste, urgencia)
    - El hero de cada página es cinematográfico
    - La velocidad de carga es obsesión (cada ms cuenta para conversión)
    - Mobile-first porque ahí está el 70%+ del tráfico

NIVEL DE CALIDAD ESPERADO:
  referencia: |
    Yo espero ver la MEJOR página web de la modernidad. Similar a startups 
    de Silicon Valley diseñadas en Figma. Piensa en Linear, Vercel, Stripe, 
    Raycast, Arc Browser — ese nivel de polish y atención al detalle.
  
  imperativo: |
    IMPRESIΌNAME. Usa animaciones, efectos, mejores prácticas. No entregues 
    algo genérico. Cada página debe sentirse como una experiencia, no como 
    un template.
  
  elementos_obligatorios:
    - Animaciones de entrada sutiles y con propósito (fade-in, slide-up, stagger)
    - Hover effects sofisticados en cards, botones, links
    - Transiciones suaves entre secciones (gradientes, shapes, waves)
    - Micro-interacciones que deleiten (cursor effects, scroll progress)
    - Parallax sutil donde mejore la narrativa visual
    - Counter animations para estadísticas y números
    - Scroll-triggered animations para engagement
    - Glassmorphism, gradientes mesh, o texturas modernas donde encajen
    - Spacing generoso (white space = premium)
    - Typography scale profesional (no todo del mismo tamaño)
    - Grid layouts asimétricos donde rompan la monotonía
    - Dark/light sections alternadas para ritmo visual
    - Decoradores SVG personalizados (blobs, waves, grid dots)
    - Loading states elegantes (skeleton, shimmer)
    - 404 page que sea memorable

TEMPO:
  instruccion: |
    Toma un GRAN respiro antes de comenzar. No te precipites. Tenemos todo 
    el tiempo del mundo. Piensa profundamente en cada página, en cada sección,
    en cómo fluye la experiencia del usuario desde que aterriza hasta que 
    convierte. Sorpréndeme.
```

---

## 📖 Proceso de Investigación

### FASE 0: Cargar Información del Proyecto

```yaml
Paso 1 - Leer initial.md ($ARGUMENTS):
  objetivo: Extraer toda la información del negocio
  extraer:
    - Nombre del negocio y sector
    - Propuesta de valor
    - Público objetivo
    - Ubicación y alcance geográfico
    - Ruta a carpeta de páginas (docs/pages/ o similar)
    - Ruta a carpeta de branding (docs/branding/ o similar)
    - Páginas a desarrollar (home, servicios, etc.)
    - Cualquier requerimiento especial

Paso 2 - Leer carpeta de branding:
  objetivo: Documentar guía visual completa
  extraer:
    - Paleta de colores (códigos HEX/RGB exactos)
    - Colores primarios, secundarios, acentos
    - Tipografías principales y secundarias (nombre, peso, uso)
    - Logo (variantes: principal, horizontal, icono, fondo oscuro/claro)
    - Espaciado y proporciones del logo
    - Tono de voz de la marca
    - Elementos gráficos recurrentes (iconos, formas, texturas)
    - Reglas de uso de imágenes
  En caso de no existir carpeta de Branding tienes abierto para elegir los estilos TU, asi que los asignaras de cacuerdo a tus conocmiientos y habildiades

Paso 3 - Leer TODAS las páginas en docs/pages/:
  objetivo: Inventariar cada página con su contenido y wireframe
  para_cada_pagina:
    - Nombre y slug (ej: home, servicios/consultoria-seo)
    - Contenido escrito (títulos, párrafos, CTAs)
    - Sugerencias de wireframe
    - Palabras clave objetivo
    - Intención de búsqueda
    - Relación con otras páginas (links internos)
    - En ocaciones el documento initial.md te dice interpretaciones, aun asi debes investigar cada pagina asignada para entregar la informacion completa en el PRP

Paso 4 - Crear inventario completo:
  resultado: |
    Lista numerada de TODAS las páginas encontradas:
    1. Home → docs/pages/home.md
    2. Servicio X → docs/pages/servicios/servicio-x.md
    3. Servicio Y → docs/pages/servicios/servicio-y.md
    ... (TODAS, sin excepción)
```

---

### FASE 1: Análisis del Branding para Diseño Consistente

```yaml
Objetivo: Crear un sistema de diseño coherente basado en el branding

Paso 1 - Definir Design Tokens:
  extraer_del_branding:
    colores:
      - primary: "#XXXXXX" (uso: CTAs principales, headers)
      - secondary: "#XXXXXX" (uso: fondos, bordes)
      - accent: "#XXXXXX" (uso: highlights, hover)
      - neutral: "#XXXXXX" (uso: textos, fondos neutros)
      - background: "#XXXXXX" (uso: fondo general)
      - surface: "#XXXXXX" (uso: tarjetas, secciones)
      - error/success/warning: códigos correspondientes
    tipografías:
      - heading: "Nombre Font" (peso: 700, uso: H1-H6)
      - body: "Nombre Font" (peso: 400, uso: párrafos)
      - accent: "Nombre Font" (peso: 500, uso: CTAs, labels)
    espaciado:
      - Escala base (4px, 8px, 16px, 24px, 32px, 48px, 64px)
    bordes:
      - Radio por defecto (botones, tarjetas, inputs)
    sombras:
      - Niveles (sm, md, lg, xl)

Paso 2 - Traducir a Tailwind Config:
  resultado: |
    Configuración personalizada de tailwind.config.ts
    con todos los tokens del branding mapeados a clases

Paso 3 - Definir componentes base del branding:
  componentes:
    - Botón primario (colores, hover, active, disabled)
    - Botón secundario
    - Tarjeta (shadow, border-radius, padding)
    - Sección (padding, max-width, background)
    - Encabezados (tamaños, colores, weight por nivel)
    - Separadores y ornamentos de marca
```

---

### FASE 2: Consulta de Documentación con Archon 🎯

```yaml
Paso 1 - Obtener fuentes disponibles:
  comando: rag_get_available_sources()
  buscar: Next.js, React, TypeScript, Tailwind CSS

Paso 2 - Buscar mejores prácticas SEO en Next.js:
  comandos:
    - rag_search_knowledge_base(query="Next.js metadata SEO", source_id="src_nextjs", match_count=10)
    - rag_search_knowledge_base(query="Next.js generateMetadata", source_id="src_nextjs", match_count=5)
    - rag_search_knowledge_base(query="Next.js sitemap robots", source_id="src_nextjs", match_count=5)
    - rag_search_knowledge_base(query="Next.js image optimization", source_id="src_nextjs", match_count=5)

Paso 3 - Buscar patrones de componentes:
  comandos:
    - rag_search_knowledge_base(query="React server components", source_id="src_react", match_count=5)
    - rag_search_code_examples(query="Next.js page layout", source_id="src_nextjs", match_count=5)

Paso 4 - Si Archon no tiene info de algo específico:
  usar: Web Search para técnicas SEO avanzadas, schema markup actual
```

---

### FASE 3: Análisis del Codebase con Serena ⚡

```yaml
Paso 1 - Si ya existe código, explorar estructura:
  comando: get_symbols_overview('.')
  buscar:
    - Componentes reutilizables existentes
    - Layout actual
    - Configuración de Tailwind
    - Configuración de Next.js
    - Patrones de metadata

Paso 2 - Si es proyecto nuevo, definir estructura:
  estructura_objetivo:
    src/
    ├── app/
    │   ├── layout.tsx              # Layout raíz con fonts, metadata global
    │   ├── page.tsx                # Home
    │   ├── sitemap.ts              # Sitemap dinámico
    │   ├── robots.ts               # robots.txt
    │   ├── not-found.tsx           # 404 personalizado
    │   ├── [slug]/                  # Páginas dinámicas si aplica
    │   ├── servicios/
    │   │   ├── page.tsx            # Listado servicios
    │   │   ├── servicio-x/
    │   │   │   └── page.tsx
    │   │   └── servicio-y/
    │   │       └── page.tsx
    │   └── ...                     # Cada página en su carpeta
    ├── components/
    │   ├── ui/                     # Componentes base (Button, Card, etc.)
    │   ├── sections/               # Secciones reutilizables (Hero, CTA, etc.)
    │   ├── layout/                 # Header, Footer, Navbar
    │   └── seo/                    # JsonLd, Breadcrumbs, etc.
    ├── lib/
    │   ├── metadata.ts             # Helpers de metadata
    │   ├── constants.ts            # Constantes del sitio
    │   └── utils.ts                # Utilidades
    ├── styles/
    │   └── globals.css             # Estilos globales + Tailwind directives
    └── public/
        ├── images/                 # Imágenes optimizadas
        ├── icons/                  # Favicon, apple-touch-icon
        └── og/                     # Imágenes Open Graph
```

---

### FASE 4: Identificación de Skills Relevantes 📚

```yaml
PLANIFICACIÓN:
  - brainstorming: OBLIGATORIO antes de diseñar cada página
  - architecture: Decisiones de estructura del proyecto
  - writing-plans: Plan detallado multi-paso

SEO:
  - seo-fundamentals: E-E-A-T, Core Web Vitals, principios Google
  - seo-audit: Verificación de implementación SEO
  - schema-markup: JSON-LD structured data por página
  - web-performance-optimization: Core Web Vitals, LCP, CLS, FID
  - geo-fundamentals: Si aplica GEO (optimización para IA)

DESARROLLO FRONTEND:
  - react-patterns: Hooks, composición, performance
  - nextjs-best-practices: App Router, Server Components, data fetching
  - tailwind-patterns: CSS-first config, container queries, design tokens
  - frontend-design: UI profesional, anti-genérico
  - ui-ux-pro-max: 50 estilos, paletas, font pairings
  - react-best-practices: Performance optimization Vercel

DISEÑO:
  - frontend-design: Interfaces distintivas production-grade
  - scroll-experience: Animaciones scroll-driven si aplica
  - web-design-guidelines: Web Interface Guidelines compliance
  - core-components: Design system y componentes base

VALIDACIÓN:
  - lint-and-validate: Después de cada modificación
  - verification-before-completion: Antes de declarar completitud
  - web-performance-optimization: Lighthouse, Core Web Vitals
```

---

## 🔍 PROTOCOLO DE DATOS FALTANTES (APLICA A TODAS LAS TAREAS)

```yaml
REGLA UNIVERSAL:
  principio: |
    Cada tarea del PRP debe ser autocontenida. Si una tarea necesita 
    información que NO está disponible en los documentos proporcionados 
    (initial.md, docs/pages/, docs/branding/), el agente DEBE:
    
    1. DETECTAR qué datos específicos faltan para completar la tarea
    2. PAUSAR la ejecución de esa tarea
    3. FORMULAR preguntas claras y específicas al usuario
    4. ESPERAR la respuesta antes de continuar
    5. NUNCA inventar datos de negocio (teléfonos, emails, direcciones, precios)

  formato_pregunta: |
    "⚠️ DATOS NECESARIOS PARA TAREA N — [Nombre de la tarea]:
    Para completar esta tarea necesito la siguiente información:
    
    OBLIGATORIOS (sin estos no puedo continuar):
    1. [Dato faltante 1] — Ejemplo: teléfono de contacto
    2. [Dato faltante 2] — Ejemplo: dirección física
    
    OPCIONALES (mejoran el resultado pero puedo avanzar sin ellos):
    3. [Dato opcional 1] — Ejemplo: redes sociales
    4. [Dato opcional 2] — Ejemplo: horario de atención
    
    ¿Puedes proporcionarme estos datos?"

  tareas_tipicas_que_requieren_datos:
    - Datos estructurados (Organization, LocalBusiness): contacto, dirección, horario
    - robots.txt: dominio definitivo de producción
    - llms.txt: datos de contacto públicos, diferencial
    - Schema Service: precios, tiempos de entrega
    - Schema FAQ: preguntas y respuestas reales
    - Footer: datos legales, links a políticas, redes sociales
    - Página de contacto: formulario, mapa, datos de ubicación
```

---

## 🏗️ Generación del PRP

### Usar como template: `PRPs/templates/prp_base_web_seo.md`

### ✅ Contexto Crítico a Incluir

```yaml
1. INFORMACIÓN DEL NEGOCIO (desde initial.md):
   incluir:
     - Nombre, sector, propuesta de valor
     - Público objetivo y buyer persona
     - Ubicación y alcance
     - Tono de voz y personalidad de marca
     - Competidores principales (si se mencionan)

2. BRANDING COMPLETO (desde carpeta branding):
   incluir:
     - Paleta de colores con códigos HEX exactos
     - Tipografías con nombres y pesos exactos
     - Reglas de uso del logo
     - Design tokens para Tailwind
     - Configuración tailwind.config.ts personalizada
     - Componentes base del sistema de diseño

3. ARQUITECTURA SEO TRANSACCIONAL:
   incluir:
     - Estructura de URLs (jerárquica, limpia, con keywords)
     - Mapa del sitio con relaciones entre páginas
     - Estrategia de internal linking
     - Jerarquía de encabezados por página (H1, H2, H3)
     - Schema markup por tipo de página
     - Meta títulos y descripciones por página
     - Imágenes destacadas por página
     - Breadcrumbs structure

4. PLAN PÁGINA POR PÁGINA (desde docs/pages/):
   para_cada_pagina:
     metadata_seo:
       - Meta título: "[Texto exacto - max 60 chars]"
       - Meta descripción: "[Texto exacto - max 155 chars]"
       - Keyword principal: "[keyword]"
       - Keywords secundarias: ["kw1", "kw2", "kw3"]
       - Schema type: "[Organization/Service/Product/FAQ/etc.]"
       - Imagen destacada: "[descripción o placeholder]"
       - URL canónica: "[/ruta-exacta]"
       - Breadcrumb: "Home > Sección > Página"
     
     secciones_detalladas:
       seccion_N:
         nombre: "[Hero/Features/CTA/Testimonials/etc.]"
         wireframe: "[Descripción visual del layout]"
         contenido:
           h1: "[Texto exacto del H1]"  # Solo 1 por página
           h2: "[Texto exacto del H2]"
           h3: "[Texto del H3 si aplica]"
           parrafo: "[Texto completo del párrafo]"
           cta_texto: "[Texto del botón CTA]"
           cta_destino: "[URL o sección destino]"
           imagen: "[Descripción de imagen / placeholder]"
           imagen_alt: "[Texto alt SEO-friendly]"
         diseño:
           layout: "[full-width/contained/split/grid]"
           background: "[color del branding / gradiente / imagen]"
           elementos_dinamicos: "[animaciones, parallax, counters, etc.]"
           elementos_graficos: "[iconos, shapes, decoradores]"
         responsivo:
           mobile: "[Adaptaciones para móvil]"
           tablet: "[Adaptaciones para tablet]"

5. GOTCHAS Y MEJORES PRÁCTICAS:
   seo:
     - "CRÍTICO: Solo 1 H1 por página"
     - "CRÍTICO: Imágenes con alt text descriptivo y keyword"
     - "CRÍTICO: Meta título único por página (max 60 chars)"
     - "CRÍTICO: Meta descripción única por página (max 155 chars)"
     - "PATRÓN: Usar next/image para optimización automática"
     - "PATRÓN: generateMetadata() para metadata dinámica"
     - "GOTCHA: Open Graph images deben ser 1200x630px"
     - "GOTCHA: No usar display:none para ocultar contenido SEO"
   nextjs:
     - "CRÍTICO: Usar Server Components por defecto"
     - "PATRÓN: 'use client' solo cuando necesites interactividad"
     - "GOTCHA: metadata export no funciona en Client Components"
     - "PATRÓN: Usar loading.tsx para estados de carga"
   performance:
     - "CRÍTICO: LCP < 2.5s, CLS < 0.1, FID < 100ms"
     - "PATRÓN: Lazy load imágenes below the fold"
     - "PATRÓN: Preload fuentes críticas"
     - "GOTCHA: Tailwind purge debe estar configurado correctamente"
```

---

### 📝 Blueprint de Implementación

```yaml
TAREA 0 (SIEMPRE):
  nombre: "Setup del proyecto y configuración base"
  herramientas:
    - MCP Serena: Onboarding del proyecto
    - MCP Archon: "Next.js project setup"
    - Skills: environment-setup-guide, nextjs-best-practices
  objetivo: "Proyecto Next.js 14 con Tailwind configurado y branding integrado"
  incluye:
    - Instalación de dependencias
    - tailwind.config.ts con design tokens del branding
    - Layout raíz con fonts del branding
    - Componentes UI base del sistema de diseño
    - Estructura de carpetas definitiva
    - Configuración SEO global (robots.ts, sitemap.ts)
    - Favicon y manifest

TAREA 1 (SIEMPRE):
  nombre: "Componentes compartidos y sistema de diseño"
  objetivo: "Componentes reutilizables alineados con branding"
  incluye:
    - Header/Navbar responsive
    - Footer con links, legal, redes sociales
    - Botones (primary, secondary, ghost, link)
    - Secciones base (Hero, Features, CTA, Testimonials)
    - Componente SEO (JsonLd, Breadcrumbs)
    - Componente de imagen optimizada
    - Separadores y elementos decorativos de marca

TAREAS 2-N (UNA POR PÁGINA):
  formato_por_pagina: |
    Tarea N: Página "[Nombre]" — /ruta/exacta

    Metadata SEO:
      Meta título: "[Texto exacto]"
      Meta descripción: "[Texto exacto]"
      Keyword principal: "[keyword]"
      Schema: [Tipo de schema markup]
      OG Image: "[Descripción]"
      Breadcrumb: "Home > ... > Página"

    Secciones (en orden de aparición):

    Sección 1 — Hero:
      Layout: [Descripción del wireframe]
      H1: "[Texto exacto del H1 con keyword]"
      Subtítulo/H2: "[Texto exacto]"
      Párrafo: "[Texto completo]"
      CTA primario: "[Texto del botón]" → [destino]
      CTA secundario: "[Texto]" → [destino] (si aplica)
      Imagen/Visual: [Descripción detallada]
      Alt text: "[Texto alt]"
      Fondo: [Color del branding / gradiente]
      Elementos dinámicos: [Animaciones, efectos]
      
    Sección 2 — [Nombre]:
      Layout: [Descripción del wireframe]
      H2: "[Texto exacto]"
      Contenido: "[Texto completo de párrafos]"
      Elementos: [Cards, grid, lista, etc.]
      Imágenes: [Descripción + alt text]
      
    ... (TODAS las secciones de la página)

    Sección final — CTA de cierre:
      H2: "[Texto]"
      Párrafo: "[Texto]"
      CTA: "[Texto del botón]" → [destino]

    Archivos a crear:
      - src/app/[ruta]/page.tsx
      - src/app/[ruta]/loading.tsx (si necesario)
      - src/components/sections/[componentes-especificos].tsx (si nuevos)

    Criterios de aceptación:
      - [ ] H1 único con keyword principal
      - [ ] Meta título y descripción implementados
      - [ ] Schema markup JSON-LD válido
      - [ ] Imágenes con alt text
      - [ ] Responsive (mobile, tablet, desktop)
      - [ ] Coherente con branding (colores, fonts, tono)
      - [ ] Internal links a páginas relacionadas
      - [ ] Lighthouse SEO score > 95
      - [ ] Core Web Vitals dentro de rangos
      - [ ] Animaciones de entrada implementadas (fade-in, slide-up)
      - [ ] Hover effects en elementos interactivos
      - [ ] Calidad visual nivel Silicon Valley / Figma design
      - [ ] Spacing premium (white space generoso)

TAREAS POST-PÁGINAS (SIEMPRE, después de todas las páginas):

TAREA P1: "Datos Estructurados Globales (Schema Markup Completo)"
  objetivo: "Schema markup JSON-LD validado en CADA página del sitio"
  mecanismo_datos_faltantes: |
    ⚠️ PROTOCOLO DE DATOS FALTANTES:
    Para generar datos estructurados completos, el agente NECESITA datos 
    específicos del negocio. Si al llegar a esta tarea los datos NO están 
    disponibles en initial.md o en los docs, el agente DEBE:
    
    1. IDENTIFICAR qué datos faltan para CADA tipo de schema
    2. LISTAR los datos faltantes organizados por prioridad
    3. PREGUNTAR al usuario ANTES de implementar
    4. NO inventar datos — esperar respuesta real
  
  datos_necesarios_por_schema:
    Organization:
      requeridos:
        - Nombre legal completo del negocio
        - URL oficial del sitio web
        - Logo URL (ya debería estar en branding)
        - Descripción corta del negocio
      opcionales_pero_importantes:
        - Teléfono de contacto
        - Email de contacto
        - Dirección física (calle, ciudad, código postal, país)
        - Horario de atención (días y horas)
        - Redes sociales (URLs exactas de cada perfil)
        - Año de fundación
        - Área de servicio (si es local)
      preguntar_si_falta: |
        "Para completar el schema Organization necesito:
        - Teléfono: ¿cuál es el teléfono de contacto?
        - Email: ¿email principal de contacto?
        - Dirección: ¿dirección física completa?
        - Horario: ¿horario de atención?
        - Redes sociales: ¿URLs de perfiles?
        ..."

    LocalBusiness (si es negocio local):
      requeridos_adicionales:
        - Coordenadas geográficas (lat, lng)
        - Área de servicio
        - Categoría del negocio
        - Rango de precios ($ / $$ / $$$ / $$$$)
    
    Service (para cada página de servicio):
      requeridos:
        - Nombre del servicio
        - Descripción del servicio
        - Proveedor (nombre del negocio)
        - Área de servicio
      opcionales:
        - Rango de precios
        - Tiempo estimado de entrega
        - Disponibilidad
    
    FAQPage (si hay preguntas frecuentes):
      requeridos:
        - Pares de pregunta/respuesta exactos
      preguntar_si_falta: |
        "Necesito las preguntas frecuentes para el schema FAQ:
        - ¿Cuáles son las preguntas más comunes que te hacen tus clientes?
        - ¿Tienes un documento con FAQs?
        ..."

    BreadcrumbList:
      generado_automaticamente: true
      nota: "Se genera desde la estructura de URLs, no requiere datos extra"

    WebSite + SearchAction:
      requeridos:
        - URL del sitio
        - Nombre del sitio
      nota: "Disponible desde initial.md"
  
  archivos:
    - src/components/seo/SchemaOrganization.tsx
    - src/components/seo/SchemaService.tsx
    - src/components/seo/SchemaFAQ.tsx
    - src/components/seo/SchemaLocalBusiness.tsx (si aplica)
    - src/components/seo/SchemaWebSite.tsx
  
  criterios:
    - [ ] Schema Organization en Home
    - [ ] Schema Service en cada página de servicio
    - [ ] Schema FAQ donde haya preguntas frecuentes
    - [ ] Schema BreadcrumbList en TODAS las páginas
    - [ ] Schema WebSite + SearchAction en Home
    - [ ] TODOS validados en validator.schema.org
    - [ ] Google Rich Results Test pasando

TAREA P2: "Sitemap.xml Completo y Dinámico"
  objetivo: "Sitemap XML con TODAS las URLs del sitio, prioridades y frecuencias"
  archivo: src/app/sitemap.ts
  contenido: |
    Generar sitemap dinámico que incluya:
    - TODAS las páginas del sitio con URL completa
    - lastModified por página
    - changeFrequency (weekly para servicios, monthly para about, etc.)
    - priority (1.0 para home, 0.8 para servicios, 0.6 para legal)
  
  estructura_ejemplo:
    ```typescript
    export default function sitemap(): MetadataRoute.Sitemap {
      const baseUrl = 'https://dominio.com'
      return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/servicio-x`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        // ... TODAS las páginas
      ]
    }
    ```
  
  criterios:
    - [ ] TODAS las URLs del sitio incluidas
    - [ ] Prioridades asignadas correctamente
    - [ ] Accesible en /sitemap.xml
    - [ ] XML válido

TAREA P3: "robots.txt con Sitemap"
  objetivo: "robots.txt correcto con enlace al sitemap"
  archivo: src/app/robots.ts
  contenido: |
    ```typescript
    export default function robots(): MetadataRoute.Robots {
      return {
        rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
        sitemap: 'https://dominio.com/sitemap.xml',
      }
    }
    ```
  
  mecanismo_datos_faltantes: |
    Preguntar si no se sabe:
    - "¿Cuál es el dominio definitivo del sitio? (para el enlace del sitemap)"
    - "¿Hay rutas que deban bloquearse? (admin, api, staging, etc.)"
  
  criterios:
    - [ ] Accesible en /robots.txt
    - [ ] Contiene enlace al sitemap con URL completa
    - [ ] No bloquea páginas importantes
    - [ ] Bloquea rutas privadas

TAREA P4: "llms.txt — Optimización para IA"
  objetivo: "Archivo llms.txt para que LLMs/IA entiendan y recomienden el negocio"
  archivo: public/llms.txt
  referencia_skill: geo-fundamentals
  contenido: |
    El archivo llms.txt es el equivalente moderno del robots.txt pero para 
    modelos de lenguaje (ChatGPT, Claude, Perplexity, etc.). Permite que 
    las IAs entiendan qué hace el negocio y lo recomienden en sus respuestas.
  
  estructura:
    ```
    # [Nombre del Negocio]

    > [Descripción concisa del negocio en 1-2 líneas]

    ## Qué hacemos
    [Descripción clara de servicios/productos principales]

    ## Servicios
    - [Servicio 1]: [Descripción breve] — [URL]
    - [Servicio 2]: [Descripción breve] — [URL]
    ...

    ## Ubicación y Contacto
    - Web: [URL]
    - Email: [email]
    - Teléfono: [teléfono]
    - Ubicación: [ciudad, país]

    ## Información Adicional
    - Sector: [sector]
    - Público: [descripción del público objetivo]
    - Diferencial: [qué los hace únicos]
    ```
  
  mecanismo_datos_faltantes: |
    Si faltan datos de contacto o descripción:
    "Para crear el llms.txt necesito confirmar:
    - ¿La descripción del negocio en 1-2 líneas?
    - ¿Datos de contacto públicos (email, teléfono)?
    - ¿Qué diferencial quieres destacar para que las IAs lo recomienden?"
  
  criterios:
    - [ ] Accesible en /llms.txt
    - [ ] Información del negocio completa y precisa
    - [ ] Servicios listados con URLs
    - [ ] Datos de contacto incluidos
    - [ ] Tono profesional y conciso

TAREA FINAL: "Validación SEO global, Performance y Entrega"
  nombre: "Auditoría final completa"
  objetivo: "Sitio completo validado, optimizado y listo para producción"
  incluye:
    - Sitemap.xml verificado (TODAS las URLs)
    - robots.txt con enlace al sitemap verificado
    - llms.txt verificado y accesible
    - Datos estructurados validados en validator.schema.org
    - Google Rich Results Test pasando
    - Todas las páginas con metadata única
    - Internal linking completo (ningún huérfano)
    - Imágenes optimizadas con alt text
    - Lighthouse audit completo (Performance, SEO, Accessibility, Best Practices)
    - Open Graph preview verificado
    - Mobile-first responsive verificado en 5+ breakpoints
    - 404 personalizado memorable
    - Breadcrumbs en todas las páginas
    - Animaciones y efectos funcionando correctamente
    - Transiciones suaves entre páginas
    - Velocidad de carga < 3s en 3G
```

---

### ✅ Gates de Validación

```yaml
Nivel 1: Código & Estilo
  comandos: |
    npx next lint
    npx tsc --noEmit
  esperado: "Sin errores. Si hay, LEER y ARREGLAR"

Nivel 2: SEO por Página
  verificar_por_pagina:
    - Meta título único (max 60 chars)
    - Meta descripción única (max 155 chars)
    - Solo 1 H1 por página
    - Jerarquía de encabezados correcta (H1 > H2 > H3)
    - Imágenes con alt text
    - Schema markup JSON-LD válido
    - URL canónica configurada
    - Open Graph tags completos
    - Internal links funcionales
  herramienta: |
    # Validar schema con Google Rich Results Test
    # Validar OG con opengraph.xyz o similar
    # Validar accesibilidad con axe-core

Nivel 3: Performance & Lighthouse
  comandos: |
    npx next build
    npx lighthouse http://localhost:3000 --output=json
  métricas_objetivo:
    - Performance: > 90
    - SEO: > 95
    - Accessibility: > 90
    - Best Practices: > 90
    - LCP: < 2.5s
    - CLS: < 0.1
    - FID: < 100ms
```

---

## 💾 Guardar PRP

```bash
Ubicación: PRPs/{nombre-proyecto}-web-seo.md
Formato: Markdown con sintaxis YAML para estructura de tareas
Incluir: Metadata al inicio (name, version, proyecto, descripcion)
```

---

## ✅ Checklist de Calidad PRP

```yaml
Información del Negocio:
  - [ ] initial.md leído completamente
  - [ ] Nombre, sector, propuesta de valor documentados
  - [ ] Público objetivo identificado
  - [ ] Tono de voz definido

Branding:
  - [ ] Paleta de colores con códigos HEX exactos
  - [ ] Tipografías con nombres y pesos
  - [ ] Logo y variantes documentadas
  - [ ] Design tokens para Tailwind definidos
  - [ ] tailwind.config.ts personalizado incluido
  - [ ] Componentes base del sistema de diseño descritos

Contenido de Páginas:
  - [ ] TODAS las páginas de docs/pages/ incluidas
  - [ ] Cada página tiene plan sección por sección
  - [ ] Textos EXACTOS para H1, H2, H3, párrafos, CTAs
  - [ ] Wireframe/layout descrito para cada sección
  - [ ] Imágenes con alt text planificados
  - [ ] Elementos dinámicos y gráficos especificados

SEO Transaccional:
  - [ ] Meta título único por página (max 60 chars)
  - [ ] Meta descripción única por página (max 155 chars)
  - [ ] Keyword principal por página
  - [ ] Schema markup por tipo de página
  - [ ] Estructura de URLs jerárquica y limpia
  - [ ] Breadcrumbs planificados
  - [ ] Internal linking mapeado
  - [ ] Sitemap dinámico con TODAS las URLs, prioridades y frecuencias
  - [ ] robots.txt con enlace al sitemap (URL completa)
  - [ ] llms.txt para optimización GEO (IA/LLMs)
  - [ ] Datos estructurados Organization/LocalBusiness completos
  - [ ] Datos estructurados Service para cada servicio
  - [ ] Datos estructurados FAQ donde aplique
  - [ ] Datos estructurados BreadcrumbList en TODAS las páginas
  - [ ] Datos estructurados WebSite + SearchAction en Home
  - [ ] Open Graph images planificadas

Protocolo de Datos Faltantes:
  - [ ] Cada tarea identifica qué datos necesita
  - [ ] Tareas con datos faltantes incluyen preguntas específicas
  - [ ] El agente NUNCA inventa datos de negocio

Arquitectura Técnica:
  - [ ] Estructura de carpetas definida (cada página su carpeta)
  - [ ] Componentes reutilizables identificados
  - [ ] Server Components vs Client Components decidido
  - [ ] Estrategia de imágenes (next/image)
  - [ ] Fonts loading strategy

Skills y MCPs:
  - [ ] Tarea 0: Setup proyecto incluida
  - [ ] Skills SEO identificadas y asignadas
  - [ ] Skills de desarrollo frontend asignadas
  - [ ] MCPs integrados en tareas

Validación:
  - [ ] 3 niveles de validación definidos
  - [ ] Lighthouse targets definidos
  - [ ] Criterios de aceptación SEO por página
  - [ ] Criterios de aceptación de branding por página
```

---

## 📊 Score de Confianza

```yaml
Criterios de Scoring:
  10/10: "Desarrollo one-pass garantizado"
    - Cada página tiene plan sección por sección con textos exactos
    - Branding traducido a design tokens y Tailwind config
    - SEO completo (meta, schema, sitemap, OG)
    - Wireframes descritos con layout y elementos
    - Componentes compartidos identificados
    - Skills y MCPs asignados por tarea
    
  7-9/10: "Alta probabilidad one-pass"
    - Páginas planificadas pero algún detalle falta
    - Branding documentado pero tokens no traducidos
    - SEO mayormente completo
    
  4-6/10: "Requiere iteración"
    - Páginas sin plan sección por sección
    - Branding incompleto
    - SEO parcial
    
  1-3/10: "Alto riesgo"
    - Contenido sin vaciar
    - Sin branding
    - Sin plan SEO

Objetivo: Mínimo 8/10, ideal 9-10/10
```

---

## 🚨 CRÍTICO: ANTES DE ESCRIBIR EL PRP

### ⚡ ULTRATHINK SOBRE EL PRP

**Pausa y reflexiona:**
1. ¿Leí TODAS las páginas de docs/pages/?
2. ¿Documenté TODOS los colores, fonts y reglas del branding?
3. ¿Cada página tiene su plan sección por sección con TEXTOS EXACTOS?
4. ¿Cada página tiene meta título, meta descripción y schema markup?
5. ¿La estructura de URLs es limpia y jerárquica?
6. ¿Los wireframes están descritos con layout y elementos?
7. ¿Los CTAs tienen texto exacto y destino?
8. ¿Las imágenes tienen descripción y alt text?
9. ¿El branding está traducido a tailwind.config.ts?
10. ¿Los componentes compartidos están identificados?
11. ¿Hay tareas para sitemap, robots.txt (con URL del sitemap), llms.txt?
12. ¿Los datos estructurados están planificados por tipo de schema?
13. ¿Las tareas que necesitan datos extra incluyen el protocolo de preguntas?
14. ¿Las animaciones y efectos están especificados por sección?
15. ¿El nivel de calidad visual apunta a Silicon Valley / Figma design?
16. ¿Apliqué Pareto? (20% que genera 80% recibe tratamiento premium)
17. ¿El agente puede desarrollar CADA PÁGINA sin preguntar nada
    (excepto datos de negocio faltantes, que tiene protocolo para pedir)?

**Solo cuando TODO sea ✅, comienza a escribir el PRP**

---

## 🎯 Meta Final

**Desarrollo completo del sitio web en un solo paso (one-pass) a través de:**
1. ✅ Contenido EXACTO vaciado del markdown a componentes React
2. ✅ Branding 100% respetado en cada pixel
3. ✅ SEO transaccional completo (meta, schema, sitemap, OG)
4. ✅ Cada página en su carpeta con estructura limpia
5. ✅ Componentes profesionales con elementos dinámicos modernos
6. ✅ Responsive mobile-first
7. ✅ Core Web Vitals optimizados
8. ✅ Lighthouse scores > 90 en todas las categorías
9. ✅ Sitemap dinámico con TODAS las URLs y prioridades
10. ✅ robots.txt con enlace al sitemap
11. ✅ llms.txt para optimización GEO / visibilidad en IAs
12. ✅ Datos estructurados validados (Organization, Service, FAQ, Breadcrumb, WebSite)
13. ✅ Animaciones cinematográficas nivel Silicon Valley
14. ✅ Principio de Pareto aplicado (20/80 en diseño y conversión)
15. ✅ Datos faltantes solicitados inteligentemente al usuario

**Recuerda**: El contenido ya está escrito en los documentos. Tu trabajo es VACIARLO en componentes profesionales, maquetándolo con el branding y complementándolo con tu experiencia de nivel mundial en diseño web moderno. Cada página debe sentirse como una obra de arte funcional — no un template más.

---

## 📚 Referencias

- Template base: `PRPs/templates/prp_base_web_seo.md`
- MCPs: Archon (docs), Serena (código)
- Skills SEO: seo-fundamentals, seo-audit, schema-markup, web-performance-optimization, geo-fundamentals
- Skills Frontend: react-patterns, nextjs-best-practices, tailwind-patterns, frontend-design, ui-ux-pro-max
- Skills Design: scroll-experience, web-design-guidelines, core-components
- Archivos técnicos SEO: sitemap.ts, robots.ts, llms.txt, SchemaOrganization, SchemaService, SchemaFAQ
- Filosofía: Principio de Pareto, calidad Silicon Valley, animaciones con propósito
