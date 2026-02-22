import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  Heart, Shield, Zap, Target, History, Users,
  Lightbulb, Globe2, Leaf, Award, MapPin,
  ChevronRight, Sparkles, ArrowRight
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const values = [
  {
    icon: Globe2,
    title: "Language Inclusivity",
    desc: "We believe technology is useless if you can't speak to it. Our priority is supporting regional dialects first.",
    color: "emerald"
  },
  {
    icon: Shield,
    title: "Local Data Sovereignty",
    desc: "African agricultural data belongs in Africa. We comply with all national ICT and data regulations.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Instant Accessibility",
    desc: "Built for the real world—works on basic phones via SMS and WhatsApp with zero data requirements.",
    color: "amber"
  },
  {
    icon: Target,
    title: "Precision Impact",
    desc: "Every advisory we give is backed by machine learning, targeting a 30% minimum yield increase.",
    color: "purple"
  },
];

const timeline = [
  { year: "2023", event: "Concept born at the Kadoma Innovation Hub.", desc: "Initial tests of a Shona-speaking agricultural chatbot." },
  { year: "2024", event: "Regional Beta Launch.", desc: "800 farmers in Mashonaland Central onboarded to the SMS pilot." },
  { year: "2025", event: "Enterprise Integration.", desc: "Partnered with national banks and ZimTrade for market clearing." },
  { year: "2026", event: "Africa AI Summit Showcase.", desc: "Expansion into South Africa and Botswana markets." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Hero section ── */}
      <section className="pt-48 pb-32 px-6 bg-[#05150E] relative overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/Futuristic-farm-at-dawn.png" alt="Hero" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-[#05150E]/80 to-[#05150E]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Sparkles className="w-4 h-4" />
              The Future of African Farming
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase">
              Rooted in <br /><span className="text-emerald-400">Innovation.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-emerald-50/40 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed italic">
              "Building the brain for the African smallholder farmer — one dialect at a time."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-32 px-6 relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-24 flex flex-col justify-center gap-8"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight uppercase">Our <br /><span className="text-emerald-600">Mission.</span></h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                To democratise high-end agricultural intelligence for every farmer in Africa, regardless of their technology literacy, language, or internet connectivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 md:p-24 flex flex-col justify-center gap-8"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight uppercase">Our <br /><span className="text-blue-600">Vision.</span></h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                To become the primary interface between the African farmer and the global economy, clearing the path for food security and institutional growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Hurudzai Story ── */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden border-[12px] border-emerald-50 shadow-2xl relative z-10">
                <img src="/High-tech-agriculture-at-sunrise.png" alt="Story" className="w-full h-auto" />
              </div>
              {/* Visual badges */}
              <div className="absolute -top-12 -right-12 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-black">10k</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Farmers Active</span>
              </div>
              {/* Background flare */}
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <History className="w-3.5 h-3.5" />
                Our Origin Story
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-8 uppercase italic">Born in the <br /><span className="text-emerald-600">Innovation Hub.</span></motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-500 text-xl leading-relaxed mb-10 font-medium">
                Hurudzai AI didn't start in a boardroom. It started in a laboratory at the Chinhoyi University of Technology (CUT), born from a simple question: "Why can't farmers talk to their soil?"
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                By mapping regional soil types and building a speech engine for local languages, we created a system that feels more like a knowledgeable neighbour than a tech platform.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-4">
                <button className="px-10 py-5 rounded-[2rem] bg-[#05150E] text-white font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all flex items-center gap-4 active:scale-95 shadow-xl">
                  Our Partners <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              Our Core DNA
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">Values that <br /><span className="text-emerald-600">drive us.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-10 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                  <v.icon className="w-7 h-7 text-[#05150E] group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight group-hover:text-emerald-700 transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed flex-grow italic">{v.desc}</p>
                <div className="pt-8 border-t border-gray-50 mt-10 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <div className="w-6 h-1 bg-emerald-200 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">The <span className="text-emerald-600">Journey</span> so far.</h2>
            <p className="text-gray-400 font-medium">Milestones from seed to national impact.</p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center pt-2">
                  <div className="w-16 h-16 rounded-full bg-[#05150E] text-white flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-emerald-600 transition-colors shadow-xl">
                    {item.year}
                  </div>
                  {i !== timeline.length - 1 && <div className="w-px h-full bg-gray-100 mt-4 group-hover:bg-emerald-200 transition-colors" />}
                </div>
                <div className="pb-12">
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-emerald-700 transition-colors">{item.event}</h4>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all font-black text-[10px] uppercase tracking-widest">
                    View Archive <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[#05150E] overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9]">Join the <br /><span className="text-emerald-400 underline decoration-8 underline-offset-[-2px]">Movement.</span></h2>
            <p className="text-emerald-100/40 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">We are always looking for visionary partners and team members to help us scale.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="px-12 py-6 rounded-3xl bg-emerald-600 text-white font-black text-lg uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-2xl active:scale-95">
                Partner with Us
              </a>
              <a href="/request-demo" className="px-12 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                Careers Hub
              </a>
            </div>
          </motion.div>
        </div>
        {/* Background nodes */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
      </section>

      <Footer />
    </div>
  );
};

export default About;
