import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Languages,
  ShieldAlert,
  ChevronRight,
  Zap,
  Signal,
  Network,
  TrendingUp,
  Cpu,
  Bot,
  Sparkles,
  Smartphone,
  Download,
  Sprout,
  Database
} from "lucide-react";
import { MobileHeroSection } from "./MobileHeroSection";

const HomeFieldImg = "/Futuristic-farm-at-dawn.png";
const ScienceDetailImg = "/Leaf-rust-detection-in-precision-agriculture.png";

const features = [
  {
    icon: Languages,
    title: "Multilingual Assistant Engine",
    description: "Specialized assistant engine trained on african agricultural knowledge and practices that can answer questions in local african languages.",
    color: "bg-emerald-500",
  },
  {
    icon: Database,
    title: "The African Knowledge Graph",
    description: "Hurudzai AI is building the largest proprietary database of soil types,crop types,and agricultural practices in africa.This make us the most knowledgeable ai agent in africa agricuture.",
    color: "bg-blue-500",
  },
  {
    icon: Cpu,
    title: "Real time market clearing house",
    description: "Hurudzai AI layer connects thousands of farmers directly to high value markets in africa automating the logistics and pricing that middlemen usually steal",
    color: "bg-amber-500",
    detailImg: ScienceDetailImg
  },
  {
    icon: Bot,
    title: "Agritech API",
    description: "Full agronomy support in Shona, Ndebele, and English. No tech-savviness required.",
    color: "bg-purple-500",
  },
];

export const HeroSection = ({ heroView, setHeroView }) => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const floatingAnim = {
    y: ["0%", "-5%", "0%"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05150E] pt-32 pb-20">
      {/* Animated Background Image */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="absolute inset-0 z-0"
      >
        <img src={HomeFieldImg} alt="Field" className="w-full h-full object-cover opacity-30 brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05150E]/80 via-transparent to-[#05150E]" />

        {/* Decorative tech grid overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:min-h-[600px] flex flex-col justify-center"
          >
            {/* Premium Toggle Switch */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem]">
                <button
                  onClick={() => setHeroView("platform")}
                  className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${heroView === "platform" ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20" : "text-white/40 hover:text-white"}`}
                >
                  Platform Core
                </button>
                <button
                  onClick={() => setHeroView("mobile")}
                  className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${heroView === "mobile" ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20" : "text-white/40 hover:text-white"}`}
                >
                  Mobile App
                </button>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {heroView === "platform" ? (
                <motion.div
                  key="platform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-10 backdrop-blur-xl">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full relative z-10" />
                    </div>
                    <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-[0.2em]">Digitizing Generational Wisdom v4.0</span>
                  </motion.div>

                  <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 tracking-tight">
                    Agriculture <br />
                    <span className="relative inline-block mt-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
                        Data Layer
                      </span>
                      <div className="absolute -right-12 top-0 text-emerald-500/30">
                        <Sparkles className="w-8 h-8 animate-pulse" />
                      </div>
                    </span>
                    <br />
                    For Africa
                  </h1>

                  <div className="flex flex-wrap gap-4 mb-10">
                    {[
                      { icon: Zap, text: "v4.0 AI Kernel", color: "text-amber-400" },
                      { icon: Languages, text: "Shona & Ndebele", color: "text-blue-400" },
                      { icon: Signal, text: "Offline SMS", color: "text-emerald-400" },
                      { icon: ShieldAlert, text: "Potraz Regulated", color: "text-rose-400" }
                    ].map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-colors cursor-default">
                        <h.icon className={`w-4 h-4 ${h.color}`} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{h.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xl text-emerald-100/60 mb-14 max-w-lg leading-relaxed font-medium">
                    Hurudzai AI transforms generational african data and wisdom into actionable insights through localized intelligence.
                  </p>

                  <div className="flex flex-wrap items-center gap-8">
                    <a href="/request-demo" className="group px-10 py-5 rounded-2xl bg-white text-[#05150E] font-black text-lg hover:bg-emerald-50 transition-all flex items-center gap-4 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                      Get Started <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <MobileHeroSection />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Graphics */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            <AnimatePresence mode="wait">
              {heroView === "platform" ? (
                <motion.div
                  key="platform-graphic"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                  className="relative z-10"
                >
                  <motion.div animate={floatingAnim} className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />

                    <div className="relative overflow-hidden group/carousel">
                      <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 py-6"
                        style={{ width: "fit-content" }}
                      >
                        {[...features, ...features].map((f, i) => (
                          <div
                            key={i}
                            className="w-[400px] flex-shrink-0 p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-start"
                          >
                            <div className={`p-5 rounded-2xl bg-[#05150E] border border-white/5 mb-8 shadow-xl`}>
                              <f.icon className={`w-10 h-10 ${f.color.replace('bg-', 'text-')}`} />
                            </div>
                            <div className="font-black text-white text-2xl leading-tight mb-6 pr-4">{f.title}</div>
                            <div className="text-base text-white/40 leading-relaxed font-medium mb-8 line-clamp-3">{f.description}</div>

                            <div className="mt-auto w-full flex items-center justify-between">
                              <div className="flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                                <Smartphone className="w-4 h-4" />
                                Mobile Enabled
                              </div>
                              <div className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                AI Core
                              </div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#05150E] to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#05150E] to-transparent z-10 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Floating stat card */}
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-emerald-50/50 z-20">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Yield Increase</div>
                      <div className="text-2xl font-black text-[#05150E]">+45% <span className="text-emerald-500 text-sm font-bold">Avg</span></div>
                    </div>
                  </div>

                  {/* Second floating card */}
                  <div className="absolute -top-12 -right-8 bg-emerald-600 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 border border-white/10 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        <Network className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] uppercase font-bold text-emerald-50 tracking-widest">Nodes Active</div>
                    </div>
                    <div className="text-2xl font-black text-white">1,420 <span className="w-2 h-2 bg-emerald-300 rounded-full inline-block ml-1 animate-pulse" /></div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-emerald-500/10 blur-[180px] -z-10 rounded-full opacity-50" />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};