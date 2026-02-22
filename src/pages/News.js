import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper, Sparkles, Megaphone, Share2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const allArticles = [
  {
    title: "Hurudzai AI Showcased at Africa AI Summit 2026",
    excerpt: "Leading the conversation on how localized AI models can transform African smallholder productivity and regional food security.",
    img: "/High-tech-agriculture-at-sunrise.png",
    date: "Jan 12, 2026",
    category: "Event",
    featured: true
  },
  {
    title: "Improving Crop Yield Through AI Nutrient Mapping",
    excerpt: "New study shows 35% reduction in fertilizer waste using our precision application schedules across Mashonaland Central.",
    img: "/Futuristic-farm-at-dawn.png",
    date: "Dec 20, 2025",
    category: "Innovation"
  },
  {
    title: "Partnership Expansion with Innovation Hubs",
    excerpt: "Scaling our reach through institutional collaborations with major universities and regional agricultural extension services.",
    img: "/Farm-field-nutrient-analysis-at-sunset.png",
    date: "Nov 05, 2025",
    category: "Growth"
  },
  {
    title: "New Local Language Support: Kalanga & Tonga",
    excerpt: "Hurudzai AI continues its mission of inclusivity by adding two more Zimbabwean dialects to its voice and chat systems.",
    img: "/Close-up-of-maize-at-sunrise.png",
    date: "Oct 28, 2025",
    category: "Update"
  },
  {
    title: "ZimTrade Collaboration for Market Access",
    excerpt: "Connecting small-scale garlic and chili exporters directly to international buyers through AI-cleared market prices.",
    img: "/Leaf-rust-detection-in-precision-agriculture.png",
    date: "Sep 15, 2025",
    category: "Partnership"
  },
  {
    title: "Understanding Soil pH with AI Vision",
    excerpt: "A deep dive into how our mobile camera tool identifies soil deficiencies without expensive laboratory tests.",
    img: "/Potraz.jpg",
    date: "Aug 30, 2025",
    category: "Science"
  },
];

const News = () => {
  const featured = allArticles.find(a => a.featured);
  const others = allArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Page Header ── */}
      <section className="pt-48 pb-20 px-6 bg-[#05150E] relative overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
              <Megaphone className="w-3.5 h-3.5" />
              Press & Highlights
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8 uppercase">
              The <span className="text-emerald-400">Yield</span> Report.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Updates on AI innovation, regional impact, and the future of African precision agriculture.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="py-24 px-6 relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 grid lg:grid-cols-[1.2fr_1fr] items-stretch"
          >
            <div className="h-[400px] lg:h-auto overflow-hidden relative">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute bottom-8 left-8">
                <span className="px-6 py-2 rounded-full bg-white/90 backdrop-blur-xl text-xs font-black uppercase tracking-widest text-[#05150E] shadow-xl">
                  Featured Story
                </span>
              </div>
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-8">
                <Calendar className="w-4 h-4" />
                {featured.date}
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                {featured.category}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tight group-hover:text-emerald-600 transition-colors uppercase cursor-pointer">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-8">
                <button className="px-10 py-5 rounded-[2rem] bg-[#05150E] text-white font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all flex items-center gap-4 shadow-xl active:scale-95">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#05150E] hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Search & Filter ── */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-center border-b border-gray-100 pb-12">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide max-w-full">
            {["All Stories", "Innovation", "Partnership", "Exhibition", "Science", "Events"].map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${i === 0 ? "bg-[#05150E] text-white shadow-lg" : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-700"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="SEARCH NEWS..."
              className="w-full pl-12 pr-6 py-3 rounded-full bg-gray-50 border-2 border-transparent focus:border-emerald-500 outline-none text-xs font-bold uppercase tracking-widest transition-all"
            />
            <Newspaper className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </section>

      {/* ── Article Grid ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {others.map((article, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group flex flex-col h-full bg-white rounded-[4rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#05150E] shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">{article.date}</div>
                  <h3 className="text-2xl font-black text-[#05150E] mb-6 leading-tight group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{article.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 flex-grow line-clamp-3 italic">
                    {article.excerpt}
                  </p>

                  <div className="pt-8 border-t border-gray-50 mt-auto flex items-center justify-between">
                    <a href={`/news/${i}`} className="text-[#05150E] font-black text-xs uppercase tracking-[0.2em] group-hover:text-emerald-600 transition-all flex items-center gap-3">
                      Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors delay-75" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-32 px-6">
        <div className="max-max-7xl mx-auto">
          <div className="bg-[#05150E] rounded-[5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10">
                <Sparkles className="w-3.5 h-3.5" />
                Weekly Updates
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-none tracking-tighter uppercase">Stay in <span className="text-emerald-400 font-serif lowercase italic">the</span> loop.</h2>
              <p className="text-white/40 text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                Join 5,000+ agribusiness leaders who receive our weekly breakdown of regional AI impact and soil health trends.
              </p>

              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white outline-none focus:border-emerald-500 transition-all font-medium text-sm"
                />
                <button className="px-10 py-5 rounded-3xl bg-emerald-600 text-white font-black uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20">
                  Subscribe
                </button>
              </div>
              <p className="mt-8 text-[10px] text-white/20 font-black uppercase tracking-widest">Zero spam. Pure insights.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
