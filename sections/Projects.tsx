import React from 'react';
import { Container } from '@/components/Container';

export function Projects() {
  const projects = [
    { title: 'Van nul naar vol, binnen 3 weken', client: 'Bullit', bg: 'bg-brand-red' },
    { title: 'Zacht in smaak, sterk in beeld', client: 'Roasta', bg: 'bg-brand-blue' },
    { title: 'Content die écht smaakt (en raakt)', client: 'Loco', bg: 'bg-[#ff9dcb]' }
  ];

  return (
    <section id="work" className="py-24 lg:py-[10em]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl lg:text-[7em] font-semibold tracking-tighter leading-none mb-6">
              Content dat scoort.
            </h2>
            <p className="text-xl lg:text-2xl font-medium">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
          </div>
          <button className="border-2 border-brand-black px-8 py-4 rounded-xl font-semibold whitespace-nowrap hover:bg-brand-black hover:text-brand-white transition-colors">
            Bekijk al ons werk
          </button>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.bg} rounded-[3em] p-10 md:p-16 flex flex-col md:flex-row gap-10 text-brand-white overflow-hidden relative group cursor-pointer`}>
              <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-brand-black/20 rounded-2xl">
                 {/* Video Placeholder */}
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-end">
                 <h3 className="text-4xl lg:text-5xl font-semibold mb-6">{project.title}</h3>
                 <span className="bg-brand-black/20 self-start px-4 py-2 rounded-full font-medium">{project.client}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
