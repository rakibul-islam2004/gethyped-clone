import React from 'react';
import { Container } from '@/components/Container';

export function Services() {
  const expertises = [
    { title: 'Social strategy', desc: 'Slimme strategie. Sterke start.', color: 'bg-brand-white', text: 'text-brand-black' },
    { title: 'Content creation', desc: 'Content die opvalt en raakt.', color: 'bg-brand-pink', text: 'text-brand-black' },
    { title: 'Activation', desc: 'Zichtbaar waar en wanneer het telt.', color: 'bg-brand-green', text: 'text-brand-black' },
    { title: 'Data', desc: 'Inzichten die impact maken.', color: 'bg-brand-blue', text: 'text-brand-white' },
  ];

  return (
    <section id="expertises" className="py-24 lg:py-32 relative">
      <Container>
        <div className="flex flex-col gap-10">
          {expertises.map((exp, index) => (
            <div 
              key={index} 
              className={`sticky top-[10vh] min-h-[70vh] rounded-[2.5em] p-10 lg:p-20 flex flex-col justify-between ${exp.color} ${exp.text} shadow-sm border border-brand-black/5`}
              style={{ top: `calc(10vh + ${index * 2}rem)` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="uppercase text-sm font-bold tracking-widest border border-current rounded-full px-4 py-1 mb-6 inline-block">Expertise</span>
                  <h2 className="text-5xl lg:text-[6em] font-semibold tracking-tight">{exp.title}</h2>
                </div>
                <div className="text-5xl lg:text-[6em] font-semibold opacity-50">
                  0{index + 1}
                </div>
              </div>
              
              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="aspect-video bg-brand-black/10 rounded-2xl"></div>
                <div className="flex flex-col justify-end">
                  <h3 className="text-3xl font-semibold mb-4">{exp.desc}</h3>
                  <button className="self-start mt-8 bg-brand-black/10 backdrop-blur-md px-6 py-3 rounded-xl font-medium">
                    Meer over {exp.title.toLowerCase()}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
