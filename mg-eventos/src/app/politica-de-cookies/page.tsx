import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre las cookies utilizadas en mgeventos.es y cómo gestionarlas según la normativa española y europea.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Política de cookies", href: "/politica-de-cookies" },
        ]}
      />

      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Política de cookies", href: "/politica-de-cookies" },
            ]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_svg]:text-white/30"
          />
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            Política de Cookies
          </h1>
          <p className="text-neutral-300 font-body text-lg mt-4 max-w-2xl text-center text-justify">
            Información sobre el uso de cookies en mgeventos.es
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              De conformidad con la normativa española que regula el uso de
              cookies en relación a la prestación de servicios de la sociedad de
              la información, recogida en el apartado segundo del artículo 22
              de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de
              la información y de comercio electrónico, tras su modificación
              por el Real Decreto Ley 13/2012 del 30 de marzo, le informamos
              sobre las cookies utilizadas en el sitio web mgeventos.es, y el
              motivo de su uso. Asimismo, le informamos que de conformidad con
              la ley (i) el USUARIO da su consentimiento para poder utilizarlas
              si modifica la configuración de su navegador deshabilitando las
              restricciones que impiden la entrada de cookies y (ii) que el
              referido consentimiento no será preciso para la instalación de
              aquellas cookies que sean estrictamente necesarias para la
              prestación de un servicio expresamente solicitado por el USUARIO.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              ¿Qué son las cookies?
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Las cookies son pequeños archivos de texto que se instalan en el
              navegador del ordenador del USUARIO para registrar su actividad
              enviando una identificación anónima que se almacena en el mismo,
              con la finalidad de que la navegación sea más sencilla, permitiendo
              por ejemplo, el acceso a los USUARIOS que se hayan registrado
              previamente, el acceso a las áreas, servicios o promociones
              reservados exclusivamente a ellos sin tener que registrarse en
              cada visita. Se pueden utilizar también para medir la audiencia,
              parámetros del tráfico y navegación, tiempo de sesión, y/o
              controlar el progreso y número de entradas. Las cookies se asocian
              únicamente a un usuario anónimo y su ordenador o dispositivo y
              no proporcionan referencias que permitan conocer sus datos
              personales.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              Tipos de cookies
            </h2>
            <ol className="list-decimal list-inside space-y-2 font-body text-neutral-700 mb-4">
              <li>
                Cookies propias: Son aquellas que se envían al equipo terminal
                del usuario desde un equipo o dominio gestionado por el propio
                editor y desde el que se presta el servicio solicitado por el
                usuario.
              </li>
              <li>
                Cookies de terceros: Son aquellas que se envían al equipo
                terminal del usuario desde un equipo o dominio que no es
                gestionado por el editor, sino por otra entidad que trata los
                datos obtenidos a través de las cookies.
              </li>
              <li>
                Cookies de sesión: Son un tipo de cookies diseñadas para
                recabar y almacenar datos mientras el usuario accede a una
                página web.
              </li>
              <li>
                Cookies persistentes: Son un tipo de cookies en el que los
                datos siguen almacenados en el terminal y pueden ser accedidos
                y tratados durante un periodo definido por el responsable de la
                cookie, y que puede ir de unos minutos a varios años.
              </li>
              <li>
                Cookies técnicas: Son aquellas que permiten al usuario la
                navegación a través de una página web y la utilización de las
                diferentes opciones o servicios que en ella existan como, por
                ejemplo, controlar el tráfico y la comunicación de datos,
                identificar la sesión, acceder a partes de acceso restringido,
                recordar los elementos que integran un pedido, almacenar
                contenidos para la difusión de videos o sonido o compartir
                contenidos a través de redes sociales.
              </li>
              <li>
                Cookies de personalización: Son aquellas que permiten al
                usuario acceder al servicio con algunas características de
                carácter general predefinidas en función de una serie de
                criterios en el terminal del usuario como por ejemplo serían el
                idioma, el tipo de navegador a través del cual accede al
                servicio, etc.
              </li>
              <li>
                Cookies de análisis: Son aquellas que bien tratadas por
                nosotros o por terceros, nos permiten cuantificar el número de
                usuarios y así realizar la medición y análisis estadístico de la
                utilización que hacen los usuarios del servicio ofertado. Para
                ello se analiza su navegación en nuestra página web con el fin
                de mejorar la oferta de productos o servicios que le ofrecemos.
              </li>
              <li>
                Cookies publicitarias: Son aquellas que permiten la gestión, de
                la forma más eficaz posible, de los espacios publicitarios que,
                en su caso, el editor haya incluido en una página web,
                aplicación o plataforma desde la que presta el servicio
                solicitado en base a criterios como el contenido editado o la
                frecuencia en la que se muestran los anuncios.
              </li>
              <li>
                Cookies de publicidad comportamental: Son aquellas que permiten
                la gestión, de la forma más eficaz posible, de los espacios
                publicitarios que, en su caso, el editor haya incluido en una
                página web, aplicación o plataforma desde la que presta el
                servicio solicitado. Estas cookies almacenan información del
                comportamiento de los usuarios obtenida a través de la
                observación continuada de sus hábitos de navegación, lo que
                permite desarrollar un perfil específico para mostrar publicidad
                en función del mismo.
              </li>
            </ol>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              Tipos de cookies utilizadas por este sitio web
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              A continuación informamos del tipo de cookies propias o de
              servicios que nos prestan complementos de terceros, utilizadas para
              el buen funcionamiento de este sitio web. Esto nos permiten
              almacenar y acceder a información relativa al idioma, el tipo de
              navegador utilizado, y otras características generales
              predefinidas por el usuario, así como, seguir y analizar la
              actividad que lleva a cabo, con el objeto de introducir mejoras y
              prestar nuestros servicios de una manera más eficiente y
              personalizada.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              La utilización de las cookies ofrece ventajas en la prestación de
              servicios, puesto que, facilita al usuario la navegación y el
              acceso a los diferentes servicios que ofrece este sitio web;
              evita al usuario tener que configurar las características
              generales predefinidas cada vez que accede al sitio web; favorece
              la mejora del funcionamiento y de los servicios prestados a través
              de este sitio web, tras el correspondiente análisis de la
              información obtenida a través de las cookies instaladas.
            </p>
            <ul className="list-disc list-inside space-y-1 font-body text-neutral-600 ml-4 mb-4">
              <li>
                <strong>Cookies propias:</strong> mg-cookie-consent: Esta cookie
                detecta si el usuario ha aceptado el banner de cookies de la
                web y por lo tanto no es necesario volver a mostrar el mensaje
                relacionado con el mismo.
              </li>
              <li>
                <strong>Cookies de Google:</strong> Google Analytics (_ga, _gat,
                _gid): Estas cookies se corresponden al servicio de analítica web
                denominado Google Analytics, que permite obtener información
                sobre el uso que los usuarios hacen del sitio web. Solo se
                cargan si el usuario acepta las cookies analíticas mediante el
                banner de consentimiento.
              </li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              Deshabilitación de las cookies
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Como usuario en todo momento podrá acceder a la configuración de
              su navegador aceptando o rechazando todas las cookies, o bien
              seleccionar aquéllas cuya instalación admite y cuáles no, siguiendo
              uno de los siguientes procedimientos, que depende del navegador
              que utilice:
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Dado que cada navegador utiliza una manera diferente, la función
              ayuda de su navegador le indicará cómo hacerlo.
            </p>
            <ul className="list-disc list-inside space-y-1 font-body text-neutral-600 ml-4 mb-4">
              <li>
                Internet Explorer:{" "}
                <Link
                  href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark underline"
                >
                  windows.microsoft.com
                </Link>
              </li>
              <li>
                Firefox:{" "}
                <Link
                  href="https://support.mozilla.org/es/kb/Borrar%20cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark underline"
                >
                  support.mozilla.org
                </Link>
              </li>
              <li>
                Chrome:{" "}
                <Link
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark underline"
                >
                  support.google.com
                </Link>
              </li>
              <li>
                Safari:{" "}
                <Link
                  href="https://www.apple.com/es/privacy/use-of-cookies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark underline"
                >
                  apple.com
                </Link>
              </li>
            </ul>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Todos los navegadores permiten cambiar la configuración de
              Cookies. Estos ajustes normalmente se encuentran en las
              &quot;opciones&quot; o &quot;Preferencias&quot; del menú de su
              navegador.
            </p>
            <ul className="list-disc list-inside space-y-1 font-body text-neutral-600 ml-4 mb-4">
              <li>
                Internet Explorer: Herramientas → Opciones de Internet →
                Privacidad → Configuración.
              </li>
              <li>
                Firefox: Herramientas → Opciones → Privacidad → Historial →
                Configuración Personalizada.
              </li>
              <li>
                Chrome: Configuración → Mostrar opciones avanzadas → Privacidad
                → Configuración de contenido.
              </li>
              <li>Safari: Preferencias → Seguridad.</li>
            </ul>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Recuerde que para poder eliminar todas las cookies, incluyendo las
              cookies de terceros, debe seguir los pasos que se indican en los
              enlaces anteriores.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              En el caso de la no aceptación de cookies se ejecutará un código
              de Analytics restringido e irreversible, que realiza un examen de
              navegación anónima y que consigue no recolectar datos de carácter
              personal.
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
