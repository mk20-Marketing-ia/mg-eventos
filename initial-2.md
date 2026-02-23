# Documento fundacional: Web MG Eventos

**Propósito:** Base de entrada para que **tú** generes el PRP del proyecto. No es un PRP. Describe la situación del proyecto, el contenido existente, wireframes, branding propuesto y restricciones para que el desarrollo final (Next.js 14, React) tenga una especificación clara.

**Alcance:** Sitio web corporativo para MG Eventos (música y animación de eventos en Galicia). Contenido ya escrito y con SEO en `docs/pages`; el desarrollo debe respetarlo, darle forma (wireframes, branding, maquetado) y dejar espacio para imágenes e iconos.

---

## 1. Contexto del proyecto

### 1.1 Situación

- Nos han asignado un **proyecto web** para MG Eventos.
- El **contenido** de la web ya está en la carpeta `/docs/pages`: un archivo `.md` por página.
- Ese contenido **tiene SEO** y debe respetarse; no se cambia el copy por criterios de maquetado.
- En los archivos **no están marcados** títulos ni jerarquía de textos: es contenido pegado tal cual, por lo que hay que **interpretar por página** qué es H1, H2, párrafos, CTAs, etc.
- El trabajo a especificar: **wireframes**, **branding** (colores, tipografías), **maquetado y estilo**. Libertad total en diseño salvo respetar el contenido.
- **Exigencias:** contenido fiel; espacio reservado para **imágenes**; libertad para **iconos**.
- **Stack:** Next.js 14, React y lo necesario para un trabajo completo y profesional.
- Este documento debe ser **lo bastante completo** para que a partir de él se genere el PRP del desarrollo final.

### 1.2 Referencia de estructura

- Se toma como **referencia de formato** el documento `initial.md` (documento fundacional, no PRP): secciones de contexto, restricciones, decisiones y referencias, para que quien genere el PRP tenga todo el anclaje necesario.

---

## 2. Inventario de páginas y contenido

Fuente: `/home/mk20/mg-eventos-v1/docs/pages`. Cada archivo es una página. A continuación, por página: **archivo**, **interpretación de estructura** (títulos/textos) y **huecos para imágenes**.

### 2.1 Home — `home.md`

- **Keyword principal (SEO):** Música para eventos en Galicia.
- **Interpretación sugerida:**
  - **H1:** MG Eventos (o tagline tipo “Música para eventos en Galicia”).
  - **Hero:** Párrafo de presentación (“En cada evento hay un momento… Somos animadores de fiesta en Galicia…”). CTA: “¡Contáctanos!”.
  - **Sección “Nuestros colaboradores”:** Referencias a assets (L12.png, L4.png, L7.png) → **espacio para 3 imágenes** (logos o colaboradores).
  - **Tres bloques con icono/imagen:** Iluminación profesional / Evento inolvidable / Animación de eventos — cada uno con título + texto corto.
  - **H2:** “Sobre MG Eventos” — “Servicio de música para eventos” + párrafo. Lista: Fiestas privadas, Bodas, Verbenas, Cumpleaños, “Y el evento que tú quieras…”.
  - **CTA WhatsApp:** “¡Háblanos por WhatsApp!” + número.
  - **Dato destacado:** “+10 Años de experiencia”.
  - **H2:** “Servicios de MG Eventos” / “Contrata música para tu evento” + intro. **Grid de servicios:** Servicio de DJ, Disco móvil, Camión escenario, Pantallas LED, Fotomatón — cada uno con título + descripción breve. Enlaces internos a cada servicio.
  - **CTA central:** “!Mándanos un WhatsApp!” / “Háblanos” / “Anima la fiesta con MG Eventos”.
  - **H2:** “MG Eventos es tu Animador de bodas en Galicia” + texto + “Nuestra experiencia”: +10 años, +1.600 eventos, +300 bodas, +2.000 clientes satisfechos.
- **Imágenes a reservar:** Hero (fondo o principal); 3 colaboradores; opcional una por bloque “Iluminación / Evento inolvidable / Animación”; una por servicio (5); opcional sección bodas/experiencia.

### 2.2 Contacto — `contacto.md`

