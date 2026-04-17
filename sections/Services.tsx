'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertises = [
  {
    num0: '0', num1: '1',
    title: 'Social strategy',
    desc: 'Slimme strategie. Sterke start.',
    body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    linkText: 'Meer over social strategie',
    linkHref: '/expertises/social-strategie',
    theme: 'theme-white',
    video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
  },
  {
    num0: '0', num1: '2',
    title: 'Content creation',
    desc: 'Content die opvalt en raakt.',
    body: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    linkText: 'Meer over content creatie',
    linkHref: '/expertises/content-creatie',
    theme: 'theme-pink',
    video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
  },
  {
    num0: '0', num1: '3',
    title: 'Activation',
    desc: 'Zichtbaar waar en wanneer het telt.',
    body: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    linkText: 'Meer over activatie',
    linkHref: '/expertises/activatie',
    theme: 'theme-green',
    video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
  },
  {
    num0: '0', num1: '4',
    title: 'Data',
    desc: 'Inzichten die impact maken.',
    body: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    linkText: 'Meer over data',
    linkHref: '/expertises/data',
    theme: 'theme-blue',
    video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const slides = gsap.utils.toArray<HTMLDivElement>('.expertise-slide');

    const ctx = gsap.context(() => {
      slides.forEach((slide, index) => {
        const isLast = index === slides.length - 1;
        const contentWrapper = slide.querySelector<HTMLDivElement>('.expertise-wrap');
        const content = slide.querySelector<HTMLDivElement>('.expertise-content');
        if (!contentWrapper || !content) return;

        if (!isLast) {
          // Exact original GSAP: pin wrap, scrub scale + rotationX + random rotationZ
          gsap.to(content, {
            rotationZ: (Math.random() - 0.5) * 10,
            scale: 0.7,
            rotationX: 40,
            ease: 'power1.in',
            scrollTrigger: {
              pin: contentWrapper,
              trigger: slide,
              start: 'top top',
              end: `+=${window.innerHeight}`,
              scrub: true,
              anticipatePin: 1,
            },
          });

          // Fade out last 25% of scroll
          gsap.to(content, {
            autoAlpha: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: slide,
              start: `top+=${window.innerHeight * 0.75} top`,
              end: `top+=${window.innerHeight} top`,
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    // Original structure: section#expertises > .padding-global > .container-col-12 > .mwg_effect031
    <section id="expertises" ref={sectionRef}>
      <div className="padding-global">
        <div className="container-col-12">
          <div className="mwg_effect031">
            <div className="expertises-list">
              {expertises.map((exp, index) => (
                <div key={exp.num1} role="listitem" className="expertises-item">
                  <div className="expertise-slide">
                    <div className="expertise-wrap">
                      <div
                        className={`expertise-content ${exp.theme}`}
                        style={{ zIndex: index + 1 }}
                      >
                        {/* TOP: label + title + number (absolute top-right) */}
                        <div className="expertise-content_top">
                          <div className="label">
                            <div className="paragraph-m">Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading">{exp.title}</h2>
                          <div className="expertise-content_number">
                            <div className="expertise-content_heading">{exp.num0}</div>
                            <div className="expertise-content_heading">{exp.num1}</div>
                          </div>
                        </div>

                        {/* VIDEO — absolute bottom-right, rotated 2.5deg */}
                        <div className="expertise-content_img">
                          <div className="medium-image">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp"
                              loading="lazy" alt=""
                              className="image w-condition-invisible"
                            />
                            <video muted loop playsInline autoPlay className="video" src={exp.video} />
                          </div>
                        </div>

                        {/* BOTTOM: desc + body + CTA */}
                        <div className="expertise-content_bottom">
                          <h3 className="heading-xs">{exp.desc}</h3>
                          <p className="paragraph-m">{exp.body}</p>
                          <div className="button-wrap">
                            <Link href={exp.linkHref} className="button-default w-inline-block">
                              <div className="button-default__inner">
                                <span className="button-default__background" />
                                <span className="button-default__text">{exp.linkText}</span>
                                <div className="button-default__icon is-default">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="icon-14px">
                                    <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Full-card overlay link */}
                        <Link href={exp.linkHref} className="expertise-link w-inline-block" aria-label="Expertise link" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
