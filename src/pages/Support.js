import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  HelpCircle, Search, MessageSquare, Phone,
  LifeBuoy, Mail, ArrowRight, Zap, PlayCircle,
  ShieldQuestion, UserCheck, Heart
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const helpCategories = [
  { icon: LifeBuoy, title: "Technical Setup", count: "12 Articles" },
  { icon: Zap, title: "Using the Chatbot", count: "8 Articles" },
  { icon: ShieldQuestion, title: "Account & Security", count: "15 Articles" },
  { icon: UserCheck, title: "Enterprise Admin", count: "20 Articles" },
];

const faqs = [
  { q: "How do I register a new farmer?", a: "You can register farmers directly via the AI CRM dashboard or by sending 'REGISTER' to our WhatsApp bot. All data is automatically synced." },
  { q: "What languages does the bot support?", a: "Currently, we support Shona, Ndebele, Kalanga, and English. We are actively training models for more regional dialects." },
  { q: "How accurate are the yield predictions?", a: "Our models maintain a 94%+ accuracy rate for staple crops, validated against 5 years of historical regional harvest data." },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Help Center Hero ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 bg-[#05150E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-emerald-500/20 blur-[100px] md:blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-8 md:mb-10">
              <HelpCircle className="w-3.5 h-3.5" />
              Hurudzai Support Hub
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase">
              How can we <br /><span className="text-emerald-400">Help</span> you?
            </motion.h1>

            <motion.div variants={fadeInUp} className="relative max-w-2xl mx-auto px-4">
              <input
                type="text"
                placeholder="SEARCH FOR TOPICS, ARTICLES, OR GUIDES..."
                className="w-full pl-12 md:pl-16 pr-6 md:pr-8 py-5 md:py-6 rounded-2xl md:rounded-[2.5rem] bg-white text-[#05150E] outline-none focus:ring-4 ring-emerald-500/20 shadow-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all"
              />
              <Search className="absolute left-10 md:left-7 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="py-12 md:py-24 px-4 md:px-6 relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_45px_100px_rgba(0,0,0,0.12)] transition-all duration-700 cursor-pointer text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] md:rounded-[1.5rem] bg-gray-50 text-[#05150E] flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <cat.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-2">{cat.title}</h3>
                <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Resources ── */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div className="px-2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Popular <br /><span className="text-emerald-600">Resources.</span></h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg font-medium max-w-xs md:text-right italic px-2">"The quickest path to resolving your queries."</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-gray-200 shadow-2xl">
            <div className="bg-white p-10 md:p-20 flex flex-col gap-8 md:gap-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><PlayCircle className="w-6 h-6 md:w-7 md:h-7" /></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight">Video Tutorials</h3>
                <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-8 md:mb-10">Watch our step-by-step videos on how to navigate the Farmers CRM and use the WhatsApp AI advisory tool.</p>
                <button className="flex items-center gap-3 text-[#05150E] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">
                  View Playlist <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white p-10 md:p-20 flex flex-col gap-8 md:gap-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Heart className="w-6 h-6 md:w-7 md:h-7" /></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight">Onboarding Hub</h3>
                <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-8 md:mb-10">Everything you need to successfully launch Hurudzai AI in your cooperative or agricultural organization.</p>
                <button className="flex items-center gap-3 text-[#05150E] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors">
                  Start Hub <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20 text-[#05150E]">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">Frequently Asked <br /><span className="text-emerald-600 italic">Questions.</span></h2>
            <div className="w-16 h-1 bg-gray-100 mx-auto" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50/20 transition-all cursor-pointer group"
              >
                <h4 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-emerald-700 transition-colors">{faq.q}</h4>
                <p className="text-gray-500 font-medium text-base leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Support Channels ── */}
      <section className="py-32 bg-[#05150E] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-10 uppercase">Still need <br /><span className="text-emerald-400 font-serif lowercase italic">a</span> hand?</h2>
              <p className="text-white/40 text-xl font-medium mb-12 max-w-xl">Our human support team is ready to step in when the AI can't quite get there.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
                  <MessageSquare className="w-8 h-8 text-emerald-400 mb-6" />
                  <div className="font-black uppercase tracking-tight text-xl mb-1">Live Chat</div>
                  <p className="text-white/30 text-xs font-medium mb-6">Available Mon-Fri, 24h</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:underline">Start Chat</button>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
                  <Mail className="w-8 h-8 text-blue-400 mb-6" />
                  <div className="font-black uppercase tracking-tight text-xl mb-1">Email Support</div>
                  <p className="text-white/30 text-xs font-medium mb-6">Response in 2h</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:underline">Send Ticket</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-12 rounded-[3.5rem] bg-emerald-600 shadow-2xl shadow-emerald-600/20 text-center relative overflow-hidden group">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Emergency Hotline</h4>
                  <p className="text-emerald-100 text-sm font-medium mb-8">For critical system outages or enterprise support.</p>
                  <div className="text-3xl font-black text-white tracking-widest mb-2">+263 71 404 1560</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200">Exclusively for priority users</span>
                </div>
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-transparent to-transparent group-hover:rotate-12 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
