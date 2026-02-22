import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  BookOpen, Search, Code2, Terminal,
  Settings, HelpCircle, FileText, ChevronRight,
  ExternalLink, Github, MessageSquare
} from "lucide-react";

const docCategories = [
  {
    title: "Getting Started",
    items: ["Quick Start Guide", "Platform Overview", "Account Setup", "Authentication"]
  },
  {
    title: "Core APIs",
    items: ["Advisory API", "Soil Knowledge Graph", "Weather Endpoints", "Farmer CRM Sync"]
  },
  {
    title: "SDKs & Integrations",
    items: ["JavaScript SDK", "Python Client", "WhatsApp Webhook", "SMS Gateway"]
  },
  {
    title: "Resources",
    items: ["API Reference", "Code Examples", "Error Codes", "Rate Limits"]
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Page Header ── */}
      <section className="pt-48 pb-16 px-6 bg-[#05150E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
                Documentation Portal
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                Developers <span className="text-emerald-400">Library.</span>
              </h1>
            </div>

            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="SEARCH DOCUMENTATION..."
                className="w-full pl-14 pr-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white outline-none focus:border-emerald-500 transition-all font-bold text-xs uppercase tracking-widest shadow-2xl"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">

            {/* Sidebar Navigation */}
            <aside className="hidden lg:block space-y-12">
              {docCategories.map((cat, i) => (
                <div key={i}>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-6">{cat.title}</h3>
                  <ul className="space-y-4">
                    {cat.items.map((item, j) => (
                      <li key={j}>
                        <a href={`/docs/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-bold text-gray-500 hover:text-emerald-600 transition-colors flex items-center gap-2 group">
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-12 border-t border-gray-100">
                <div className="p-6 rounded-3xl bg-emerald-50 text-emerald-700">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Need Help?
                  </h4>
                  <p className="text-xs font-medium leading-relaxed mb-4">Our engineering team is active on the Discord.</p>
                  <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                    Join Discord <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  { icon: BookOpen, title: "Quickstart", desc: "Get up and running with Hurudzai AI in under 5 minutes." },
                  { icon: Code2, title: "API Reference", desc: "Detailed endpoints for our advisory and soil engines." },
                  { icon: Terminal, title: "CLI Tool", desc: "Manage your deployments directly from your terminal." },
                  { icon: Settings, title: "Integrations", desc: "Connect with WhatsApp, SMS centers, and ERPs." }
                ].map((guide, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-emerald-200 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#05150E] mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <guide.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black mb-4 uppercase tracking-tight group-hover:text-emerald-700 transition-colors">{guide.title}</h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">{guide.desc}</p>
                    <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                      Explore Guide <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="prose prose-emerald max-w-none">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Latest Documentation Updates</h2>
                <div className="space-y-4">
                  {[
                    { date: "Feb 15, 2026", update: "v4.0.2 released with enhanced Shona dialect support.", tag: "v4.0" },
                    { date: "Feb 10, 2026", update: "Added support for regional weather station IoT integration.", tag: "IoT" },
                    { date: "Feb 05, 2026", update: "New tutorial: Building a cooperative dashboard with React.", tag: "Tutorial" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl hover:border-emerald-100 transition-all">
                      <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg uppercase tracking-tight shrink-0">{item.tag}</div>
                      <div className="flex-grow font-bold text-gray-700 text-sm">{item.update}</div>
                      <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest hidden sm:block">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ── Technical Footer ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-12">Found a bug or need a feature?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="flex items-center justify-center gap-3 bg-white px-10 py-5 rounded-2xl border border-gray-100 font-black text-xs uppercase tracking-widest hover:border-emerald-200 hover:text-emerald-600 transition-all shadow-sm">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#05150E] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl">
              <MessageSquare className="w-5 h-5" />
              Contact Engineering
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
