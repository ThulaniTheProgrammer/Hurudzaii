import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion } from "framer-motion";
import {
  TrendingUp, TrendingDown, BarChart3, Globe2,
  MapPin, ShoppingCart, DollarSign, ArrowUpRight,
  Target, Zap, Scale, Layers
} from "lucide-react";
import { staggerContainer, fadeInUp, floatingAnim } from "../components/HomeSections/shared";

const commodities = [
  { name: "Maize (White)", price: "$290/mt", change: "+2.4%", trend: "up", volume: "12k mt" },
  { name: "Soya Beans", price: "$550/mt", change: "-1.1%", trend: "down", volume: "4.5k mt" },
  { name: "Wheat", price: "$415/mt", change: "+0.8%", trend: "up", volume: "8.2k mt" },
  { name: "Tobacco (Flue)", price: "$3.85/kg", change: "+5.2%", trend: "up", volume: "920 mt" },
  { name: "Cotton", price: "$0.45/kg", change: "-0.5%", trend: "down", volume: "15k mt" },
  { name: "Sugar Beans", price: "$1200/mt", change: "+1.2%", trend: "up", volume: "2.1k mt" },
];

const regions = [
  { name: "Mashonaland West", status: "High Demand", color: "emerald", intensity: 90 },
  { name: "Midlands", status: "Stable", color: "blue", intensity: 60 },
  { name: "Manicaland", status: "Growing", color: "purple", intensity: 75 },
  { name: "Masvingo", status: "Balanced", color: "amber", intensity: 45 },
];

