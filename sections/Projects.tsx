'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'bullit',
    label: 'Bullit',
    title: 'Van nul naar vol, binnen 3 weken',
    video: 'https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4',
    href: '/work/bullit',
  },
  {
    id: 'roasta',
    label: 'Roasta',
    title: 'Zacht in smaak, sterk in beeld',
    video: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
    href: '/work/roasta',
  },
  {
    id: 'loco',
    label: 'Loco',
    title: 'Content die écht smaakt (en raakt)',
    video: 'https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4',
    href: '/work/loco',
  },
];

function SwCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    let leaveTimer: ReturnType<typeof setTimeout>;

    function onEnter() {
      clearTimeout(leaveTimer);
      card!.setAttribute('data-video-on-hover', 'active');
      video!.play().catch(() => {});
    }

    function onLeave() {
      card!.setAttribute('data-video-on-hover', 'not-active');
      leaveTimer = setTimeout(() => {
        video!.pause();
        video!.currentTime = 0;
      }, 300);
    }

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    return () => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
      clearTimeout(leaveTimer);
    };
  }, []);

  return (
    <div role="listitem" className="sw-item w-dyn-item">
      <Link
        ref={cardRef}
        aria-label="Case link"
        href={project.href}
        className="sw-card w-inline-block"
        data-video-on-hover="not-active"
      >
        {/* Video container — inset 8px inside card */}
        <div className="sw-card_video">
          {/* Desktop: shows first frame as thumbnail, plays on hover */}
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="auto"
            className="video-card_video hide-mobile"
          />
          {/* Mobile: always autoplays */}
          <div className="sw-card_mobile-video">
            <video
              src={project.video}
              muted
              loop
              playsInline
              autoPlay
              className="video"
            />
          </div>
        </div>

        {/* Bottom overlay: content + shape + arrow */}
        <div className="sw-card_wrap">
          <div className="sw-card_content">
            <h3 className="heading-xs">{project.title}</h3>
            <div className="label is-sw">
              <div className="paragraph-regular">{project.label}</div>
            </div>
          </div>

          <div className="sw-card_shape">
            {/* Arrow circle — rotated -45deg so arrow points ↗ */}
            <div className="work-card_icon is-sw">
              {/* visible by default, slides out on hover */}
              <div className="work-card_icon-wrap is-out">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 28 27" fill="none" className="work-card_icon-svg">
                  <path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="currentColor" />
                </svg>
              </div>
              {/* hidden off-screen, slides in on hover */}
              <div className="work-card_icon-wrap is-in">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 28 27" fill="none" className="work-card_icon-svg">
                  <path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            {/* Curved fill */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 429 174" fill="none">
              <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="currentColor" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth <= 478) return;

    const items = gsap.utils.toArray<HTMLElement>('.sw-item', section);
    const targetYs = ['0em', '-12em', '-24em'];

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: '6em' },
          {
            y: targetYs[i] ?? '0em',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_selected-work" ref={sectionRef}>
      <div className="section-padding-96px">
        <div className="padding-global">
          
            <div className="sw_wrapper">

              {/* Header */}
              <div className="container-col-10">
                <div className="max-width-col-06">
                  <div className="content-wrap">
                    <h2 className="heading-xl"><strong>Content dat scoort.</strong></h2>
                    <div className="max-width-60ch">
                      <p className="paragraph-l">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
                        Met creatieve content die werkt en het verschil maakt.
                      </p>
                    </div>
                    <div className="button-wrap">
                      <Link href="/work" className="button-default is-outline w-inline-block">
                        <div className="button-default__inner">
                          <span className="button-default__background is-outline" />
                          <span className="button-default__text">Bekijk al ons werk</span>
                          <div className="button-default__icon is-black">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="icon-14px">
                              <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="container-col-12">
                <div className="sw-collection">
                  <div role="list" className="sw-list">
                    {projects.map((p) => <SwCard key={p.id} project={p} />)}
                  </div>
                </div>
              </div>

            </div>
         
        </div>
      </div>
    </section>
  );
}
