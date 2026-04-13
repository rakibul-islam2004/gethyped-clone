import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Projects } from '@/sections/Projects';
import { Clients } from '@/sections/Clients';
import { CTA } from '@/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <CTA />
    </>
  );
}
