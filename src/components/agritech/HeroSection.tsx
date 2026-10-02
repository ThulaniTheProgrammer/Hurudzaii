import React, { useEffect, useRef, useState } from 'react';
import { Bot, TrendingUp, Users, Globe } from 'lucide-react';
import HERO_VIDEO from '@/components/img/Elevator.mp4';

// WhatsApp number: include country code, without + or spaces.
const WHATSAPP_URL = 'https://wa.me/263714041560';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.thulanimakeba.hurudzaai&hl=en-US';

const HERO_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .hurudza-hero {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .hurudza-hero .hero-display {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .hurudza-hero button,
  .hurudza-hero a {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .hurudza-hero .hero-gradient-text {
    color: #86ffb0;
  }

  @supports ((background-clip: text) or (-webkit-background-clip: text)) {
    .hurudza-hero .hero-gradient-text {
      background-image: linear-gradient(
        110deg,
        #d9ffe6 0%,
        #80ff9e 45%,
        #25ef91 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  .hurudza-hero .hero-whatsapp,
  .hurudza-hero .hero-download {
    color: #06351d;
    border-color: #a7ffc2;
    font-weight: 700;
    transition: box-shadow 200ms ease, filter 200ms ease;
  }

  .hurudza-hero .hero-whatsapp {
    background: linear-gradient(115deg, #b4ff75 0%, #58f88a 48%, #25e8a0 100%);
    box-shadow: 0 8px 30px rgba(66, 245, 129, .3);
  }

  .hurudza-hero .hero-download {
    background: linear-gradient(115deg, #e0ffbf 0%, #a0ffb7 48%, #62efb7 100%);
    box-shadow: 0 8px 28px rgba(98, 239, 183, .2);
  }

  .hurudza-hero .hero-whatsapp:hover,
  .hurudza-hero .hero-download:hover {
    filter: brightness(1.06);
    box-shadow: 0 12px 36px rgba(66, 245, 129, .4);
  }

  @media (prefers-reduced-motion: reduce) {
    .hurudza-hero .hero-whatsapp,
    .hurudza-hero .hero-download {
      transition: none;
    }
  }
`;

interface HeroSectionProps {
  // Retained for compatibility with existing parent components.
  onNavigate?: (section: string) => void;
}

const ANIMATED_TEXTS = [
  'African Agriculture Data Layer',
  '24/7 Multilingual AI Contact Center',
  'Flexible Payment Systems for Farmers',
];

const STATS = [
  {
    icon: TrendingUp,
    value: '34%',
    label: 'Yield Increase',
  },
  {
    icon: Users,
    value: '21K+',
    label: 'Active Farmers',
  },
  {
    icon: Globe,
    value: '115 529+',
    label: 'Verified Hectares',
  },
];

const PlayStoreIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6 shrink-0"
  >
    <path
      d="M3 2.5L13 12L3 21.5V2.5Z"
      fill="#4285F4"
    />
    <path
      d="M3 2.5L16 9L13 12L3 2.5Z"
      fill="#34A853"
    />
    <path
      d="M13 12L16 15L3 21.5L13 12Z"
      fill="#EA4335"
    />
    <path
      d="M16 9L21 11.5C21.4 11.7 21.4 12.3 21 12.5L16 15L13 12L16 9Z"
      fill="#FBBC04"
    />
  </svg>
);

const HeroSection: React.FC<HeroSectionProps> = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const updateMotion = () => {
      setPrefersReducedMotion(motionQuery.matches);
    };

    const updateVisibility = () => {
      setPageVisible(!document.hidden);
    };

    updateMotion();
    updateVisibility();

    motionQuery.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);

    return () => {
      motionQuery.removeEventListener('change', updateMotion);
      document.removeEventListener(
        'visibilitychange',
        updateVisibility
      );
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const motionEnabled =
    isInView &&
    pageVisible &&
    !isPaused &&
    !prefersReducedMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (motionEnabled) {
      void video.play().catch(() => {
        // The background gradients remain visible if playback fails.
      });
    } else {
      video.pause();
    }

    return () => {
      video.pause();
    };
  }, [motionEnabled]);

  useEffect(() => {
    if (!motionEnabled) return;

    const interval = window.setInterval(() => {
      setTextIndex(
        (previous) => (previous + 1) % ANIMATED_TEXTS.length
      );
    }, 15000);

    return () => window.clearInterval(interval);
  }, [motionEnabled]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="hurudza-hero relative isolate flex min-h-screen items-center overflow-hidden bg-[#081510] text-white"
    >
      <style>{HERO_CSS}</style>

      {/* Background video and overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,21,16,0.95) 0%, rgba(8,21,16,0.82) 45%, rgba(8,21,16,0.35) 80%, rgba(8,21,16,0.20) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(8,21,16,1) 0%, transparent 45%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pt-40">
        <div className="max-w-4xl">
          <h1
            id="hero-heading"
            className="hero-display text-[60px] font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-[72px] xl:text-[112px]"
          >
            Hurudza AI
          </h1>

          {/* Rotating headline */}
          <div className="mt-7 grid max-w-3xl">
            {ANIMATED_TEXTS.map((text, index) => (
              <p
                key={text}
                aria-hidden={index !== textIndex}
                className={`hero-display hero-gradient-text col-start-1 row-start-1 text-2xl font-medium leading-[1.25] tracking-tight transition-opacity duration-700 motion-reduce:transition-none sm:text-3xl xl:text-4xl ${
                  index === textIndex
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          <p className="mt-7 max-w-2xl text-base font-normal leading-8 text-white/80 sm:text-lg">
            Hurudza AI transforms indigenous African agricultural
            knowledge into sovereign AI-powered, climate-positive
            digital assets.
          </p>

          {/* WhatsApp and Google Play actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Hurudza AI on WhatsApp"
              className="hero-whatsapp inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-emerald-400/30 px-7 py-3.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081510]"
            >
              <Bot
                aria-hidden="true"
                strokeWidth={1.8}
                className="h-6 w-6 shrink-0"
              />
              <span>WhatsApp</span>
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Hurudza AI on Google Play"
              className="hero-download inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-emerald-300/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081510]"
            >
              <PlayStoreIcon />
              <span>Download</span>
            </a>
          </div>

          {/* Statistics */}
          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-8">
            {STATS.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-start gap-3"
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-1.5 h-5 w-5 shrink-0 text-[#80ff9e]"
                  />

                  <div className="flex flex-col">
                    <dt className="order-2 mt-1 text-xs font-normal text-white/70 sm:text-sm">
                      {stat.label}
                    </dt>

                    <dd className="hero-display hero-gradient-text order-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>

      {/* Background motion control */}
      {!prefersReducedMotion && (
        <button
          type="button"
          onClick={() => setIsPaused((previous) => !previous)}
          aria-label={
            isPaused
              ? 'Resume background video and headline'
              : 'Pause background video and headline'
          }
          className="absolute bottom-4 right-6 rounded-md px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:right-8"
        >
          {isPaused ? 'Resume motion' : 'Pause motion'}
        </button>
      )}
    </section>
  );
};

export default HeroSection;
