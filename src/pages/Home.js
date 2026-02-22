import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fingerprint,
  Bot,
  Award,
  Globe2,
  Tractor,
} from "lucide-react";

import { HeroSection } from "../components/HomeSections/HeroSection";
import { ScrollingBulletinStrip } from "../components/HomeSections/ScrollingBulletinStrip";
import { ResultModal } from "../components/HomeSections/ResultModal";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import PreHeader from "../components/preheader/preheader";

import { useOpenAIChat } from "../hooks/useOpenAIChat";

// --- motion variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

// --- data ---
const STEPS = [
  {
    title: "Crop Diagnosis",
    desc: "Snap a photo and get fast, localized insights on pests, diseases, and nutrient stress.",
    num: "01",
  },
  {
    title: "Smart Recommendations",
    desc: "Get tailored actions based on your crop stage, location, and seasonality.",
    num: "02",
  },
  {
    title: "Actionable Guidance",
    desc: "Receive clear planting, fertilizing, and protection schedules in your local language.",
    num: "03",
  },
];

const NEWS = [
  {
    title: "Hurudzai AI Showcased at Africa AI Summit 2026",
    excerpt:
      "Leading the conversation on how localized AI models can transform African smallholder productivity.",
    img: "/High-tech-agriculture-at-sunrise.png",
    date: "Jan 12, 2026",
    category: "Exhibition",
  },
  {
    title: "Improving Crop Yield Through AI Nutrient Mapping",
    excerpt:
      "New study shows 35% reduction in fertilizer waste using our precision application schedules.",
    img: "/Futuristic-farm-at-dawn.png",
    date: "Dec 20, 2025",
    category: "Innovation",
  },
  {
    title: "Partnership Expansion with Innovation Hubs",
    excerpt:
      "Scaling our reach through institutional collaborations across Mashonaland and beyond.",
    img: "/Farm-field-nutrient-analysis-at-sunset.png",
    date: "Nov 05, 2025",
    category: "Growth",
  },
];

const Home = () => {
 const hookResult = useOpenAIChat();
console.log("hook returned:", hookResult, typeof hookResult);
const { result, loading, isModalOpen, setIsModalOpen } = hookResult;
  const [showDebugInfo, setShowDebugInfo] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">
      <PreHeader />
      <Header />

      <HeroSection heroView={heroView} setHeroView={setHeroView} />

      <ScrollingBulletinStrip />

      <ResultModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        loading={loading}
        result={result}
      />

      {/* Debug Info Toggle */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button
          onClick={() => setShowDebugInfo(!showDebugInfo)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Toggle Debug Info
        </button>
        {showDebugInfo && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p><strong>Type of STEPS:</strong> {typeof STEPS}</p>
            <p><strong>Value of STEPS:</strong> {JSON.stringify(STEPS)}</p>
          </div>
        )}
      </div>

      {/* Steps / How it works */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                How it works
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-[#05150E] tracking-tight">
                From photo to
                <br />
                farm action.
              </h3>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed font-medium max-w-xl">
                A simple workflow built for real farms: identify issues, get a plan,
                then execute with confidence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="flex flex-col gap-14">
                {!Array.isArray(STEPS) ? (
                  <div className="text-red-500">Error: STEPS is not an array. Type: {typeof STEPS}, Value: {JSON.stringify(STEPS)}</div>
                ) : (
                  STEPS.map((step, i) => (
                    <motion.div
                      key={step.num}
                      variants={fadeInUp}
                      className="flex gap-10 group relative"
                    >
                      {/* Vertical connector line */}
                      {i !== STEPS.length - 1 && (
                        <div className="absolute left-10 top-20 bottom-[-20px] w-0.5 bg-gradient-to-b from-emerald-500 to-transparent opacity-20" />
                      )}

                      <div className="flex-shrink-0 w-20 h-20 rounded-[2rem] bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {step.num}
                      </div>

                      <div>
                        <h4 className="text-2xl font-black text-[#05150E] mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-md">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* News & Highlights */}
      <section className="py-40 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Press Release
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-[#05150E] tracking-tight">
                Latest News & <br />
                Highlights.
              </h3>
            </div>
            <a
              href="/news"
              className="group px-10 py-5 rounded-[2rem] bg-[#05150E] text-white font-black hover:bg-emerald-600 transition-all flex items-center gap-4 shadow-2xl"
            >
              View All News{" "}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10"
          >
            {NEWS.map((news, i) => (
              <motion.div
                key={news.title}
                variants={fadeInUp}
                className="group bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#05150E]">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">
                    {news.date}
                  </div>
                  <h4 className="text-2xl font-black text-[#05150E] mb-6 group-hover:text-emerald-600 transition-colors leading-[1.2] uppercase tracking-tight">
                    {news.title}
                  </h4>
                  <p className="text-gray-500 text-base mb-10 line-clamp-3 font-medium flex-grow leading-relaxed">
                    {news.excerpt}
                  </p>
                  <a
                    href={`/news/${i}`}
                    className="group/link text-[#05150E] font-black text-sm inline-flex items-center gap-3 hover:text-emerald-600 transition-all uppercase tracking-widest"
                  >
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#05150E] group-hover:scale-105 transition-transform duration-1000" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10"
              >
                <Fingerprint className="w-4 h-4 text-emerald-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Join the Future
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tight">
                Ready to transform <br />
                your yield?
              </h2>
              <p className="text-emerald-50/70 mb-14 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                Join thousands of farmers across Zimbabwe, South Africa, and Botswana
                who are growing smarter with Hurudzai AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/request-demo"
                  className="group/btn px-14 py-6 rounded-[2.5rem] bg-white text-emerald-700 font-black text-xl hover:bg-emerald-50 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 flex items-center gap-4"
                >
                  Request Your Demo{" "}
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-3 text-emerald-100 font-bold bg-[#05150E]/40 backdrop-blur-md px-8 py-4 rounded-[2rem] border border-white/10 shadow-xl">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  No Credit Card Required
                </div>
              </div>
            </div>

            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-400/10 blur-[80px] rounded-full" />
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10">
          <div className="grid grid-cols-8 gap-10 -rotate-12 translate-y-[-10%] scale-150">
            {[...Array(64)].map((_, i) => (
              <Bot key={i} className="w-16 h-16" />
            ))}
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