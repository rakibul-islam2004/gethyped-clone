import React from 'react';
import { Container } from '@/components/Container';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-[15em] lg:pb-[10em] overflow-hidden min-h-screen flex items-center">
      <Container className="relative z-10">
        <div className="flex flex-col">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-[8em] font-semibold tracking-tighter leading-[0.95]">
              Get Hyped. Get Noticed. Get Results.
            </h1>
            <p className="mt-8 text-2xl lg:text-[2.5em] font-medium leading-[1.3] max-w-[60ch]">
              Klaar met gokken op content<br />die niets oplevert?
            </p>
          </div>
          
          <div className="mt-20 lg:mt-32 flex flex-col md:flex-row gap-6 relative">
            {/* Stat Cards Scaffold */}
            <div className="bg-brand-blue rounded-3xl p-10 flex flex-col justify-between aspect-square w-full md:w-1/3 -rotate-2">
              <span className="text-6xl font-bold">10M+</span>
              <div>
                <h3 className="text-xl font-bold mt-4">Organische views</h3>
                <p className="mt-2 font-medium">Groei door slimme content</p>
              </div>
            </div>
            
            <div className="bg-brand-grey/20 rounded-3xl overflow-hidden aspect-square w-full md:w-1/3">
              <div className="w-full h-full bg-brand-taupe animate-pulse flex items-center justify-center">
                <span className="text-brand-black/50">Video Placeholder</span>
              </div>
            </div>
            
            <div className="bg-brand-green rounded-3xl p-10 flex flex-col justify-between aspect-square w-full md:w-1/3 rotate-2">
              <span className="text-6xl font-bold">30+</span>
              <div>
                <h3 className="text-xl font-bold mt-4">Merken geholpen</h3>
                <p className="mt-2 font-medium">Van start-up tot multinational</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
