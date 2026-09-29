import React from 'react';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import HERO_VIDEO from '@/components/img/Elevator.mp4';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
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
    value: '1,500+',
    label: 'Verified Hectares',
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [textIndex, setTextIndex] = React.useState(0);

  // Rotate complete phrases to keep the headline easy to read.
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((previous) => (previous + 1) % ANIMATED_TEXTS.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#07110D] text-white"
    >
      {/* Background video */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={(event) => {
            console.error(
              'Background video failed to load:',
              event.currentTarget.error,
            );
          }}
        />

        {/* Darken the entire video */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Stronger contrast behind the text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,17,13,0.95) 0%, rgba(7,17,13,0.82) 40%, rgba(7,17,13,0.35) 75%, rgba(7,17,13,0.2) 100%)',
          }}
        />

        {/* Blend the bottom edge into the section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(7,17,13,0.95) 0%, transparent 40%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="max-w-4xl">
          {/* Small introduction */}
          <div className="mb-7 flex items-center gap-3">
          
          
          </div>

          {/* Brand heading */}
          <h1
            id="hero-heading"
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Hurudza AI
          </h1>

          {/* Rotating headline */}
          <div className="mt-5 grid max-w-3xl">
            {ANIMATED_TEXTS.map((text, index) => (
              <p
                key={text}
                aria-hidden={index !== textIndex}
                className={`col-start-1 row-start-1 text-3xl font-medium leading-[1.2] tracking-tight bg-gradient-to-r from-[#2ECC71] via-[#55D68B] to-[#73E5A2] bg-clip-text text-transparent transition-opacity duration-700 motion-reduce:transition-none sm:text-4xl lg:text-5xl ${
                  index === textIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg sm:leading-8">
            Hurudza AI transforms indigenous African agricultural knowledge
            into sovereign AI-powered, climate-positive digital assets.
          </p>

          {/* Primary action */}
          <div className="mt-9">
            <button
              type="button"
              onClick={() => onNavigate('apps')}
              className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#2ECC71] via-[#55D68B] to-[#73E5A2] px-7 py-4 text-sm font-semibold text-[#07110D] transition-all duration-200 hover:from-[#27ae60] hover:via-[#4bc976] hover:to-[#60d290] hover:shadow-[0_0_30px_rgba(46,204,113,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8AE8B0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#07110D] sm:text-base"
            >
              Explore Solutions
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-12 max-w-2xl border-t border-white/20 pt-7 sm:mt-14 sm:pt-8">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              {STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="flex items-start gap-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#2ECC71]"
                      strokeWidth={1.6}
                    />

                    <div className="flex flex-col">
                      <dt className="order-2 mt-1 text-sm text-gray-300">
                        {stat.label}
                      </dt>
                      <dd className="order-1 text-2xl font-semibold tracking-tight bg-gradient-to-r from-[#2ECC71] via-[#55D68B] to-[#73E5A2] bg-clip-text text-transparent sm:text-3xl">
                        {stat.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;