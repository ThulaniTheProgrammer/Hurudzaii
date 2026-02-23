import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HERO_BG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780352194_df56cdce.png';

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [demoModalOpen, setDemoModalOpen] = React.useState(false);

  const stats = [
    { icon: TrendingUp, value: '340%', label: 'Yield Increase', color: '#2ECC71' },
    { icon: Users, value: '12K+', label: 'Active Farmers', color: '#D4FF00' },
    { icon: Globe, value: '8', label: 'Provinces Covered', color: '#2ECC71' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Zimbabwean farmland"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#2ECC71]/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#D4FF00]/[0.08] blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2ECC71]/5 blur-[150px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
              <span className="text-[#2ECC71] text-sm font-medium">Agriculture 5.0 — Now in Zimbabwe</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              <span className="text-white">Farming</span>
              <br />
              <span className="text-white">Reimagined</span>
              <br />
              <span className="bg-gradient-to-r from-[#2ECC71] via-[#D4FF00] to-[#2ECC71] bg-clip-text text-transparent">
                with AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed">
              Empowering Zimbabwean farmers with precision agriculture, real-time analytics, and smart financial tools. From seed to market — powered by data.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('apps')}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2ECC71] to-[#27ae60] text-[#050505] font-semibold rounded-xl shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:shadow-[0_0_50px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white font-medium rounded-xl hover:bg-white/[0.08] hover:border-[#2ECC71]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.1] flex items-center justify-center group-hover:bg-[#2ECC71]/20 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className={`relative hidden lg:block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Floating Dashboard Card */}
            <div className="relative animate-float">
              <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#2ECC71]" />
                    <span className="text-white/80 text-sm font-medium">Farm Dashboard — Live</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Soil Moisture', value: '72%', trend: '+5%' },
                      { label: 'Temperature', value: '28°C', trend: '-2°C' },
                      { label: 'Crop Health', value: '94%', trend: '+8%' },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-[10px] text-white/40 uppercase tracking-wider">{item.label}</div>
                        <div className="text-xl font-bold text-white mt-1">{item.value}</div>
                        <div className="text-xs text-[#2ECC71] mt-0.5">{item.trend}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Bars */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-xs text-white/40 mb-3">Weekly Yield Forecast</div>
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-t-md transition-all duration-1000"
                            style={{
                              height: `${h}%`,
                              background: i === 5 ? 'linear-gradient(to top, #2ECC71, #D4FF00)' : 'rgba(46,204,113,0.2)',
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                          <span className="text-[9px] text-white/30">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map Preview */}
                  <div className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a1a0f] to-[#050505] border border-white/[0.04]">
                    <img
                      src="https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780453440_244aff31.jpg"
                      alt="Farm satellite view"
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
                      <span className="text-[11px] text-white/60">3 Active Zones</span>
                    </div>
                    {/* Animated dots on map */}
                    <div className="absolute top-8 left-1/3 w-3 h-3 rounded-full bg-[#2ECC71]/60 animate-pulse" />
                    <div className="absolute top-12 right-1/3 w-2 h-2 rounded-full bg-[#D4FF00]/60 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-10 left-1/2 w-2.5 h-2.5 rounded-full bg-[#2ECC71]/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -right-6 top-16 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="px-4 py-3 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#2ECC71]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#2ECC71]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/80 font-medium">Yield Alert</div>
                      <div className="text-[10px] text-[#2ECC71]">+23% above forecast</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#2ECC71] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setDemoModalOpen(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.1] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-[#2ECC71] ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-white">Platform Demo</h3>
              <p className="text-white/50 max-w-md mx-auto">
                See how Hurudza AI is transforming agriculture with AI-powered insights, real-time monitoring, and smart financial tools.
              </p>
              <div className="aspect-video rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#2ECC71]/20 flex items-center justify-center cursor-pointer hover:bg-[#2ECC71]/30 transition-colors">
                    <Play className="w-6 h-6 text-[#2ECC71] ml-1" />
                  </div>
                  <p className="text-sm text-white/30">Demo video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
