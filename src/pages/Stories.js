import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  Quote, Star, MapPin, ArrowRight, CheckCircle2,
  TrendingUp, Leaf, Tractor, Sprout, Heart, Users
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const successStories = [
  {
    name: "Baba George Chinhoyi",
    location: "Mashonaland West",
    crop: "Maize & Tobacco",
    impact: "+40% Yield Increase",
    story: "I used to guess when to apply fertilizer. Now I just ask Hurudzai on my phone. The results speak for themselves at harvest time.",
    image: "/High-tech-agriculture-at-sunrise.png"
  },
  {
    name: "Amai Tendai",
    location: "Buhera North",
    crop: "Garlic & Small Grains",
    impact: "Direct Market Access",
    story: "Connecting with ZimTrade buyers through the AI console changed our cooperative's future. We sold our garlic at 2x our local price.",
    image: "/Futuristic-farm-at-dawn.png"
  },
  {
    name: "Tinashe Shumba",
    location: "Kadoma Hub",
    crop: "Commercial Soybeans",
    impact: "60% Water Savings",
    story: "The smart irrigation alerts saved our crop during the dry spell. The AI noticed the moisture drop before our field teams did.",
    image: "/Farm-field-nutrient-analysis-at-sunset.png"
  },
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Page Header ── */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 bg-[#05150E] relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-emerald-500/20 blur-[100px] md:blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-8">
              <Heart className="w-3.5 h-3.5" />
              Impact across Zimbabwe
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl md:text-[6.5rem] font-black text-white leading-tight md:leading-none tracking-tighter mb-8 md:mb-10 uppercase">
              Growing <span className="text-emerald-400">Together.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/30 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed italic px-4">
              "Real people, real data, and the real impact of intelligent farming on our continent."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Video/Story Placeholder ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-4 md:border-8 border-white relative group"
          >
            <img src="/Futuristic-farm-at-dawn.png" alt="Featured Story" className="w-full h-[350px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 md:gap-4 text-emerald-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-4 md:mb-6">
                  <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-emerald-400" />
                  Featured Farmer Story
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-10 uppercase">
                  How Baba George <br /><span className="text-emerald-400">Changed his Cycle.</span>
                </h2>
                <div className="flex flex-wrap gap-4 md:gap-8">
                  <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 text-white text-[10px] md:text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                    +42% Harvest Increase
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 text-white text-[10px] md:text-xs font-bold">
                    <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-400" />
                    30% Less Fertilizer Used
                  </div>
                </div>
              </div>
            </div>
            {/* Play button UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer border-4 border-white/20">
              <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[12px] md:border-l-[16px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent ml-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none px-2">Voices of <br /><span className="text-emerald-600">The Field.</span></h2>
            </div>
            <p className="text-gray-400 text-sm md:text-lg font-medium max-w-xs md:text-right px-2">Data-backed performance improvements across our entire farmer network.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          >
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(16,185,129,0.12)] transition-all duration-700 overflow-hidden"
              >
                <div className="h-56 md:h-64 overflow-hidden relative">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 md:top-8 left-6 md:left-8">
                    <div className="px-3 md:px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Impact
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Quote className="w-5 h-5 fill-emerald-600" />
                    </div>
                    <div className="w-24 h-px bg-gray-100" />
                  </div>

                  <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10 flex-grow italic">
                    "{story.story}"
                  </p>

                  <div className="pt-8 border-t border-gray-50 flex flex-col gap-4">
                    <div>
                      <h4 className="font-black text-xl uppercase tracking-tighter">{story.name}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-black uppercase tracking-widest mt-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                        <Sprout className="w-4 h-4" />
                        {story.crop}
                      </div>
                      <div className="text-[#05150E] font-black text-sm uppercase tracking-tighter bg-emerald-50 px-3 py-1 rounded-lg">
                        {story.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Big Quote Section ── */}
      <section className="py-40 bg-[#05150E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-emerald-500 mx-auto mb-12 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-black leading-tight italic tracking-tighter mb-16 uppercase">
              "Hurudzai AI is the bridge that finally connects <br />
              <span className="text-emerald-400 underline decoration-8 underline-offset-8">the laboratory to the shovel.</span>"
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/10 border-4 border-white/5" />
              <div>
                <div className="text-xl font-black uppercase tracking-tight">Regis Masunda</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Agro-Policy Specialist</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Area ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Users, val: "10,482", label: "Farmers Empowered" },
              { icon: MapPin, val: "3", label: "Countries Active" },
              { icon: Tractor, val: "+38%", label: "Avg Revenue Growth" },
              { icon: Sprout, val: "1.2M", label: "Advisories Sent" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#05150E] mb-6 group-hover:bg-[#05150E] group-hover:text-white transition-all duration-500 shadow-sm shadow-emerald-600/10">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-black mb-2 tracking-tighter uppercase">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300 group-hover:text-emerald-500 transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[5rem] font-black text-[#05150E] mb-10 uppercase tracking-tighter leading-none">Become our next <br /><span className="text-emerald-600">Success Story.</span></h2>
          <p className="text-gray-500 text-xl font-medium mb-12 max-w-xl mx-auto">Take the first step towards data-driven farming and see your yields transform.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/request-demo" className="px-12 py-6 rounded-3xl bg-[#05150E] text-white font-black text-lg uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl active:scale-95">
              Request Your Demo
            </a>
            <a href="/contact" className="px-12 py-6 rounded-3xl bg-white border border-gray-100 text-[#05150E] font-black text-lg uppercase tracking-widest hover:bg-emerald-50 transition-all">
              Speak to an Expert
            </a>
          </div>
        </div>
        {/* Decorative leaf */}
        <Leaf className="absolute -bottom-10 -right-10 w-48 h-48 text-emerald-100 rotate-12 -z-10" />
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
