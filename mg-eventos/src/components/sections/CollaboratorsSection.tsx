import { Logos3 } from "@/components/ui/logos3";

const collaborators = [
  { id: "c1", description: "Bodas.net", text: "Bodas.net" },
  { id: "c2", description: "Casamientos", text: "Casamientos.es" },
  { id: "c3", description: "Eventbrite", text: "Eventbrite" },
  { id: "c4", description: "Feria de Galicia", text: "Feria de Galicia" },
  { id: "c5", description: "Verbenas Galicia", text: "Verbenas Galicia" },
  { id: "c6", description: "Ourense Eventos", text: "Ourense Eventos" },
  { id: "c7", description: "Vigo Música", text: "Vigo Música" },
  { id: "c8", description: "A Coruña Fiestas", text: "A Coruña Fiestas" },
];

export function CollaboratorsSection() {
  return (
    <Logos3
      heading="Con la confianza de organizadores de toda Galicia"
      subheading="Trabajamos con los mejores organizadores de eventos, fincas y espacios de celebración de Galicia y norte de Portugal"
      logos={collaborators}
    />
  );
}
