"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <div
          className="absolute h-[150%] w-full top-[-25%]"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground shadow-lg">
          El error que más caro se paga es el que nadie te cuenta.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
          Una mirada honesta sobre trading, riesgo y decisiones.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <a href="#comprar">Quiero el Libro</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
