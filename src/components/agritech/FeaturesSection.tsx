import React from 'react';
import { Cpu, Satellite, Radio, CloudRain, Activity, Headphones, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GlassCard from './GlassCard';
const DRONE_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780414741_a4487a21.jpg';
const SENSOR_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780437455_c24a902a.png';
const FARMER_IMG = 'https://d64gsuwffb70l.cloudfront.net/699b38a68f8f88114c4317ed_1771780393214_132d5b49.png';
// All demo buttons link to the contact section, matching the business card.
const features = [
  {
    icon: Headphones,
    audience: 'For Farmers',
    title: 'Your Farm. Connected to Possibility.',
    description: 'From the first planting decision to the final payment, access AI advice in your language, manage your farm and explore financial services through ZundePay—all within the Hurudza ecosystem.',
    image: FARMER_IMG,
    tags: ['AI Advice', 'Farm Management', 'ZundePay'],
    action: 'Request a demo',
    href: '#contact',
  },
  {
    icon: Activity,
    audience: 'For Businesses',
    title: 'Intelligence That Moves Your Business Forward.',
    description: 'Turn agricultural data into decisions that drive your business. Access crop and climate insights, monitor farm operations and plan with a clearer view of what is happening on the ground.',
    image: DRONE_IMG,
    tags: ['Crop Insights', 'Climate Intelligence', 'Operations'],
    action: 'Request a demo',
    href: '#contact',
  },
  {
    icon: Cpu,
    audience: 'For Developers',
    title: 'Build What African Agriculture Needs Next.',
    description: 'Bring African agricultural intelligence into your applications. Use Hurudza’s APIs and locally trained AI models to create solutions built around African crops, languages and farming realities.',
    image: SENSOR_IMG,
    tags: ['Developer API', 'AI Models', 'African Data'],
    action: 'Request a demo',
    href: '#contact',
  },
];
const HurudzaIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img src="/hurudza.png" alt="Hurudza" {...props} className={(props.className || '') + " object-contain"} />;
const techStack = [
  { icon: HurudzaIcon, label: 'Crop AI', desc: 'TensorFlow models' },
  { icon: Radio, label: 'IoT Network', desc: 'LoRaWAN sensors' },
  { icon: CloudRain, label: 'Weather API', desc: 'Hyperlocal data' },
  { icon: Satellite, label: 'Satellite', desc: 'Sentinel-2 imagery' },
];
const FeaturesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <section id="solutions" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/5 blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4FF00]/[0.03] blur-[150px]" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-5xl mx-auto mb-12 sm:mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl lg:pt-32 pt-6 sm:text-4xl lg:text-5xl leading-tight tracking-tight font-bold text-gray-900 dark:text-gray-100 mb-6">
           African Agriculture.{' '}
            <span className="text-[#2ECC71]">
            Sovereign AI Ecosystem.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
Rooted in African knowledge. Built for African realities. Hurudza brings farming advice, business insights, developer tools and financial services together—connecting the agricultural economy and powering a more productive, climate-resilient future.
          </p>
        </div>
        {/* Three audience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 lg:mb-24">
          {features.map((feature) => (
            <article
              key={feature.audience}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                <img
                  src={feature.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full border border-white/25 bg-emerald-950/80 px-4 py-2 text-white backdrop-blur-md">
                  <feature.icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest">{feature.audience}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white lg:min-h-[90px]">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
                <ul className="mb-7 mt-auto flex list-none flex-wrap gap-2 p-0" aria-label={`${feature.audience} capabilities`}>
                  {feature.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={feature.href}
                  className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-emerald-900 hover:to-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
                >
                  {feature.action}
                  <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        {/* Visual Showcase */}
        <div className={`grid lg:grid-cols-3 gap-5 mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <GlassCard className="lg:col-span-2 overflow-hidden group" hover>
            <div className="relative h-72 sm:h-80">
              <img src="/satellite_mapping.png" alt="Satellite Mapping" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white/40 dark:via-gray-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-[#D4FF00] font-medium uppercase tracking-wider mb-2">Satellite Mapping</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Moisture Stress & Crop Health Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Multi-spectral satellite imagery provides deep insights into soil moisture levels and crop vitality.</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="overflow-hidden group" hover>
            <div className="relative h-72 sm:h-80">
              <img src="/livestock_tracking.png" alt="Livestock Tracking" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-white/40 dark:via-gray-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-[#2ECC71] font-medium uppercase tracking-wider mb-2">IoT Wearables</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Livestock Tracking</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Real-time health monitoring and GPS tracking for your herds.</p>
              </div>
            </div>
          </GlassCard>
        </div>
        {/* Tech Stack Row */}
        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <GlassCard className="p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Powered by Cutting-Edge Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Our integrated stack delivers real-time intelligence at scale.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#2ECC71]/20 transition-all cursor-default">
                    <tech.icon className="w-4 h-4 text-[#2ECC71]" />
                    <div>
                      <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.label}</div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">{tech.desc}</div>
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
