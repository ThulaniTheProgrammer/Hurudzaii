import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mic,
    MessageSquare,
    Zap,
    Smartphone,
    Send,
    RefreshCw,
    Activity,
    BrainCircuit,
    Camera,
    TrendingUp,
    Volume2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnifiedSandbox = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Simple welcome message
        setMessages([
            {
                role: "ai",
                text: "Mhoroi! I am Hurudzai AI. I can help you with your farm. You can ask me about soil, fertilizer, sick crops, or prices. How can I help you today?",
                time: new Date().toLocaleTimeString()
            }
        ]);
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input, time: new Date().toLocaleTimeString() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simple Farmer-focused Mock Responses
        setTimeout(() => {
            setIsTyping(false);
            const aiResponse = {
                role: "ai",
                text: getSimpleResponse(input),
                time: new Date().toLocaleTimeString()
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1500);
    };

    const getSimpleResponse = (queryText) => {
        const query = queryText.toLowerCase();

        if (query.includes("maize") || query.includes("chibage")) return "For your Maize (Chibage), you should check if the leaves have any spots. If you see yellowing, it might need more Nitrogen. Use Compound D at planting.";
        if (query.includes("fertilizer") || query.includes("fotireza")) return "Fertilizer helps your crops grow strong. For most crops in Zimbabwe, start with Compound D and then add Ammonium Nitrate (AN) after 4 to 6 weeks.";
        if (query.includes("price") || query.includes("mutengo")) return "Current market prices: Maize is selling for $240 per tonne at GMB. Tomatoes are $5 per crate in Mbare today.";
        if (query.includes("rain") || query.includes("mvura")) return "The forecast shows rains starting this weekend in your area. It is a good time to prepare your land.";

        return "That is a good question. Let me check the best agricultural manuals for Zimbabwe... I recommend checking your soil moisture and looking out for any pests like Fall Armyworm.";
    };

    return (
        <div className="text-[#05150E] font-sans selection:bg-emerald-100 flex flex-col h-[calc(100vh-180px)]">
            {/* ── Friendly Title ── */}
            <div className="text-center mb-10 shrink-0">
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Speak to Hurudzai AI</h1>
                <p className="text-gray-500 font-medium italic">Type or talk to us in any language you like.</p>
            </div>

            {/* ── Chat Container ── */}
            <div className="flex-grow bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col relative min-h-0">
                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                {/* Chat Messages */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 custom-scrollbar relative z-10">
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[85%] flex gap-4 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm ${m.role === "user" ? "bg-white border border-gray-100" : "bg-[#05150E] text-white"}`}>
                                    {m.role === "user" ? <Activity className="w-6 h-6 opacity-40" /> : <BrainCircuit className="w-6 h-6 text-emerald-400" />}
                                </div>
                                <div className="space-y-1">
                                    <div className={`p-6 rounded-[2.5rem] text-base leading-relaxed font-medium ${m.role === "user" ? "bg-emerald-600 text-white rounded-tr-none shadow-lg shadow-emerald-600/10" : "bg-gray-50 border border-gray-100 rounded-tl-none text-gray-800"}`}>
                                        {m.text}
                                    </div>
                                    <div className={`text-[10px] font-black uppercase tracking-widest text-gray-300 ${m.role === "user" ? "text-right" : "text-left"}`}>
                                        {m.role === "user" ? "You" : "Hurudzai Assistant"} • {m.time}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="max-w-xl flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#05150E] text-white">
                                    <BrainCircuit className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div className="flex gap-1 p-4 bg-gray-50 rounded-full">
                                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-8 bg-gray-50/50 border-t border-gray-100 relative z-10 shrink-0">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {["Maize Fertilizer", "Tomato Diseases", "Market Prices", "Rain Forecast"].map((suggestion) => (
                            <button
                                key={suggestion}
                                onClick={() => setInput(suggestion)}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message here..."
                            className="w-full bg-white border-2 border-transparent focus:border-emerald-500 shadow-xl rounded-[2.5rem] py-6 pl-8 pr-32 outline-none transition-all font-medium"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                            <button className="p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-500 transition-all shadow-xl active:scale-95">
                                <Mic className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleSend}
                                className="p-4 bg-[#05150E] text-white rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Quick Services Shortcuts ── */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                {[
                    { icon: Camera, name: "Identify Disease", path: "/disease" },
                    { icon: TrendingUp, name: "Market Prices", path: "/market" },
                    { icon: Zap, name: "Fertilizer Calculator", path: "/fertilizer" },
                    { icon: RefreshCw, name: "Clear Chat", action: () => setMessages([]) }
                ].map((item, i) => (
                    <button
                        key={i}
                        onClick={() => item.action ? item.action() : navigate(item.path)}
                        className="p-4 bg-white border border-gray-100 rounded-[2rem] flex items-center gap-4 hover:border-emerald-200 hover:bg-emerald-50 transition-all shadow-sm"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tight text-left leading-tight">{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UnifiedSandbox;
