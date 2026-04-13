import React from 'react';

export function Clients() {
  return (
    <section className="py-12 overflow-hidden border-y border-brand-black/10 bg-brand-white">
      <div className="flex w-[200%] md:w-[150%] animate-pulse">
        {/* Simple scaffold for marque */}
        <div className="flex w-1/2 justify-around items-center opacity-50 px-8">
          <div className="text-2xl font-bold">LOGO 1</div>
          <div className="text-2xl font-bold">LOGO 2</div>
          <div className="text-2xl font-bold">LOGO 3</div>
          <div className="text-2xl font-bold">LOGO 4</div>
          <div className="text-2xl font-bold">LOGO 5</div>
        </div>
        <div className="flex w-1/2 justify-around items-center opacity-50 px-8">
          <div className="text-2xl font-bold">LOGO 1</div>
          <div className="text-2xl font-bold">LOGO 2</div>
          <div className="text-2xl font-bold">LOGO 3</div>
          <div className="text-2xl font-bold">LOGO 4</div>
          <div className="text-2xl font-bold">LOGO 5</div>
        </div>
      </div>
    </section>
  );
}
