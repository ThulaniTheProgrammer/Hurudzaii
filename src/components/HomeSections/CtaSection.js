import React from "react";
import { motion } from "framer-motion";
import { Fingerprint, ArrowRight, Bot } from "lucide-react";

export const CtaSection = () => (
    <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="relative group p-12 md:p-24 rounded-[5rem] overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#05150E] group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

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

                    <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tight">
                        Ready to transform <br />your yield?
                    </h2>
                    <p className="text-emerald-50/70 mb-14 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Join thousands of farmers across Zimbabwe, South Africa, and Botswana who are growing smarter with Hurudzai AI.
                    </p>

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

                {/* Visual ornaments */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 blur-[80px] rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-400/10 blur-[80px] rounded-full" />
            </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10">
            <div className="grid grid-cols-8 gap-10 -rotate-12 translate-y-[-10%] scale-150">
                {[...Array(64)].map((_, i) => <Bot key={i} className="w-16 h-16" />)}
            </div>
        </div>
    </section>
);
