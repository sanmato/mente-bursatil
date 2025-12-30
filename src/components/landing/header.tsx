import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-headline text-xl font-bold text-foreground">
          Mente Bursátil
        </a>
        <Button asChild>
          <a href="#comprar">Comprar Ahora</a>
        </Button>
      </div>
    </header>
  );
}
