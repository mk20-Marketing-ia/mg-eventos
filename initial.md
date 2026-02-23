# Documento fundacional: MG Eventos — Fase 2

**Propósito:** Base de entrada para que **tú** generes el PRP de la Fase 2 del proyecto. No es un PRP. Describe la situación actual del proyecto, los módulos a implementar, la arquitectura técnica propuesta, las restricciones y las referencias necesarias para que el desarrollo tenga una especificación clara.

**Alcance:** Esta es la **continuación directa de la Fase 1** del proyecto MG Eventos, cuya base ya está construida y desplegada en Vercel (Next.js 14 App Router, TypeScript, Tailwind CSS). La Fase 2 incorpora: medición completa vía Google Tag Manager → GA4 + Search Console, banner de cookies RGPD/GDPR compliant con bloqueo condicional de scripts, tres páginas legales (cookies, privacidad, aviso legal), actualización del Footer con todos los enlaces legales y de servicios, y el formulario de contacto funcional vía SMTP con doble confirmación de correo.

---

## 1. Contexto del proyecto

### 1.1 Situación actual (lo que entrega la Fase 1)

- La web MG Eventos ya está **construida y en producción** en Vercel.
- Cuenta con **9 páginas** (home + 7 servicios + contacto), Header, Footer, componentes UI y secciones reutilizables.
- El formulario de contacto tiene UI completa pero **el `handleSubmit` es simulado** con un `setTimeout`; no envía correos reales.
- El Footer tiene la columna "Legal" con un único enlace (política de privacidad) que apunta a una ruta que **aún no existe**.
- No hay ningún sistema de medición (GTM, GA4, ni Search Console) integrado.
- No existe banner de cookies ni páginas legales publicadas.
- El contenido de las páginas legales **ya está escrito** en `/docs/pages`: `politica-de-cookies.md`, `politica-de-privacidad.md`, `aviso-legal.md`.

### 1.2 Referencia de estructura

- Se toma como referencia de formato el documento `initial-2.md` del mismo repositorio: secciones de contexto, inventario, restricciones y referencias, para que quien genere el PRP tenga todo el anclaje necesario.
- El stack no cambia respecto a la Fase 1: Next.js 14 App Router, TypeScript, Tailwind CSS, Vercel.

---

## 2. Inventario de módulos a implementar

### 2.1 Módulo GTM — Google Tag Manager

- **Paquete oficial:** `@next/third-parties` (mantenido por el equipo Next.js/Vercel); instala con `npm install @next/third-parties@latest`.
- **Componente a usar:** `<GoogleTagManager gtmId={...} />` desde `@next/third-parties/google`.
- **Archivo a modificar:** `src/app/layout.tsx` — añadir el componente dentro de `<html>`, antes de `<body>`.
- **Carga condicional:** GTM solo se inicializa si el usuario ha aceptado cookies de análisis; si deniega o acepta solo esenciales, el script no se carga.
- **Variable de entorno necesaria:** `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` (el ID lo obtiene el cliente al crear su contenedor en tagmanager.google.com).
- **Evento de formulario:** Cuando el formulario de contacto se envíe con éxito, disparar `sendGTMEvent({ event: 'contact_form_submit', category: 'lead' })`.
- **Pendiente manual (instrucciones para el cliente):**
  - Crear cuenta GTM en tagmanager.google.com → contenedor `mgeventos.es` → tipo Web.
  - Crear tag GA4 Configuration con su Measurement ID (`G-XXXXXXXXXX`) → Trigger: All Pages.
  - Crear tag Custom HTML para verificación de Search Console.
  - Publicar el contenedor (Submit → Publish).

### 2.2 Módulo Banner de Cookies — RGPD/GDPR

