import React, { useState } from 'react';
import { Smartphone, CreditCard, BarChart3, Shield, Bell, MapPin, Check, ArrowRight, QrCode, Activity, Megaphone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GlassCard from './GlassCard';

const APP_MOCKUP_1 = '/hurudza.png';
const APP_MOCKUP_2 = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780367990_115ae537.jpg';

interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: { icon: React.ElementType; text: string }[];
  downloads: string;
  rating: string;
  color: string;
}

const apps: AppInfo[] = [
  {
    id: 'farm-manager',
    name: 'Hurudzai App',
    tagline: 'Hurudza farm manage dashboard',
    description: 'Complete farm management with AI crop diagnostics, weather forecasting, IoT sensor monitoring, and yield optimization — all in one powerful mobile dashboard.',
    image: APP_MOCKUP_1,
    features: [
      { icon: BarChart3, text: 'Real-time crop analytics & NDVI maps' },
      { icon: Activity, text: 'Livestock tracking & health monitoring' },
      { icon: MapPin, text: 'GPS field mapping & zone management' },
      { icon: Smartphone, text: 'Offline mode for remote farm areas' },
    ],
    downloads: '12,400+',
    rating: '4.8',
    color: '#2ECC71',
  },
  {
    id: 'zunde-pay',
    name: 'ZundePay',
    tagline: 'Agricultural finance, simplified',
    description: 'Seamlessly integrated with the Hurudza mobile app. Access micro-loans, buy produce directly, advertise your harvests, and manage direct market payments specifically designed for African farmers and agribusinesses.',
    image: APP_MOCKUP_2,
    features: [
      { icon: CreditCard, text: 'Instant micro-loans & crop financing' },
      { icon: Megaphone, text: 'Buying by produce & produce advertising' },
      { icon: BarChart3, text: 'Revenue tracking & market prices' },
      { icon: Bell, text: 'Payment reminders & financial alerts' },
    ],
    downloads: '8,200+',
    rating: '4.7',
    color: '#D4FF00',
  },
];

const AppDownloadHub: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [activeApp, setActiveApp] = useState(0);
  const [showQR, setShowQR] = useState(false);

  const currentApp = apps[activeApp];

  return (
    <section id="apps" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/5 blur-[200px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#D4FF00]/[0.03] blur-[150px]" />


      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 mb-6">
            <Smartphone className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span className="text-[#D4FF00] text-xs font-medium uppercase tracking-wider">Products in the market</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Two Apps.{' '}
            <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">
              One Ecosystem.
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Download our mobile applications to manage your farm operations and finances
            from anywhere — even in areas with limited connectivity.
          </p>
        </div>

        {/* App Switcher Tabs */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-xl">
            {apps.map((app, i) => (
              <button
                key={app.id}
                onClick={() => setActiveApp(i)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeApp === i
                  ? 'bg-gradient-to-r from-[#2ECC71]/20 to-[#D4FF00]/10 text-white border border-[#2ECC71]/20 shadow-[0_0_20px_rgba(46,204,113,0.15)]'
                  : 'text-white/40 hover:text-white/60'
                  }`}
              >
                {app.name}
              </button>
            ))}
          </div>
        </div>

        {/* App Content */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-[60px] opacity-30 animate-glow-pulse"
                style={{ background: `radial-gradient(circle, ${currentApp.color}40, transparent)` }}
              />

              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[300px] rounded-[2.5rem] overflow-hidden border-2 border-white/[0.1] shadow-[0_30px_80px_rgba(0,0,0,0.6)] animate-float">
                <div className="relative aspect-[9/19]">
                  <img
                    src={currentApp.image}
                    alt={currentApp.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl" />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -left-4 sm:-left-12 top-1/4 animate-float-slow">
                <GlassCard className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-[#2ECC71]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/80 font-medium">{currentApp.downloads}</div>
                      <div className="text-[10px] text-white/40">Downloads</div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="absolute -right-4 sm:-right-12 bottom-1/3 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <GlassCard className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill={s <= 4 ? '#D4FF00' : '#D4FF0040'}>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-white/60 font-medium">{currentApp.rating}</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ color: currentApp.color, backgroundColor: `${currentApp.color}15`, border: `1px solid ${currentApp.color}25` }}
              >
                {activeApp === 0 ? <Smartphone className="w-3 h-3" /> : <CreditCard className="w-3 h-3" />}
                {currentApp.tagline}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{currentApp.name}</h3>
              <p className="text-base text-white/45 leading-relaxed">{currentApp.description}</p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {currentApp.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: `${currentApp.color}10`, border: `1px solid ${currentApp.color}15` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: currentApp.color }} />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{feature.text}</span>
                  <Check className="w-4 h-4 text-[#2ECC71]/40 ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* App Store */}
              <button className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:border-[#2ECC71]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/40 leading-none">Download on the</div>
                  <div className="text-sm font-semibold text-white leading-tight">App Store</div>
                </div>
              </button>

              {/* Google Play */}
              <button className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:border-[#2ECC71]/20 transition-all duration-300">
                <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/40 leading-none">Get it on</div>
                  <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                </div>
              </button>

              {/* QR Code Button */}
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.08] text-white/50 hover:text-white hover:border-[#2ECC71]/20 transition-all duration-300"
              >
                <QrCode className="w-5 h-5" />
                <span className="text-sm">QR Code</span>
              </button>
            </div>

            {/* QR Code Display */}
            {showQR && (
              <GlassCard className="p-6 max-w-xs animate-scale-in">
                <div className="text-center space-y-3">
                  <div className="w-32 h-32 mx-auto rounded-xl bg-white p-2">
                    <div className="w-full h-full bg-[#050505] rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-white/80" />
                    </div>
                  </div>
                  <p className="text-xs text-white/40">Scan to download {currentApp.name}</p>
                </div>
              </GlassCard>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <GlassCard className="p-8 sm:p-12 max-w-4xl mx-auto" hover>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to transform your farm?</h3>
                <p className="text-sm text-white/40">Join 12,000+ farmers already using Hurudza AI.</p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2ECC71] to-[#27ae60] text-[#050505] font-semibold rounded-xl shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:shadow-[0_0_50px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadHub;
