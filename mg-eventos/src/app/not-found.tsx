import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-accent font-heading font-extrabold text-8xl md:text-9xl">
          404
        </p>
        <h1 className="font-heading font-bold text-2xl md:text-3xl text-white mt-4">
          Página no encontrada
        </h1>
        <p className="text-neutral-400 font-body mt-4 text-lg">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-secondary hover:bg-secondary-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="bg-transparent border-2 border-secondary text-secondary-light hover:bg-secondary hover:text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
