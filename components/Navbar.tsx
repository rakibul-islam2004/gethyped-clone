'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: 'Expertises', href: '/expertises' },
    { title: 'Work', href: '/work' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed inset-[0%_0%_auto] z-[999] w-full transition-transform duration-300 ease-in-out bg-transparent
      ${isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="flex justify-between items-center w-full max-w-[96em] h-[5.6em] lg:h-[6em] mx-auto px-[1em] md:px-[1.2em] lg:px-[1.6em]">
        
        <Link
          href="/"
          aria-label="Home link"
          className="relative z-[1001] h-[3em] lg:h-[3.8em] inline-block transition-opacity duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none">
            <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC"></path>
            <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black"></path>
            <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white"></path>
            <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white"></path>
            <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white"></path>
            <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white"></path>
            <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white"></path>
            <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black"></path>
            <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black"></path>
            <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black"></path>
          </svg>
        </Link>

        {/* navbar_menu: The unified menu container */}
        <div 
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-brand-white rounded-[0.8em] h-[2.8em] p-[0.4em] gap-[0.4em] z-[998] overflow-hidden"
        >
          {/* Menu Links */}
          <div className={`${isMobileMenuOpen ? 'flex flex-col gap-5 text-center text-[2em] font-semibold items-center z-10 transition-all duration-400 [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1.0)]' : 'flex flex-row gap-[0.4em] h-full z-10 relative'} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'lg:opacity-100 lg:translate-y-0 lg:scale-100 opacity-0 -translate-y-4 scale-95'}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`button-color-swoosh is-menu w-inline-block ${isMobileMenuOpen ? 'my-2' : ''}`}
                style={isMobileMenuOpen ? { fontSize: '1.6em' } : {}}
              >
                {!isMobileMenuOpen && (
                  <span className="button-color-swoosh_bg">
                    <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first"></span>
                    <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second"></span>
                  </span>
                )}
                <span data-text={link.title} className={isMobileMenuOpen ? 'button-color-swoosh_inner is-mobile' : 'button-color-swoosh_inner'}>
                  <span className="button-color-swoosh_text">{link.title}</span>
                </span>
              </Link>
            ))}
          </div>

        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="fixed inset-0 z-[1000] lg:hidden"
              aria-modal="true"
              role="dialog"
              aria-label="Menu"
            >
              <div className="absolute inset-0 z-0 bg-[var(--theme---background)] pointer-events-none" />

              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {/* navbar_menu-bg-back — matches gethyped.nl: slide from -100% Y, no Z-rotation */}
                <motion.div
                  aria-hidden
                  className="absolute z-0 rounded-[1em] bg-[var(--theme---background)]"
                  style={{
                    width: '125%',
                    height: '118svh',
                    left: '-12.5%',
                    top: '0.75em',
                    transformOrigin: '50% 0%',
                  }}
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                {/* navbar_menu-bg — pink sheet: -100% Y + rotateZ(20deg) → rest (Webflow reference) */}
                <motion.div
                  className="absolute z-[1] bg-[var(--color-brand-pink)] rounded-[1em] shadow-[0_0.5em_2.5em_rgba(0,0,0,0.08)]"
                  style={{
                    width: '125%',
                    height: '118svh',
                    left: '-12.5%',
                    top: '0.75em',
                    transformOrigin: '50% 0%',
                    transformStyle: 'preserve-3d',
                  }}
                  initial={{ y: '-100%', rotateZ: 20 }}
                  animate={{ y: 0, rotateZ: 0 }}
                  exit={{ y: '-100%', rotateZ: 20 }}
                  transition={{
                    duration: 0.78,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* Content — comes in after bg reveal */}
              <motion.div
                className="relative z-[2] flex min-h-[100svh] flex-1 flex-col px-[1em] md:px-[1.2em] lg:px-[1.6em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.12,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Spacer to safely replace original header height */}
                <div className="flex min-h-[5.6em] w-full shrink-0 items-center justify-between pointer-events-none" aria-hidden="true" />

                <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-[1rem]">
                  <nav className="flex w-full flex-col items-center gap-[0.55em]" aria-label="Primary">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, y: '-5em', scale: 0 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: '-2em', scale: 0.96 }}
                        transition={{
                          delay: 0.1 + i * 0.05,
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ transformOrigin: '50% 50%' }}
                        className="flex w-full justify-center"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="button-color-swoosh is-menu is-mobile-overlay w-inline-block"
                        >
                          <span className="button-color-swoosh_bg">
                            <span
                              style={{ '--index': 0 } as React.CSSProperties}
                              className="button-color-swoosh_bg-inner is-first"
                            />
                            <span
                              style={{ '--index': 1 } as React.CSSProperties}
                              className="button-color-swoosh_bg-inner is-second"
                            />
                          </span>
                          <span data-text={link.title} className="button-color-swoosh_inner">
                            <span className="button-color-swoosh_text">{link.title}</span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="flex shrink-0 justify-center pb-[max(3rem,env(safe-area-inset-bottom,0px))] pt-[1rem]">
                  <motion.div
                    initial={{ opacity: 0, y: '120%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '120%' }}
                    transition={{
                      delay: 0.14 + navLinks.length * 0.05,
                      duration: 0.68,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: '50% 50%' }}
                  >
                    <Link
                      href="#results"
                      className="button-default is-nav-mobile w-inline-block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="button-default__inner" style={{ borderRadius: '0.75em' }}>
                        <span className="button-default__background is-nav-mobile" style={{ borderRadius: '0.75em' }}></span>
                        <span className="button-default__text font-semibold text-[var(--color-brand-white)]">
                          Get Results
                        </span>
                        <div
                          className="button-default__icon !bg-[var(--color-brand-white)] !text-[1.15rem] leading-none text-[var(--color-brand-black)]"
                          aria-hidden
                        >
                          <span className="relative top-px">🔥</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`relative lg:hidden z-[1001] flex h-[3.5em] w-[3.5em] items-center justify-center rounded-[0.75em] transition-colors duration-300 max-lg:[transition-property:color,background-color,transform,opacity] ${
            isMobileMenuOpen ? 'bg-[var(--color-brand-white)]' : 'bg-[var(--color-brand-pink)]'
          }`}
          style={{ boxShadow: 'none' }}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="relative h-5 w-5">
            {/* Top Line */}
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 m-auto block h-[2px] w-5 bg-[var(--color-brand-black)]"
            />
            {/* Bottom Line */}
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 m-auto block h-[2px] w-5 bg-[var(--color-brand-black)]"
            />
          </div>
        </motion.button>

        {/* hide-tablet-mobile: Desktop CTA */}
        <div className="hide-tablet-mobile hidden lg:block z-[1000]">
           <Link href="#results" className="button-default is-nav w-inline-block">
              <div className="button-default__inner">
                <span className="button-default__background is-nav"></span>
                <span className="button-default__text font-medium">Get Results</span>
                <div className="button-default__icon text-brand-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 24" fill="none" className="w-[18px]">
                    <path d="M17.49 11.03C17.18 10.64 16.82 10.3 16.48 9.96C15.6 9.17 14.61 8.61 13.77 7.79C11.82 5.88 11.39 2.73 12.63 0.31C11.39 0.61 10.31 1.29 9.38 2.03C5.99 4.75 4.66 9.55 6.25 13.67C6.3 13.8 6.36 13.93 6.36 14.1C6.36 14.39 6.16 14.65 5.9 14.76C5.6 14.89 5.28 14.81 5.04 14.6C4.96 14.54 4.9 14.46 4.85 14.38C3.37 12.51 3.14 9.83 4.13 7.68C1.95 9.46 0.76 12.47 0.93 15.31C1.01 15.96 1.09 16.62 1.31 17.27C1.49 18.05 1.84 18.84 2.24 19.53C3.65 21.79 6.1 23.42 8.72 23.74C11.52 24.1 14.52 23.59 16.66 21.65C19.05 19.48 19.89 16.0 18.66 13.02L18.49 12.68C18.22 12.08 17.49 11.03 17.49 11.03ZM13.35 19.27C12.99 19.58 12.39 19.92 11.91 20.05C10.45 20.58 8.99 19.85 8.12 18.98C9.68 18.62 10.61 17.47 10.88 16.3C11.1 15.26 10.69 14.39 10.52 13.39C10.36 12.42 10.38 11.59 10.74 10.69C10.99 11.19 11.25 11.68 11.56 12.08C12.57 13.39 14.15 13.96 14.49 15.74C14.54 15.92 14.57 16.11 14.57 16.3C14.61 17.37 14.14 18.55 13.35 19.27Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
           </Link>
        </div>

      </div>
    </nav>
  );
}
