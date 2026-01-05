import { MentalFortitudeIcon } from './icons/mental-fortitude-icon';
import { StrategicClarityIcon } from './icons/strategic-clarity-icon';
import { EmotionalDisciplineIcon } from './icons/emotional-discipline-icon';
import { MarketVisionIcon } from './icons/market-vision-icon';

const benefits = [
  {
    icon: MentalFortitudeIcon,
    title: 'Construcción de criterio propio.',
    description: 'Aprendés a dejar de copiar decisiones ajenas y a desarrollar una lógica interna para decidir, sostener y salir de una operación.',
  },
  {
    icon: StrategicClarityIcon,
    title: 'Gestión emocional después de perder',
    description: 'No se centra en evitar pérdidas, sino en que haces después: Cómo pensas, como reaccionás, y como evitar que una caida arrastre a la siguiente.',
  },
  {
    icon: EmotionalDisciplineIcon,
    title: 'Disciplina y Ejecución',
    description: 'Entrena la capacidad de ejecutar un plan aún cuando el mercado incomoda. Menos reacción. Más decisión consciente.',
  },
  {
    icon: MarketVisionIcon,
    title: 'Mentalidad de Largo Plazo',
    description: 'El foco no está en la operación aislada, sino en la persona que operás día tras día dentro del mercado.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
          Enfoque psicológico real.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          El libro trabaja sobre los mecanismos mentales que intervienen al operar: miedo, euforia, impulsividad, negación del error y pérdida de criterio.
        </p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-card border border-border/20">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
