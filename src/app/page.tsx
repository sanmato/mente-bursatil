import { Author } from '@/components/landing/author';
import { Benefits } from '@/components/landing/benefits';
import { CtaSection } from '@/components/landing/cta-section';
import { Empathy } from '@/components/landing/empathy';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Presentation } from '@/components/landing/presentation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Empathy />
        <Presentation />
        <Benefits />
        <Author />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
