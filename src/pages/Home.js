import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  TrendingUp
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
    description: "Hurudza AI is building the largest proprietary database of soil types,crop types,and agricultural practices in africa.This make us the most knowledgeable ai agent in africa agricuture.",
    color: "bg-blue-500",
  },
  {
    icon: BarChart3,
    title: "Real time market clearing house",
    description: "Hurudza AI layer connects thousands of farmers directly to high value markets in africa automating the logistics and pricing that middlemen usually steal",
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
            { role: "system", content: "You are Hurudza AI, a helpful agricultural assistant for African farmers. Keep answers concise and actionable." },
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-10 backdrop-blur-xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full relative z-10" />
                </div>
                <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-[0.2em]">Digitizing Generational Wisdom v4.0</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 tracking-tight">
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
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-emerald-100/60 mb-14 max-w-lg leading-relaxed font-medium">
                Hurudza AI transforms generational african data and wisdom into actionable insights through localized intelligence.
              </motion.p>

              {/* Interactive Search */}
              <motion.div variants={fadeInUp} className="relative max-w-xl group mb-14">
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-center bg-[#0A2E1F]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-4 pl-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 group-focus-within:border-emerald-500/50 group-focus-within:ring-1 group-focus-within:ring-emerald-500/50">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Ask about your crops..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-emerald-100/20 text-xl py-4"
                  />
                  <button
                    onClick={handleSearch}
                    className="group/btn relative overflow-hidden px-8 py-5 bg-emerald-500 text-white rounded-[1.8rem] hover:bg-emerald-400 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] active:scale-95"
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="font-bold">Search</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>

                {/* Search tags */}
                <div className="mt-6 flex flex-wrap gap-3 px-2">
                  <span className="text-[10px] text-emerald-100/30 uppercase font-bold tracking-widest mr-2">Try:</span>
                  {["Soil moisture", "Pest control", "Market prices"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => { setQuery(tag); handleSearch(); }}
                      className="text-[10px] text-emerald-100/40 hover:text-emerald-400 font-bold uppercase tracking-widest transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8">
                <a href="/request-demo" className="group px-12 py-6 rounded-2xl bg-white text-[#05150E] font-black text-xl hover:bg-emerald-50 transition-all flex items-center gap-4 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                  Get Started <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#05150E] bg-emerald-900 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-[#05150E] bg-[#0A2E1F] flex items-center justify-center text-[10px] font-bold text-emerald-400">
                    +2k
                  </div>
                </div>
                <div className="text-sm font-medium text-emerald-100/40">
                  Joined by <span className="text-emerald-400 font-bold">2,400+</span> farmers this month
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <motion.div animate={floatingAnim} className="relative z-10 mt-12">
                <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Glowing background inside card */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />

                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    {features.map((f, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        className={`p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-start ${i % 2 === 1 ? 'mt-8' : ''}`}
                      >
                        <div className={`p-4 rounded-2xl bg-[#05150E] border border-white/5 mb-6 shadow-xl`}>
                          <f.icon className={`w-8 h-8 ${f.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div className="font-black text-white text-base leading-tight mb-3 pr-4">{f.title}</div>
                        <div className="text-sm text-white/40 leading-relaxed font-medium line-clamp-3 mb-4">{f.description}</div>

                        <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating stat card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-emerald-50/50"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Yield Increase</div>
                    <div className="text-2xl font-black text-[#05150E]">+45% <span className="text-emerald-500 text-sm font-bold">Avg</span></div>
                  </div>
                </motion.div>

                {/* Second floating card */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-12 -right-8 bg-emerald-600 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                      <Network className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] uppercase font-bold text-emerald-50 tracking-widest">Nodes Active</div>
                  </div>
                  <div className="text-2xl font-black text-white">1,420 <span className="w-2 h-2 bg-emerald-300 rounded-full inline-block ml-1 animate-pulse" /></div>
                </motion.div>
              </motion.div>

              {/* Massive background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-emerald-500/10 blur-[180px] -z-10 rounded-full opacity-50" />
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
                { label: "Digitizing Wisdom", icon: Sparkles },
                { label: "Localized AI Models", icon: Cpu },
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
              <h3 className="text-3xl font-black text-[#05150E]">Hurudza Voice Result</h3>
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

      {/* Features Grid */}
      <section id="features" className="py-40 bg-gray-50 relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-black text-black/[0.02] whitespace-nowrap pointer-events-none select-none">
          PRECISION TOOLS
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Core Technology
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-[#05150E] tracking-tight">Precision tools for <br />the modern field.</h3>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -20 }}
                className="group relative h-full"
              >
                <div className="h-full p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-start overflow-hidden">
                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${feature.color.replace('bg-', 'bg-')}/5 rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700`} />

                  <div className={`p-5 rounded-[1.8rem] ${feature.color} text-white mb-10 w-fit shadow-2xl group-hover:-rotate-12 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8" />
                  </div>

                  {feature.detailImg && (
                    <div className="w-full mb-10 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-inner aspect-[4/3] relative group-hover:ring-4 group-hover:ring-emerald-50 transition-all duration-500">
                      <img src={feature.detailImg} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05150E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}

                  <h4 className="text-2xl font-black text-[#05150E] mb-6 leading-tight group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-grow font-medium">{feature.description}</p>

                  <div className="flex items-center text-emerald-600 font-black text-xs gap-3 mt-auto group/link">
                    <span className="uppercase tracking-[0.2em]">Dive Deeper</span>
                    <div className="w-10 h-10 rounded-full border border-emerald-100 flex items-center justify-center group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              { text: "“Hurudza AI helped me plant the right crop for my soil. I saw a 45% yield increase in just one season.”", author: "Tendai M.", role: "Commercial Farmer, Mashonaland" },
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
                { name: "POTRAZ", desc: "Regulating ICT" },
                { name: "CUT", desc: "University Partner" },
                { name: "ZimTrade", desc: "Export Growth" },
                { name: "Eight2Five", desc: "Innovation Hub" }
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group flex flex-col items-center gap-3 cursor-default grayscale hover:grayscale-0 transition-all duration-700"
                >
                  <div className="text-3xl md:text-5xl font-black text-[#05150E]/20 group-hover:text-emerald-600 group-hover:drop-shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all duration-700 tracking-tighter">
                    {partner.name}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-gray-300 group-hover:text-emerald-900/40 transition-colors">
                    {partner.desc}
                  </span>
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
                desc: "Exhibited Hurudza AI’s large language model capabilities at Africa’s premier AI summit.",
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
                title: "Hurudza AI Showcased at Africa AI Summit 2026",
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
              <p className="text-emerald-50/70 mb-14 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Join thousands of farmers across Zimbabwe, South Africa, and Botswana who are growing smarter with Hurudza AI.</p>

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
