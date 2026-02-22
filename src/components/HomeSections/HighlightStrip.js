import React from "react";
import { Award, Globe2, Tractor } from "lucide-react";

export const HighlightStrip = () => (
    <div className="bg-emerald-950 py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-emerald-400/60">
            <div className="flex items-center gap-3">
                <Award className="w-4 h-4" />
                <span>Recognized at major African AI exhibitions</span>
            </div>
            <div className="flex items-center gap-3">
                <Globe2 className="w-4 h-4" />
                <span>Partnering with national institutions</span>
            </div>
            <div className="flex items-center gap-3">
                <Tractor className="w-4 h-4" />
                <span>Building the future of smart agriculture</span>
            </div>
        </div>
    </div>
);
