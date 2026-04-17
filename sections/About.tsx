'use client';

import Link from 'next/link';

export function About() {
  return (
    <section id="intro-home" className="padding-global section-padding-96px">
      <div className="container-col-12">
        <div className="grid-col-12">

          {/* Heading — desktop: cols 2–12, tablet: cols 1–12, mobile: full */}
          <div
            id="w-node-faa2305a-1600-624b-3553-a5629475cb11-23544b6d"
            className="margin-bottom margin-96px"
          >
            <h2 className="heading-m">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
            </h2>
          </div>

          {/* Image — desktop: row2 cols 1–3, tablet: cols 1–4, mobile: full */}
          <div
            id="w-node-faa2305a-1600-624b-3553-a5629475cb14-23544b6d"
            className="small-image"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              srcSet="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-500.webp 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-800.webp 800w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp 960w"
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
              sizes="(max-width: 479px) 75vw, 960px"
              alt=""
              loading="lazy"
              className="image"
            />
          </div>

          {/* Content — desktop: row2 cols 5–9 align-end, tablet: cols 5–11 align-center, mobile: row3 full */}
          <div
            id="w-node-faa2305a-1600-624b-3553-a5629475cb19-23544b6d"
            className="content-wrap"
          >
            <p className="paragraph-l">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <div className="button-wrap">
              <Link href="/about" className="button-default is-outline w-inline-block">
                <div className="button-default__inner">
                  <span className="button-default__background is-outline" />
                  <span className="button-default__text">Leer ons kennen</span>
                  <div className="button-default__icon is-black">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="icon-14px">
                      <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Down arrow — desktop: row2 col 11–12 place-self-end, mobile: row1 col 12 */}
          <div
            id="w-node-faa2305a-1600-624b-3553-a5629475cb1f-23544b6d"
          >
            <Link href="#expertises" className="button-default is-icon w-inline-block">
              <div className="button-default__inner is-icon">
                <span className="button-default__background is-button-icon is-arrow" />
                <div className="button-default__icons">
                  <div className="button-default__icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 27" fill="none" className="button-default__icon is-button-icon">
                      <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="button-default__icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 27" fill="none" className="button-default__icon is-button-icon">
                      <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
