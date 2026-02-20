# Stack y convenciones recomendados — Next.js 14 (App Router) — mg-eventos-v1

Documento de referencia para desarrollar la web corporativa con Next.js 14, React y contenido ya escrito (SEO respetado).

---

## 1. Stack tecnológico recomendado (2024/2025)

| Área | Tecnología | Uso en el proyecto |
|------|------------|---------------------|
| **Framework** | Next.js 14+ (App Router) | Rutas basadas en `app/`, Server Components por defecto |
| **App Router** | `app/` con `page.tsx`, `layout.tsx` | Páginas, layouts compartidos, loading/error |
| **Server Components** | Por defecto (sin `'use client'`) | Contenido estático, metadata, datos en servidor |
| **Client Components** | Solo donde haga falta | Formularios, interactividad, carruseles, menús móviles |
| **Datos estáticos** | `fetch` en Server Components sin `cache: 'no-store'` | Contenido de `docs/pages` (MD/MDX o JSON) cacheado en build |
| **Metadata API** | `metadata` estático y `generateMetadata` | title, description, Open Graph, canonical por ruta |
| **Imágenes** | `next/image` | WebP/AVIF, lazy loading, `sizes`, `priority` en hero |
| **Fuentes** | `next/font` (Google Fonts / local) | Evitar layout shift y FOIT |

**Versiones sugeridas:** Next.js 14.2+, React 18+, Node 20+.

---

## 2. Librerías recomendadas

| Categoría | Librería | Notas |
|-----------|----------|--------|
| **UI / componentes** | **shadcn/ui** | Componentes copiados al repo (no dependencia npm), Tailwind, accesibles, personalizables. Alternativa: Radix UI + Tailwind a mano. |
| **Estilos** | **Tailwind CSS** (v3 o v4) | Utilidades, diseño consistente, fácil theming. Con Next.js 14 usar configuración oficial (PostCSS). |
| **Iconos** | **Lucide React** | Tree-shakeable, coherente con shadcn. Alternativas: Heroicons, Phosphor. |
| **Formularios** | **React Hook Form** + **Zod** | Validación en cliente y servidor; en App Router combinar con Server Actions. |
| **Contenido MD** | **next-mdx-remote** o **contentlayer** (o leer MD con `fs`) | Para renderizar `docs/pages/*.md` como páginas estáticas. |
| **Utilidades** | **clsx** + **tailwind-merge** | Para `cn()` en clases condicionales (patrón shadcn). |

No es obligatorio un state global (Redux/Zustand) para una web corporativa; el estado puede vivir en URL, formularios y Server Components.

---

## 3. Estructura de carpetas y convenciones

```
mg-eventos-v1/
├── app/
│   ├── layout.tsx                 # Root layout (html, body, fuentes, metadata base)
│   ├── page.tsx                   # Home
│   ├── globals.css
│   ├── (marketing)/               # Route group (no afecta URL)
│   │   ├── layout.tsx             # Layout común: header, footer
│   │   ├── page.tsx               # Redirige o duplica home si aplica
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   ├── servicios/
│   │   │   ├── page.tsx           # Listado servicios
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Página servicio por slug
│   │   └── ...
│   ├── not-found.tsx
│   ├── loading.tsx                # Loading global opcional
│   ├── error.tsx                  # Error boundary
│   └── sitemap.ts                 # Sitemap dinámico
├── components/
│   ├── ui/                        # shadcn (Button, Card, Input...)
│   ├── layout/                    # Header, Footer, Nav
│   ├── sections/                  # Bloques de landing (Hero, CTA, Servicios)
│   └── shared/                    # Componentes reutilizables genéricos
├── lib/
│   ├── content.ts                 # Lectura de MD/JSON desde docs/pages
│   ├── utils.ts                   # cn(), helpers
│   └── constants.ts               # site URL, nombres, etc.
├── content/ o docs/pages/         # Contenido existente (MD/MDX)
├── public/
│   ├── images/
│   └── ...
└── next.config.js
```

**Convenciones:**

- **Páginas:** un solo `page.tsx` por ruta; usar Server Components por defecto.
- **Layouts:** `layout.tsx` en cada segmento que comparta header/footer o estructura.
- **Componentes reutilizables:** en `components/` por tipo (ui, layout, sections, shared); nombres PascalCase.
- **Client Components:** solo los que usen hooks o eventos; marcar con `'use client'` al inicio del archivo.
- **Rutas:** kebab-case en URL (`/servicios/dj-para-bodas-en-galicia`); slugs alineados con nombres de archivo en `docs/pages`.

---

## 4. SEO en Next.js 14

