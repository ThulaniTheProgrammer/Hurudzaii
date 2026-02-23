import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  { value: 21000, suffix: '+', label: 'Active Farmers', description: 'Across 8 provinces' },
  { value: 34, suffix: '%', label: 'Avg Yield Increase', description: 'In first growing season' },
  { value: 2400, suffix: '+', label: 'IoT Sensors', description: 'Deployed nationwide' },
  { value: 98, suffix: '%', label: 'Uptime', description: 'Platform reliability' },
  { value: 500, suffix: 'K', label: 'Hectares Monitored', description: 'Via satellite & drone' },
  { value: 24, suffix: '/7', label: 'Support', description: 'Expert agricultural team' },
];

const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#2ECC71]/3 blur-[200px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 mb-6">
            <span className="text-[#D4FF00] text-xs font-medium uppercase tracking-wider">Impact & Scale</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Numbers That{' '}
            <span className="bg-gradient-to-r from-[#D4FF00] to-[#2ECC71] bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-lg text-white/40">
            Our platform's impact across Africa's agricultural landscape.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-5 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#2ECC71]/15 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2ECC71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    duration={2000 + i * 200}
                  />
                </div>
                <div className="text-sm font-medium text-white/60 mb-1">{stat.label}</div>
                <div className="text-xs text-white/25">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`mt-16 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]">
            <svg className="w-8 h-8 text-[#2ECC71]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg sm:text-xl text-white/60 leading-relaxed mb-6">
              "Hurudza AI has completely transformed how we manage our 200-hectare maize farm. The AI diagnostics caught a fall armyworm infestation two weeks before it would have been visible, saving us an estimated $45,000 in crop losses."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#D4FF00] flex items-center justify-center text-[#050505] font-bold text-sm">
                TM
              </div>
              <div>
                <div className="text-sm font-medium text-white/80">Tendai Makoni</div>
                <div className="text-xs text-white/30">Commercial Farmer, Mashonaland East</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
