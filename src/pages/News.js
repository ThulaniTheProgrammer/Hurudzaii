import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper, Sparkles, Megaphone, Share2, TrendingUp, Clock, Bookmark } from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const allArticles = [
  {
    title: "Hurudzai AI Showcased at Africa AI Summit 2026",
    excerpt: "Leading the conversation on how localized AI models can transform African smallholder productivity and regional food security.",
    img: "/High-tech-agriculture-at-sunrise.png",
    date: "Jan 12, 2026",
    category: "Event",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Improving Crop Yield Through AI Nutrient Mapping",
    excerpt: "New study shows 35% reduction in fertilizer waste using our precision application schedules across Mashonaland Central.",
    img: "/Futuristic-farm-at-dawn.png",
    date: "Dec 20, 2025",
    category: "Innovation",
    readTime: "5 min read",
  },
  {
    title: "Partnership Expansion with Innovation Hubs",
    excerpt: "Scaling our reach through institutional collaborations with major universities and regional agricultural extension services.",
    img: "/Farm-field-nutrient-analysis-at-sunset.png",
    date: "Nov 05, 2025",
    category: "Growth",
    readTime: "4 min read",
  },
  {
    title: "New Local Language Support: Kalanga & Tonga",
    excerpt: "Hurudzai AI continues its mission of inclusivity by adding two more Zimbabwean dialects to its voice and chat systems.",
    img: "/Close-up-of-maize-at-sunrise.png",
    date: "Oct 28, 2025",
    category: "Update",
    readTime: "6 min read",
  },
  {
    title: "ZimTrade Collaboration for Market Access",
    excerpt: "Connecting small-scale garlic and chili exporters directly to international buyers through AI-cleared market prices.",
    img: "/Leaf-rust-detection-in-precision-agriculture.png",
    date: "Sep 15, 2025",
    category: "Partnership",
    readTime: "7 min read",
  },
  {
    title: "Understanding Soil pH with AI Vision",
    excerpt: "A deep dive into how our mobile camera tool identifies soil deficiencies without expensive laboratory tests.",
    img: "/Potraz.jpg",
    date: "Aug 30, 2025",
    category: "Science",
    readTime: "10 min read",
  },
];

const News = () => {
  const featured = allArticles.find(a => a.featured);
  const others = allArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      {/* ── Page Header & Immersive Background ── */}
      <section className="pt-56 pb-32 px-6 bg-[#05150E] relative overflow-hidden">
        {/* Background visual elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/10 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              <Megaphone className="w-4 h-4" />
              Intelligence & Press
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-9xl font-black text-white leading-tight tracking-tighter mb-10 uppercase"
            >
              THE <span className="text-emerald-500 italic font-serif lowercase">YIELD</span> REPORT.
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-800 mx-auto rounded-full mb-12 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            />
            <motion.p
              variants={fadeInUp}
              className="text-white/40 text-2xl max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Real-time insights on localized AI innovation and its growing impact across the African agricultural frontier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Editorial Piece ── */}
      <section className="py-24 px-6 relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.12)] border border-gray-100 grid lg:grid-cols-[1.3fr_1fr] items-stretch min-h-[600px]"
          >
            <div className="h-[450px] lg:h-auto overflow-hidden relative">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05150E]/60 to-transparent lg:hidden" />
              <div className="absolute top-10 left-10 flex gap-3">
                <span className="px-5 py-2.5 rounded-xl bg-[#05150E] text-white text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  Featured Story
                </span>
              </div>
            </div>

            <div className="p-12 lg:p-24 flex flex-col justify-center relative">
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-100 to-transparent hidden lg:block" />

              <div className="flex items-center gap-6 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 opacity-40" />
                  {featured.date}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 opacity-40" />
                  {featured.readTime}
                </div>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-[0.95] tracking-tight text-[#05150E] group-hover:text-emerald-700 transition-colors uppercase cursor-pointer">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed mb-14 font-medium opacity-80 border-l-4 border-emerald-500/20 pl-8">
                {featured.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <button className="px-12 py-6 rounded-2xl bg-[#05150E] text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all flex items-center gap-4 active:scale-95 group/btn shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  READ CASE STUDY <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
                <div className="flex gap-4">
                  <button className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#05150E] hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-gray-100">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#05150E] hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-gray-100">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Exploration Bar ── */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50/50 rounded-[3rem] p-6 border border-gray-100 flex flex-col lg:flex-row gap-10 justify-between items-center shadow-inner">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-full px-2">
              {["All Streams", "Innovation", "Partnerships", "Institutional", "Science", "Updates"].map((cat, i) => (
                <button
                  key={i}
                  className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm hover:translate-y-[-2px] active:scale-95 ${i === 0 ? "bg-[#05150E] text-white" : "bg-white text-gray-400 hover:text-emerald-700 border border-gray-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[400px]">
              <input
                type="text"
                placeholder="DISCOVER TOPICS..."
                className="w-full pl-14 pr-8 py-4 rounded-2xl bg-white border border-gray-100 focus:border-emerald-500 focus:ring-4 ring-emerald-500/5 outline-none text-[10px] font-black uppercase tracking-widest transition-all shadow-sm placeholder:opacity-30"
              />
              <Newspaper className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial Articles Grid ── */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {others.map((article, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group flex flex-col h-full bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden relative"
              >
                {/* Visual Header */}
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05150E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 rounded-xl bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] text-[#05150E] shadow-xl">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col flex-grow relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 text-[10px] font-black text-emerald-600/50 uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{article.date}</div>
                  </div>

                  <h3 className="text-3xl font-black text-[#05150E] mb-8 leading-[1.1] group-hover:text-emerald-600 transition-colors uppercase tracking-tight line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-base font-medium leading-relaxed mb-12 flex-grow line-clamp-3 opacity-80 italic">
                    {article.excerpt}
                  </p>

                  <div className="pt-10 border-t border-gray-50 mt-auto flex items-center justify-between">
                    <button className="text-[#05150E] font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-emerald-600 transition-all flex items-center gap-4">
                      READ SUMMARY <div className="w-6 h-[1px] bg-emerald-500/30 group-hover:w-10 transition-all" />
                    </button>
                    <Share2 className="w-4 h-4 text-gray-300 hover:text-emerald-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-40 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#05150E] rounded-[6rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.3)]">
            {/* Background elements for newsletter */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-emerald-400 text-[9px] font-black uppercase tracking-[0.4em] mb-12">
                <Sparkles className="w-4 h-4" />
                WEEKLY ADVISORY
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase max-w-4xl mx-auto">THE PULSE OF <br /><span className="text-emerald-500 font-serif lowercase italic">future</span> FARMING.</h2>
              <p className="text-white/40 text-2xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                Join our elite network of innovators receiving weekly breakthroughs in localized AI impact.
              </p>

              <div className="flex flex-col md:flex-row gap-6 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="IDENTITY@PROTOCOL.COM"
                  className="flex-grow px-10 py-6 rounded-[2rem] bg-white/5 border border-white/10 text-white outline-none focus:border-emerald-500 focus:ring-4 ring-emerald-500/10 transition-all font-black text-[10px] uppercase tracking-widest placeholder:opacity-20"
                />
                <button className="px-12 py-6 rounded-[2rem] bg-emerald-600 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/40 active:scale-95">
                  INITIALIZE
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-4 opacity-20">
                <div className="w-8 h-[1px] bg-white" />
                <p className="text-[10px] text-white font-black uppercase tracking-[0.4em]">NO NOISE. PURE DATA.</p>
                <div className="w-8 h-[1px] bg-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;

