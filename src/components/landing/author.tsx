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
                Fui trader.
              </p>
              <p>
                Operé mercados, estudié estrategias, ejecuté sistemas y repetí errores.
              </p>
              <p>
                Perdí dinero, perdí claridad y entendí que algo que nadie explica cuando empezás: El problema no suele ser la técnica, sino la mente desde la que operás.
              </p>
              <p>
                Después de años dentro del mercado, decidí salir para mirar con distancia lo que realmente ocurre cuando una persona toma decisiones bajo presión.
              </p>
              <p>
                Mente Bursátil nace de ahí.
              </p>
              <p>
                No desde el éxito exhibido, sino desde la experiencia real, los errores repetidos y la necesidad de entender por qué nos saboteamos aún sabiendo que “habría que hacer”.
              </p>
              <p>
                Este libro lo escribe alguien que estuvo ahí y eligió pensar más profundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
