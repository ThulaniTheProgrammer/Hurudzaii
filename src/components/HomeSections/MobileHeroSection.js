import React from "react";
import { motion } from "framer-motion";
import { Zap, Signal, Bot, Smartphone } from "lucide-react";

const floatingAnim = {
  y: ["0%", "-5%", "0%"],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const MobileHeroSection = () => {
  return (
    <motion.div
      key="mobile"
      initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      className="relative z-10"
    >
      <motion.div animate={floatingAnim} className="relative w-[300px] h-[600px] rounded-[2.5rem] shadow-2xl bg-[#05150E] border border-white/10 overflow-hidden">
        <img src="/mobile-preview.jpg" alt="Mobile App Preview" className="w-full h-full object-cover" />

        {/* Content inside the phone screen */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          {/* Top bar with Kadoma weather */}
          <div className="flex items-center justify-between text-white text-xs font-bold">
            <span>Kadoma, ZW</span>
            <span>28°C</span>
          </div>

          {/* Main content area - dynamic data */}
          <div className="flex-grow flex flex-col justify-center items-center text-white text-center">
            <p className="text-lg font-bold mb-2">Soil Health: Optimal</p>
            <p className="text-sm text-emerald-300">pH: 6.5, N: High, P: Med, K: High</p>
            <button className="mt-4 px-4 py-2 bg-emerald-500 rounded-full text-xs font-bold">View Details</button>
          </div>

          {/* Bottom navigation/actions */}
          <div className="flex items-center justify-around text-white text-xs">
            <div className="flex flex-col items-center">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Actions</span>
            </div>
            <div className="flex flex-col items-center">
              <Signal className="w-4 h-4 text-blue-400" />
              <span>Network</span>
            </div>
            <div className="flex flex-col items-center">
              <Bot className="w-4 h-4 text-purple-400" />
              <span>AI Chat</span>
            </div>
          </div>
        </div>

        {/* Mobile Optimized / Zero Data Mode badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 right-6 p-4 rounded-2xl bg-white shadow-lg flex flex-col gap-1 z-30"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600"><Smartphone className="w-3 h-3" /></div>
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Mobile Optimized</span>
          </div>
          <span className="text-base font-black text-[#05150E]">Zero Data Mode</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileHeroSection;
