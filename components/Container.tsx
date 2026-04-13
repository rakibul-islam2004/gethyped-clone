import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    // Max width limits the scaling horizontally mapping Osmo container limits
    // Global page padding is 2.5em approx 10px on mobile to 40px on desktop
    <div className={`w-full max-w-[1920px] mx-auto px-5 md:px-10 lg:px-[2.5em] ${className}`}>
      {children}
    </div>
  );
}
