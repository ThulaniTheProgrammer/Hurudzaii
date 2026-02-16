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
  Zap
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
    icon: Sprout,
    title: "Smart Crop Match",
    description: "AI-driven selection matching your soil profile with the most profitable crops for your climate.",
    color: "bg-emerald-500",
  },
  {
    icon: Droplets,
    title: "Precision Fertilizer",
    description: "Optimize input costs by up to 35% with precise N-P-K nutrient mapping and application schedules.",
    color: "bg-blue-500",
  },
  {
    icon: ShieldAlert,
    title: "Disease Early Shield",
    description: "Snap a photo to identify pests and diseases instantly. Prevent total crop loss with AI diagnosis.",
    color: "bg-amber-500",
    detailImg: ScienceDetailImg
  },
  {
    icon: Mic2,
    title: "Voice Assistant",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#05150E] py-20">
        {/* Animated Background Image */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={HomeFieldImg} alt="Field" className="w-full h-full object-cover opacity-40 brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05150E]/80 to-[#05150E]" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-8 backdrop-blur-md">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Digitizing Generational Wisdom</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white leading-[1] mb-8">
                Cultivate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                  Precision.
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-emerald-100/70 mb-12 max-w-lg leading-relaxed">
                Hurudza AI transforms soil data into actionable insights, helping you navigate the complexities of modern farming.
              </motion.p>

              {/* Interactive Search */}
              <motion.div variants={fadeInUp} className="relative max-w-xl group mb-10">
                <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-3 pl-8 shadow-2xl overflow-hidden">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Ask about your crops..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-emerald-100/20 text-lg py-4"
                  />
                  <button
                    onClick={handleSearch}
                    className="p-5 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6">
                <a href="/request-demo" className="px-10 py-5 rounded-2xl bg-white text-emerald-950 font-black text-lg hover:bg-emerald-50 transition-all flex items-center gap-3">
                  Get Started <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <motion.div animate={floatingAnim} className="relative z-10">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {features.map((f, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-emerald-500/50 transition-all"
                      >
                        <f.icon className={`w-10 h-10 mb-5 ${f.color.replace('bg-', 'text-')}`} />
                        <div className="font-black text-white text-sm uppercase tracking-wider mb-2">{f.title}</div>
                        <div className="text-xs text-white/50 leading-relaxed">{f.description.split('.')[0]}.</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-500/10 blur-[150px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

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
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-6">Connected Intelligence</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-black text-[#05150E] mb-10 leading-[1.1]">The Complete <br />Field-to-Market <br />Ecosystem.</motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-600 text-xl leading-relaxed mb-12 max-w-lg">
                We've mapped the entire agricultural lifecycle into a single, intuitive platform. No more guesswork—just data.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
                {["Soil Health", "Crop Monitoring", "Weather Flow", "Market Pulse"].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 text-emerald-900 font-bold bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>{t}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative"
            >
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-[4rem] shadow-inner border border-emerald-100">
                <img src={FeatureInfographic} alt="Infographic" className="w-full h-auto rounded-[3.5rem] shadow-2xl" />
              </div>
              {/* Background accent */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Core Technology</h2>
              <h3 className="text-5xl font-black text-[#05150E]">Precision tools for <br />the modern field.</h3>
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
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`p-5 rounded-[1.5rem] ${feature.color} text-white mb-6 w-fit shadow-xl shadow-${feature.color.split('-')[1]}-200 group-hover:rotate-6 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                {feature.detailImg && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-gray-100 shadow-inner h-32">
                    <img src={feature.detailImg} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                )}
                <h4 className="text-2xl font-black text-[#05150E] mb-4">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed mb-6">{feature.description}</p>
                <div className="flex items-center text-emerald-600 font-black text-sm gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Dive Deeper <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-4 group"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-emerald-50">
                <img src={HomeFarmerImg} alt="Farmer" className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000" />

                {/* Technical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Scanner Line Effect */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-20 pointer-events-none opacity-50"
                />

                {/* Floating Data Nodes UI */}
                <div className="absolute top-10 right-10 flex flex-col gap-3">
                  {[Globe2, ShieldAlert, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.2) }}
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* External Gradients */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500 rounded-full blur-[100px] -z-10 opacity-30" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-6">Simplifying Science</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-5xl font-black text-[#05150E] mb-12 leading-tight">Complex Analysis. <br />Simple Steps.</motion.h3>

              <div className="space-y-10">
                {[
                  { title: "Input Basic Soil Data", desc: "Share your soil observations via SMS, Voice, or App. No internet required for SMS/Voice.", num: "01" },
                  { title: "AI Analysis", desc: "Our engine cross-references historical data, local weather patterns, and soil science.", num: "02" },
                  { title: "Actionable Guidance", desc: "Receive clear planting, fertilizing, and protection schedules in your local language.", num: "03" }
                ].map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-10 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-emerald-100 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#05150E] mb-3 group-hover:text-emerald-700 transition-colors">{step.title}</h4>
                      <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0A2E1F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black mb-6">Voiced by the Fields.</h3>
            <p className="text-emerald-200/70 max-w-xl mx-auto">Success stories from across the region that prove data-driven farming works.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "“Hurudza AI helped me plant the right crop for my soil. I saw a 45% yield increase in just one season.”", author: "Tendai M.", role: "Commercial Farmer, Mashonaland" },
              { text: "“The fertilizer recommendations cut my input costs by 30%. I'm finally seeing real profit.”", author: "Lindiwe G.", role: "Smallholder, Matabeleland" },
              { text: "“Being able to ask questions in Shona makes my whole crew more efficient. It's a game changer.”", author: "Samuel T.", role: "Co-op Lead, Midlands" }
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative">
                <div className="absolute top-0 right-10 translate-y-[-50%] text-emerald-500">
                  <span className="text-6xl font-serif">“</span>
                </div>
                <p className="text-lg italic text-emerald-50/80 mb-8 leading-relaxed">{t.text}</p>
                <div>
                  <div className="font-bold text-emerald-400">{t.author}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-emerald-900/20">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to transform <br />your yield?</h2>
            <p className="text-emerald-50 mb-12 max-w-2xl mx-auto text-lg md:text-xl">Join thousands of farmers across Zimbabwe, South Africa, and Botswana who are growing smarter with Hurudza AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/request-demo" className="px-10 py-5 rounded-2xl bg-white text-emerald-700 font-black text-lg hover:bg-emerald-50 transition-all shadow-xl">
                Request Your Demo
              </a>
              <div className="flex items-center justify-center gap-2 text-emerald-100 font-semibold px-6 py-4">
                <CheckCircle2 className="w-5 h-5" />
                No Credit Card Required
              </div>
            </div>
          </div>
        </div>

        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-10 gap-x-10 -rotate-12 translate-y-[-20%]">
            {[...Array(100)].map((_, i) => <Sprout key={i} className="w-12 h-12" />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