- **Interpretación:**
  - **H1:** “Asesoramiento para fiestas” (o “Contacto”).
  - **Intro:** “Contáctanos y te asesoramos…” (texto tal cual).
  - **Formulario:** Nombre, Correo electrónico, Teléfono, Mensaje; checkbox “He leído y acepto la política de privacidad”. CTA: “Contáctanos” o similar.
  - **Datos directos:** “Contáctanos directamente” — 636 20 33 45, info@mgeventos.es, 636 20 33 45 (enlace tel y mail).
- **Imágenes:** Opcional imagen de apoyo o fondo suave; no obligatorio.

### 2.3 DJ para eventos en Galicia — `DJ para eventos en Galicia.md`

- **H1:** “DJ para eventos en Galicia” (o “¡Contrata un dj para tu evento!” como gancho y H1 el nombre del servicio).
- **Intro** + CTAs “¡Contáctanos!”.
- **Bloques:** Música personalizada / Sonido e iluminación adaptados / DJ para cumpleaños en Galicia.
- **H2:** “DJ para eventos corporativos en Galicia” + texto; lista: Cenas de empresa, Presentaciones corporativas, Congresos. CTA “Hablemos”.
- **Dato:** +10 años experiencia.
- **H2:** “Solicita presupuesto para tu DJ de eventos en Galicia” + texto. CTA “¡Pregúntanos!”.
- **H2:** “Monta tu evento con un Ambiente profesional…” (texto sobre corporativo, pantallas LED, fotomatón).
- **H2:** “DJ para eventos pequeños en Galicia” (párrafo repetido/alternativo).
- **H2:** “¿Por qué MG Eventos?” — “Servicio de DJ con experiencia y cercanía” + números (+10 años, +2.000 clientes, +1.600 eventos).
- **Imágenes:** Hero; una por bloque de valor; opcional equipo/corporativo; espacio para foto “ambiente”.

### 2.4 DJ para fiestas en Galicia — `DJ para fiestas en Galicia.md`

- **H1:** “DJ para fiestas en Galicia” (o “¡Contrata un dj para tus fiestas!”).
- **Intro** + CTAs.
- **Bloques:** Dj para verbenas / Reuniones familiares y de amigos / DJ para cumpleaños en Galicia.
- **H2:** “DJ para fiestas privadas en Galicia” + texto; lista Cumpleaños, Celebraciones, Fiestas íntimas. CTA “Hablemos”.
- **H2:** “Solicita presupuesto para tu fiesta con DJ en Galicia” + CTA.
- **H2:** “Monta tu evento con un Ambiente profesional…” (corporativo, LED, fotomatón).
- **H2:** “Otros servicios de fiesta” (camión escenario, discomóvil, fotomatón).
- **H2:** “¿Por qué MG Eventos?” + números.
- **Imágenes:** Hero; verbenas/fiesta; privadas; camión/discomóvil; equipo.

### 2.5 DJ para bodas en Galicia — `dj para bodas en galicia.md`

- **H1:** “DJ para bodas en Galicia” (o “¡Contrata un dj para tu boda!”).
- **Intro** + CTAs.
- **Bloques:** Música personalizada / Asesoramiento y planificación / Entendemos tu estilo.
- **H2:** “¿Qué incluye nuestro servicio de DJ para bodas?” — lista: Sonido profesional, Iluminación y ambiente, Asesoramiento cercano. CTA “Pregúntanos”.
- **H2:** “Solicita presupuesto para tu DJ de boda en Galicia” + CTA “Hablemos”.
- **H2:** “Otros servicios” — Fotomatón para bodas (atrezzo, fotos instantáneas). Enlace a fotomatón.
- **H2:** “¿Por qué MG Eventos?” + números (+300 bodas, etc.).
- **Imágenes:** Hero boda; momento ceremonia/fiesta; equipo; fotomatón boda.

### 2.6 Fotomatón en Galicia — `Fotomatón en Galicia.md`

- **H1:** “Fotomatón en Galicia” (o “¿Buscas un fotomatón para tu fiesta?”).
- **Intro** (fotomatón como rincón de diversión y recuerdos).
- **Bloques:** Diversión y recuerdos / Galería digital / Rincón especial para tus invitados.
- **H2:** “Fotomatón para eventos” (fiestas) — Atrezzo variado, Galería digital, Risas aseguradas. CTA “Pregúntanos”.
- **H2:** “Solicita presupuesto para tu espejo fotomatón” + CTA “Hablemos”.
- **H2:** “Fotomatón para bodas” + texto (personalización, estilo). CTA “¡Contáctanos!”.
- **H2:** “¿Por qué MG Eventos?” + números.
- **Imágenes:** Fotomatón en acción; atrezzo; galería; boda.

