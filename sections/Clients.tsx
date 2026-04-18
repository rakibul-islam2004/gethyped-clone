'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const clients = [
  { id: 'bullit-digital',     name: 'Bullit Digital',     logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg' },
  { id: 'morssinkhof',        name: 'Morssinkhof',        logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg' },
  { id: 'salontopper',        name: 'Salontopper',        logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg' },
  { id: 'seesing-flex',       name: 'Seesing Flex',       logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg' },
  { id: 'graafschap-college', name: 'Graafschap College', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg' },
  { id: 'fides',              name: 'Fides',              logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg' },
  { id: 'srhk',               name: 'SRHK',               logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg' },
  { id: 'knltb',              name: 'KNLTB',              logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg' },
  { id: 'tho',                name: 'THO',                logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg' },
  { id: 'de-talententuin',    name: 'De Talententuin',    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg' },
  { id: 'zclv',               name: 'ZCLV',               logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg' },
];

export function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef(0);
  const xToRef = useRef<gsap.QuickToFunc | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const itemValuesRef = useRef<number[]>([]);
  const observerRef = useRef<Observer | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = (_time: number, deltaTime: number) => {
      totalRef.current -= deltaTime / 10;
      xToRef.current?.(totalRef.current);
    };

    const setup = () => {
      observerRef.current?.kill();
      tlRef.current?.kill();
      gsap.ticker.remove(tick);
      gsap.set(track, { x: 0 });
      totalRef.current = 0;

      const cards = Array.from(track.querySelectorAll('.client-card')) as HTMLDivElement[];
      const count = cards.length / 2;
      const half = track.scrollWidth / 2;
      if (!half) return;

      gsap.set(cards, { rotate: 0, xPercent: 0, yPercent: 0, scale: 1 });

      xToRef.current = gsap.quickTo(track, 'x', {
        duration: 0.5,
        ease: 'power3',
        modifiers: { x: gsap.utils.unitize(gsap.utils.wrap(-half, 0)) },
      });

      itemValuesRef.current = Array.from({ length: count }, () => (Math.random() - 0.5) * 20);

      tlRef.current = gsap.timeline({ paused: true }).to(cards, {
        rotate: (i) => itemValuesRef.current[i % count],
        xPercent: (i) => itemValuesRef.current[i % count],
        yPercent: (i) => itemValuesRef.current[i % count],
        scale: 0.95,
        duration: 0.5,
        ease: 'back.inOut(3)',
      });

      observerRef.current = Observer.create({
        target: track,
        type: 'pointer,touch',
        onPress: () => tlRef.current?.play(),
        onDrag: (self) => { totalRef.current += self.deltaX; xToRef.current?.(totalRef.current); },
        onRelease: () => tlRef.current?.reverse(),
        onStop: () => tlRef.current?.reverse(),
      });

      gsap.ticker.add(tick);
    };

    const id = setTimeout(setup, 100);
    const ro = new ResizeObserver(setup);
    ro.observe(track);

    return () => {
      clearTimeout(id);
      ro.disconnect();
      observerRef.current?.kill();
      gsap.ticker.remove(tick);
      tlRef.current?.kill();
    };
  }, []);

  const all = [...clients, ...clients];

  return (
    <section className="section_clients">
      <div className="section-padding-128px">
        <div className="padding-global">
          <div className="container-col-12">

            {/* Heading — exact from original HTML */}
            <div className="padding-bottom padding-72px">
              <div className="max-width-640px">
                <h2 className="heading-m">These brands got hyped.</h2>
              </div>
            </div>

            {/* Marquee — exact class names from original HTML */}
            <div className="mwg_effect008 w-dyn-list">
              <div ref={trackRef} role="list" className="container is-clients-marquee w-dyn-items">
                {all.map((client, i) => (
                  <div key={`${client.id}-${i}`} role="listitem" className="card w-dyn-item">
                    <div className="client-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="client-logo-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider — exact from original HTML */}
      <div className="padding-global">
        <div className="section-divider" />
      </div>
    </section>
  );
}