- **Implementación:** Componente propio (sin librerías externas) para mantener control total y evitar peso innecesario.
- **Archivos a crear:**
  - `src/lib/cookieConsent.ts` — tipos, constantes y utilidades de consentimiento.
  - `src/hooks/useCookieConsent.ts` — hook de acceso al contexto.
  - `src/components/cookies/CookieConsentProvider.tsx` — Context Provider con lógica de persistencia.
  - `src/components/cookies/GTMConditionalLoader.tsx` — carga GTM solo si hay consentimiento de análisis.
  - `src/components/cookies/CookieBanner.tsx` — UI del banner.
- **Persistencia:** Cookie `mg-cookie-consent` con duración de 365 días (se usa cookie, no solo localStorage, para que sea accesible en SSR si se necesita en el futuro).
- **Tres niveles de consentimiento:**
  - `all` — Esenciales + Analíticas → GTM activo, GA4 activo.
  - `essential` — Solo sesión/funcionales → GTM bloqueado.
  - `denied` — Ninguna cookie no técnica → GTM bloqueado.
- **Comportamiento:**
  - Aparece en el primer acceso a cualquier página (cookie de preferencia no existe).
  - No aparece si ya existe una preferencia guardada.
  - Posición: fija en la parte inferior de la pantalla (`fixed bottom`).
  - Tres botones de acción: "Rechazar", "Solo esenciales", "Aceptar todas".
  - Enlace visible a `/politica-de-cookies` y `/politica-de-privacidad` dentro del banner.
  - Botón "Gestionar cookies" en el Footer para reabrir el banner y cambiar la preferencia.
