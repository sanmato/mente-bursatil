import { MentalFortitudeIcon } from './icons/mental-fortitude-icon';
import { StrategicClarityIcon } from './icons/strategic-clarity-icon';
import { EmotionalDisciplineIcon } from './icons/emotional-discipline-icon';
import { MarketVisionIcon } from './icons/market-vision-icon';

const benefits = [
  {
    icon: MentalFortitudeIcon,
    title: 'Fortaleza Mental',
    description: 'Transforma la duda en confianza. Opera desde un estado de poder, no de pánico.',
  },
  {
    icon: StrategicClarityIcon,
    title: 'Claridad Estratégica',
    description: 'Define y ejecuta tu plan con precisión quirúrgica, inmune al ruido del mercado.',
  },
  {
    icon: EmotionalDisciplineIcon,
    title: 'Disciplina Emocional',
    description: 'Domina el miedo y la codicia. Conviértete en el maestro de tus impulsos.',
  },
  {
    icon: MarketVisionIcon,
    title: 'Visión de Mercado',
    description: 'Aprende a interpretar el sentimiento del mercado, no solo los precios.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
          Lo que Forjarás
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Más que un libro, es un entrenamiento. Desarrollarás habilidades que te servirán para toda la vida, dentro y fuera del mercado.
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
