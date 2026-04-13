import React from 'react';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-brand-taupe py-20 lg:py-32 rounded-t-[3em] mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 flex flex-col justify-between">
            <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter hover:text-brand-red transition-colors">
              GetHyped.
            </h2>
            <div className="mt-8 text-xl font-medium max-w-sm">
              Ready to create content that actually gets results?
            </div>
          </div>
          
          <div className="md:col-span-4 gap-8 flex flex-col">
            <div className="flex flex-col space-y-4">
              <h4 className="font-semibold text-lg text-brand-grey">Menu</h4>
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Expertises</a>
              <a href="#" className="hover:underline">Work</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
            
            <div className="flex flex-col space-y-4 pt-12">
              <h4 className="font-semibold text-lg text-brand-grey">Contact</h4>
              <a href="#" className="hover:underline">hello@gethyped.nl</a>
              <a href="#" className="hover:underline">+31 6 12345678</a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-brand-black/10 flex flex-col md:flex-row justify-between text-sm text-brand-grey">
          <div>© {new Date().getFullYear()} Get Hyped. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
