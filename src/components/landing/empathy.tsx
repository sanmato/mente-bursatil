export function Empathy() {
  const painPoints = [
    "¿La ansiedad te hace cerrar operaciones ganadoras demasiado pronto?",
    "¿El miedo a perder te paraliza y te impide tomar oportunidades claras?",
    "¿La euforia de una racha ganadora te lleva a tomar riesgos imprudentes?",
    "¿Repites los mismos errores una y otra vez, a pesar de saber que no deberías?",
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Si te suena familiar, no estás solo.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          El mercado es un campo de batalla emocional. Tu mayor oponente no es el gráfico, eres tú mismo.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {painPoints.map((point, index) => (
            <div key={index} className="p-8 bg-card rounded-lg border border-border/20 shadow-sm transition-transform hover:scale-105 duration-300">
              <p className="text-lg font-medium text-foreground/90">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
