import React from "react";
import { motion } from "framer-motion";

export const TestimonialsSection = () => (
    <section className="py-40 bg-[#05150E] relative overflow-hidden">
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
                    { text: "\u201cHurudzai AI helped me plant the right crop for my soil. I saw a 45% yield increase in just one season.\u201d", author: "Tendai M.", role: "Commercial Farmer, Mashonaland" },
                    { text: "\u201cThe fertilizer recommendations cut my input costs by 30%. I\u2019m finally seeing real profit.\u201d", author: "Lindiwe G.", role: "Smallholder, Matabeleland" },
                    { text: "\u201cBeing able to ask questions in Shona makes my whole crew more efficient. It\u2019s a game changer.\u201d", author: "Samuel T.", role: "Co-op Lead, Midlands" },
                ].map((t, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 relative transition-all duration-500 hover:bg-white/[0.06] hover:border-emerald-500/30 group"
                    >
                        <div className="absolute top-0 right-12 translate-y-[-50%]">
                            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl font-serif shadow-2xl">
                                "
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
);
