import React from "react";
import { HeroSection } from "../components/HomeSections/HeroSection";
import { ScrollingBulletinStrip } from "../components/HomeSections/ScrollingBulletinStrip";
import { ResultModal } from "../components/HomeSections/ResultModal";
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