### 2.7 Pantallas LED para eventos en Galicia — `Pantallas LED para eventos en Galicia.md`

- **H1:** “Pantallas LED para eventos en Galicia” (o “¿Buscas las mejores pantallas para tu presentación?”).
- **Intro** (formatos: TV grandes, LED modulares; bodas, conferencias, ferias).
- **Bloques:** La mejor solución visual / Pantallas LED al aire libre / Montaje y asistencia.
- **H2:** “Decoración digital” / “Alquiler de pantallas LED para eventos” + texto. Lista: Sonido profesional, Iluminación y ambiente, Asesoramiento cercano. CTA.
- **H2:** “Solicita presupuesto para tu montaje de pantallas LED” + CTA.
- **H2:** “Pantallas LED para el aire libre o interior” + “Todo tipo de eventos” (visibilidad, presentaciones, elementos visuales). Enlace “Fotomatón para boda”, “musica para eventos en galicia”.
- **H2:** “Otros servicios” (DJ en Galicia) + números.
- **Imágenes:** LED interior; LED exterior; montaje; evento con pantalla.

### 2.8 Discotecas móviles en Galicia — `Discotecas móviles en Galicia.md`

- **H1:** “Discotecas móviles en Galicia”.
- **Intro** (discomóvil = experiencia de sala en cualquier lugar).
- **Bloques:** Música, sonido e iluminación / Ideal para verbenas y fiestas / Perfecta para el aire libre.
- **H2:** “Discomóvil para bodas” + texto (montaje, DJ). CTAs.
- **H2:** “Solicita presupuesto para disco móvil para fiestas” + CTA “Hablemos”.
- **H2:** “Servicio flexible para cada tipo de evento” (configuraciones: sonido, luces, LED, camión escenario).
- **H2:** “¿Por qué alquilar una discomóvil?” — Montaje versátil, Iluminación, Potencia y calidad de sonido, Encaja con cualquier evento, Equipo técnico incluido. CTA “¡Pregúntanos!”.
- **H2:** “¿Por qué MG Eventos?” + números.
- **Imágenes:** Discomóvil montada; verbena; boda; detalle equipo.

### 2.9 Escenario móvil para eventos — `Escenario móvil para eventos.md`

- **H1:** “Escenario móvil para eventos” (o “¿Necesitas un escenario versátil?”).
- **Intro** (primer párrafo reutiliza texto “DJ fiesta” — en desarrollo unificar o adaptar sin perder SEO).
- **Bloques:** Escenario adaptado / Montaje rápido y sin complicaciones / Para eventos grandes y pequeños.
- **H2:** “Camión escenario en Galicia” + lista Verbenas, Fiestas, Eventos. CTA “Hablemos”.
- **H2:** “Solicita presupuesto para tu camión escenario en Galicia” + CTA.
- **H2:** “Sonido e iluminación para tu evento” (escenario + sonido + luces + DJ). “¿Por qué MG Eventos?” + números.
- **Imágenes:** Camión escenario desplegado; verbena/feria; detalle sonido/luces.

---

## 3. Wireframes (por tipo de página)

Descripción funcional para maquetar; no define estilo visual (eso va en branding).

### 3.1 Patrón global

- **Header:** Logo MG Eventos, navegación principal (Home, servicios agrupados o listados, Contacto), CTA destacado (WhatsApp o “Contáctanos”). Mobile: menú hamburguesa.
- **Footer:** Logo, enlaces (servicios, contacto), teléfono, email, WhatsApp; opcional redes; política de privacidad si se enlaza desde contacto.

### 3.2 Home

