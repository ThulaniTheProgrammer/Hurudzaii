import React, { useState } from 'react';
import { Cpu, Droplets, Satellite, BarChart3, Shield, Zap, Radio, CloudRain, Activity, Headphones } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GlassCard from './GlassCard';

const DRONE_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780414741_a4487a21.jpg';
const SENSOR_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780437455_c24a902a.png';
const FARMER_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780393214_132d5b49.png';

const features = [
  {
    icon: Cpu,
    title: 'AI Crop Diagnostics',
    description: 'Machine learning models trained on 2M+ images of Zimbabwean crops detect diseases 14 days before visible symptoms.',
    stat: '98.7% Accuracy',
    color: '#2ECC71',
  },
  {
    icon: Satellite,
    title: 'Satellite Monitoring',
    description: 'Multi-spectral satellite imagery provides NDVI analysis, crop health mapping, and growth tracking across all zones.',
    stat: 'Daily Updates',
    color: '#D4FF00',
  },
  {
    icon: BarChart3,
    title: 'Farm Management Dashboard',
    description: 'Comprehensive web-based platform to oversee all farm operations, track expenses, and manage personnel in one place.',
    stat: 'All-in-One Control',
    color: '#D4FF00',
  },
  {
    icon: Shield,
    title: 'ZundePay Finance',
    description: 'Integrated Hurudza mobile app features for buying by produce, produce advertising, micro-loans, and direct market payments.',
    stat: '$2.4M Disbursed',
    color: '#2ECC71',
  },
  {
    icon: Activity,
    title: 'Livestock Tracking',
    description: 'Real-time health monitoring and GPS tracking for your herds using low-power IoT wearables.',
    stat: '24/7 Monitoring',
    color: '#D4FF00',
  },
  {
    icon: Headphones,
    title: 'AI Contact Center',
    description: 'AI-powered farmers contact center providing instant, multilingual agricultural advice and technical support via WhatsApp & SMS.',
    stat: '<5s Response',
    color: '#2ECC71',
  },
  {
    icon: Zap,
    title: 'Real-time Alerts',
    description: 'Instant notifications for weather events, pest outbreaks, optimal harvest windows, and market price changes.',
    stat: '<30s Latency',
    color: '#D4FF00',
  },
];

const HurudzaIcon = (props: any) => <img src="https://raw.githubusercontent.com/chandy-profipath/website/main/public/hurudza.png" alt="Hurudza" {...props} className={(props.className || '') + " object-contain"} />;

const techStack = [
  { icon: HurudzaIcon, label: 'Crop AI', desc: 'TensorFlow models' },
  { icon: Radio, label: 'IoT Network', desc: 'LoRaWAN sensors' },
  { icon: CloudRain, label: 'Weather API', desc: 'Hyperlocal data' },
  { icon: Satellite, label: 'Satellite', desc: 'Sentinel-2 imagery' },
];

const FeaturesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/5 blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4FF00]/[0.03] blur-[150px]" />


      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 mb-6">
            <span className="text-[#2ECC71] text-xs font-medium uppercase tracking-wider">Core Technology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Precision Agriculture,{' '}
            <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">
              Perfected
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Our integrated platform combines AI, IoT sensors, satellite imagery, and financial tools
            to deliver end-to-end agricultural intelligence for Zimbabwean farms.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {features.map((feature, i) => (
            <GlassCard
              key={i}
              hover
              className="p-6 group"
              onClick={() => setActiveFeature(i)}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(46,204,113,0.2)]"
                  style={{ backgroundColor: `${feature.color}15`, border: `1px solid ${feature.color}25` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ color: feature.color, backgroundColor: `${feature.color}10` }}
                >
                  {feature.stat}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2ECC71] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
              {activeFeature === i && (
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <button className="text-sm text-[#2ECC71] font-medium hover:underline flex items-center gap-1">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className={`grid lg:grid-cols-3 gap-5 mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <GlassCard className="lg:col-span-2 overflow-hidden group" hover>
            <div className="relative h-72 sm:h-80">
              <img src="/satellite_mapping.png" alt="Satellite Mapping" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-[#D4FF00] font-medium uppercase tracking-wider mb-2">Satellite Mapping</div>
                <h3 className="text-2xl font-bold text-white mb-2">Moisture Stress & Crop Health Analysis</h3>
                <p className="text-sm text-white/50">Multi-spectral satellite imagery provides deep insights into soil moisture levels and crop vitality.</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden group" hover>
            <div className="relative h-72 sm:h-80">
              <img src="/livestock_tracking.png" alt="Livestock Tracking" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-[#2ECC71] font-medium uppercase tracking-wider mb-2">IoT Wearables</div>
                <h3 className="text-xl font-bold text-white mb-2">Livestock Tracking</h3>
                <p className="text-sm text-white/50">Real-time health monitoring and GPS tracking for your herds.</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Tech Stack Row */}
        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <GlassCard className="p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Powered by Cutting-Edge Technology</h3>
                <p className="text-sm text-white/40 mt-1">Our integrated stack delivers real-time intelligence at scale.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#2ECC71]/20 transition-all cursor-default">
                    <tech.icon className="w-4 h-4 text-[#2ECC71]" />
                    <div>
                      <div className="text-xs font-medium text-white/70">{tech.label}</div>
                      <div className="text-[10px] text-white/30">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
