import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          Tu Transformación Comienza Ahora
        </h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          No dejes que otro día pase reaccionando al mercado. Es hora de tomar el control.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <a href="#comprar">Asegurar Mi Copia</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
