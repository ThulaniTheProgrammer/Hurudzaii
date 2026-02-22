import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "./shared";

const articles = [
    { title: "Hurudzai AI Showcased at Africa AI Summit 2026", excerpt: "Leading the conversation on how localized AI models can transform African smallholder productivity.", img: "/High-tech-agriculture-at-sunrise.png", date: "Jan 12, 2026", category: "Exhibition" },
    { title: "Improving Crop Yield Through AI Nutrient Mapping", excerpt: "New study shows 35% reduction in fertilizer waste using our precision application schedules.", img: "/Futuristic-farm-at-dawn.png", date: "Dec 20, 2025", category: "Innovation" },
    { title: "Partnership Expansion with Innovation Hubs", excerpt: "Scaling our reach through institutional collaborations across Mashonaland and beyond.", img: "/Farm-field-nutrient-analysis-at-sunset.png", date: "Nov 05, 2025", category: "Growth" },
];

export const NewsSection = () => (
    <section className="py-40 bg-gray-50 relative overflow-hidden">
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
                    View All News
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
                {articles.map((news, i) => (
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
);
