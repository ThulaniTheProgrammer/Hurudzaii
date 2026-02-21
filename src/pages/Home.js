import React from "react";
import { HeroSection } from "../components/HomeSections/HeroSection";
import { ScrollingBulletinStrip } from "../components/HomeSections/ScrollingBulletinStrip";
import { ResultModal } from "../components/HomeSections/ResultModal";
import MobileHeroSection from "../components/HomeSections/MobileHeroSection";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import PreHeader from "../components/preheader/preheader";

import { useOpenAIChat } from "../hooks/useOpenAIChat";

const Home = () => {
  const { query, setQuery, result, loading, isModalOpen, setIsModalOpen, handleSearch } = useOpenAIChat();
  const [heroView, setHeroView] = React.useState("platform"); // "platform" | "mobile"

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">
      <PreHeader />
      <Header />

      <HeroSection heroView={heroView} setHeroView={setHeroView} />

      <ScrollingBulletinStrip />

      <ResultModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} loading={loading} result={result} />

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
