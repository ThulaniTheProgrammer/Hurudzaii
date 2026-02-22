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
  { name: "Maize (White)", price: "$290/mt", change: "+2.4%", trend: "up" },
  { name: "Soya Beans", price: "$550/mt", change: "-1.1%", trend: "down" },
  { name: "Wheat", price: "$415/mt", change: "+0.8%", trend: "up" },
  { name: "Tabacco (Flue)", price: "$3.85/kg", change: "+5.2%", trend: "up" },
];

const regions = [
  { name: "Mashonaland West", status: "High Demand", color: "text-emerald-400" },
  { name: "Midlands", status: "Stable", color: "text-blue-400" },
  { name: "Manicaland", status: "Growing", color: "text-purple-400" },
];

const Market = () => {
  return (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Abstract backgrounds */}
        <div className="absolute inset-0 bg-[#05150E]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-emerald-500/20">
              <BarChart3 className="w-3.5 h-3.5" />
              Live Market Intelligence
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              Market <br /><span className="text-emerald-400 font-serif lowercase italic">Pulse.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-emerald-100/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-16">
              Real-time regional pricing, demand forecasting, and supply chain logistics powered by the Hurudzai Agri-Graph.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Live Ticker Strip ── */}
      <section className="bg-white/5 border-y border-white/10 py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...commodities, ...commodities].map((c, i) => (
            <div key={i} className="flex items-center gap-4 px-8 border-r border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{c.name}</span>
              <span className="font-black text-lg">{c.price}</span>
              <span className={`text-xs font-bold flex items-center gap-1 ${c.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {c.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {c.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Dashboard Mockup ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Market Trend Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[3rem] p-12 overflow-hidden relative group"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Regional Indices</h3>
                  <p className="text-white/40 text-sm font-medium">Aggregated price movements across Zimbabwe</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest">7 Days</div>
                  <div className="px-4 py-2 rounded-xl bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest">30 Days</div>
                </div>
              </div>

              {/* Mock Graph Visual */}
              <div className="h-64 flex items-end gap-3 px-4">
                {[40, 60, 45, 70, 85, 60, 95, 80, 110, 90, 120, 105].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className={`flex-1 rounded-t-lg bg-gradient-to-t ${i === 11 ? 'from-emerald-600 to-emerald-400' : 'from-white/5 to-white/20'}`}
                  />
                ))}
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                <div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Volume Traded</div>
                  <div className="text-2xl font-black">1.4k Tons</div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Liquidity</div>
                  <div className="text-2xl font-black">$2.8M</div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Volatility</div>
                  <div className="text-2xl font-black text-emerald-400">Low</div>
                </div>
              </div>
            </motion.div>

            {/* Price Watchlist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#10b981] rounded-[3rem] p-12 text-[#05150E] shadow-2xl shadow-emerald-500/20"
            >
              <div className="bg-[#05150E] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-10">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight leading-none mb-10">Buy/Sell <br />Opportunities.</h3>
              <div className="space-y-6">
                {regions.map((r, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-between">
                    <div>
                      <div className="font-black uppercase tracking-tight">{r.name}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#05150E]/60">{r.status}</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-5 rounded-2xl bg-[#05150E] text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all">
                Open Trading Desk
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Feature Bento ── */}
      <section className="py-32 bg-white text-[#05150E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe2, title: "Global Parity", desc: "Compare regional farm-gate prices with international commodities markets." },
              { icon: Zap, title: "Forecasting", desc: "Predict price fluctuations based on weather patterns and seasonal trends." },
              { icon: Scale, title: "Arbitrage", desc: "Identify regional price differences to optimize logistics and sales." },
              { icon: Layers, title: "Traceability", desc: "Track every transaction back to the farm of origin for premium exports." }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-emerald-500/20 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{f.title}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Container ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
            Maximize Your <br /><span className="text-emerald-400">Yield Value.</span>
          </h2>
          <p className="text-emerald-100/40 text-xl font-medium mb-12 max-w-xl mx-auto">
            Don't sell for less than your crop is worth. Access the most accurate market data in Southern Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all shadow-xl active:scale-95">
              Get Full Access
            </button>
            <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              View Demo Data
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Market;