const Market = () => {
  return (
    <div className="font-sans selection:bg-emerald-100 pb-20">
      {/* ── Header ── */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-emerald-500/10"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          Live Price Checker
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-[#05150E] uppercase tracking-tighter mb-4 leading-[0.9]">
              Market <span className="text-emerald-600">Intelligence.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Real-time insights on commodity valuation and regional liquidity.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
            <div className="px-5 py-3 rounded-xl bg-gray-50 text-[10px] font-black uppercase tracking-widest text-[#05150E]">Export CSV</div>
            <div className="px-5 py-3 rounded-xl bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-600/20 cursor-pointer hover:bg-emerald-700 transition-colors">Alert Settings</div>
          </div>
        </div>
      </div>

      {/* ── Live Ticker Strip (Enhanced) ── */}
      <section className="relative group mb-12">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAF9] to-transparent z-10 pointer-events-none" />

        <div className="bg-white border border-gray-100 py-6 overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap px-4">
            {[...commodities, ...commodities].map((c, i) => (
              <div key={i} className="flex items-center gap-6 px-10 border-r border-gray-100 last:border-0 text-[#05150E]">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-1">{c.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xl tracking-tight">{c.price}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${c.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                      {c.trend === 'up' ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                      {c.change}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end opacity-20">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em]">Vol</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">{c.volume}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Analysis Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mb-12">
        {/* Main Price Analysis Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#05150E]">Volatility Index</h3>
              </div>
              <p className="text-gray-400 text-sm font-medium">Aggregate price movements across major hubs (Harare, Bulawayo, Gweru)</p>
            </div>
            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
              {['1D', '1W', '1M', '1Y'].map((t) => (
                <button
                  key={t}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${t === '1W' ? 'bg-[#05150E] text-white shadow-xl' : 'text-gray-400 hover:text-[#05150E]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Visualization Layer */}
          <div className="relative h-72 md:h-84 mb-10 group/chart">
            <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="0" y1={i * 100} x2="1000" y2={i * 100} stroke="#f3f4f6" strokeWidth="1" />
              ))}
              {/* Path */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 250 Q 100 200 200 220 T 400 150 T 600 180 T 800 100 T 1000 80"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                d="M 0 250 Q 100 200 200 220 T 400 150 T 600 180 T 800 100 T 1000 80 L 1000 300 L 0 300 Z"
                fill="url(#chartGradient)"
              />
              {/* Data Node */}
              <circle cx="800" cy="100" r="12" fill="white" stroke="#10b981" strokeWidth="4" className="filter drop-shadow-lg" />
            </svg>

            <div className="absolute top-24 left-[80%] -translate-x-1/2 -translate-y-full">
              <div className="bg-[#05150E] text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center">
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 mb-1">Peak Value</span>
                <span className="text-lg font-black tracking-tight">$412.50</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100 mt-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Growth</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-[#05150E]">+14.2%</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cap</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-[#05150E]">$42M</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confidence</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-[#05150E]">92%</div>
            </div>
          </div>
        </motion.div>

        {/* Action Sidebar: Demand & Liquidity */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#05150E] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-400 text-[9px] font-black uppercase tracking-wider mb-8 border border-emerald-400/20">
                <Zap className="w-3 h-3" /> Area Hotspots
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight leading-none mb-6">Regional <br />Demand.</h3>

              <div className="space-y-4">
                {regions.map((r, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-black uppercase tracking-tight">{r.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.intensity}%` }}
                          viewport={{ once: true }}
                          className={`h-full bg-${r.color}-500`}
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 shrink-0">{r.intensity}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 py-5 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
                Contact Local Buyers
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-10 shadow-xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center mb-6 text-[#05150E]">
              <Scale className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-2">Yield Value</h4>
            <p className="text-gray-400 text-sm font-medium mb-8">Calculate your harvest's full market potential instantly.</p>
            <button className="w-full py-4 rounded-xl border-2 border-dashed border-gray-100 text-gray-400 font-bold uppercase tracking-widest text-[9px] hover:border-emerald-500 hover:text-emerald-600 transition-all">
              Initialize Calculator
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Market Depth Table ── */}
      <section className="mb-12">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.03)]">
          <div className="p-8 md:p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#05150E]">Commodity Depth</h3>
              <p className="text-gray-400 text-sm font-medium">Real-time localized price spreads across Zimbabwe</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center animate-pulse">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#05150E]">Market Live</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 md:px-12 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Commodity</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Current Price</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Change</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hidden md:table-cell">Volume (24h)</th>
                  <th className="px-8 md:px-12 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {commodities.map((c, i) => (
                  <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 md:px-12 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#05150E] group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <Layers className="w-5 h-5" />
                        </div>
                        <span className="font-black text-gray-900 uppercase tracking-tight">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <span className="font-black text-xl text-[#05150E] tracking-tighter">{c.price}</span>
                    </td>
                    <td className="px-8 py-8">
                      <div className={`inline-flex items-center gap-1.5 font-bold text-xs ${c.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {c.trend === 'up' ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                        {c.change}
                      </div>
                    </td>
                    <td className="px-8 py-8 hidden md:table-cell">
                      <span className="text-gray-400 font-black uppercase text-[10px] tracking-widest">{c.volume}</span>
                    </td>
                    <td className="px-8 md:px-12 py-8 text-right">
                      <button className="px-6 py-3 rounded-xl bg-[#05150E] text-white text-[9px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg active:scale-95">
                        Sell Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Feature Bento ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
        {[
          { icon: Globe2, title: "Global Sync", desc: "Compare local prices with international benchmarks like the CBOT.", color: "blue" },
          { icon: Zap, title: "AI Predict", desc: "Predictive modeling based on regional rainfall and supply chain data.", color: "emerald" },
          { icon: Scale, title: "Smart Weigh", desc: "Acoustic and visual grading tools to verify your crop quality.", color: "amber" },
          { icon: Layers, title: "Trade Ledger", desc: "Immutable record of all your transactions for bank financing.", color: "purple" }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-emerald-500/30 transition-all shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className={`w-14 h-14 rounded-2xl bg-${f.color}-50 text-${f.color}-600 mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm`}>
              <f.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-3 text-[#05150E] group-hover:text-emerald-600 transition-colors">{f.title}</h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Final CTA ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#05150E] rounded-[3rem] md:rounded-[4rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/10 transition-all duration-1000" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9]">
            Yielding more <br /><span className="text-emerald-500 italic font-serif lowercase tracking-normal">than just crops.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
            Join 4,000+ farmers already using Hurudzai AI to optimize their exit prices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#05150E] transition-all shadow-2xl active:scale-95">
              Talk to a Buyer
            </button>
            <button className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all active:scale-95">
              Sell via WhatsApp
            </button>
          </div>
        </div>
      </motion.div>

      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};
export default Market;
