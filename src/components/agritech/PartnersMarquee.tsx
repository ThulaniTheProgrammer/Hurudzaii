import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: 'ZimTrade', abbr: 'ZT', logo: 'https://tradezimbabwe.com/wp-content/uploads/2023/05/cropped-ZimTrade-Logo.png' },
  { name: 'CUT', abbr: 'CUT', logo: 'https://cut.ac.zw/welcome/assets/img/logo.png' },
  { name: 'Potraz', abbr: 'PZ', logo: 'https://www.potraz.gov.zw/wp-content/uploads/2021/02/cropped-favicon-180x180.png' },
  { name: 'Eight2Five', abbr: '825', logo: 'https://eight2five.africa/wp-content/uploads/2020/05/eight2five.png' },
];

const PartnerLogo: React.FC<{ name: string; abbr: string; logo?: string }> = ({ name, abbr, logo }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="group flex-shrink-0 mx-6 sm:mx-10 cursor-pointer">
      <div className="flex items-center gap-4 px-6 py-3 rounded-2xl transition-all duration-500 group-hover:bg-gray-100 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(46,204,113,0.15)] origin-center">
        {logo && !imgError ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-12 h-12 object-contain rounded-xl bg-white p-1.5 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 font-black text-lg group-hover:from-[#2ECC71]/20 group-hover:to-[#D4FF00]/10 group-hover:border-[#2ECC71]/40 group-hover:text-[#D4FF00] transition-all duration-500 shadow-inner">
            {abbr}
          </div>
        )}
        <span className="text-lg text-gray-500 font-bold tracking-wide group-hover:text-gray-900 transition-all duration-500 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
};

const PartnersMarquee: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-8 sm:py-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-gray-900 via-gray-50 dark:via-gray-800 to-white dark:to-gray-900" />

      <div ref={ref} className={`relative z-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="text-center mb-2">
          <p className="inline-flex items-center  text-sm sm:text-base uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400 font-semibold">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#2ECC71]/50"></span>
            Trusted and backed by
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#2ECC71]/50"></span>
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <PartnerLogo key={`${p.abbr}-${i}`} name={p.name} abbr={p.abbr} logo={p.logo} />
            ))}
          </div>
        </div>

        {/* Awards Row */}
      
      </div>
    </section>
  );
};

export default PartnersMarquee;