- **Hero:** Imagen/vídeo de fondo o bloque principal; título + subtítulo + CTA. Espacio claro para imagen principal.
- **Colaboradores:** 3 imágenes (logos o fotos) en fila; títulos o nombres si aplica.
- **Tres pilares:** 3 columnas (iluminación, evento inolvidable, animación); cada una: icono o imagen + título + texto.
- **Sobre MG Eventos:** Texto + lista de tipos de evento; CTA WhatsApp; dato “+10 años”.
- **Servicios:** Grid de tarjetas (5 servicios); cada tarjeta: imagen, título, descripción corta, enlace. Espacio para imagen por servicio.
- **CTA central:** Bloque destacado (WhatsApp / “Háblanos”).
- **Animador de bodas:** Título + texto + “Nuestra experiencia”: 4 números en bloque (años, eventos, bodas, clientes). Espacio para imagen opcional.

### 3.3 Páginas de servicio (DJ eventos, DJ fiestas, DJ bodas, Fotomatón, Pantallas LED, Discomóvil, Escenario móvil)

- **Hero:** Imagen de servicio; H1 + intro + CTA.
- **Bloques de valor:** 2–4 bloques (icono o imagen + título + texto).
- **Secciones H2:** Título + párrafo(s); listas o bullets donde el contenido lo indique; CTA por sección cuando aparezca en el copy.
- **Datos de confianza:** “+10 años”, “+X eventos”, “+X clientes” en bloque único o integrado.
- **¿Por qué MG Eventos?:** Mismo bloque reutilizable; números + texto corto.
- **CTAs:** Botón/enlace WhatsApp y/o “Contáctanos” / “Pregúntanos” / “Hablemos” según copy.
- En cada sección: **placeholder o área definida para imagen** (una por sección o cada dos, según espacio).

### 3.4 Contacto

- **H1 + intro** en la parte superior.
- **Formulario** en una columna (o centrado); campos: nombre, email, teléfono, mensaje; checkbox privacidad; botón enviar.
- **Datos de contacto** en otra columna o debajo: teléfono (clic para llamar), email (mailto), repetido si aparece dos veces en el copy.
- Reservar espacio por si se añade mapa o imagen de apoyo.

---

## 4. Branding propuesto (para el PRP y desarrollo)

Propuesta de sistema visual; el PRP puede afinarla o sustituirla.

### 4.1 Tono y sensación

- **Sector:** Eventos, música, animación (bodas, fiestas, corporativo).
- **Tono:** Cercano, profesional, energético; “Galicia” y “experiencia” como ejes.
- **Objetivo:** Confianza + ganas de contratar (CTAs claros, WhatsApp visible).

### 4.2 Paleta de colores (sugerencia)

- **Primario:** Oscuro o intenso (ej. azul noche o granate) para header, footer y CTAs principales.
- **Secundario:** Para fondos de sección y contraste (ej. gris muy claro o crema).
- **Acento:** Color llamativo para botones WhatsApp y CTAs (ej. verde WhatsApp o naranja/amarillo energético).
- **Texto:** Negro/gris oscuro sobre claro; blanco sobre oscuro en header/footer y botones primarios.
- Dejar definido en el PRP: códigos hex, uso por componente (botón, tarjeta, hero, etc.).

### 4.3 Tipografías (sugerencia)

- **Títulos:** Sans moderna (ej. bold/semibold) para H1–H2.
- **Cuerpo:** Sans legible para párrafos.
- **CTAs / acentos:** Misma familia o una secundaria en semibold.
- El PRP puede fijar fuentes (Google Fonts o locales) y pesos.

### 4.4 Iconografía

- Libertad para usar **iconos** (Lucide, Heroicons u otro) en bloques de valor, listas y CTAs.
- Coherencia: un solo set o estilo (outline o filled) en todo el sitio.

### 4.5 Logo

- Logo MG Eventos: variantes para header (claro/oscuro según fondo). Zona de seguridad y tamaños mínimos a definir en PRP si hay assets.

### 4.6 Espacio para imágenes

- **Hero:** Siempre área definida (ratio ej. 16:9 o full-height) para imagen o vídeo.
- **Servicios (home):** Una imagen por tarjeta de servicio.
- **Páginas de servicio:** Al menos 1 imagen en hero + 2–4 imágenes en secciones (según contenido).
- **Colaboradores (home):** 3 imágenes.
- Uso de `next/image` y tamaños/ratios a fijar en PRP (responsive, lazy loading).

---

## 5. Stack tecnológico (referencia para el PRP)

