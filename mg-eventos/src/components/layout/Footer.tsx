import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SITE_NAME,
  SERVICES,
  PHONE,
  PHONE_LINK,
  EMAIL,
  EMAIL_LINK,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link
              href="/"
              className="text-lg font-heading font-extrabold text-white hover:text-accent transition-colors"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-neutral-400 font-body text-sm leading-relaxed">
              Animadores de fiesta en Galicia con más de 10 años de experiencia.
              Música, sonido e iluminación para bodas, fiestas y eventos.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.slug}
                    className="text-neutral-400 hover:text-white text-sm font-body transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-body transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_LINK}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-body transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-body transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                  WhatsApp: {PHONE}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-neutral-400 hover:text-white text-sm font-body transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-sm font-body">
            © {year} {SITE_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
