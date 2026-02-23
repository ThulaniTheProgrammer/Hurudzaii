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
    <div className="font-sans selection:bg-emerald-100">
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
        <h1 className="text-4xl md:text-5xl font-black text-[#05150E] uppercase tracking-tight mb-4">
          Market <span className="text-emerald-600">Prices</span>
        </h1>
        <p className="text-gray-500 text-lg font-medium max-w-2xl leading-relaxed">
          See how much your crops are worth today across Zimbabwe. Sell for the best price.
        </p>
      </div>

      {/* ── Live Ticker Strip ── */}
      <section className="bg-emerald-50 border border-emerald-100 py-6 overflow-hidden rounded-[2.5rem] mb-12 shadow-sm">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...commodities, ...commodities].map((c, i) => (
            <div key={i} className="flex items-center gap-4 px-8 border-r border-emerald-200 text-[#05150E]">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{c.name}</span>
              <span className="font-black text-lg">{c.price}</span>
              <span className={`text-xs font-bold flex items-center gap-1 ${c.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {c.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {c.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Dashboard ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* Market Trend Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white border border-emerald-100 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl overflow-hidden relative group"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 md:mb-10">
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 text-[#05150E]">Prices by Area</h3>
              <p className="text-gray-400 text-sm font-medium">Average prices for crops in Zimbabwe</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none px-4 md:px-5 py-2.5 rounded-xl bg-[#05150E] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center">7 Days</div>
              <div className="flex-1 sm:flex-none px-4 md:px-5 py-2.5 rounded-xl bg-gray-50 text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center">30 Days</div>
            </div>
          </div>

          {/* Mock Graph Visual */}
          <div className="h-48 md:h-64 flex items-end gap-1.5 md:gap-3 px-2 md:px-4">
            {[40, 60, 45, 70, 85, 60, 95, 80, 110, 90, 120, 105].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className={`flex-1 rounded-t-sm md:rounded-t-lg bg-gradient-to-t ${i === 11 ? 'from-emerald-600 to-emerald-400 shadow-lg shadow-emerald-600/20' : 'from-gray-50 to-gray-100'}`}
              />
            ))}
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-10 border-t border-gray-100">
            <div>
              <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Selling</div>
              <div className="text-sm md:text-2xl font-black text-[#05150E]">1.4k Tons</div>
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Cash Flow</div>
              <div className="text-sm md:text-2xl font-black text-[#05150E]">$2.8M</div>
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Stability</div>
              <div className="text-sm md:text-2xl font-black text-emerald-600 uppercase">High</div>
            </div>
          </div>
        </motion.div>

        {/* Price Watchlist */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-600 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-emerald-600/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
            <Target className="w-32 h-32" />
          </div>
          <div className="relative z-10 font-sans">
            <div className="bg-[#05150E] text-white w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-xl">
              <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-4">Sell Your <br className="hidden md:block" />Crops.</h3>
            <p className="text-emerald-100 text-xs md:text-sm font-medium mb-8 md:mb-10 leading-relaxed">Buyers looking for crops in these areas:</p>
            <div className="space-y-3 md:space-y-4">
              {regions.map((r, i) => (
                <div key={i} className="p-4 md:p-5 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-between group hover:bg-white/20 transition-all cursor-pointer">
                  <div>
                    <div className="text-sm md:text-base font-black uppercase tracking-tight">{r.name}</div>
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-200">{r.status}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 md:mt-10 py-5 rounded-xl md:rounded-2xl bg-[#05150E] text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#05150E]/80 transition-all shadow-2xl active:scale-95">
              Contact Buyers
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Feature Bento ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Globe2, title: "Best Prices", desc: "Compare prices across Zimbabwe to get the best deal for your hard work." },
          { icon: Zap, title: "Prediction", desc: "We tell you if prices will go up or down next week based on weather." },
          { icon: Scale, title: "Weight Check", desc: "Calculate your yield value before you go to the market." },
          { icon: Layers, title: "Tracking", desc: "Keep a record of every sale you make to manage your farm money." }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white border border-emerald-100 hover:border-emerald-500/40 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 mb-8 flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white">
              <f.icon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight mb-3 text-[#05150E]">{f.title}</h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-[#05150E] rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/10 transition-colors" />
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">
          Make more money <br /><span className="text-emerald-500 italic font-serif lowercase tracking-normal">from your harvest.</span>
        </h2>
        <button className="px-12 py-5 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-sm hover:bg-[#05150E] hover:border hover:border-emerald-600 transition-all shadow-xl active:scale-95 relative z-10">
          Talk to a Buyer Today
        </button>
      </div>

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
