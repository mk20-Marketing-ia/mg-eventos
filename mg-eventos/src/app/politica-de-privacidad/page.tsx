import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de tus datos personales en mgeventos.es según el RGPD y la normativa española.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Política de privacidad", href: "/politica-de-privacidad" },
        ]}
      />

      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              {
                name: "Política de privacidad",
                href: "/politica-de-privacidad",
              },
            ]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_svg]:text-white/30"
          />
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Política de Privacidad
          </h1>
          <p className="text-neutral-300 font-body text-lg mt-4 max-w-2xl">
            Información sobre el tratamiento de tus datos personales en
            mgeventos.es
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4">
              1. Responsable del tratamiento
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              El Responsable del Tratamiento se corresponde con el del titular
              de este sitio web, cuyos datos completos figuran en el{" "}
              <Link
                href="/aviso-legal"
                className="text-secondary hover:text-secondary-dark underline"
              >
                Aviso legal
              </Link>
              .
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4">
              2. Datos tratados, finalidades y plazos de conservación
            </h2>

            <h3 className="font-heading font-bold text-xl text-neutral-900 mt-8 mb-3">
              2.1 Datos tratados
            </h3>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              A los efectos de la solicitud de información, contacto, cita o la
              suscripción de nuestros boletines y newsletter, se deberán
              facilitar unos datos a través de la cumplimentación del formulario
              dispuesto a tal efecto, en el que se indicará cuáles de ellos
              tienen el carácter de obligatorio.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              Durante la navegación obtenemos datos que nos aportan información
              sobre usabilidad y preferencias de los usuarios, según los
              términos y condiciones que se prevén expresamente en el apartado
              de cookies.
            </p>

            <h3 className="font-heading font-bold text-xl text-neutral-900 mt-8 mb-3">
              2.2 Finalidades
            </h3>
            <p className="font-body text-neutral-700 leading-relaxed mb-2">
              Las finalidades serán las siguientes:
            </p>
            <ul className="list-disc list-inside space-y-1 font-body text-neutral-600 ml-4 mb-4">
              <li>
                Proporcionarle información relacionada con los productos y
                servicios que ofrece nuestra empresa y que detallan en este
                sitio web.
              </li>
              <li>
                Realizar la contratación de nuestros servicios mediante la
                aceptación del correspondiente presupuesto / pedido.
              </li>
              <li>
                Enviarle por correo electrónico y/o postal las noticias y
                novedades acerca de nuestra entidad, así como las actualizaciones
                de nuestro catálogo de productos y servicios.
              </li>
            </ul>

            <h3 className="font-heading font-bold text-xl text-neutral-900 mt-8 mb-3">
              2.3 Conservación
            </h3>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              El plazo de conservación será el siguiente: Los datos serán
              tratados, desde que el usuario preste su consentimiento hasta la
              retirada del mismo, el cual podrá otorgarse cuantas veces quiera.
              En cada comunicación, el usuario encontrará un procedimiento
              gratuito y accesible para gestionarlo.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4">
              3. Legitimación del tratamiento
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              La base legal para el tratamiento de los datos facilitados será el
              consentimiento otorgado por el usuario mediante la cumplimentación
              del formulario y la satisfacción de los intereses legítimos del
              Responsable del Tratamiento.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4">
              4. Destinatarios y cesiones
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              No se realizarán cesiones ni comunicaciones de datos, salvo las
              expresamente previstas por ley.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              No se encuentran previstas las transferencias internacionales de
              datos y los proveedores de servicios se encuentran en el Espacio
              Económico Europeo.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4">
              5. Ejercicio de derechos
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              Cualquier persona tiene derecho a obtener confirmación acerca de
              si se está procediendo al tratamiento de datos personales que les
              conciernan, o no. Las personas interesadas tienen derecho a
              acceder a sus datos personales, así como a solicitar la
              rectificación de los datos inexactos o, en su caso, solicitar su
              supresión cuando, entre otros motivos, los datos ya no sean
              necesarios para los fines que fueron recogidos.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              En determinadas circunstancias, los interesados podrán solicitar la
              limitación del tratamiento de sus datos u oponerse al tratamiento
              de los mismos, en cuyo caso únicamente los conservaremos para el
              ejercicio o la defensa de reclamaciones.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              Para ello, los usuarios podrán dirigir una comunicación por
              escrito a la dirección fiscal o dirección de correo electrónico
              que figuran en el{" "}
              <Link
                href="/aviso-legal"
                className="text-secondary hover:text-secondary-dark underline"
              >
                Aviso legal
              </Link>
              , incluyendo en ambos casos una fotocopia del documento nacional
              de identidad o documentación acreditativa equivalente.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4">
              En caso de que desee ejercer el derecho de portabilidad, se
              facilitará esos datos al nuevo Responsable.
            </p>

            <p className="text-sm text-neutral-400 font-body mb-8 italic">
              Última actualización: Febrero 2026
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
