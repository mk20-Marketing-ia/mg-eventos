# MG Eventos — Design System & Componentes UI

> Documentación de los componentes visuales implementados en la web.  
> Todos viven en `mg-eventos/src/components/ui/` o `src/components/sections/`.

---

## 1. SyntheticHero — Hero 3D con Shader GLSL

**Archivo:** `src/components/ui/synthetic-hero.tsx`  
**Uso:** Solo en la Home (`src/app/page.tsx`)  
**Rendering:** Client-only (`dynamic` + `ssr: false`) — Three.js no funciona en SSR

### ¿Qué hace?
Renderiza un hero de pantalla completa con un shader GLSL animado como fondo (WebGL via `@react-three/fiber`). El texto entra con animaciones GSAP+SplitText (blur→foco, slide-up escalonado).

### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | — | Título principal (animado letra a letra) |
| `description` | `string` | — | Párrafo descriptivo |
| `badgeText` | `string` | — | Texto principal del badge |
| `badgeLabel` | `string` | — | Etiqueta secundaria del badge |
| `ctaButtons` | `CTAButton[]` | — | Array de botones CTA |
| `microDetails` | `string[]` | `[]` | Lista de bullet points bajo los CTAs |

### Paleta del shader
El shader usa la paleta de branding MG Eventos:
- Violeta profundo `#1E1B4B` → Violeta vibrante `#7C3AED` → Toque dorado `#F59E0B`

### Dependencias npm
```
gsap @gsap/react three @react-three/fiber@8.17.10
```

### Cuándo NO usar
- En páginas de servicios (demasiado pesado, afecta Lighthouse)
- En páginas con contenido denso (distrae)

---

## 2. Logos3 — Carrusel de logos con auto-scroll

**Archivo:** `src/components/ui/logos3.tsx`  
**Uso:** `CollaboratorsSection.tsx` → Home  
**Rendering:** Client (`"use client"`)

### ¿Qué hace?
Carrusel infinito de logos/colaboradores con scroll automático y fades laterales. Soporta logos por imagen (`image`) o por texto (`text`).

### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `heading` | `string` | — | Título de la sección |
| `subheading` | `string` | — | Párrafo descriptivo opcional |
| `logos` | `Logo[]` | — | Array de logos (ver estructura) |

### Estructura Logo
```ts
{
  id: string;
  description: string;   // alt text
  image?: string;        // URL de imagen (opcional)
  text?: string;         // Texto si no hay imagen
  className?: string;    // Clases extra para la imagen
}
```

### Dependencias npm
```
embla-carousel-react embla-carousel-auto-scroll
```

### Cuándo usar
- Secciones de social proof con logos de partners/colaboradores
- No aplica en páginas de servicio individuales

---

## 3. ColorChangeCards — Tarjetas de servicios con hover animado

**Archivo:** `src/components/ui/color-change-card.tsx`  
**Uso:** `ServicesGrid.tsx` → Home  
**Rendering:** Client (`"use client"`) via `dynamic + ssr: false`

### ¿Qué hace?
Grid de tarjetas con imagen de fondo. En desktop, la imagen arranca en escala de grises y al hover pasa a color + escala. El título anima letra a letra con framer-motion.

### Props del componente principal
| Prop | Tipo | Descripción |
|------|------|-------------|
| `services` | `ServiceCardItem[]` | Array de servicios |

### Estructura ServiceCardItem
```ts
{
  heading: string;    // Título de la tarjeta
  description: string;
  imgSrc: string;     // URL de imagen (Pexels o local)
  href: string;       // Ruta de destino
}
```

### Layout del grid (5 servicios)
- Mobile: 1 columna
- SM: 2 columnas
- MD+: Fila 1 → 3 cards | Fila 2 → 2 cards centradas

### Dependencias npm
```
framer-motion
```

### Cuándo usar
- Grids de servicios (home, páginas de categoría)
- Secciones "servicios relacionados" en páginas de servicio

---

## 4. CallToAction — Bloques de llamada a la acción

**Archivo:** `src/components/ui/call-to-action.tsx`  
**Uso:** Home (×2), páginas de servicio (reemplaza `BudgetCTA`)  
**Rendering:** Server Component (sin estado)

### ¿Qué hace?
Componente de CTA reutilizable con dos layouts:
- **`"card"`**: Tarjeta redondeada flotante sobre fondo neutro
- **`"full"`**: Sección ancho completo (deprecated, usar card)

### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `badge` | `string` | — | Etiqueta pequeña sobre el título |
| `title` | `string` | — | Título principal |
| `description` | `string` | — | Párrafo descriptivo |
| `primaryButton` | `CTAButton` | — | Botón principal |
| `secondaryButton` | `CTAButton` | — | Botón secundario |
| `layout` | `"card" \| "full"` | `"card"` | Tipo de layout |
| `dark` | `boolean` | `false` | Interior oscuro (degradado violeta) |

### Estructura CTAButton
```ts
{
  text: string;
  href: string;
  icon?: "whatsapp" | "phone" | "arrow" | "none";
  variant?: "primary" | "outline" | "whatsapp";
  external?: boolean;
}
```

### Variantes visuales

| `layout` | `dark` | Resultado visual |
|----------|--------|-----------------|
| `"card"` | `false` | Tarjeta clara, bg sutil violeta/dorado |
| `"card"` | `true` | Tarjeta con degradado violeta oscuro |

### Adaptación del botón outline
El botón `outline` se adapta automáticamente:
- Sobre fondo claro → borde + texto violeta
- Sobre fondo oscuro (`dark=true`) → borde + texto blanco translúcido

---

## 5. HeroSection — Hero estático de páginas de servicio

**Archivo:** `src/components/sections/HeroSection.tsx`  
**Uso:** Todas las páginas de servicio  
**Rendering:** Server Component

### ¿Qué hace?
Hero con fondo de gradiente violeta oscuro, animaciones CSS (fade-in, slide-up), breadcrumbs, preTitle, H1, párrafo y botones CTA.

### Props
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `preTitle` | `string` | — | Texto dorado sobre el título |
| `title` | `string` | — | H1 principal |
| `subtitle` | `string` | — | Subtítulo (opcional) |
| `paragraph` | `string` | — | Descripción |
| `ctaPrimary` | `{text, href}` | — | Botón principal |
| `ctaSecondary` | `{text, href}` | — | Botón secundario (opcional) |
| `breadcrumbs` | `BreadcrumbItem[]` | — | Migas de pan |
| `compact` | `boolean` | `false` | Altura reducida (50vh vs 80vh) |

---

## 6. Carousel (Embla) — Componente base

**Archivo:** `src/components/ui/carousel.tsx`  
**Uso:** Internamente en `logos3.tsx`

Wrapper de Embla Carousel. Exporta `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`. No tiene dependencia de `Button.tsx` externo (usa `<button>` nativo).

---

## Reglas de uso transversal

1. **Server vs Client**: Preferir Server Components. Marcar `"use client"` solo cuando hay interactividad, hooks de estado o APIs de browser (WebGL, scroll, etc.)
2. **`dynamic + ssr: false`**: Obligatorio para Three.js y framer-motion (evita error de hidratación)
3. **Imágenes externas**: Pexels para placeholders mientras no haya imágenes reales
4. **Fuentes locales**: `@fontsource/inter` y `@fontsource/plus-jakarta-sans` — sin dependencia de red
5. **Sin dependencias shadcn Button/Badge** (casing conflict con `Button.tsx`/`Badge.tsx` existentes): usar elementos nativos `<a>`, `<button>`, `<span>` con clases Tailwind
