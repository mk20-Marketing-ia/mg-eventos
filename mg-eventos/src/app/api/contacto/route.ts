export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NOMBRE = 255;
const MAX_EMAIL = 255;
const MAX_TELEFONO = 50;
const MAX_MENSAJE = 5000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateFormData(data: unknown): ContactFormData | null {
  if (!data || typeof data !== "object") return null;

  const obj = data as Record<string, unknown>;

  const nombre = obj.nombre;
  if (typeof nombre !== "string" || nombre.trim().length === 0) return null;
  if (nombre.length > MAX_NOMBRE) return null;

  const email = obj.email;
  if (typeof email !== "string" || email.trim().length === 0) return null;
  if (email.length > MAX_EMAIL || !EMAIL_REGEX.test(email)) return null;

  const mensaje = obj.mensaje;
  if (typeof mensaje !== "string" || mensaje.trim().length === 0) return null;
  if (mensaje.length > MAX_MENSAJE) return null;

  let telefono: string | undefined;
  if (obj.telefono !== undefined && obj.telefono !== null) {
    if (typeof obj.telefono !== "string") return null;
    telefono = obj.telefono.trim() || undefined;
    if (telefono && telefono.length > MAX_TELEFONO) return null;
  }

  return {
    nombre: nombre.trim(),
    email: email.trim(),
    telefono,
    mensaje: mensaje.trim(),
  };
}

function isSMTPConfigured(): boolean {
  return !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_FROM &&
    process.env.SMTP_TO
  );
}

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function getEmailEmpresaHtml(data: ContactFormData): string {
  const n = escapeHtml(data.nombre);
  const e = escapeHtml(data.email);
  const t = escapeHtml(data.telefono ?? "—");
  const m = escapeHtml(data.mensaje).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0F0D2E;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#1E1B4B;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="background:#F59E0B;padding:24px 32px;">
              <h1 style="margin:0;color:#1E1B4B;font-size:22px;font-weight:700;">
                🎉 Nuevo mensaje de contacto
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="color:#CBD5E1;margin:0 0 24px;font-size:15px;line-height:1.6;">
                Has recibido un nuevo mensaje desde el formulario de contacto de <strong style="color:#fff;">mgeventos.es</strong>:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#0F0D2E;border-radius:8px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;width:120px;vertical-align:top;">
                    Nombre
                  </td>
                  <td style="padding:12px 16px;color:#fff;font-size:15px;font-weight:600;">
                    ${n}
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Email
                  </td>
                  <td style="padding:12px 16px;">
                    <a href="mailto:${e}" style="color:#8B5CF6;font-size:15px;">${e}</a>
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Teléfono
                  </td>
                  <td style="padding:12px 16px;color:#fff;font-size:15px;">
                    ${t}
                  </td>
                </tr>
                <tr style="border-top:1px solid #1E1B4B;">
                  <td style="padding:12px 16px;color:#94A3B8;font-size:13px;vertical-align:top;">
                    Mensaje
                  </td>
                  <td style="padding:12px 16px;color:#CBD5E1;font-size:14px;line-height:1.6;">
                    ${m}
                  </td>
                </tr>
              </table>
              <table cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td>
                    <a href="mailto:${e}"
                       style="display:inline-block;background:#F59E0B;color:#1E1B4B;padding:12px 24px;
                              border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                      Responder a ${n}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.1);">
              <p style="margin:0;color:#475569;font-size:12px;">
                MG Eventos · info@mgeventos.es · 636 20 33 45<br>
                Rúa Carlos Maside SN, 36640 Pontecesures
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getEmailClienteHtml(data: ContactFormData): string {
  const n = escapeHtml(data.nombre);
  const m = escapeHtml(data.mensaje).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;
                      box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#1E1B4B;padding:32px;">
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">
                MG Eventos
              </h1>
              <p style="margin:4px 0 0;color:#94A3B8;font-size:13px;">
                Animadores de fiesta en Galicia
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 16px;color:#1E1B4B;font-size:22px;font-weight:700;">
                ¡Gracias, ${n}!
              </h2>
              <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 20px;">
                Hemos recibido tu mensaje correctamente. Nuestro equipo revisará
                tu consulta y te responderemos lo antes posible,
                normalmente <strong>en menos de 24 horas</strong>.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#F8FAFC;border-radius:8px;border-left:4px solid #7C3AED;
                            margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 8px;color:#7C3AED;font-size:12px;font-weight:700;
                               text-transform:uppercase;letter-spacing:0.05em;">
                      Tu mensaje
                    </p>
                    <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;">
                      ${m}
                    </p>
                  </td>
                </tr>
              </table>
              <p style="color:#475569;font-size:14px;margin:0 0 16px;">
                Mientras tanto, puedes contactarnos directamente:
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:4px 0;">
                    <a href="tel:+34636203345"
                       style="color:#7C3AED;font-size:14px;text-decoration:none;">
                      📞 636 20 33 45
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">
                    <a href="https://wa.me/34636203345"
                       style="color:#25D366;font-size:14px;text-decoration:none;">
                      💬 WhatsApp: 636 20 33 45
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">
                    <a href="mailto:info@mgeventos.es"
                       style="color:#7C3AED;font-size:14px;text-decoration:none;">
                      📧 info@mgeventos.es
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#F8FAFC;border-top:1px solid #E2E8F0;">
              <p style="margin:0;color:#94A3B8;font-size:12px;line-height:1.5;">
                MG Eventos · Rúa Carlos Maside SN, 36640 Pontecesures · Galicia, España<br>
                Este es un mensaje automático de confirmación. Por favor, no respondas a este correo.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Datos de formulario inválidos." },
        { status: 400 }
      );
    }

    const data = validateFormData(body);
    if (!data) {
      return NextResponse.json(
        {
          error:
            "Por favor, completa correctamente los campos obligatorios (nombre, email y mensaje).",
        },
        { status: 400 }
      );
    }

    if (!isSMTPConfigured()) {
      return NextResponse.json(
        { error: "Servicio de correo no disponible temporalmente" },
        { status: 503 }
      );
    }

    const transporter = createTransport();
    const from = process.env.SMTP_FROM!;
    const to = process.env.SMTP_TO!;

    try {
      await transporter.sendMail({
        from,
        to,
        subject: `🎉 Nuevo mensaje de contacto — ${data.nombre}`,
        html: getEmailEmpresaHtml(data),
      });
    } catch (err) {
      console.error("Error enviando email a empresa:", err);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 }
      );
    }

    try {
      await transporter.sendMail({
        from,
        to: data.email,
        subject: "Hemos recibido tu mensaje — MG Eventos",
        html: getEmailClienteHtml(data),
      });
    } catch (err) {
      console.error("Error enviando email de confirmación al cliente:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (err) {
    console.error("Error inesperado en /api/contacto:", err);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
