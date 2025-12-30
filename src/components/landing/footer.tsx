import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="font-headline text-lg text-muted-foreground">
            "El mayor riesgo no es la volatilidad del mercado, sino la inestabilidad de la mente."
          </p>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mente Bursátil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
