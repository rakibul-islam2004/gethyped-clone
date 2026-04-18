'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = cardsRef.current.filter(Boolean);
    const n = cards.length;
    let active = 0;

    // Scatter cards on load
    cards.forEach(c => {
      gsap.set(c, {
        xPercent: (Math.random() - 0.5) * 10,
        yPercent: (Math.random() - 0.5) * 10,
        rotation: (Math.random() - 0.5) * 20,
      });
    });

    function reset(i: number) {
      if (!cards[i]) return;
      gsap.to(cards[i], {
        xPercent: (Math.random() - 0.5) * 10,
        yPercent: (Math.random() - 0.5) * 10,
        rotation: (Math.random() - 0.5) * 20,
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)',
      });
    }

    function activate(i: number) {
      // Snap hovered card straight + scale up
      gsap.to(cards[i], {
        xPercent: 0, yPercent: 0, rotation: 0, scale: 1.1,
        duration: 0.8, ease: 'elastic.out(1, 0.75)',
      });
      // Push other cards away proportionally
      cards.forEach((c, idx) => {
        if (idx === i) return;
        gsap.to(c, {
          xPercent: 24 / (idx - i),
          duration: 0.8, ease: 'elastic.out(1, 0.75)',
        });
      });
    }

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const portion = Math.ceil(((e.clientX - rect.left) / rect.width) * n);
      if (portion === active || portion < 1 || portion > n) return;
      if (active) reset(active - 1);
      active = portion;
      activate(active - 1);
    };

    const onLeave = () => {
      if (active) reset(active - 1);
      active = 0;
      gsap.to(cards, { xPercent: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)' });
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const ref = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <header className="section_hero">
      {/* Headline — inside page padding */}
      <div className="padding-global">
        <div className="container-col-12">
          <div className="hero text-wrap-auto">
            <div className="hero-title">
              <h1 className="heading-xxl">
                Get Hyped. Get Noticed. Get Results.
              </h1>
              <div className="max-width-60ch">
                <p className="paragraph-l">
                  Klaar met gokken op content <br />die niets oplevert?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards row — full viewport width, outside page padding */}
      <div className="mwg_effect025 px:2 lg:px-4">
        <div className="container is-mwg_effect025" ref={containerRef}>

          {/* Card 1 — Blue stat */}
          <div className="results-card theme-blue" ref={ref(0)}>
            <div className="results-card_content">
              <div className="results-card_title">10M+</div>
              <div className="results-card_body">
                <h2 className="results-card_subtitle">Organische views</h2>
                <div className="results-card_divider" />
                <p className="results-card_paragraph">Groei door slimme content</p>
              </div>
            </div>
          </div>

          {/* Card 2 — Video */}
          <div className="results-card" ref={ref(1)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif"
              alt="" loading="eager" className="image"
            />
            <video
              muted loop playsInline autoPlay className="video"
              src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
            />
          </div>

          {/* Card 3 — Green stat */}
          <div className="results-card theme-green" ref={ref(2)}>
            <div className="results-card_content">
              <div className="results-card_title">30+</div>
              <div className="results-card_body">
                <h2 className="results-card_subtitle">Merken geholpen</h2>
                <div className="results-card_divider" />
                <p className="results-card_paragraph">Van start-up tot multinational</p>
              </div>
            </div>
          </div>

          {/* Card 4 — Video (desktop only) */}
          <div className="results-card hide-tablet-mobile" ref={ref(3)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif"
              alt="" loading="lazy" className="image"
            />
            <video
              muted loop playsInline autoPlay className="video"
              src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
            />
          </div>

        </div>
      </div>
    </header>
  );
}
