import React from 'react';
import { Container } from '@/components/Container';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-[10em]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-[4em] font-semibold tracking-tight leading-none mb-12">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
            </h2>
            <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-10">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <button className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-xl font-semibold hover:bg-brand-black hover:text-brand-white transition-colors">
              Leer ons kennen
            </button>
          </div>
          
          <div className="relative aspect-[4/5] bg-brand-taupe rounded-3xl overflow-hidden w-full max-w-lg mx-auto">
             <div className="absolute inset-0 flex items-center justify-center text-brand-black/50 font-medium">
               Image / Video Placeholder
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
