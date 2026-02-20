export const SITE_NAME = "MG Eventos";
export const SITE_URL = "https://mgeventos.es";
export const SITE_DESCRIPTION =
  "Animadores de fiesta en Galicia con +10 años de experiencia. DJ, discomóvil, fotomatón, pantallas LED y escenario móvil para bodas, fiestas y eventos.";

export const PHONE = "636 20 33 45";
export const PHONE_LINK = "tel:+34636203345";
export const EMAIL = "info@mgeventos.es";
export const EMAIL_LINK = "mailto:info@mgeventos.es";
export const WHATSAPP_NUMBER = "34636203345";
export const WHATSAPP_URL = "https://wa.me/34636203345";

export const NAV_ITEMS = [
  { name: "Inicio", href: "/" },
  { name: "DJ para eventos", href: "/dj-para-eventos-en-galicia" },
  { name: "DJ para fiestas", href: "/dj-para-fiestas-en-galicia" },
  { name: "DJ para bodas", href: "/dj-para-bodas-en-galicia" },
  { name: "Fotomatón", href: "/fotomaton-en-galicia" },
  { name: "Pantallas LED", href: "/pantallas-led-para-eventos-en-galicia" },
  { name: "Discoteca móvil", href: "/discotecas-moviles-en-galicia" },
  { name: "Escenario móvil", href: "/escenario-movil-para-eventos" },
  { name: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    name: "Servicio de DJ",
    slug: "/dj-para-eventos-en-galicia",
    shortDescription:
      "Música personalizada, sonido profesional e iluminación adaptada a cada evento.",
  },
  {
    name: "DJ para fiestas",
    slug: "/dj-para-fiestas-en-galicia",
    shortDescription:
      "Verbenas, cumpleaños y fiestas privadas con animación completa.",
  },
  {
    name: "DJ para bodas",
    slug: "/dj-para-bodas-en-galicia",
    shortDescription:
      "Música personalizada, asesoramiento y planificación para tu boda.",
  },
  {
    name: "Fotomatón",
    slug: "/fotomaton-en-galicia",
    shortDescription:
      "Espejo fotomatón con atrezzo, galería digital y diversión para todos.",
  },
  {
    name: "Pantallas LED",
    slug: "/pantallas-led-para-eventos-en-galicia",
    shortDescription:
      "Interior y exterior, montaje profesional y asistencia técnica.",
  },
  {
    name: "Disco móvil",
    slug: "/discotecas-moviles-en-galicia",
    shortDescription:
      "Experiencia de sala de fiesta en cualquier ubicación.",
  },
  {
    name: "Camión escenario",
    slug: "/escenario-movil-para-eventos",
    shortDescription:
      "Camión escenario con sonido e iluminación profesional.",
  },
] as const;

export const STATS = [
  { value: 10, prefix: "+", label: "Años de experiencia" },
  { value: 1600, prefix: "+", label: "Eventos y fiestas" },
  { value: 300, prefix: "+", label: "Bodas" },
  { value: 2000, prefix: "+", label: "Clientes satisfechos" },
] as const;
