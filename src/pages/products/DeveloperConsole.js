import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import { Code2, Webhook, Key, ShieldCheck, ArrowRight, TerminalSquare } from "lucide-react";

const features = [
    { icon: Code2, title: "REST & GraphQL APIs", desc: "Full-featured API suite to integrate Hurudzai AI capabilities in any stack." },
    { icon: Webhook, title: "Webhooks & Events", desc: "Subscribe to real-time events and trigger workflows in your own systems." },
    { icon: Key, title: "API Key Management", desc: "Granular key scoping with usage analytics and rate-limit controls." },
    { icon: ShieldCheck, title: "Sandbox Environment", desc: "Test against a production-mirror environment before going live." },
];

const DeveloperConsole = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans">
        <Header />

        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#05150E] to-[#05150E]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-8">
                        <TerminalSquare className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Developer Console</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                        Build On <br />
                        <span className="text-emerald-400">Hurudzai AI</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Access powerful APIs, webhooks, and SDKs to embed agricultural AI intelligence directly into your own platforms and applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                            View Docs <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all">
                            Get API Key
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Code snippet teaser */}
        <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 font-mono text-sm overflow-x-auto mb-12">
                    <div className="flex gap-2 mb-4">
                        <span className="w-3 h-3 rounded-full bg-red-500/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <pre className="text-emerald-300/80 whitespace-pre-wrap leading-relaxed">{`POST /v1/advisory HTTP/1.1
Host: api.hurudzai.ai
Authorization: Bearer hzai_live_xxxxxxx
Content-Type: application/json

{
  "farmer_id": "f_12345",
  "query": "What is the best fertilizer for maize in sandy soil?",
  "language": "en"
}

// 200 OK
{
  "advice": "Apply 200kg/ha of Compound D at planting...",
  "confidence": 0.94
}`}</pre>
                </div>
            </div>
        </section>

        <section className="py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-emerald-500/30 rounded-3xl p-8 transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                                <f.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-black mb-2">{f.title}</h3>
                            <p className="text-white/50 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <Footer />
    </div>
);

export default DeveloperConsole;
