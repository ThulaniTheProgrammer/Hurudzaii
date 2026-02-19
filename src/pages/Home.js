import React, { useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Droplets,
  ShieldAlert,
  Mic2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Leaf,
  X,
  ChevronRight,
  Zap,
  Award,
  Tv,
  Calendar,
  Newspaper,
  ExternalLink,
  Tractor,
  Layout,
  Monitor,
  Database,
  Languages,
  BarChart3,
  Cpu,
  Bot,
  Sparkles,
  Network,
  Code2,
  Fingerprint,
  TrendingUp,
  Smartphone,
  Download,
  Share2,
  Signal
} from "lucide-react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import PreHeader from "../components/preheader/preheader";

// Image paths from public folder
const FeatureInfographic = "/High-tech-agriculture-at-sunrise.png";
const HomeFieldImg = "/Futuristic-farm-at-dawn.png";
const HomeFarmerImg = "/Farm-field-nutrient-analysis-at-sunset.png";
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
    icon: BarChart3,
    title: "Real time market clearing house",
    description: "Hurudzai AI layer connects thousands of farmers directly to high value markets in africa automating the logistics and pricing that middlemen usually steal",
    color: "bg-amber-500",
    detailImg: ScienceDetailImg
  },
  {
    icon: Code2,
    title: "Agritech API",
    description: "Full agronomy support in Shona, Ndebele, and English. No tech-savviness required.",
    color: "bg-purple-500",
  },
];

