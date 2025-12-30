import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Presentation() {
  const bookImage = PlaceHolderImages.find((p) => p.id === 'book-cover');

  return (
    <section id="comprar" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="flex justify-center">
            {bookImage && (
              <div className="relative">
                 <div className="absolute -inset-2 bg-gradient-to-br from-primary/50 to-transparent rounded-lg blur-xl"></div>
                <Image
                  src={bookImage.imageUrl}
                  alt={bookImage.description}
                  width={400}
                  height={600}
                  className="relative rounded-lg shadow-2xl object-cover transform transition-transform duration-500 hover:rotate-2 hover:scale-105"
                  data-ai-hint={bookImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
              Presentamos: <span className="text-primary">Mente Bursátil</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Esta no es otra guía de análisis técnico. Es una inmersión profunda en la arquitectura de tu mente como inversor. A través de sus páginas, desmantelarás las barreras psicológicas que sabotean tu éxito y construirás, ladrillo a ladrillo, una fortaleza mental inquebrantable.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Aprenderás a navegar la volatilidad con calma, a tomar decisiones con claridad y a ejecutar tu plan con una disciplina de acero.
            </p>
            <div className="mt-8 text-center md:text-left">
              <p className="text-5xl font-bold text-primary font-headline">$29.99</p>
              <p className="text-sm text-muted-foreground mt-1">Pago único. Edición digital.</p>
            </div>
            <Button size="lg" className="mt-8 w-full md:w-auto">
              Comprar Ahora y Transforma tu Trading
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
