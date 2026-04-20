'use client';

import { useRef, useEffect, useCallback } from 'react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const LOGOS = [
  { src: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg', alt: 'GH blue' },
  { src: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg', alt: 'GH pink' },
  { src: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg', alt: 'GH green' },
  { src: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg', alt: 'GH red' },
];

const NAV = [
  { label: 'Expertises', href: '/expertises' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const STICKER_PATHS: { d: string; fill: string }[] = [
  { d: 'M110.006 220.968C170.548 220.968 219.627 171.69 219.627 110.903C219.627 50.1152 170.548 0.837158 110.006 0.837158C49.4632 0.837158 0.383789 50.1152 0.383789 110.903C0.383789 171.69 49.4632 220.968 110.006 220.968Z', fill: '#FCB8FA' },
  { d: 'M52.1116 39.6715C55.1117 37.2424 58.6425 37.3312 61.3003 39.7256L59.1887 41.4363C57.431 40.1233 55.3655 40.1426 53.5655 41.5985C51.1 43.5951 51.077 46.839 53.3193 49.6311C55.5617 52.4232 58.6887 53.1145 61.1695 51.1025C63.1696 49.4805 63.8696 47.0398 62.2926 44.8502L62.0388 44.5335L58.4464 47.4453L56.9963 45.6419L62.6311 41.0811L68.3543 48.2061L66.7427 49.5114L65.0234 47.8315C65.1427 49.272 64.6427 51.396 62.5849 53.0604C58.9541 55.9992 54.3155 55.3659 51.1308 51.4037C47.9461 47.4415 48.2577 42.7996 52.1116 39.6753V39.6715Z', fill: 'black' },
  { d: 'M72.3002 27.256L73.4234 29.4186L66.2078 33.1955L68.3425 37.3044L74.2926 34.188L75.3811 36.2849L69.431 39.3975L71.6656 43.6996L79.135 39.7915L80.2543 41.9541L70.3579 47.1328L62.6577 32.2995L72.3002 27.2521V27.256Z', fill: 'black' },
  { d: 'M87.8285 21.8917L88.567 24.2126L83.6707 25.7844L88.0054 39.3896L85.3977 40.2276L81.063 26.6185L76.1667 28.1903L75.4282 25.8694L87.8247 21.8878L87.8285 21.8917Z', fill: 'black' },
  { d: 'M102.324 19.6908L102.578 26.7386L110.309 26.4567L110.055 19.4089L112.79 19.3085L113.393 36.0572L110.659 36.1576L110.393 28.8935L102.662 29.1754L102.924 36.4356L100.189 36.536L99.5815 19.7912L102.316 19.6908H102.324Z', fill: 'black' },
  { d: 'M120.164 20.003L123.241 28.2904L128.926 21.455L131.957 21.9571L124.114 31.3645L123.11 37.4739L120.41 37.0259L121.414 30.9165L116.995 19.4778L120.164 20.003Z', fill: 'black' },
  { d: 'M141.952 25.4563C145.214 26.6573 146.644 29.3992 145.529 32.45C144.421 35.4777 141.556 36.6633 138.298 35.4584L134.702 34.1338L132.621 39.83L130.052 38.8838L135.79 23.1855L141.956 25.4563H141.952ZM135.521 31.8901L138.894 33.1336C140.725 33.8094 142.302 33.1683 142.917 31.4846C143.541 29.7815 142.764 28.2986 140.933 27.6228L137.537 26.3715L135.521 31.8901Z', fill: 'black' },
  { d: 'M160.683 34.9681L159.456 37.0728L152.429 32.9407L150.094 36.9415L155.887 40.3476L154.694 42.3905L148.902 38.9844L146.46 43.1706L153.733 47.4495L152.506 49.5542L142.871 43.8889L151.294 29.4496L160.683 34.972V34.9681Z', fill: 'black' },
  { d: 'M164.703 37.787L168.703 41.2897C172.595 44.6996 172.814 49.3956 169.56 53.1416C166.322 56.8682 161.645 57.3123 157.749 53.9024L153.745 50.3997L164.699 37.787H164.703ZM159.314 52.0989C162.06 54.5009 165.095 53.9873 167.441 51.284C169.787 48.5808 169.88 45.4913 167.137 43.0893L165.199 41.3939L157.375 50.4035L159.314 52.0989Z', fill: 'black' },
  { d: 'M180.511 61.8885C181.708 63.6147 181.438 65.6962 179.738 66.8857C178.019 68.0867 175.981 67.6156 174.784 65.8893C173.604 64.1824 173.884 62.1202 175.604 60.9192C177.304 59.7336 179.327 60.1816 180.511 61.8885Z', fill: 'black' },
  { d: 'M195.719 80.0778C197.03 83.7195 195.796 87.0368 192.676 88.7823L191.753 86.2219C193.561 84.9823 194.219 83.0166 193.43 80.8347C192.353 77.8457 189.307 76.7682 185.949 77.9885C182.591 79.2089 180.922 81.9469 182.007 84.9591C182.88 87.3882 184.949 88.8441 187.53 88.0602L187.911 87.925L186.342 83.565L188.511 82.7772L190.972 89.6087L182.399 92.7214L181.695 90.7673L183.838 89.686C182.445 89.3268 180.607 88.1644 179.707 85.6697C178.122 81.2634 180.23 77.0694 184.995 75.3355C189.761 73.6054 194.03 75.4088 195.715 80.0816L195.719 80.0778Z', fill: 'black' },
  { d: 'M200.847 103.283L198.447 103.646L197.231 95.5671L192.666 96.2584L193.666 102.92L191.339 103.271L190.339 96.6098L185.562 97.332L186.815 105.697L184.415 106.06L182.75 94.9801L199.22 92.4854L200.843 103.283H200.847Z', fill: 'black' },
  { d: 'M200.873 119.75L198.446 119.704L198.55 114.544L184.323 114.263L184.377 111.513L198.604 111.795L198.704 106.635L201.131 106.682L200.873 119.746V119.75Z', fill: 'black' },
  { d: 'M199.046 131.563L198.323 133.965L184.677 138.345L195.981 141.77L195.204 144.358L179.253 139.526L179.977 137.124L193.623 132.745L182.319 129.32L183.096 126.732L199.046 131.563Z', fill: 'black' },
  { d: 'M174.691 148.077C177.033 143.887 181.783 142.759 186.037 145.157C190.291 147.556 191.806 152.217 189.464 156.403C187.126 160.593 182.372 161.721 178.118 159.323C173.864 156.924 172.348 152.263 174.691 148.077ZM176.787 149.259C175.237 152.031 176.421 155.136 179.491 156.866C182.564 158.596 185.818 157.994 187.368 155.221C188.918 152.452 187.733 149.344 184.664 147.613C181.595 145.883 178.337 146.486 176.787 149.255V149.259Z', fill: 'black' },
  { d: 'M175.346 175.522L173.488 173.951L176.8 170.004L165.915 160.793L167.68 158.693L178.565 167.903L181.877 163.956L183.735 165.528L175.342 175.522H175.346Z', fill: 'black' },
  { d: 'M170.603 179.794L159.295 167.509L161.307 165.644L172.614 177.928L170.603 179.794Z', fill: 'black' },
  { d: 'M161.041 187.49C157.906 189.661 154.352 189.329 151.921 186.714L154.175 185.154C155.81 186.61 157.891 186.734 159.771 185.432C162.379 183.629 162.568 180.45 160.545 177.496C158.533 174.561 155.491 173.588 152.883 175.391C150.983 176.708 150.398 178.678 151.167 180.728L148.914 182.289C147.348 179.076 148.264 175.654 151.421 173.472C155.479 170.665 159.952 171.665 162.856 175.897C165.733 180.091 165.095 184.683 161.037 187.49H161.041Z', fill: 'black' },
  { d: 'M140.84 197.902L139.871 195.666L147.336 192.407L145.494 188.155L139.336 190.843L138.398 188.672L144.555 185.984L142.628 181.536L134.901 184.911L133.932 182.675L144.171 178.203L150.817 193.546L140.84 197.902Z', fill: 'black' },
  { d: 'M136.217 199.497L131.04 200.675C126.002 201.822 122.102 199.23 121.005 194.38C119.917 189.557 122.321 185.505 127.359 184.359L132.536 183.181L136.217 199.493V199.497ZM127.886 186.695C124.336 187.502 122.959 190.267 123.748 193.762C124.536 197.257 126.963 199.157 130.517 198.35L133.025 197.778L130.398 186.127L127.89 186.699L127.886 186.695Z', fill: 'black' },
  { d: 'M107.501 198.099C105.405 198.049 103.893 196.604 103.94 194.523C103.99 192.418 105.57 191.047 107.663 191.097C109.732 191.148 111.224 192.592 111.174 194.697C111.124 196.774 109.57 198.149 107.497 198.103L107.501 198.099Z', fill: 'black' },
  { d: 'M83.9472 199.732C80.2432 198.655 78.2932 195.7 78.724 192.144L81.3317 192.901C81.2702 195.098 82.4664 196.789 84.6818 197.434C87.7242 198.319 90.3858 196.481 91.3781 193.036C92.3705 189.591 91.1435 186.621 88.0819 185.733C85.6126 185.015 83.2202 185.837 82.3356 188.394L82.2241 188.784L86.6588 190.074L86.0165 192.302L79.0663 190.282L81.601 181.489L83.5933 182.068L83.2048 184.443C84.3126 183.52 86.328 182.713 88.8665 183.451C93.3474 184.752 95.4898 188.935 94.0782 193.824C92.6666 198.713 88.705 201.119 83.9472 199.736V199.732Z', fill: 'black' },
  { d: 'M62.2148 190.217L63.334 188.054L70.5496 191.831L72.6804 187.722L66.7303 184.61L67.8188 182.513L73.7689 185.625L75.9997 181.323L68.5303 177.415L69.6534 175.253L79.5498 180.427L71.8535 195.257L62.2109 190.213L62.2148 190.217Z', fill: 'black' },
  { d: 'M48.9414 180.524L50.4145 178.585L54.5031 181.713L63.134 170.344L65.311 172.012L56.6839 183.382L60.7725 186.51L59.2993 188.448L48.9414 180.524Z', fill: 'black' },
  { d: 'M36.6339 166.888C34.5108 164.127 34.7262 161.002 37.2878 159.017C39.0571 157.646 41.2571 157.573 42.9956 158.701L46.0995 151.831L47.9611 154.252L45.1072 160.473L47.3765 163.424L52.1612 159.716L53.8343 161.891L40.6456 172.105L36.6339 166.884V166.888ZM45.4918 164.884L43.2841 162.01C42.0918 160.458 40.4186 160.157 39.0032 161.253C37.5916 162.346 37.457 164.049 38.6494 165.602L40.8571 168.475L45.4918 164.884Z', fill: 'black' },
  { d: 'M25.6035 148.409L27.7613 147.293L31.4921 154.553L35.5922 152.429L32.5152 146.443L34.6076 145.358L37.6846 151.344L41.977 149.119L38.1154 141.604L40.2731 140.488L45.3886 150.444L30.5882 158.113L25.6035 148.413V148.409Z', fill: 'black' },
  { d: 'M33.9142 138.67C35.7373 137.959 36.5373 136.09 35.8527 133.85C35.2719 131.954 34.0103 130.842 32.4872 131.313C30.8026 131.83 30.9487 133.611 31.268 136.287C31.6218 139.075 31.5487 141.848 28.3833 142.821C25.6294 143.667 22.9831 141.933 21.96 138.577C20.8946 135.082 22.2293 132.047 25.0563 131.027L25.8448 133.611C24.287 134.29 23.5832 135.982 24.1678 137.901C24.7178 139.705 25.8986 140.716 27.4025 140.253C29.041 139.747 28.8794 137.998 28.5448 135.352C28.214 132.556 28.2679 129.714 31.4141 128.772C34.2373 127.903 37.0143 129.745 38.0681 133.194C39.2489 137.055 37.7797 140.23 34.6603 141.265L33.918 138.67H33.9142Z', fill: 'black' },
  { d: 'M18.9334 124.775L28.549 123.771C31.626 123.446 33.1145 122.091 32.8414 119.476C32.5645 116.812 30.8298 115.792 27.7528 116.116L18.1411 117.124L17.8564 114.39L27.3297 113.398C32.0414 112.903 34.8107 114.896 35.2607 119.225C35.7069 123.531 33.4068 126.03 28.6952 126.524L19.2219 127.517L18.9372 124.782L18.9334 124.775Z', fill: 'black' },
  { d: 'M17.9692 109.145L18.1692 106.403L32.3618 107.442L32.8811 100.267L35.3004 100.445L34.5811 110.358L17.9653 109.141L17.9692 109.145Z', fill: 'black' },
  { d: 'M21.3412 86.0406L23.7181 86.5388L22.6643 91.5901L36.5954 94.525L36.0338 97.2129L22.1027 94.2779L21.0489 99.3291L18.6719 98.8271L21.345 86.0329L21.3412 86.0406Z', fill: 'black' },
  { d: 'M33.5879 85.0094C35.4572 85.6003 37.2419 84.6426 38.1034 82.4684C38.8342 80.6263 38.5458 78.9657 37.0611 78.3748C35.4264 77.7222 34.4303 79.2013 33.0072 81.4913C31.5456 83.8895 29.7571 86.0058 26.6839 84.7777C24.0069 83.708 23.0262 80.6919 24.3185 77.4287C25.6647 74.0303 28.6032 72.501 31.4417 73.4819L30.4494 75.9921C28.8071 75.5403 27.207 76.4207 26.4647 78.286C25.7685 80.0393 26.0608 81.5724 27.5186 82.1555C29.1109 82.7927 30.0763 81.3253 31.4648 79.0506C32.9495 76.6602 34.7649 74.4782 37.8073 75.7179C40.5496 76.8146 41.5689 79.9968 40.2381 83.3527C38.7496 87.1064 35.6265 88.6588 32.5456 87.508L33.5841 85.0171L33.5879 85.0094Z', fill: 'black' },
  { d: 'M39.1192 61.1086C40.3346 59.3939 42.377 58.9498 44.0617 60.1585C45.7694 61.3789 46.0117 63.4604 44.7963 65.1751C43.5924 66.8665 41.5654 67.2952 39.8616 66.0748C38.1769 64.8661 37.9154 62.8039 39.1192 61.1124V61.1086Z', fill: 'black' },
  { d: 'M134.549 76.3317V104.681H127.452V76.3317H112.475L112.475 145.474H127.452L127.452 117.124H134.549V145.474H149.526V76.3317H134.549Z', fill: 'black' },
  { d: 'M93.959 104.434V89.2689H84.1087V132.853H93.959V120.314H89.0666V108.022H107.744V145.482H93.9513L93.959 145.474V138.731L91.3743 141.284C88.6512 143.972 84.9895 145.478 81.1702 145.478C75.1662 145.478 70.2969 140.592 70.2969 134.56V87.2492C70.2969 81.2209 75.1662 76.3318 81.1702 76.3318H96.8744C102.878 76.3318 107.748 81.2209 107.748 87.2492V104.434H93.9628H93.959Z', fill: 'black' },
];

export function Footer() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<SVGSVGElement>(null);
  const incrRef = useRef(0);
  const oldXRef = useRef(0);
  const oldYRef = useRef(0);
  const idxRef = useRef(0);

  useEffect(() => {
    const sticker = stickerRef.current;
    if (!sticker) return;
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? window.scrollY / docH : 0;
      sticker.style.transform = 'rotate(' + (13 + pct * 360) + 'deg)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const spawn = useCallback((x: number, y: number, dx: number, dy: number) => {
    const root = rootRef.current;
    if (!root) return;
    const logo = LOGOS[idxRef.current % LOGOS.length];
    idxRef.current++;
    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.draggable = false;
    img.className = 'flying-logo';

    // Use fixed positioning with viewport coordinates
    const flyX = (Math.random() - 0.5) * 100;
    const flyY = -60 - Math.random() * 80; // Float upward from spawn point
    const logoSize = 180; // Match original size

    // Position exactly at mouse point
    img.style.position = 'fixed';
    img.style.left = (x - logoSize / 2) + 'px';
    img.style.top = (y - logoSize / 2) + 'px';
    img.style.width = logoSize + 'px';
    img.style.height = 'auto';
    img.style.opacity = '0';
    img.style.transform = `rotate(${(Math.random() - 0.5) * 25}deg) scale(0.6)`;
    img.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    img.style.zIndex = '5'; // Lower than wave so logos go under it
    img.style.pointerEvents = 'none';

    document.body.appendChild(img);

    // Fade in while floating upward
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.left = (x - logoSize / 2 + flyX) + 'px';
      img.style.top = (y - logoSize / 2 + flyY) + 'px';
      img.style.transform = `rotate(${(Math.random() - 0.5) * 15}deg) scale(1)`;
    });

    // Stay visible longer, then fade out
    setTimeout(() => {
      img.style.opacity = '0';
      setTimeout(() => img.remove(), 500);
    }, 1500);
  }, []);

  // Add this to ensure body has relative positioning for fixed elements context
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.position = 'relative';
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Track mouse on the entire footer div
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - oldXRef.current;
      const dy = e.clientY - oldYRef.current;
      const dist = Math.abs(dx) + Math.abs(dy);

      // Much larger spacing for fewer, more scattered logos like original
      if (dist > 280 && (dx !== 0 || dy !== 0)) {
        // Spawn exactly at mouse position
        spawn(e.clientX, e.clientY, dx, dy);
        oldXRef.current = e.clientX;
        oldYRef.current = e.clientY;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      oldXRef.current = e.clientX;
      oldYRef.current = e.clientY;
    };

    root.addEventListener('mousemove', handleMouseMove);
    root.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [spawn]);

  return (
    <div ref={rootRef} className="footer">
      <section className="section_footer">
        <div className="padding-global">
          <div className="container-col-12">
            <div className="cs-footer">

              {/* CTA area */}
              <div ref={ctaRef} className="cs-footer-cta">
                <h2 className="heading-xxl">Let&apos;s Get Hyped!</h2>
                <div className="button-group is-footer">
                  <a href="mailto:info@gethyped.nl" className="button-default is-outline">
                    <div className="button-default__inner">
                      <span className="button-default__background is-outline" />
                      <span className="button-default__text">Mail ons direct</span>
                      <div className="button-default__icon is-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 22 17" fill="none">
                          <path d="M2.788 16.596a2.07 2.07 0 01-1.464-.609A2.07 2.07 0 01.714 14.52V2.077C.714 1.507.918 1.019 1.324.613A2.074 2.074 0 012.788.003h16.593c.57 0 1.059.203 1.465.61.407.406.61.895.609 1.464v12.444c0 .57-.203 1.059-.609 1.465a2.074 2.074 0 01-1.465.61H2.788zm8.297-7.44c.086 0 .177-.014.272-.04a1.3 1.3 0 00.244-.102l7.337-4.589a1.1 1.1 0 00.278-.322 1.1 1.1 0 00.097-.656c0-.346-.147-.605-.44-.778a.876.876 0 00-.892.02L11.085 7.262 4.137 2.907a.876.876 0 00-.908.018c-.294.182-.44.437-.44.764 0 .173.034.324.103.454.07.13.173.229.312.298l7.337 4.589c.086.052.177.09.272.116.096.027.187.04.272.04z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="button-default is-footer-cta">
                    <div className="button-default__inner">
                      <span className="button-default__background is-footer-cta" />
                      <span className="button-default__text">Get Results</span>
                      <div className="button-default__icon is-footer-cta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 24" fill="none">
                          <path d="M17.491 11.036c-.3-.392-.666-.732-1.006-1.072-.876-.785-1.87-1.347-2.707-2.171-1.948-1.91-2.38-5.061-1.137-7.48-1.242.3-2.328.981-3.256 1.726C6.995 4.759 5.661 9.558 7.257 13.678c.052.13.104.261.104.431 0 .288-.196.549-.457.654-.301.131-.615.052-.863-.157a1.37 1.37 0 01-.243-.318C4.38 12.514 4.145 9.833 5.138 7.688 2.955 9.467 1.764 12.475 1.934 15.312c.079.654.157 1.308.38 1.962.183.785.536 1.569.928 2.263 1.413 2.262 3.858 3.884 6.487 4.21 2.798.354 5.793-.156 7.937-2.091 2.394-2.171 3.231-5.65 2.001-8.631l-.17-.34c-.274-.601-1.006-1.648-1.006-1.648zm-4.133 8.239c-.366.314-.967.654-1.438.785-1.464.523-2.929-.21-3.792-1.073 1.556-.366 2.485-1.517 2.759-2.681.223-1.046-.196-1.91-.366-2.916-.157-.968-.131-1.792.222-2.694.248.497.51.994.823 1.386 1.007 1.308 2.59 1.883 2.93 3.662.052.183.078.366.078.562.039 1.072-.431 2.249-1.216 2.969z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Wave + sticker + info */}
              <div className="cs-footer-bottom">

                {/* Mobile logo */}
                <div className="footer-mobile-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 941 382" fill="none" className="footer-mobile-logo_svg">
                    <path d="M940.689 83.634V312.664C940.689 350.749 909.95 381.62 872.028 381.62H34.46C15.808 381.62.69 366.436.69 347.704V170.798C.69 153.889 12.873 139.442 29.498 136.669L843.838 1.144C894.561-7.291 940.689 31.995 940.689 83.615" fill="#EAE4D8" />
                    <path d="M855.114 363.741H253.594V117.356L844.9 24.297C884.869 18.014 921.014 49.04 921.014 89.684V297.558C921.014 334.111 891.511 363.741 855.114 363.741Z" fill="black" />
                  </svg>
                </div>

                {/* Wave SVG + GETHYPED logo */}
                <div className="footer-bg">
                  <div className="footer-bg-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1860 386" fill="none" className="footer-bg-svg">
                      <path d="M1859.06 34.826V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L.643 385.955C.643 383.021.643 379.682.643 371.941V290.843C.643 283.856 5.677 277.887 12.547 276.741L1819.04.741C1840-2.744 1859.06 13.489 1859.06 34.818" fill="#EAE4D8" />
                    </svg>
                    <div className="footer-logo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 374 142" fill="none" className="footer-logo_svg">
                        <path d="M346.695 141.574H98.144V39.766L342.475 1.314C358.99-1.282 373.926 11.538 373.926 28.332V114.227C373.926 129.331 361.735 141.574 346.695 141.574Z" fill="black" />
                        <path d="M126.851 41.617V79.99l-6.957.633V42.651l-14.225 2.1V135.404l14.225-.136V97.297l6.957-.465V135.204l15.175-.144V39.374l-15.175 2.243z" fill="white" />
                        <path d="M170.676 35.135l-4.045 36.393-.191 3.117-.383.04-.191-3.077-3.982-35.175-16.411 2.428 12.566 61.785V134.908l16.619-.153V99.684l13.651-67.161-17.633 2.612z" fill="white" />
                        <path d="M292.411 38.244V17.123l-45.716 6.762V134.074l45.716-.432V112.528l-23.656.818V87.433l22.284-1.474V65.022l-22.284 2.035V41.153l23.656-2.909z" fill="white" />
                        <path d="M219.528 82.978l-8.632.657V46.281l8.632-1.082v37.779zM191.676 32.026V134.595l19.076-.184V101.167l8.848-.473c11.569-.617 20.632-10.216 20.632-21.85V50.183c0-13.349-11.808-23.589-24.964-21.642l-23.592 3.485z" fill="white" />
                        <path d="M334.96 112.865l-11.409.369V32.155l11.409-1.435v82.145zM298.315 16.25V133.585l42.573-.4c11.951-.112 21.581-9.872 21.581-21.874V32.098c0-13.349-11.808-23.589-24.964-21.636l-39.198 5.8.008-.012z" fill="white" />
                        <path d="M33.918 141.574h24.677V123.57l-14.233.417V103.643l13.372-.858V84.917l-13.372 1.25V65.816l14.233-1.819V45.992L33.918 49.87V141.574z" fill="black" />
                        <path d="M62.377 45.392V63.516l9.829-1.258V141.574h12.872V60.744l10.547-1.346V40.32L62.377 45.392z" fill="black" />
                        <path d="M20.251 88.419V68.772l-10.731 1.37V125.525l10.731-.312V108.971l-6.59.377V93.611l16.547-1.41V141.566H20.259v-5.152l-1.731 1.707C16.286 140.332 13.27 141.566 10.134 141.566H8.419C3.903 141.566.249 137.888.249 133.361V64.526C.249 59.141 4.158 54.55 9.456 53.717l11.321-1.779c4.955-.777 9.439 3.069 9.439 8.1V87.481l-9.949 1.03-.016.008z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Rotating sticker */}
                <div className="footer-sticker-wrapper">
                  <svg
                    ref={stickerRef}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 220 221"
                    fill="none"
                    className="sticker-svg"
                  >
                    <defs>
                      <clipPath id="clip0_footer">
                        <rect width="220" height="221" fill="white" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#clip0_footer)">
                      {STICKER_PATHS.map((item, i) => (
                        <path key={i} d={item.d} fill={item.fill} />
                      ))}
                    </g>
                  </svg>
                </div>

                {/* Info: nav + follow us + copyright | contact + adres */}
                <div className="cs-footer-info-wrapper">
                  <div className="footer-info">
                    <div className="footer_links">
                      <div className="footer_sitemap">
                        {NAV.map(({ label, href }) => (
                          <a key={label} href={href} className="button-color-swoosh is-footer">
                            <span className="button-color-swoosh_bg">
                              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
                              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
                            </span>
                            <span data-text={label} className="button-color-swoosh_inner is-footer">
                              <span className="button-color-swoosh_text">{label}</span>
                            </span>
                          </a>
                        ))}
                      </div>
                      <div className="footer-follow">
                        <span className="footer-follow-label">Follow us</span>
                        <div className="social-icon-group">
                          <a aria-label="LinkedIn" href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedinIn />
                          </a>
                          <a aria-label="TikTok" href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTiktok />
                          </a>
                          <a aria-label="Instagram" href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                          </a>
                          <a aria-label="YouTube" href="https://www.youtube.com/@gethypednl" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaYoutube />
                          </a>
                        </div>
                      </div>
                      <div className="footer-copyright">
                        <span className="footer-link">&#169; {new Date().getFullYear()} Get Hyped</span>
                        <a href="https://dylanbrouwer.design/" target="_blank" rel="noopener noreferrer" className="footer-link">
                          &#169; Design by Dylan
                        </a>
                      </div>
                    </div>
                    <div className="footer-info-right">
                      <div className="footer-col">
                        <p className="footer-label">Contact</p>
                        <a href="mailto:info@gethyped.nl" className="footer-link">info@gethyped.nl</a>
                        <a href="tel:+31615337496" className="footer-link">+31 6 1533 7496</a>
                      </div>
                      <div className="footer-col">
                        <p className="footer-label">Adres</p>
                        <a
                          href="https://maps.google.com/?q=Beltrumsestraat+6,+7141+AL+Groenlo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                          Beltrumsestraat 6,<br />7141 AL Groenlo
                        </a>
                      </div>
                      <a href="#" className="footer-link">Privacyvoorwaarden</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
