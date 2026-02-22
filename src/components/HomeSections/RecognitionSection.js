import React from "react";
import { motion } from "framer-motion";
import { Award, Globe2, Tractor, Newspaper } from "lucide-react";
import { staggerContainer, fadeInUp } from "./shared";

const events = [
    { title: "AI for Good Agritech Global Award", desc: "Recognized for innovation in AI-driven agricultural solutions for smallholder farmers.", year: "2025", icon: Award, tag: "Global" },
    { title: "Africa AI Summit Exhibition", desc: "Exhibited Hurudzai AI's large language model capabilities at Africa's premier AI summit.", year: "2026", icon: Globe2, tag: "Summit" },
    { title: "Zimbabwe Agricultural Show", desc: "Showcased smart farming technology to national agricultural stakeholders and policy makers.", year: "2024", icon: Tractor, tag: "National" },
    { title: "The Herald News Feature", desc: "Critically acclaimed innovation feature in Zimbabwe's leading national daily newspaper.", year: "2024", icon: Newspaper, tag: "Media" },
];

export const RecognitionSection = () => (
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
                {events.map((event, i) => (
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
                        <div className="absolute bottom-0 left-12 right-12 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);
