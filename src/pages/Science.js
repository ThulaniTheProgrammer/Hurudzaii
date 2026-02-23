import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  Dna, Cpu, Database, Network, Microscope,
  FlaskConical, Globe2, Layers, BarChart3,
  ShieldCheck, ArrowRight, Zap, Sparkles
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const techStack = [
  {
    icon: Database,
    title: "Regional Knowledge Graph",
    desc: "A proprietary database of over 400 local soil types, moisture profiles, and 30 years of localized weather patterns.",
    color: "emerald"
  },
  {
    icon: Network,
    title: "LLM Dialect Training",
    desc: "Custom-trained linguistic models specifically calibrated for agricultural terminology in Shona, Ndebele, and Kalanga.",
    color: "blue"
  },
  {
    icon: Layers,
    title: "Multi-Modal Inference",
    desc: "Processing satellite imagery, on-field sensor data, and farmer chat inputs simultaneously for high-precision advisory.",
    color: "purple"
  },
  {
    icon: ShieldCheck,
    title: "Validated Precision",
    desc: "Our models are cross-validated with regional agronomists and institutional headers to ensure zero-hallucination outputs.",
    color: "amber"
  },
];

const Science = () => {
  return (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/Leaf-rust-detection-in-precision-agriculture.png" alt="Microscope view" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-transparent to-[#05150E]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-8 md:mb-10">
              <Microscope className="w-4 h-4" />
              Agronomic Intelligence Core
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-[6.5rem] font-black leading-tight md:leading-[0.85] tracking-tighter mb-8 md:mb-10 uppercase">
              The <span className="text-emerald-400">Architecture</span> of Yield.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/40 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
              We've spent years building the localized models and knowledge graphs that make precision agriculture accessible to the African smallholder.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Technical Grid ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-700 flex flex-col h-full"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] md:rounded-[1.5rem] bg-[#05150E] flex items-center justify-center mb-8 md:mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <tech.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight group-hover:text-emerald-400 transition-colors leading-[1.1]">{tech.title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed flex-grow italic">{tech.desc}</p>
                <div className="pt-8 mt-8 md:mt-10 border-t border-white/5 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-px bg-emerald-500" />
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Dive: The Knowledge Graph ── */}
      <section className="py-32 px-6 bg-white text-[#05150E] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Database className="w-3.5 h-3.5" />
                The Core Engine
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-10 uppercase">Building the <br /><span className="text-emerald-600 underline">Agri-Graph.</span></h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-10">
                Traditional AI models struggle with the nuances of African smallholder farming. Our "Agri-Graph" maps the relationship between thousands of data points including local soil biochemistry, seed performance, and hyper-local micro-climates.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: FlaskConical, title: "Biochemical Mapping", desc: "Data from over 50,000 soil test results mapped to GPS coordinates." },
                  { icon: Dna, title: "Seed Optimisation", desc: "Matching specific seed varieties to the exact nutrient density of your plot." },
                  { icon: Globe2, title: "Hyper-Local Weather", desc: "5km-radius precision forecasting for planting window alerts." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm"><item.icon className="w-5 h-5" /></div>
                    <div>
                      <div className="font-black text-lg mb-1 uppercase tracking-tight">{item.title}</div>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-10 py-5 rounded-[2rem] bg-[#05150E] text-white font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all flex items-center gap-4 shadow-xl active:scale-95">
                Download Technical Whitepaper <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="bg-[#05150E] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden text-center"
              >
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-[0_20px_40px_rgba(16,185,129,0.4)]">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Model Performance</h4>
                  <div className="space-y-4 mb-8">
                    {[
                      { label: "Prediction Accuracy", val: "94.2%", color: "emerald-400" },
                      { label: "Recommendation Confidence", val: "89.8%", color: "blue-400" },
                      { label: "Dialect Comprehension", val: "97.1%", color: "purple-400" }
                    ].map((stat, i) => (
                      <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</span>
                        <span className={`text-xl font-black text-${stat.color}`}>{stat.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Active nodes in 3 countries</p>
                  </div>
                </div>
                {/* Decorative connections */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section className="py-32 bg-gray-50 text-[#05150E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              Real World Validation
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">Science <span className="text-emerald-600 italic">on the</span> Field.</h2>
            <p className="text-gray-400 text-lg font-medium max-w-xl">Our models are constantly refined by the very farmers who use them — creating a localized reinforcement learning loop.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 rounded-[4rem] overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-white p-12 md:p-20 flex flex-col gap-10">
              <BarChart3 className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Yield Optimisation</h3>
                <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
                  By predicting the exact nutrient requirements for a specific GPS coordinate, we help farmers apply precisely what is needed, reducing waste and increasing harvest tonnage.
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#05150E] border-t border-gray-50 pt-8">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  +35% average yield growth
                </div>
              </div>
            </div>
            <div className="bg-white p-12 md:p-20 flex flex-col gap-10">
              <Globe2 className="w-12 h-12 text-emerald-600" />
              <div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Climate Adaptation</h3>
                <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
                  Our models adjust recommendations in real-time as regional climate data points change, allowing farmers to pivot their strategy mid-season if a drought or flood is predicted.
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#05150E] border-t border-gray-50 pt-8">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Risk mitigation first approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[#05150E] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9]">Innovate <br /><span className="text-emerald-400 underline decoration-8 underline-offset-[-2px]">with Us.</span></h2>
            <p className="text-white/40 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">We are open for academic collaborations and institutional research partnerships.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/docs" className="px-12 py-6 rounded-3xl bg-white text-[#05150E] font-black text-lg uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-2xl active:scale-95">
                Read API Docs
              </a>
              <a href="/contact" className="px-12 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                Lab Inquiries
              </a>
            </div>
          </motion.div>
        </div>

        {/* Abstract lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-white/5" />
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" />
      </section>

      <Footer />
    </div>
  );
};

export default Science;
