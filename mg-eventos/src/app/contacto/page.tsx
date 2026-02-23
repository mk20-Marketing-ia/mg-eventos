"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import {
  PHONE,
  PHONE_LINK,
  EMAIL,
  EMAIL_LINK,
  WHATSAPP_URL,
} from "@/lib/constants";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    privacidad: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || undefined,
          mensaje: formData.mensaje,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (response.ok) {
        setStatus("sent");
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "contact_form_submit",
            category: "lead",
            label: "contacto",
          });
        }
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Error al enviar el mensaje. Inténtalo de nuevo."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Error de conexión. Comprueba tu internet e inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Contacto", href: "/contacto" },
        ]}
      />

      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Contacto", href: "/contacto" },
            ]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_svg]:text-white/30"
          />
          <Heading as="h1" className="text-white max-w-3xl">
            Asesoramiento para fiestas
          </Heading>
          <p className="text-neutral-300 font-body text-lg mt-4 max-w-2xl">
            Contáctanos y te asesoramos en todo el proceso. Ya sea para
            contratar un dj con un pack completo o si quieres alquilar otro
            elemento para la decoración de tu evento o fiesta.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                Déjanos tus datos y te contestamos
              </h2>

              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <p className="text-green-800 font-heading font-bold text-xl">
                    ¡Mensaje enviado!
                  </p>
                  <p className="text-green-700 font-body mt-2">
                    Te contestaremos lo antes posible.
                  </p>
                </div>
              ) : status === "error" ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-red-800 font-heading font-bold">
                    Error al enviar
                  </p>
                  <p className="text-red-700 font-body text-sm mt-1">
                    {errorMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-sm text-red-700 underline font-body"
                  >
                    Volver al formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-heading font-semibold text-neutral-700 mb-1.5"
                    >
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 font-body text-neutral-800 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-heading font-semibold text-neutral-700 mb-1.5"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 font-body text-neutral-800 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-heading font-semibold text-neutral-700 mb-1.5"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 font-body text-neutral-800 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="600 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-heading font-semibold text-neutral-700 mb-1.5"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 font-body text-neutral-800 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-y"
                      placeholder="Cuéntanos sobre tu evento..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="privacidad"
                      type="checkbox"
                      required
                      checked={formData.privacidad}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacidad: e.target.checked,
                        })
                      }
                      className="mt-1 w-4 h-4 rounded border-neutral-300 text-secondary focus:ring-secondary"
                    />
                    <label
                      htmlFor="privacidad"
                      className="text-sm text-neutral-600 font-body"
                    >
                      He leído y acepto la política de privacidad.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className={
                      status === "sending" ? "opacity-70 pointer-events-none" : ""
                    }
                  >
                    {status === "sending" ? "Enviando..." : "Contáctanos"}
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                Contáctanos directamente
              </h2>
              <div className="space-y-6">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-body">
                      Teléfono
                    </p>
                    <p className="font-heading font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                      {PHONE}
                    </p>
                  </div>
                </a>

                <a
                  href={EMAIL_LINK}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-body">Email</p>
                    <p className="font-heading font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-whatsapp/5 hover:bg-whatsapp/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-body">
                      WhatsApp
                    </p>
                    <p className="font-heading font-bold text-neutral-900 group-hover:text-whatsapp transition-colors">
                      {PHONE}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
