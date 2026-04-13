import React from 'react';
import { Container } from '@/components/Container';

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-[10em]">
      <Container>
        <div className="bg-brand-taupe rounded-[3em] p-10 lg:p-24 flex flex-colItems-center text-center">
          <h2 className="text-5xl lg:text-[6em] font-semibold tracking-tighter mb-8 leading-none">
            Laat je merk<br/>in beweging brengen!
          </h2>
          <p className="text-xl lg:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            Of stuur ons gewoon een DM. Wat jij wil.
          </p>
          <div className="flex gap-4 justify-center">
             <button className="bg-brand-black text-brand-white px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform">
               Get Results
             </button>
             <button className="bg-brand-white text-brand-black px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform">
               Contact Us
             </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