const Home = () => {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [heroView, setHeroView] = React.useState("platform"); // "platform" | "mobile"
  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setIsModalOpen(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are Hurudzai AI, a helpful agricultural assistant for African farmers. Keep answers concise and actionable." },
            { role: "user", content: query },
          ],
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      setResult(data?.choices?.[0]?.message?.content || "Please contact support for a demo account.");
    } catch (e) {
      setResult("Demo mode: Please request a full demo account to unlock real-time agricultural insights.");
    }
    setLoading(false);
  };

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
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">
      <PreHeader />
      <Header />

      {/* Hero Section */}
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
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-xl">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full relative z-10" />
                      <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em]">Now live on Google Play</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 tracking-tight">
                      Intelligence <br />
                      <span className="relative inline-block mt-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-blue-200">
                          In Your Pocket
                        </span>
                      </span>
                      <br />
                      Anywhere.
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-10">
                      {[
                        { icon: Smartphone, text: "Zero Data Mode", color: "text-blue-400" },
                        { icon: Mic2, text: "Voice Assistance", color: "text-emerald-400" },
                        { icon: Share2, text: "Instant Export", color: "text-purple-400" },
                        { icon: Zap, text: "Real-time Sync", color: "text-amber-400" }
                      ].map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-colors cursor-default">
                          <h.icon className={`w-4 h-4 ${h.color}`} />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">{h.text}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xl text-emerald-100/60 mb-14 max-w-lg leading-relaxed font-medium">
                      The Hurudzai Mobile Experience brings enterprise agritech to any device, optimized for high performance even on low-bandwidth networks.
                    </p>

                    <div className="flex flex-wrap items-center gap-8">
                      <a href="https://play.google.com/store/apps/details?id=com.hurudza.ai" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 rounded-2xl bg-white text-[#05150E] font-black text-lg hover:bg-emerald-50 transition-all flex items-center gap-4 shadow-2xl">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                          <span className="text-[10px] uppercase tracking-tighter text-emerald-400 mb-1">Download Now</span>
                          <span>Google Play Store</span>
                        </div>
                      </a>
                    </div>
                  </motion.div>
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
                ) : (
                  <motion.div
                    key="mobile-graphic"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    className="relative z-10 flex justify-center w-full"
                  >
                    <div className="relative w-[320px] h-[640px] bg-[#05150E] rounded-[4rem] border-[12px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                      <div className="absolute inset-0 p-8 pt-12 flex flex-col gap-8 bg-[#05150E]">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <Bot className="w-6 h-6 text-emerald-500" />
                          </div>
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#05150E] bg-emerald-900" />)}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="h-2 w-24 bg-emerald-500/30 rounded-full" />
                          <h4 className="text-2xl font-black text-white leading-tight">Farmer <br /><span className="text-emerald-500">Dashboard</span></h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { label: 'Soil Health', val: '98%', color: 'border-emerald-500/50' },
                            { label: 'Moisture', val: '42%', color: 'border-blue-500/50' },
                            { label: 'Market', val: 'High', color: 'border-amber-500/50' },
                            { label: 'Pests', val: 'None', color: 'border-rose-500/50' }
                          ].map((stat, i) => (
                            <div key={i} className={`p-4 rounded-3xl bg-white/[0.03] border ${stat.color} flex flex-col gap-2`}>
                              <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
                              <span className="text-lg font-black text-white">{stat.val}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-auto p-5 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl overflow-hidden relative">
                          <div className="absolute top-0 right-0 p-4 opacity-20">
                            <TrendingUp className="w-12 h-12 text-white" />
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-2">System AI Prediction</p>
                          <p className="text-sm font-bold text-white leading-tight">Optimizing yield for next harvest cycle...</p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-12 top-20 p-6 rounded-3xl bg-white shadow-2xl border border-emerald-50 flex flex-col gap-2 z-30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><Smartphone className="w-4 h-4" /></div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile Optimized</span>
                      </div>
                      <span className="text-xl font-black text-[#05150E]">Zero Data Mode</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Bulleting Strip */}
      <div className="bg-[#05150E] border-y border-white/5 py-10 overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05150E] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05150E] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap w-fit"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              {[
                { label: "A.I Contact Centre", icon: Sparkles },
                { label: "Download Hurudzai App", icon: Download },
                { label: "Localized AI Models", icon: Cpu },
                { label: "Google Play Store", icon: Smartphone },
                { label: "Field-to-Market Data", icon: Network },
                { label: "Precision Agronomy", icon: Sprout },
                { label: "SMS Integrated v4.0", icon: Bot },
                { label: "Soil Nutrient Graph", icon: Database }
              ].map((item, j) => (
                <div key={j} className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-4 h-4 text-emerald-500/50" />
                    <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] group-hover:text-emerald-300 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-emerald-900 font-light text-2xl">/</div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Result Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#0A2E1F]/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-emerald-600 transition-colors">
                <X className="w-10 h-10" />
              </button>
            </div>
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 bg-emerald-100 text-emerald-600 rounded-[1.5rem]">
                <Mic2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-[#05150E]">Hurudzai Voice Result</h3>
            </div>
            <div className="min-h-[200px] p-8 bg-gray-50 rounded-[2rem] border border-gray-100 text-[#05150E] leading-relaxed text-xl">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 border-[6px] border-emerald-500 border-t-transparent rounded-full animate-spin mb-6" />
                  <p className="text-emerald-600 font-black animate-pulse uppercase tracking-widest text-sm">Consulting Agronomy Engine...</p>
                </div>
              ) : (
                <p className="whitespace-pre-line">{result}</p>
              )}
            </div>
            <div className="mt-10 flex justify-between items-center text-gray-400 text-xs font-bold uppercase tracking-widest">
              <span>v2.4 Kernel Integrated</span>
              <button onClick={() => setIsModalOpen(false)} className="px-10 py-4 bg-emerald-600 text-white rounded-[1.5rem] font-black hover:bg-emerald-700 transition-all shadow-lg active:scale-95">Complete Session</button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Ecosystem Infographic */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Network className="w-3 h-3" />
                Connectivity
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#05150E] mb-12 leading-[1.05] tracking-tight">
                The Complete <br />
                <span className="text-emerald-600">Field-to-Market</span> <br />
                Ecosystem.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-500 text-xl leading-relaxed mb-14 max-w-lg font-medium">
                We've mapped the entire agricultural lifecycle into a single, intuitive platform. No more guesswork—just data-driven precision.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Soil Health", icon: Sprout },
                  { title: "Crop Monitoring", icon: Monitor },
                  { title: "Weather Flow", icon: Droplets },
                  { title: "Market Pulse", icon: BarChart3 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#05150E] font-bold bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-emerald-200 group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm uppercase tracking-wider">{item.title}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative z-10 p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-[4.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[4.5rem] -z-10" />
                <img src={FeatureInfographic} alt="Infographic" className="w-full h-auto rounded-[3.8rem] shadow-2xl" />

                {/* Floating data badge on image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-[#05150E] text-white p-6 rounded-[2.5rem] shadow-2xl border border-white/10"
                >
                  <Cpu className="w-8 h-8 text-emerald-400 mb-2" />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/60">System Load</div>
                  <div className="text-xl font-black">OPTIMAL</div>
                </motion.div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-emerald-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-emerald-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technology Bento Grid */}
      <section id="features" className="py-40 bg-emerald-50/30 relative overflow-hidden">
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#065f46 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Technical Architecture
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-[#05150E] tracking-tighter leading-[0.9]">
                Precision tools for <br />
                <span className="text-emerald-600">the modern field.</span>
              </h3>
            </motion.div>
            <div className="flex items-center gap-6 pb-2">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Processing Power</span>
                <span className="text-2xl font-black text-[#05150E]">2.4 PFLOPS</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Latency</span>
                <span className="text-2xl font-black text-emerald-600">12ms</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]">
            {/* Feature 1: The African Knowledge Graph (Large Hero Bento) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative group"
            >
              <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-8 shadow-2xl">
                    <Database className="w-8 h-8" />
                  </div>
                  <h4 className="text-4xl font-black text-[#05150E] mb-6 tracking-tight">The African <br />Knowledge Graph</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">Building the largest proprietary database of soil types and agricultural practices in the region.</p>
                </div>

                <div className="relative mt-8 h-48 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden group/scanner">
                  {/* Simulated scan data - Added bottom padding to avoid overlap */}
                  <div className="absolute inset-x-0 top-0 bottom-12 p-8 grid grid-cols-4 gap-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-2 bg-blue-500/10 rounded-full overflow-hidden relative">
                        <motion.div
                          animate={{ width: ["0%", `${Math.random() * 100}%`, "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                          className="absolute h-full bg-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Scanner line */}
                  <motion.div
                    animate={{ left: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 z-10"
                  />
                  {/* Status Bar - Dedicated space at the bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-14 bg-blue-50/50 backdrop-blur-sm border-t border-blue-100/50 px-8 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em] leading-none">Indexing African Soil Data...</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Multilingual Engine (Small Bento) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 relative group"
            >
              <div className="h-full p-12 rounded-[4rem] bg-[#05150E] border border-white/5 overflow-hidden flex flex-col justify-between text-white">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/20">
                    <Languages className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">Multilingual <br />Assistant Engine</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">Trained on local dialects for seamless interaction.</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {["Shona", "Ndebele", "Swahili", "Zulu", "English"].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all cursor-default">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Agritech API (Small Bento) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 relative group"
            >
              <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black text-[#05150E] mb-4 tracking-tight leading-tight">Agritech API <br />Integration</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">Scale your application with our robust agricultural logic.</p>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 font-mono text-[10px] text-purple-600">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                  <code>GET /api/v1/soil_analysis</code>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Market Clearing House (Wide Bento) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-8 relative group"
            >
              <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row gap-12 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/20">
                      <BarChart3 className="w-7 h-7" />
                    </div>
                    <h4 className="text-3xl font-black text-[#05150E] mb-6 tracking-tight">Market Clearing <br />House Solution</h4>
                    <p className="text-gray-500 text-base leading-relaxed font-medium">Connecting thousands of farmers directly to high-value markets across Africa.</p>
                  </div>

                  <div className="mt-8 flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-[0.2em] cursor-pointer group/link">
                    Explore Marketplace
                    <div className="w-10 h-10 rounded-full border border-emerald-100 flex items-center justify-center group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 h-full bg-emerald-50 rounded-[3rem] border border-emerald-100/50 p-8 flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Live Trade Stream</span>
                    <span className="text-[10px] font-black bg-emerald-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">+12.4%</span>
                  </div>
                  <div className="flex-grow flex items-end gap-1">
                    {[40, 60, 45, 80, 55, 70, 90, 65, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-emerald-600/30 rounded-t-lg group-hover:bg-emerald-600 transition-colors"
                      />
                    ))}
                  </div>
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-4"
            >
              <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[16px] border-emerald-50/50">
                <img src={HomeFarmerImg} alt="Farmer" className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000" />

                {/* Technical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Scanner Line Effect */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)] z-20 pointer-events-none opacity-80"
                />

                {/* Floating Data Nodes UI */}
                <div className="absolute top-12 right-12 flex flex-col gap-4">
                  {[Globe2, ShieldAlert, Zap, Bot].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                      className="p-4 bg-[#05150E]/40 backdrop-blur-xl border border-white/20 rounded-2xl text-white shadow-2xl"
                    >
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Simplifying Science
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-black text-[#05150E] mb-16 leading-tight tracking-tight">Complex Analysis. <br />Simple Steps.</motion.h3>

              <div className="space-y-12">
                {[
                  { title: "Input Basic Soil Data", desc: "Share your soil observations via SMS, Voice, or App. No internet required for SMS/Voice.", num: "01" },
                  { title: "AI Analysis", desc: "Our engine cross-references historical data, local weather patterns, and soil science.", num: "02" },
                  { title: "Actionable Guidance", desc: "Receive clear planting, fertilizing, and protection schedules in your local language.", num: "03" }
                ].map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-10 group relative">
                    {/* Vertical connector line */}
                    {i !== 2 && (
                      <div className="absolute left-10 top-20 bottom-[-20px] w-0.5 bg-gradient-to-b from-emerald-500 to-transparent opacity-20" />
                    )}

                    <div className="flex-shrink-0 w-20 h-20 rounded-[2rem] bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#05150E] mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-md">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-[#05150E] relative overflow-hidden">
        {/* Dynamic background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-emerald-950/20 to-[#05150E]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Testimonials
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Voiced by the Fields.</h3>
              <p className="text-emerald-100/40 max-w-2xl mx-auto text-xl font-medium">Success stories from across the region that prove data-driven farming works.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "“Hurudzai AI helped me plant the right crop for my soil. I saw a 45% yield increase in just one season.”", author: "Tendai M.", role: "Commercial Farmer, Mashonaland" },
              { text: "“The fertilizer recommendations cut my input costs by 30%. I'm finally seeing real profit.”", author: "Lindiwe G.", role: "Smallholder, Matabeleland" },
              { text: "“Being able to ask questions in Shona makes my whole crew more efficient. It's a game changer.”", author: "Samuel T.", role: "Co-op Lead, Midlands" }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 relative transition-all duration-500 hover:bg-white/[0.06] hover:border-emerald-500/30 group"
              >
                <div className="absolute top-0 right-12 translate-y-[-50%]">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl font-serif shadow-2xl">
                    “
                  </div>
                </div>
                <p className="text-xl italic text-emerald-50/70 mb-12 leading-relaxed font-medium group-hover:text-emerald-50 transition-colors">{t.text}</p>
                <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-900/50 flex items-center justify-center text-emerald-400 font-black border border-emerald-500/20 uppercase">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-emerald-400 text-lg uppercase tracking-tight">{t.author}</div>
                    <div className="text-sm text-white/30 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted & Supported By */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs text-center md:text-left">
              <h4 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Strategic Partners</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Working alongside leading institutions to advance global agricultural standards.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center"
            >
              {[
                { name: "POTRAZ", desc: "Regulating ICT", logo: "/partners/potraz.png" },
                { name: "CUT", desc: "University Partner", logo: "/partners/cut.png" },
                { name: "ZimTrade", desc: "Export Growth", logo: "/partners/zimtrade.png" },
                { name: "Eight2Five", desc: "Innovation Hub", logo: "/partners/Eight2Five.png" }
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group flex flex-col items-center gap-6 cursor-default grayscale hover:grayscale-0 transition-all duration-700"
                >
                  <div className="relative h-20 md:h-24 aspect-video flex items-center justify-center p-4 bg-gray-50/50 rounded-3xl group-hover:bg-emerald-50/50 group-hover:scale-110 transition-all duration-700 border border-transparent group-hover:border-emerald-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:drop-shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-all"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-black text-[#05150E] group-hover:text-emerald-600 transition-colors tracking-tight">
                      {partner.name}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-emerald-900/40 transition-colors">
                      {partner.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition & Exhibitions */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Milestones
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-[#05150E] tracking-tight">Recognition & <br />Exhibitions.</h3>
            </div>
            <div className="text-gray-400 text-lg font-medium max-w-xs text-right hidden md:block">
              Leading the conversation in global agritech forums and agricultural summits.
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "AI for Good Agritech Global Award",
                desc: "Recognized for innovation in AI-driven agricultural solutions for smallholder farmers.",
                year: "2025",
                icon: Award,
                tag: "Global"
              },
              {
                title: "Africa AI Summit Exhibition",
                desc: "Exhibited Hurudzai AI’s large language model capabilities at Africa’s premier AI summit.",
                year: "2026",
                icon: Globe2,
                tag: "Summit"
              },
              {
                title: "Zimbabwe Agricultural Show",
                desc: "Showcased smart farming technology to national agricultural stakeholders and policy makers.",
                year: "2024",
                icon: Tractor,
                tag: "National"
              },
              {
                title: "The Herald News Feature",
                desc: "Critically acclaimed innovation feature in Zimbabwe's leading national daily newspaper.",
                year: "2024",
                icon: Newspaper,
                tag: "Media"
              }
            ].map((event, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="group relative p-12 rounded-[4rem] bg-gray-50 border border-transparent hover:border-emerald-500/20 hover:bg-emerald-50/30 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="p-5 bg-white rounded-2xl text-emerald-600 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-black text-emerald-600/20 group-hover:text-emerald-600 transition-colors mb-1">{event.year}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-emerald-800/40">{event.tag}</span>
                  </div>
                </div>
                <h4 className="text-3xl font-black text-[#05150E] mb-6 leading-tight group-hover:text-emerald-700 transition-colors uppercase tracking-tighter">{event.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed font-medium line-clamp-2">{event.desc}</p>

                {/* Subtle highlight line */}
                <div className="absolute bottom-0 left-12 right-12 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News & Highlights */}
      <section className="py-40 bg-gray-50 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Press Release
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-[#05150E] tracking-tight">Latest News & <br />Highlights.</h3>
            </div>
            <a href="/news" className="group px-10 py-5 rounded-[2rem] bg-[#05150E] text-white font-black hover:bg-emerald-600 transition-all flex items-center gap-4 shadow-2xl">
              View All News <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all"><ArrowRight className="w-4 h-4" /></div>
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Hurudzai AI Showcased at Africa AI Summit 2026",
                excerpt: "Leading the conversation on how localized AI models can transform African smallholder productivity.",
                img: "/High-tech-agriculture-at-sunrise.png",
                date: "Jan 12, 2026",
                category: "Exhibition"
              },
              {
                title: "Improving Crop Yield Through AI Nutrient Mapping",
                excerpt: "New study shows 35% reduction in fertilizer waste using our precision application schedules.",
                img: "/Futuristic-farm-at-dawn.png",
                date: "Dec 20, 2025",
                category: "Innovation"
              },
              {
                title: "Partnership Expansion with Innovation Hubs",
                excerpt: "Scaling our reach through institutional collaborations across Mashonaland and beyond.",
                img: "/Farm-field-nutrient-analysis-at-sunset.png",
                date: "Nov 05, 2025",
                category: "Growth"
              }
            ].map((news, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#05150E]">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">{news.date}</div>
                  <h4 className="text-2xl font-black text-[#05150E] mb-6 group-hover:text-emerald-600 transition-colors leading-[1.2] uppercase tracking-tight">{news.title}</h4>
                  <p className="text-gray-500 text-base mb-10 line-clamp-3 font-medium flex-grow leading-relaxed">{news.excerpt}</p>
                  <a href={`/news/${i}`} className="group/link text-[#05150E] font-black text-sm inline-flex items-center gap-3 hover:text-emerald-600 transition-all uppercase tracking-widest">
                    Read Full Story
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative group p-12 md:p-24 rounded-[5rem] overflow-hidden">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#05150E] group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10"
              >
                <Fingerprint className="w-4 h-4 text-emerald-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Join the Future</span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tight">Ready to transform <br />your yield?</h2>
              <p className="text-emerald-50/70 mb-14 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Join thousands of farmers across Zimbabwe, South Africa, and Botswana who are growing smarter with Hurudzai AI.</p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="/request-demo" className="group/btn px-14 py-6 rounded-[2.5rem] bg-white text-emerald-700 font-black text-xl hover:bg-emerald-50 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 flex items-center gap-4">
                  Request Your Demo <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-3 text-emerald-100 font-bold bg-[#05150E]/40 backdrop-blur-md px-8 py-4 rounded-[2rem] border border-white/10 shadow-xl">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  No Credit Card Required
                </div>
              </div>
            </div>

            {/* Absract visual ornaments */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-400/10 blur-[80px] rounded-full" />
          </div>
        </div>

        {/* Global background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10">
          <div className="grid grid-cols-8 gap-10 -rotate-12 translate-y-[-10%] scale-150">
            {[...Array(64)].map((_, i) => <Bot key={i} className="w-16 h-16" />)}
          </div>
        </div>
      </section>

      <Footer />

      {/* Highlight Strip Overlay */}
      <div className="bg-emerald-950 py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-emerald-400/60">
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4" />
            <span>Recognized at major African AI exhibitions</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe2 className="w-4 h-4" />
            <span>Partnering with national institutions</span>
          </div>
          <div className="flex items-center gap-3">
            <Tractor className="w-4 h-4" />
            <span>Building the future of smart agriculture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
