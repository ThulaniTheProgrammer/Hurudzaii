import React, { useEffect, useRef, useState } from 'react';
import HERO_VIDEO from '@/components/img/Elevator.mp4';
const aboutImages = [
  '/Assets/one.jpeg',
  '/Assets/two.jpeg',
  '/Assets/five.jpeg',
  '/Assets/eight.jpeg',
  '/Assets/nine.jpg',
];
const storySteps = [
  {
    number: '01',
    title: 'Our story began in an african village',
    lines: [
      'In Zvimba, Zimbabwe, our founder, Frank Makeba, grew up watching his family and neighbours pour their hopes into the soil. When rains failed or diseases struck, there was often no one to turn to and months of hard work disappeared with the harvest. That pain inspired him to begin building Hurudza AI in 2022, so the families who feed us would never have to face another season alone.',
    ],
  },
  {
    number: '02',
    title: 'Turning Our Pain into Purpose',
    lines: [
      'In 2022, Frank and his university team began building African agricultural datasets, preserving local knowledge and laying the foundation for the support his village had needed.',
    ],
  },
  {
    number: '03',
    title: 'From Our Village to Every African Farmer',
    lines: [
      'In 2024, Hurudza AI was launched with a purpose close to our hearts: putting guidance in farmers’ hands, in their own languages, to help protect their harvests and face a changing climate—so the families who feed us would not have to face each season alone.',
    ],
  },
];
const ABOUT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  .hurudza-about {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 88px 0 16px;
    color: #163c2e;
    background:
      radial-gradient(
        900px 520px at 6% 0%,
        rgba(128, 255, 158, 0.28) 0%,
        transparent 60%
      ),
      radial-gradient(
        800px 520px at 100% 100%,
        rgba(240, 185, 58, 0.16) 0%,
        transparent 60%
      ),
      linear-gradient(180deg, #fbfaf4 0%, #f2f6ec 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  /* Subtle dot grid that fades toward the edges */
  .hurudza-about::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image: radial-gradient(
      rgba(22, 60, 46, 0.09) 1px,
      transparent 1px
    );
    background-size: 22px 22px;
    -webkit-mask-image: radial-gradient(
      ellipse at center,
      #000 30%,
      transparent 80%
    );
    mask-image: radial-gradient(
      ellipse at center,
      #000 30%,
      transparent 80%
    );
  }
  .hurudza-about *,
  .hurudza-about *::before,
  .hurudza-about *::after {
    box-sizing: border-box;
  }
  .hurudza-about h2,
  .hurudza-about h3,
  .hurudza-about p {
    margin: 0;
  }
  .hurudza-about button {
    font: inherit;
    cursor: pointer;
  }
  .hurudza-about .about-wrap {
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
  }
  .hurudza-about .about-display {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  /* Centered heading */
  .hurudza-about .about-header {
    max-width: 1200px;
    margin: 0 auto 52px;
    text-align: center;
  }
  .hurudza-about h2 {
    font-size: clamp(24px, 3vw, 40px);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -.04em;
    text-wrap: balance;
    white-space: normal;
  }
  .hurudza-about h2 span {
    color: #398258;
  }
  .hurudza-about .about-intro {
    max-width: 960px;
    text-align: center;
    margin: 20px auto 0;
    font-size: 17px;
    line-height: 1.8;
    color: #53695b;
    text-wrap: balance;
  }
  /* Gallery and story */
  .hurudza-about .about-grid {
    display: grid;
    grid-template-columns: .95fr 1.05fr;
    gap: 48px;
    align-items: stretch;
  }
  .hurudza-about .about-gallery {
    position: relative;
    min-width: 0;
  }
  /* The text determines the grid row height; the photo fills that row. */
  .hurudza-about .about-photo {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: 24px;
    background: #244f3d;
    box-shadow:
      0 30px 70px -30px rgba(19, 58, 39, 0.45),
      0 0 0 1px rgba(22, 60, 46, 0.06);
  }
  .hurudza-about .about-photo img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 900ms ease;
  }
  .hurudza-about .about-photo-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(4, 24, 15, .04) 40%,
      rgba(4, 24, 15, .86) 100%
    );
    pointer-events: none;
  }
  .hurudza-about .about-photo-caption {
    position: absolute;
    bottom: 94px;
    left: 30px;
    right: 30px;
    color: #fff;
  }
  .hurudza-about .about-photo-caption small {
    display: block;
    margin-bottom: 12px;
    color: #d6eadb;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .17em;
    text-transform: uppercase;
  }
  .hurudza-about .about-photo-caption p {
    max-width: 350px;
    font-size: clamp(25px, 3vw, 37px);
    line-height: 1.15;
    letter-spacing: -.025em;
  }
  .hurudza-about .about-gallery-controls {
    position: absolute;
    z-index: 2;
    bottom: 18px;
    left: 20px;
    right: 20px;
    padding: 4px 10px;
    border-radius: 16px;
    background: rgba(241, 248, 243, .95);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .hurudza-about .about-dots {
    display: flex;
    flex-wrap: wrap;
  }
  .hurudza-about .about-dot {
    display: grid;
    place-items: center;
    width: 32px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
  }
  .hurudza-about .about-dot::after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background: #9aafa0;
  }
  .hurudza-about .about-dot[aria-pressed="true"]::after {
    width: 22px;
    background: #287a4f;
  }
  .hurudza-about .about-pause {
    padding: 8px 13px;
    border: 1px solid #b9cebd;
    border-radius: 999px;
    background: #ffffff80;
    color: #315b43;
    font-size: 12px;
  }
  .hurudza-about button:focus-visible {
    outline: 3px solid #287a4f;
    outline-offset: 3px;
  }
  .hurudza-about .about-stories {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .hurudza-about .about-story {
    position: relative;
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 16px;
    padding: 0 0 34px;
  }
  /* Join the centres of each numbered step. */
  .hurudza-about .about-story:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 38px;
    bottom: 0;
    left: 18px;
    width: 2px;
    background: #8db79b;
  }
  .hurudza-about .about-story:last-child {
    padding-bottom: 0;
  }
  .hurudza-about .about-number {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border: 1px solid #287a4f;
    border-radius: 50%;
    background: #287a4f;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
  .hurudza-about .about-story h3 {
    padding-top: 3px;
    font-size: clamp(21px, 2.1vw, 26px);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -.025em;
  }
  .hurudza-about .about-story p {
    margin-top: 12px;
    color: #526558;
    line-height: 1.85;
    font-size: clamp(12px, 1.25vw, 15px);
  }
  .hurudza-about .about-story p span {
    display: block;
  }
  /* Full-width video with no text column */
  .hurudza-about .about-film {
    margin-top: 56px;
    overflow: hidden;
    border-radius: 26px;
    background: #09281c;
    box-shadow:
      0 30px 70px -30px rgba(19, 58, 39, 0.45),
      0 0 0 1px rgba(22, 60, 46, 0.06);
  }
  .hurudza-about .about-film video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #09281c;
  }
  .hurudza-about .about-video-error {
    display: grid;
    place-items: center;
    aspect-ratio: 16 / 9;
    padding: 24px;
    color: #d6e6db;
    font-size: 14px;
    text-align: center;
  }
  @media (min-width: 1024px) {
    .hurudza-about h2 {
      white-space: nowrap;
    }
  }
  @media (max-width: 900px) {
    .hurudza-about .about-grid {
      gap: 28px;
    }
    .hurudza-about .about-story {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 12px;
    }
  }
  @media (max-width: 640px) {
    .hurudza-about {
      padding: 56px 0 12px;
    }
    .hurudza-about .about-wrap {
      width: calc(100% - 40px);
    }
    .hurudza-about .about-header {
      margin-bottom: 34px;
    }
    .hurudza-about .about-intro {
      margin-top: 16px;
      font-size: 16px;
    }
    .hurudza-about .about-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .hurudza-about .about-photo {
      position: relative;
      inset: auto;
      aspect-ratio: 4 / 4.3;
      border-radius: 20px;
    }
    .hurudza-about .about-photo-caption {
      bottom: 94px;
      left: 24px;
      right: 24px;
    }
    .hurudza-about .about-story {
      grid-template-columns: 36px minmax(0, 1fr);
      gap: 14px;
    }
    .hurudza-about .about-number {
      width: 34px;
      height: 34px;
    }
    .hurudza-about .about-story:not(:last-child)::before {
      top: 34px;
      left: 16px;
    }
    .hurudza-about .about-story p {
      font-size: clamp(11px, 3.1vw, 15px);
    }
    .hurudza-about .about-film {
      margin-top: 36px;
      border-radius: 20px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .hurudza-about .about-photo img {
      transition: none;
    }
  }
`;
const AboutSection: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [videoError, setVideoError] = useState(false);
  useEffect(() => {
    const query = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const updateMotion = () => {
      setReducedMotion(query.matches);
    };
    const updateVisibility = () => {
      setPageVisible(!document.hidden);
    };
    updateMotion();
    updateVisibility();
    query.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      query.removeEventListener('change', updateMotion);
      document.removeEventListener(
        'visibilitychange',
        updateVisibility
      );
    };
  }, []);
  useEffect(() => {
    const element = galleryRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setGalleryVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (
      paused ||
      reducedMotion ||
      !pageVisible ||
      !galleryVisible
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setCurrentImage(
        (previous) => (previous + 1) % aboutImages.length
      );
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, pageVisible, galleryVisible]);
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="hurudza-about"
    >
      <style>{ABOUT_CSS}</style>
      <div className="about-wrap">
        <header className="about-header">
          <h2 id="about-heading" className="about-display">
            Building Sovereign African{' '}
            <span>Agricultural Intelligence.</span>
          </h2>
          <p className="about-intro">
            Africa’s agricultural knowledge is our foundation. AI is how
            we scale its power. We connect local expertise, satellite
            insights and financial tools to help farmers protect their
            harvests, businesses grow with confidence and developers
            build what comes next powering a more productive,
            climate-resilient Africa.
          </p>
        </header>
        <div className="about-grid">
          <div
            ref={galleryRef}
            className="about-gallery"
            role="group"
            aria-label="Hurudza AI photo gallery"
          >
            <div className="about-photo">
              {aboutImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Hurudza AI gallery photograph ${index + 1}`}
                  aria-hidden={index !== currentImage}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{
                    opacity: index === currentImage ? 1 : 0,
                  }}
                />
              ))}
              <div className="about-photo-shade" />
              <div className="about-photo-caption">
                <small>Rooted in Zimbabwe · Built for Africa</small>
                <p className="about-display">
                  Every harvest carries a family’s hopes.
                </p>
              </div>
            </div>
            <div className="about-gallery-controls">
              <div
                className="about-dots"
                role="group"
                aria-label="Choose a photograph"
              >
                {aboutImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className="about-dot"
                    aria-label={`Show photograph ${index + 1}`}
                    aria-pressed={index === currentImage}
                    onClick={() => {
                      setCurrentImage(index);
                      setPaused(true);
                    }}
                  />
                ))}
              </div>
              {!reducedMotion && (
                <button
                  type="button"
                  className="about-pause"
                  onClick={() => setPaused((value) => !value)}
                >
                  {paused ? 'Play slideshow' : 'Pause slideshow'}
                </button>
              )}
            </div>
          </div>
          <ol className="about-stories">
            {storySteps.map((step) => (
              <li key={step.number} className="about-story">
                <span className="about-number" aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h3 className="about-display">{step.title}</h3>
                  <p>
                    {step.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="about-film">
          {videoError ? (
            <div role="status" className="about-video-error">
              The video is currently unavailable. Please try again
              later.
            </div>
          ) : (
            <video
              src={HERO_VIDEO}
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="auto"
              aria-label="The story behind Hurudza AI"
              onError={() => setVideoError(true)}
            >
              Your browser does not support video playback.{' '}
              <a href={HERO_VIDEO}>Open the video</a>.
            </video>
          )}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;