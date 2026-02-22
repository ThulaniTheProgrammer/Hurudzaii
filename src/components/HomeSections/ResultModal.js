import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic2 } from "lucide-react";

export const ResultModal = ({ isOpen, onClose, loading, result }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[#0A2E1F]/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-12 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8">
          <button onClick={onClose} className="text-gray-300 hover:text-emerald-600 transition-colors">
            <X className="w-10 h-10" />
          </button>
        </div>
        <div className="flex items-center gap-6 mb-10">
          <div className="p-4 bg-emerald-100 text-emerald-600 rounded-[1.5rem]">
            <Mic2 className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black text-[#05150E]">Hurudzai Voice Result</h3>
        </div>
        <div className="min-h-[200px] p-8 bg-gray-50 rounded-[2rem] border border-gray-100 text-[#05150E] leading-relaxed text-xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-[6px] border-emerald-500 border-t-transparent rounded-full animate-spin mb-6" />
              <p className="text-emerald-600 font-black animate-pulse uppercase tracking-widest text-sm">Consulting Agronomy Engine...</p>
            </div>
          ) : (
            <p className="whitespace-pre-line">{result}</p>
          )}
        </div>
        <div className="mt-10 flex justify-between items-center text-gray-400 text-xs font-bold uppercase tracking-widest">
          <span>v2.4 Kernel Integrated</span>
          <button onClick={onClose} className="px-10 py-4 bg-emerald-600 text-white rounded-[1.5rem] font-black hover:bg-emerald-700 transition-all shadow-lg active:scale-95">
            Complete Session
          </button>
        </div>
      </motion.div>
    </div>
  );
};