| Mecanismo | Uso |
|-----------|-----|
| **metadata (estático)** | En `layout.tsx` o `page.tsx`: `title`, `description`, `openGraph`, `twitter`, `metadataBase`. |
| **generateMetadata** | En páginas dinámicas (`[slug]`): título y descripción por servicio/página desde contenido. |
| **Canonical** | `metadata.alternates.canonical` con URL absoluta por página. |
| **Sitemap** | `app/sitemap.ts` exportando `default function sitemap()` con todas las URLs (home, estáticas, servicios). |
| **Robots** | `app/robots.ts` con `allow`/`disallow` y opcionalmente `sitemap`. |
| **Schema.org (JSON-LD)** | Componente o función que inyecte `<script type="application/ld+json">` (Organization, LocalBusiness, Service, BreadcrumbList, FAQ si aplica). |

**Ejemplo mínimo de metadata en página estática:**

```ts
// app/(marketing)/contacto/page.tsx
export const metadata = {
  title: 'Contacto | MG Eventos',
  description: '...',
  openGraph: { title: '...', description: '...' },
  alternates: { canonical: 'https://tudominio.com/contacto' },
};
```

**Ejemplo generateMetadata para slug:**

```ts
// app/(marketing)/servicios/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);
  return {
    title: page?.title ? `${page.title} | MG Eventos` : 'Servicios | MG Eventos',
    description: page?.description ?? '...',
    alternates: { canonical: `https://tudominio.com/servicios/${params.slug}` },
  };
}
```

**Sitemap:** incluir todas las rutas públicas (home, contacto, listado servicios, cada `/servicios/[slug]`) con `lastModified` y `changeFrequency` si lo tienes.

---

## 5. Patrones: landing vs páginas de servicios

| Tipo | Enfoque | Rutas |
|------|---------|--------|
| **Landing / home** | Una `page.tsx` con secciones (Hero, Servicios, CTA, etc.). Contenido puede venir de un único MD o de constantes. | `/` |
| **Páginas fijas** | Una carpeta por ruta: `contacto/page.tsx`, `sobre-nosotros/page.tsx`. Metadata estática. | `/contacto`, `/sobre-nosotros` |
| **Servicios (muchas páginas)** | **Slug dinámico** recomendado: `servicios/[slug]/page.tsx`. Listado de slugs desde `docs/pages` o un JSON; cada slug corresponde a un MD. | `/servicios/dj-para-bodas-en-galicia`, etc. |
| **Rutas estáticas (generateStaticParams)** | En `servicios/[slug]/page.tsx` exportar `generateStaticParams()` que devuelva `{ slug: 'dj-para-bodas-en-galicia' }, ...` para todas las páginas de servicios. Así el build genera HTML estático por servicio (mejor SEO y rendimiento). |

**Recomendación:** contenido ya escrito en `docs/pages` → mapear cada archivo a un `slug` (ej. nombre del archivo sin extensión, normalizado). En build, `generateStaticParams` lee la lista de slugs y Next genera todas las páginas de servicios de forma estática. Para una web corporativa con contenido estable, **slug dinámico + generateStaticParams** es el patrón adecuado.

---

## 6. Performance

| Tema | Práctica |
|------|----------|
| **Lazy loading** | `next/dynamic` para componentes pesados (carruseles, mapas, formularios complejos) con `loading` o Suspense. |
| **Imágenes** | Siempre `next/image`; `priority` en la imagen del hero; resto sin `priority` (lazy por defecto). Definir `sizes` para evitar imágenes demasiado grandes. |
| **Fuentes** | `next/font` (Google o local) en el root layout para evitar FOIT y layout shift. |
| **Scripts** | `next/script` con `strategy: 'lazyOnload'` para analytics/chat. |
| **Bundle** | Evitar `'use client'` en árboles grandes; acotar Client Components a nodos hoja. Revisar con `@next/bundle-analyzer` si hace falta. |
| **Datos** | Contenido desde `docs/pages` leído en build (generateStaticParams + fetch/fs); sin `cache: 'no-store'` para que sea estático. |

---

## Resumen de decisiones para mg-eventos-v1

- **Next.js 14** con App Router, Server Components por defecto.
- **shadcn/ui** + **Tailwind** + **Lucide** para UI y estilos.
- **Formularios:** React Hook Form + Zod; envío con Server Actions.
- **Contenido:** leer `docs/pages/*.md` (o exportación a JSON) y servir en Server Components; páginas de servicios vía `servicios/[slug]` con **generateStaticParams** para estático.
- **SEO:** metadata/generateMetadata, sitemap.ts, robots.ts, JSON-LD (Organization/LocalBusiness/Services).
- **Rutas:** estáticas para home y contacto; slug dinámico estático para servicios.
- **Performance:** next/image, next/font, dynamic import solo donde sea necesario.

Con esto tienes una base sólida para una web corporativa profesional, orientada a SEO y con contenido ya definido en el proyecto.