- **Diseño acorde al design system existente:**
  - Fondo: `bg-primary-dark` (#1E1B4B).
  - Texto: `text-white` / `text-neutral-300`.
  - Botón principal ("Aceptar todas"): color accent (#F59E0B).
  - Botón secundario ("Solo esenciales"): borde blanco.
  - Botón "Rechazar": texto neutral sin fondo.
- **Marco legal aplicable:** RGPD (UE 2016/679), LSSI-CE, Directiva ePrivacy.

### 2.3 Módulo Páginas Legales

- **Contenido fuente:** `/docs/pages/` — los tres archivos `.md` ya escritos, se copian y adaptan a JSX.
- **Páginas a crear:**
  - `/politica-de-cookies` → `src/app/politica-de-cookies/page.tsx` — fuente: `politica-de-cookies.md`.
  - `/politica-de-privacidad` → `src/app/politica-de-privacidad/page.tsx` — fuente: `politica-de-privacidad.md`.
  - `/aviso-legal` → `src/app/aviso-legal/page.tsx` — fuente: `aviso-legal.md`.
- **Estructura de cada página:**
  - Hero section con fondo `bg-primary` (igual que el resto de páginas internas del sitio).
  - Breadcrumbs con Schema markup (patrón ya existente en el proyecto).
  - Contenido del markdown estructurado en JSX (H2, párrafos, listas).
  - Fecha de última actualización visible.
  - Metadatos SEO con `robots: noindex, nofollow` (páginas legales no deben indexarse).

### 2.4 Módulo Footer Actualizado

- **Estado actual:** Columna "Legal" con un solo enlace (política de privacidad) apuntando a ruta inexistente.
- **Cambio requerido en la columna "Legal":**
  - Política de privacidad → `/politica-de-privacidad` ✓ (ya existe, corregir ruta si difiere).
  - Política de cookies → `/politica-de-cookies` ← añadir.
  - Aviso legal → `/aviso-legal` ← añadir.
- **Cambio en el pie del Footer:** Añadir enlace/botón "Gestionar cookies" junto al copyright que reabre el banner de consentimiento.
- **La columna "Servicios" ya existe** y tiene todos los servicios correctamente enlazados desde la constante `SERVICES`; no requiere cambios.

### 2.5 Módulo Formulario de Contacto — SMTP

- **Paquete a usar:** `nodemailer` + `@types/nodemailer`; instalar con `npm install nodemailer && npm install --save-dev @types/nodemailer`.
- **Archivo a crear:** `src/app/api/contacto/route.ts` — API Route en Node.js runtime (no Edge, Nodemailer requiere módulos Node).
- **Archivo a modificar:** `src/app/contacto/page.tsx` — reemplazar el `setTimeout` simulado por un `fetch POST` a `/api/contacto`.
- **Flujo de la API:**
  1. Recibe los datos del formulario (nombre, email, teléfono, mensaje) vía POST.
  2. Valida que los campos obligatorios estén presentes.
  3. Crea el transporter Nodemailer con las variables de entorno SMTP.
  4. Envía Email 1 a la empresa: notificación de nuevo lead con todos los datos.
  5. Envía Email 2 al cliente: confirmación de recepción de su mensaje.
  6. Devuelve respuesta 200 en éxito o 4xx/5xx en error.
- **Estados del formulario a mantener:** `idle`, `sending`, `sent`, `error` (ya implementados en la UI).
- **Variables de entorno SMTP:**
  - `SMTP_HOST` — servidor SMTP del proveedor (p. ej. `smtp.ionos.com`, `smtp.gmail.com`).
  - `SMTP_PORT` — 587 para STARTTLS, 465 para SSL.
  - `SMTP_SECURE` — `false` para 587, `true` para 465.
  - `SMTP_USER` — usuario de la cuenta de correo.
  - `SMTP_PASS` — contraseña SMTP o App Password (Gmail).
  - `SMTP_FROM` — dirección remitente (`info@mgeventos.es`).
  - `SMTP_TO` — destino de los leads (`info@mgeventos.es`).
- **Manejo de errores:** Si las variables SMTP no están configuradas → respuesta 503. Error de red → 500. Datos inválidos → 400.

---

## 3. Diseño de los correos electrónicos

### 3.1 Email a la empresa — Notificación de nuevo lead

- **Asunto:** `🎉 Nuevo mensaje de contacto — [NOMBRE]`
- **Estilo:** Fondo `#1E1B4B`, texto blanco, acento `#F59E0B` (colores del design system).
- **Contenido:** Tabla con nombre, email, teléfono y mensaje del formulario; botón "Responder a [NOMBRE]" con `mailto:[EMAIL]`.
- **Pie:** Datos de la empresa (nombre, correo, teléfono).

### 3.2 Email al cliente — Confirmación de recepción

- **Asunto:** `Hemos recibido tu mensaje — MG Eventos`
- **Estilo:** Fondo blanco, texto `#1E1B4B`, acento `#7C3AED` (secondary del design system).
- **Contenido:** Saludo personalizado con el nombre, confirmación de recepción, caja con el mensaje enviado, datos de contacto directo (teléfono, WhatsApp, email).
- **Pie:** Dirección postal de la empresa, aviso de que es un mensaje automático.

---

## 4. Stack tecnológico (sin cambios respecto a Fase 1)

- **Framework:** Next.js 14 App Router.
- **Lenguaje:** TypeScript.
- **Estilos:** Tailwind CSS con el mismo design system de la Fase 1 (tokens, colores, fuentes).
- **Hosting:** Vercel — las variables de entorno se configuran en Vercel Dashboard > Settings > Environment Variables.
- **Runtime API routes:** Node.js (no Edge) para la ruta de contacto.
- **Paquetes nuevos en esta fase:** `@next/third-parties`, `nodemailer`, `@types/nodemailer`.

---

## 5. Restricciones y principios

- **Contenido legal:** No modificar el texto de los archivos `.md` en `docs/pages`; solo estructurarlo en JSX (H2, párrafos, listas).
- **Design system:** Los nuevos componentes (banner, páginas legales) deben seguir exactamente la paleta, tipografías y clases Tailwind ya definidas en el proyecto (`bg-primary-dark`, `text-accent`, `font-heading`, `font-body`, etc.).
- **Sin librerías extra de UI:** El banner de cookies se implementa como componente propio; no añadir dependencias de terceros para algo tan específico.
- **Credenciales SMTP:** Nunca en el cliente ni en variables `NEXT_PUBLIC_`; solo Server-side.
- **GTM ID:** Con prefijo `NEXT_PUBLIC_` porque se referencia en un componente client-side.
- **SEO páginas legales:** Deben tener `robots: noindex, nofollow` para no afectar el posicionamiento del sitio.
- **Formulario:** La UI actual del formulario de contacto no se rediseña; solo se conecta la lógica de envío.

---

## 6. Mapa de archivos nuevos y modificados

| Tipo | Ruta | Descripción |
|------|------|-------------|
| NUEVO | `src/lib/cookieConsent.ts` | Tipos y utilidades de consentimiento |
| NUEVO | `src/hooks/useCookieConsent.ts` | Hook de acceso al contexto de cookies |
| NUEVO | `src/components/cookies/CookieConsentProvider.tsx` | Context Provider con persistencia |
| NUEVO | `src/components/cookies/GTMConditionalLoader.tsx` | Carga GTM según consentimiento |
| NUEVO | `src/components/cookies/CookieBanner.tsx` | Banner GDPR visual |
| NUEVO | `src/app/politica-de-cookies/page.tsx` | Página legal cookies |
| NUEVO | `src/app/politica-de-privacidad/page.tsx` | Página legal privacidad |
| NUEVO | `src/app/aviso-legal/page.tsx` | Página aviso legal |
| NUEVO | `src/app/api/contacto/route.ts` | API route SMTP |
| NUEVO | `.env.local` | Variables de entorno locales |
| MODIFICA | `src/app/layout.tsx` | Añadir GTM + CookieProvider + Banner |
| MODIFICA | `src/components/layout/Footer.tsx` | Añadir cookies + aviso legal + gestionar cookies |
| MODIFICA | `src/app/contacto/page.tsx` | Conectar handleSubmit con /api/contacto |

---

## 7. Mapa de URLs (Fase 2)

| Página | URL | Fuente del contenido |
|--------|-----|---------------------|
| Política de cookies | `/politica-de-cookies` | `docs/pages/politica-de-cookies.md` |
| Política de privacidad | `/politica-de-privacidad` | `docs/pages/politica-de-privacidad.md` |
| Aviso legal | `/aviso-legal` | `docs/pages/aviso-legal.md` |
| API contacto | `/api/contacto` (POST) | Endpoint server-side, no página pública |

---

## 8. Resumen de lo que debe fijar el PRP

- Implementación exacta del Context de consentimiento (cookies vs localStorage, estructura del objeto de consentimiento).
- Lógica de bloqueo/desbloqueo de GTM en función del consentimiento (patrón de `useEffect` + conditional render).
- Estructura JSX de las páginas legales (interpretar los `.md` como H2, párrafos y listas).
- Template HTML de los dos correos electrónicos (estructura inline CSS compatible con clientes de correo).
- Manejo de errores en la API route y en el formulario cliente.
- Animación o transición del banner de cookies (aparición desde abajo, cierre suave).
- Criterios de validación post-implementación: GTM se carga solo con consentimiento, correos llegan correctamente, páginas legales accesibles y con noindex.

---

## 9. Referencias

- **Proyecto base (Fase 1):** `/home/mk20/mg-eventos-v1/mg-eventos/` — código fuente completo.
- **Contenido legal:** `/home/mk20/mg-eventos-v1/docs/pages/politica-de-cookies.md`, `politica-de-privacidad.md`, `aviso-legal.md`.
- **Design system:** `src/tailwind.config.ts` + `src/styles/globals.css` del proyecto.
- **Constantes del proyecto:** `src/lib/constants.ts` (SITE_NAME, EMAIL, PHONE, SERVICES, etc.).
- **Estructura de documento:** `initial-2.md` — documento fundacional de Fase 1, usado como referencia de formato.

---

*Fin del documento fundacional. Este archivo es la base para generar el PRP de la Fase 2 de MG Eventos. No sustituye al PRP.*
