import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export function CollaboratorsSection() {
  const collaborators = [
    { name: "Colaborador 1", placeholder: "L12.png" },
    { name: "Colaborador 2", placeholder: "L4.png" },
    { name: "Colaborador 3", placeholder: "L7.png" },
  ];

  return (
    <Section variant="white">
      <div className="text-center">
        <Heading as="h2" className="text-neutral-900 text-2xl md:text-3xl">
          Nuestros colaboradores
        </Heading>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-10">
          {collaborators.map((c, i) => (
            <div
              key={c.placeholder}
              className="w-40 h-20 bg-neutral-100 rounded-lg flex items-center justify-center animate-fade-in opacity-0"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="text-neutral-400 text-xs font-body">
                {c.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
