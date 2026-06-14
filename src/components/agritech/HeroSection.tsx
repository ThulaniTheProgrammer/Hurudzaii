import React, { useRef, useCallback, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Globe, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HERO_BG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780352194_df56cdce.png';

// ─── Idle Video Settings ───────────────────────────────────────────────────────
const IDLE_TIMEOUT_MS = 60000; // 60 seconds of no interaction
// ─────────────────────────────────────────────────────────────────────────────

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [demoModalOpen, setDemoModalOpen] = React.useState(false);
  const [textIndex, setTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  // ── Idle video state ──────────────────────────────────────────────────────
  const [videoActive, setVideoActive] = React.useState(false);
  const [videoVisible, setVideoVisible] = React.useState(false); // controls CSS opacity
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInteractingRef = useRef(false);
  // ─────────────────────────────────────────────────────────────────────────

  const animatedTexts = React.useMemo(() => [
    "African Agriculture data layer",
    "24/7 Multilingual AI Contact Center",
    "Farmers Flexible Payment System"
  ], []);

  // ── Typewriter effect ─────────────────────────────────────────────────────
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentFullText = animatedTexts[textIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      timeout = setTimeout(() => { }, 500);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, animatedTexts]);

  // ── Dismiss idle video & restart the idle timer ───────────────────────────
  const dismissVideo = useCallback(() => {
    setVideoVisible(false);
    // Wait for fade-out transition before unmounting video
    setTimeout(() => {
      setVideoActive(false);
    }, 700);
  }, []);

  const startIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setVideoActive(true);
      // Let the DOM mount the video element first, then fade in
      requestAnimationFrame(() => requestAnimationFrame(() => setVideoVisible(true)));
    }, IDLE_TIMEOUT_MS);
  }, []);

  const handleUserActivity = useCallback(() => {
    if (isInteractingRef.current) return;
    isInteractingRef.current = true;
    requestAnimationFrame(() => { isInteractingRef.current = false; });

    // If video is playing dismiss it
    if (videoVisible) {
      dismissVideo();
    }
    startIdleTimer();
  }, [videoVisible, dismissVideo, startIdleTimer]);

  // ── Attach activity listeners ─────────────────────────────────────────────
  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach(e => window.addEventListener(e, handleUserActivity, { passive: true }));
    startIdleTimer(); // kick off timer on mount

    return () => {
      events.forEach(e => window.removeEventListener(e, handleUserActivity));
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [handleUserActivity, startIdleTimer]);

  // ─────────────────────────────────────────────────────────────────────────

  const stats = [
    { icon: TrendingUp, value: '34%', label: 'Yield Increase', color: '#2ECC71' },
    { icon: Users, value: '21K+', label: 'Active Farmers', color: '#2ECC71' },
    { icon: Globe, value: '8', label: 'Provinces Covered', color: '#2ECC71' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background Layers ───────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Zimbabwean farmland"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* ── Idle Video Overlay ──────────────────────────────────────────────── */}
      {videoActive && (
        <div
          className="absolute inset-0 z-20"
          style={{
            opacity: videoVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            pointerEvents: videoVisible ? 'auto' : 'none',
          }}
        >
          {/* Dark gradient on top of video so text can still be readable */}
          <div className="absolute inset-0 bg-[#050505]/30 z-10" />

          {/* The video itself */}
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src="https://www.youtube.com/embed/2Z8iRmIlRN0?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=2Z8iRmIlRN0&modestbranding=1&playsinline=1"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>

          {/* "Tap to continue" hint */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 pointer-events-none">
            <div
              className="flex flex-col items-center gap-3"
              style={{
                opacity: videoVisible ? 1 : 0,
                transition: 'opacity 1s ease 1.2s',
              }}
            >
              <div className="text-white/40 text-xs uppercase tracking-[0.3em]">Move to continue</div>
              <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={() => { dismissVideo(); startIdleTimer(); }}
            className="absolute top-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 text-xs hover:text-white hover:border-white/20 transition-all duration-300"
            style={{
              opacity: videoVisible ? 1 : 0,
              transition: 'opacity 0.8s ease 1s',
            }}
          >
            <X className="w-3.5 h-3.5" />
            Skip
          </button>
        </div>
      )}

      {/* ── Floating Organic Shapes ─────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#2ECC71]/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#2ECC71]/[0.06] blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2ECC71]/5 blur-[150px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* ── Grid Pattern Overlay ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Hero Content ────────────────────────────────────────────────────── */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>

            {/* Badge — always visible */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
              <span className="text-[#2ECC71] text-sm font-medium">Digitizing Generational Wisdom v4.0</span>
            </div>

            {/* Headline — stays visible but dims during video */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight min-h-[130px] sm:min-h-[150px] lg:min-h-[180px]"
              style={{
                opacity: videoVisible ? 0.2 : 1,
                transition: 'opacity 0.8s ease',
              }}
            >
              <span className="text-white">Hurudza AI</span>
              <br />
              <span className="text-[#2ECC71] block mt-2">
                {displayText}
                <span className="inline-block w-[3px] h-[1em] bg-[#2ECC71] ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            {/* Subtitle — hides during video */}
            <p
              className="text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed"
              style={{
                opacity: videoVisible ? 0 : 1,
                transform: videoVisible ? 'translateY(12px)' : 'translateY(0)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              Hurudzai AI transforms generational african data and wisdom into actionable insights through localized intelligence.
            </p>

            {/* CTA Buttons — hides during video */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: videoVisible ? 0 : 1,
                transform: videoVisible ? 'translateY(16px)' : 'translateY(0)',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
              }}
            >
              <button
                onClick={() => onNavigate('apps')}
                className="group flex items-center gap-3 px-8 py-4 bg-[#2ECC71] text-[#050505] font-semibold rounded-xl shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:bg-[#27ae60] hover:shadow-[0_0_50px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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

            {/* Stats Row — hides during video */}
            <div
              className="flex flex-wrap gap-8 pt-4"
              style={{
                opacity: videoVisible ? 0 : 1,
                transform: videoVisible ? 'translateY(20px)' : 'translateY(0)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
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

          {/* Right Column - Hero Visual — hides during video */}
          <div
            className={`relative hidden lg:block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            style={{
              opacity: videoVisible ? 0 : undefined,
              transition: 'opacity 0.7s ease',
              animationDelay: '0.3s',
            }}
          >
            <div className="relative animate-float">
              <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-6">
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

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-xs text-white/40 mb-3">Weekly Yield Forecast</div>
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-t-md transition-all duration-1000"
                            style={{
                              height: `${h}%`,
                              background: i === 5 ? '#2ECC71' : 'rgba(46,204,113,0.2)',
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
                    <div className="absolute top-8 left-1/3 w-3 h-3 rounded-full bg-[#2ECC71]/60 animate-pulse" />
                    <div className="absolute top-12 right-1/3 w-2 h-2 rounded-full bg-[#2ECC71]/60 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-10 left-1/2 w-2.5 h-2.5 rounded-full bg-[#2ECC71]/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#2ECC71] animate-bounce" />
          </div>
        </div>
      </div>

      {/* ── Demo Modal ──────────────────────────────────────────────────────── */}
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
              <div className="aspect-video rounded-xl overflow-hidden bg-black border border-white/[0.06]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2Z8iRmIlRN0?autoplay=1&rel=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hurudza AI Demo"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
