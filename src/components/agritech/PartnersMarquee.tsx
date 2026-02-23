import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: 'ZimTrade', abbr: 'ZT' },
  { name: 'CUT', abbr: 'CUT' },
  { name: 'Potraz', abbr: 'PZ' },
  { name: 'Eight2Five', abbr: '825' },
];

const PartnerLogo: React.FC<{ name: string; abbr: string }> = ({ name, abbr }) => (
  <div className="group flex-shrink-0 mx-6 sm:mx-10">
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-500 group-hover:bg-[#2ECC71]/5">
      <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/30 font-bold text-sm group-hover:bg-[#2ECC71]/10 group-hover:border-[#2ECC71]/20 group-hover:text-[#2ECC71] transition-all duration-500">
        {abbr}
      </div>
      <span className="text-sm text-white/25 font-medium group-hover:text-[#2ECC71]/80 transition-all duration-500 whitespace-nowrap">
        {name}
      </span>
    </div>
  </div>
);

const PartnersMarquee: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden border-y border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />

      <div ref={ref} className={`relative z-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((p, i) => (
              <PartnerLogo key={`${p.abbr}-${i}`} name={p.name} abbr={p.abbr} />
            ))}
          </div>
        </div>

        {/* Awards Row */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { label: 'Best AgriTech 2025', org: 'ZimDigital Awards' },
              { label: 'Innovation Prize', org: 'African Tech Summit' },
              { label: 'Top 50 Startups', org: 'Forbes Africa' },
            ].map((award, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2">
                <svg className="w-5 h-5 text-[#D4FF00]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.52.587 6.023 6.023 0 01-2.52-.587" />
                </svg>
                <div>
                  <div className="text-xs font-medium text-white/50">{award.label}</div>
                  <div className="text-[10px] text-white/25">{award.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