- **Framework:** Next.js 14 (App Router).
- **UI:** React; componentes reutilizables (layout, secciones, tarjetas, formulario, CTAs).
- **Estilos:** Tailwind CSS (o el que el PRP decida) con tokens alineados al branding.
- **SEO:** Metadata por página (título, descripción, canonical); sitemap; robots; schema (Organization, LocalBusiness, Service donde aplique); contenido tal cual en `docs/pages`.
- **Rutas:** Home `/`, Contacto `/contacto`, Servicios con URLs SEO-friendly (ej. `/dj-para-eventos-en-galicia`, `/fotomaton-en-galicia`, etc.) según nombres de archivo o slug acordado.
- **Formulario contacto:** Envío a email o endpoint a definir; validación y política de privacidad enlazada.
- **WhatsApp:** Enlaces `https://wa.me/...` con número 636 20 33 45 (y texto opcional); botón fijo en mobile si se desea.
- **Imágenes:** Carpeta `public/images` (o equivalente); placeholders hasta tener assets finales; optimización vía Next.js Image.

El PRP deberá detallar versiones, estructura de carpetas, convenciones de nombres y librerías concretas (iconos, formularios, etc.).

---

## 6. Restricciones y principios

- **Contenido:** No modificar el copy de `docs/pages`; solo estructurarlo (H1, H2, párrafos, listas, CTAs). Si un párrafo se repite entre páginas (ej. “¿Por qué MG Eventos?”), mantenerlo igual.
- **SEO:** Respetar keywords y textos ya pensados para búsqueda; títulos de página y meta pueden derivarse del H1 y del primer párrafo.
- **Imágenes:** Dejar siempre **espacio reservado** (o placeholder) donde se indique en este documento; no eliminar huecos por diseño.
- **Iconos:** Libre elección de set y colocación; coherentes con el branding.
- **Maquetado y estilo:** Libertad total (layout, espaciados, animaciones suaves, componentes) siempre que se respete contenido y branding definido en el PRP.

---

## 7. Mapa de contenido y URLs (para el PRP)

| Página        | Archivo origen                    | URL sugerida (slug)           |
|---------------|-----------------------------------|-------------------------------|
| Home          | home.md                           | /                             |
| Contacto      | contacto.md                       | /contacto                     |
| DJ eventos    | DJ para eventos en Galicia.md     | /dj-para-eventos-en-galicia   |
| DJ fiestas    | DJ para fiestas en Galicia.md     | /dj-para-fiestas-en-galicia   |
| DJ bodas      | dj para bodas en galicia.md       | /dj-para-bodas-en-galicia     |
| Fotomatón     | Fotomatón en Galicia.md           | /fotomaton-en-galicia         |
| Pantallas LED | Pantallas LED para eventos en Galicia.md | /pantallas-led-para-eventos-en-galicia |
| Discomóvil    | Discotecas móviles en Galicia.md  | /discotecas-moviles-en-galicia |
| Escenario móvil | Escenario móvil para eventos.md | /escenario-movil-para-eventos  |

Internal linking: desde Home a todos los servicios y contacto; desde cada servicio a Home, Contacto y a otros servicios cuando el copy lo mencione (ej. DJ bodas → Fotomatón; Pantallas LED → DJ, etc.).

---

## 8. Resumen de lo que debe fijar el PRP

- Paleta exacta (hex) y uso por componente.
- Tipografías (nombre, pesos, import).
- Estructura de carpetas Next.js 14 y convención de nombres.
- Librerías (iconos, formularios, etc.).
- Metadata y schema por tipo de página.
- Tratamiento de imágenes (ratios, placeholders, `next/image`).
- Formulario de contacto (endpoint, validación, privacidad).
- Criterios de éxito (Lighthouse, accesibilidad, SEO) si se desea incluirlos en el PRP.

---

## 9. Referencias

- **Contenido:** `/home/mk20/mg-eventos-v1/docs/pages/*.md` — una página por archivo; contenido con SEO a respetar.
- **Estructura de documento:** `initial.md` — documento fundacional como referencia de formato (contexto, restricciones, decisiones, referencias).
- **Template PRP:** `PRPs/templates/prp_base.md` — lo usarás tú para generar el PRP a partir de este documento.

---

*Fin del documento fundacional. Este archivo es la base para que generes el PRP del desarrollo de la web MG Eventos. No sustituye al PRP.*
