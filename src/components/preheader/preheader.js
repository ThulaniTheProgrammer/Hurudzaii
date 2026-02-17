import React from "react";
import "./preheader.css";

const PreHeader = () => {
  return (
    <div className="bg-emerald-900 px-6 md:px-12 py-2 hidden md:block w-full border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-emerald-400/80">
        <div className="flex items-center gap-4">
          <span>Official Hurudzai AI Platform</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
          <span>v2.4.0 Stable</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-emerald-300 cursor-pointer transition-colors">Documentation</span>
          <span className="hover:text-emerald-300 cursor-pointer transition-colors">Support Portal</span>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
