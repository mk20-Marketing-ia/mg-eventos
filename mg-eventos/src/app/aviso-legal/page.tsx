import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SchemaBreadcrumb } from "@/components/seo/SchemaBreadcrumb";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Condiciones de uso, identificación del prestador y legislación aplicable del sitio web mgeventos.es.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/aviso-legal" },
};

const IDENTIFICACION = {
  titular: "IVÁN MATA GASPAR",
  cif: "44821622G",
  direccion: "Rúa Carlos Maside SN",
  cp: "36640",
  municipio: "Pontecesures",
  email: "info@mgeventos.es",
  telefono: "636 20 33 45",
} as const;

export default function AvisoLegalPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Aviso legal", href: "/aviso-legal" },
        ]}
      />

      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Aviso legal", href: "/aviso-legal" },
            ]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_svg]:text-white/30"
          />
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            Aviso Legal
          </h1>
          <p className="text-neutral-300 font-body text-lg mt-4 max-w-2xl text-center text-justify">
            Condiciones de uso e identificación del prestador de mgeventos.es
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              1. Identificación del prestador
            </h2>
            <dl className="bg-neutral-50 rounded-lg p-6 space-y-2 font-body text-neutral-700 text-left">
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Titular fiscal:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.titular}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  CIF/NIF:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.cif}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Dirección:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.direccion}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Código postal:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.cp}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Ayuntamiento:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.municipio}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Correo electrónico:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.email}</dd>
              </div>
              <div>
                <dt className="font-heading font-semibold text-neutral-800 inline">
                  Teléfono:
                </dt>{" "}
                <dd className="inline">{IDENTIFICACION.telefono}</dd>
              </div>
            </dl>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              2. Objeto
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Las presentes condiciones regularán el uso que el Prestador pone a
              disposición de los usuarios de la Web, y con ellas se pretende dar
              cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de
              Servicios de la Sociedad de la Información y del Comercio
              Electrónico (LSSI-CE), así como informar a todos los usuarios del
              sitio web respecto a cuáles son las condiciones de uso del sitio
              web.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              A través del sitio web, el Prestador facilita a los usuarios el
              acceso a diversos contenidos, servicios, información y datos (los
              «contenidos»), puestos a disposición de los usuarios por el
              Prestador o por terceros proveedores de servicios y contenidos.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Toda persona que acceda a este sitio web asume el papel de
              usuario, comprometiéndose a la observancia y cumplimiento
              riguroso de las disposiciones aquí dispuestas, así como a
              cualquier otra disposición legal que fuera de aplicación, por lo
              que, si éste no está de acuerdo con cualquiera de las condiciones
              aquí dispuestas, deberá abstenerse respecto al uso del presente
              sitio web.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Prestador se reserva el derecho a modificar cualquier tipo de
              información que pudiera aparecer en el sitio web, sin que exista
              obligación de preavisar o poner en conocimiento de los usuarios
              dichas modificaciones, entendiéndose como suficiente con la
              publicación en el sitio web del prestador.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              La utilización de determinados servicios implicará así mismo la
              aceptación, sin reserva alguna, de las Condiciones particulares que
              el Prestador pudiera establecer en cualquier momento con carácter
              específico, sustitutivo o complementario al de las presentes
              Condiciones Generales de Uso.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              3. Responsabilidad
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Prestador se exime de cualquier tipo de responsabilidad
              derivada de la información publicada en su sitio web, siempre que
              esta información haya sido manipulada o introducida por un tercero
              ajeno al mismo.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Desde el sitio web del Prestador es posible que se redirija a
              contenidos de terceros sitios web. Dado que el Prestador no puede
              controlar siempre los contenidos introducidos por los terceros en
              sus sitios web, éste no asume ningún tipo de responsabilidad
              respecto a dichos contenidos. En todo caso, el Prestador manifiesta
              que procederá a la retirada inmediata de cualquier contenido que
              pudiera contravenir la legislación nacional o internacional, la
              moral o el orden público, procediendo a la retirada inmediata de la
              redirección a dicho sitio web, poniendo en conocimiento de las
              autoridades competentes el contenido en cuestión.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Prestador no se hace responsable de la información y contenidos
              almacenados, a título enunciativo, pero no limitativo, en foros,
              chats, generadores de blogs, comentarios, redes sociales o
              cualquiera otro medio que permita a terceros publicar contenidos de
              forma independiente en la página web del prestador. No obstante y
              en cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE,
              el Prestador se pone a disposición de todos los usuarios,
              autoridades y fuerzas de seguridad, y colaborando de forma activa
              en la retirada o en su caso bloqueo de todos aquellos contenidos
              que pudieran afectar o contravenir la legislación nacional, o
              internacional, derechos de terceros o la moral y el orden
              público. En caso de que el usuario considere que existe en el
              sitio web algún contenido que pudiera ser susceptible de esta
              clasificación, se ruega lo notifique de forma inmediata al
              administrador del sitio web.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Este sitio web ha sido revisado y probado para que funcione
              correctamente. En principio, puede garantizarse el correcto
              funcionamiento los 365 días del año, 24 horas al día. No obstante,
              el prestador no descarta la posibilidad de que existan ciertos
              errores de programación, o que acontezcan causas de fuerza mayor,
              catástrofes naturales, huelgas, o circunstancias semejantes que
              hagan imposible el acceso a la página web.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Si se detectase que ha existido un error en la introducción del
              precio de un artículo, con posterioridad a la recepción de un
              pedido, el prestador se pondrá en contacto con usted lo antes
              posible para informarle de la incidencia, y ofrecerle la opción de
              cancelación o mantenimiento en las condiciones correctas. La
              remisión de confirmación automática no valida condiciones de
              precio erróneas. En caso de cancelación le será reintegrada
              cualquier cantidad que hubiese sido abonada. Sin su expresa
              conformidad a las condiciones de precio correctas, no se
              procederá a dar curso al envío.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              4. Propiedad intelectual e industrial
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El sitio web, incluyendo a título enunciativo pero no limitativo su
              programación, edición, compilación y demás elementos necesarios
              para su funcionamiento, los diseños, logotipos, texto y/o
              gráficos, es propiedad del Prestador o, en su caso, dispone de
              licencia o autorización expresa por parte de los autores. Todos los
              contenidos del sitio web se encuentran debidamente protegidos por
              la normativa de propiedad intelectual e industrial, así como
              inscritos en los registros públicos correspondientes.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Independientemente de la finalidad para la que fueran destinados,
              la reproducción total o parcial, uso, explotación, distribución y
              comercialización, requiere en todo caso de la autorización escrita
              previa por parte del Prestador. Cualquier uso no autorizado
              previamente por parte del Prestador será considerado un
              incumplimiento grave de los derechos de propiedad intelectual o
              industrial del autor.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Los diseños, logotipos, texto y/o gráficos ajenos al prestador y que
              pudieran aparecer en el sitio web, pertenecen a sus respectivos
              propietarios, siendo ellos mismos responsables de cualquier
              posible controversia que pudiera suscitarse respecto a los mismos.
              En todo caso, el Prestador cuenta con la autorización expresa y
              previa por parte de los mismos.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Prestador reconoce a favor de sus titulares los correspondientes
              derechos de propiedad industrial e intelectual, no implicando su
              sola mención o aparición en el sitio web la existencia de derechos
              o responsabilidad alguna del Prestador sobre los mismos, como
              tampoco respaldo, patrocinio o recomendación por parte del mismo.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Para realizar cualquier tipo de observación respecto a posibles
              incumplimientos de los derechos de propiedad intelectual o
              industrial, así como sobre cualquiera de los contenidos del sitio
              web, puede hacerlo dirigiendo una comunicación por escrito a la
              dirección fiscal o a la dirección de correo electrónico que
              figuran al principio de este documento en el apartado
              Identificación del prestador.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              5. Condiciones de acceso y uso
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              En general, el acceso a la información de los distintos productos
              y servicios existentes en el sitio web, así como a su navegación
              será libre y gratuita, no exigiéndose por tanto a los Usuarios el
              pertinente registro con la consecuente entrega de sus datos
              personales, ni la utilización de claves o contraseñas. No obstante
              lo anterior, determinadas secciones del sitio web requerirán con
              carácter previo la inclusión de datos en formularios o el
              pertinente registro.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Para hacer uso de los Servicios los menores de edad, deberán
              obtener previamente permiso y/o autorización de sus padres,
              tutores o representantes legales, quienes serán considerados
              responsables de todos los actos realizados por los menores a su
              cargo. La plena responsabilidad en la determinación de los
              concretos contenidos y Servicios a los que acceden los menores de
              edad corresponde a los mayores a cuyo cargo se encuentran. Como
              Internet hace posible el acceso a contenidos que pueden no ser
              apropiados para menores, se informa a los Usuarios de que existen
              mecanismos, en particular programas informáticos de filtro y
              bloqueo, que permiten limitar los contenidos disponibles y, aunque
              no resultan infalibles, son de especial utilidad para controlar y
              restringir los materiales a los que pueden acceder los menores.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Usuario se compromete a hacer un uso adecuado y lícito del
              sitio web así como de los contenidos, productos y servicios, de
              conformidad con la legislación aplicable en cada momento, las
              presentes Condiciones Generales de Uso del sitio web, la moral y
              buenas costumbres generalmente aceptadas y el orden público.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              El Usuario deberá abstenerse de:
            </p>
            <ol className="list-decimal list-inside space-y-2 font-body text-neutral-700 mb-4 text-left">
              <li>
                Hacer un uso no autorizado o fraudulento del sitio web y/o de
                los contenidos con fines o efectos ilícitos, prohibidos en las
                presentes Condiciones, lesivos de los derechos e intereses de
                terceros, o que de cualquier forma puedan dañar, inutilizar,
                sobrecargar, deteriorar o impedir la normal utilización de los
                servicios, los equipos informáticos o los documentos, archivos y
                toda clase de contenidos almacenados en cualquier equipo
                informático.
              </li>
              <li>
                Acceder o intentar acceder a recursos o áreas restringidas del
                sitio web, sin cumplir las condiciones exigidas para dicho
                acceso.
              </li>
              <li>
                Provocar daños en los sistemas físicos o lógicos del sitio web,
                de sus proveedores o de terceros.
              </li>
              <li>
                Introducir o difundir en la red virus informáticos o
                cualesquiera otros sistemas físicos o lógicos que sean
                susceptibles de provocar daños en los sistemas físicos o lógicos
                del PRESTADOR, de sus proveedores o de terceros.
              </li>
              <li>
                Intentar acceder, utilizar y/o manipular los datos del
                PRESTADOR, terceros proveedores y otros Usuarios.
              </li>
              <li>
                Reproducir o copiar, distribuir, permitir el acceso del público
                a través de cualquier modalidad de comunicación pública,
                transformar o modificar los contenidos, a menos que se cuente con
                la autorización del titular de los correspondientes derechos o
                ello resulte legalmente permitido.
              </li>
              <li>
                Suprimir, ocultar o manipular las notas sobre derechos de
                propiedad intelectual o industrial y demás datos identificativos
                de los derechos de EL PRESTADOR o de terceros incorporados a los
                contenidos, así como los dispositivos técnicos de protección o
                cualesquiera mecanismos de información que puedan insertarse en
                los contenidos.
              </li>
              <li>
                Obtener e intentar obtener los contenidos empleando para ello
                medios o procedimientos distintos de los que, según los casos,
                se hayan puesto a su disposición a este efecto o se hayan
                indicado expresamente en las páginas web donde se encuentren los
                contenidos o, en general, de los que se empleen habitualmente en
                Internet por no entrañar un riesgo de daño o inutilización del
                sitio web y/o de los contenidos.
              </li>
              <li>
                En particular, y a título meramente indicativo y no exhaustivo,
                el Usuario se compromete a no transmitir, difundir o poner a
                disposición de terceros informaciones, datos, contenidos,
                mensajes, gráficos, dibujos, archivos de sonido y/o imagen,
                fotografías, grabaciones, software y, en general, cualquier
                clase de material que: (a) De cualquier forma, sea contrario,
                menosprecie o atente contra los derechos fundamentales y las
                libertades públicas reconocidas constitucionalmente, en los
                Tratados internacionales y en el resto de la legislación. (b)
                Induzca, incite o promueva actuaciones delictivas, denigratorias,
                difamatorias, infamantes, violentas o, en general, contrarias a la
                ley, a la moral y buenas costumbres generalmente aceptadas o al
                orden público. (c) Induzca, incite o promueva actuaciones,
                actitudes o pensamientos discriminatorios por razón de sexo,
                raza, religión, creencias, edad o condición. (d) Incorpore,
                ponga a disposición o permita acceder a productos, elementos,
                mensajes y/o servicios delictivos, violentos, ofensivos, nocivos,
                degradantes o, en general, contrarios a la ley, a la moral y a
                las buenas costumbres generalmente aceptadas o al orden público.
                (e) Induzca o pueda inducir a un estado inaceptable de ansiedad o
                temor. (f) Induzca o incite a involucrarse en prácticas
                peligrosas, de riesgo o nocivas para la salud y el equilibrio
                psíquico.
              </li>
            </ol>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              6. Modificación y terminación de servicios
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Si bien, en principio, la duración de este sitio es indeterminada,
              el Prestador se reserva el derecho a modificar, suspender o dar por
              terminada la prestación de sus servicios, en todo o en parte, en
              cualquier momento, y sin necesidad de preaviso a los Usuarios del
              mismo.
            </p>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Asimismo, el Prestador podrá modificar en cualquier momento las
              Condiciones de uso de este sitio web.
            </p>

            <h2 className="font-heading font-bold text-2xl text-neutral-900 mt-10 mb-4 text-center">
              7. Legislación y jurisdicción aplicable
            </h2>
            <p className="font-body text-neutral-700 leading-relaxed mb-4 text-center text-justify">
              Las presentes Condiciones Generales quedan sujetas al ordenamiento
              jurídico español, sometiendo cualquier controversia a los
              juzgados y tribunales correspondientes al municipio de
              Pontecesures.
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
