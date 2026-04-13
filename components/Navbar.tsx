import React from 'react';
import { Container } from './Container';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter">
          GetHyped
        </div>
        
        {/* Pill Menu (Desktop) */}
        <div className="hidden md:flex items-center justify-center p-2 rounded-full bg-brand-white/80 backdrop-blur-md shadow-sm gap-2">
          {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 hover:bg-brand-taupe rounded-full transition-colors font-medium">
              {item}
            </a>
          ))}
        </div>

        {/* CTA / Right Side */}
        <div className="hidden md:flex">
          <button className="bg-brand-black text-brand-white px-6 py-3 rounded-xl font-semibold">
            Get Results
          </button>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <div className="space-y-1.5 cursor-pointer p-2">
            <div className="w-6 h-0.5 bg-brand-black"></div>
            <div className="w-6 h-0.5 bg-brand-black"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
