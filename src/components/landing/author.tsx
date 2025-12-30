import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Author() {
  const authorImage = PlaceHolderImages.find((p) => p.id === 'author-photo');

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center md:col-span-1">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt={authorImage.description}
                width={250}
                height={250}
                className="rounded-full shadow-2xl object-cover ring-4 ring-primary/20"
                data-ai-hint={authorImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Sobre el Autor
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Después de una década en las trincheras de los mercados financieros y de quemar varias cuentas, entendí una verdad fundamental: la estrategia más brillante es inútil si la mente que la ejecuta es frágil.
              </p>
              <p>
                Pasé años no solo estudiando los mercados, sino también la psicología del rendimiento, la neurociencia y las filosofías estoicas. 'Mente Bursátil' es la síntesis de ese viaje: un manual práctico para construir la infraestructura mental necesaria para prosperar en el caos del trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
