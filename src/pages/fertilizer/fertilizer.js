import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, Search, RefreshCw, Sprout,
  MapPin, CheckCircle2, ChevronRight, Info,
  Zap, Droplets, Thermometer, Wind
} from "lucide-react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("Clay");
  const [cropType, setCropType] = useState("Maize");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");
  const [lang, setLang] = useState("en");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const systemPrompt = {
    en: `You are an architectural agricultural assistant. Based on soil type, crop type, moisture, nitrogen, phosphorus, potassium and city, provide:
1. Recommended fertilizer.
2. Information about it.
3. How to apply it.
4. Its specifications.
Keep responses highly technical and structured.`,
    hi: `Iwe uri mubatsiri wezvekurima weHurudzai AI. Zvichienderana nerudzi rwevhu, chirimwa, hunyoro, nitrogen, phosphorus, potassium nemaguta, ipa:
1. Fetereza inokurudzirwa.
2. Ruzivo nezvayo.
3. Maitiro ekuiisa.
4. Zvakakosha zvefetereza yacho.
Pindura muchiShona zvakajeka uye zvine hunyanzvi.`,
    nd: `Ungumeluleki wezolimo weHurudzai AI. Ngokohlobo lomhlabathi, uhlobo lwesilimo, umswakamo, i-nitrogen, i-phosphorus, i-potassium kanye ledolobho, nikeza:
1. Umanyolo ohlongozwayo.
2. Ulwazi ngawo.
3. Indlela yokuwusebenzisa.
4. Incazelo yomkhiqizo.
Phendula ngesiNdebele esiqondile.`
  };

  const onSearchSubmit = async () => {
    setLoad(true);
    setPrediction("");
    setInformation("");
    setApplication("");
    setSpecification("");

    const userInput = `Soil type: ${soilType}, Crop type: ${cropType}, Moisture: ${moisture}, N: ${nitrogen}, P: ${phosphorus}, K: ${potassium}, City: ${city}. Give a full fertilizer recommendation.`;

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt[lang] || systemPrompt.en },
            { role: "user", content: userInput }
          ],
          temperature: 0.6
        })
      });

      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content || "";

      setPrediction(content.match(/(?:Fertilizer|Recommendation):?\s*(.*)/i)?.[1] || "—");
      setInformation(content.match(/Information:?\s*([\s\S]*?)Application:/i)?.[1] || "—");
      setApplication(content.match(/Application:?\s*([\s\S]*?)Specification:/i)?.[1] || "—");
      setSpecification(content.match(/Specification:?\s*([\s\S]*)/i)?.[1] || "—");
    } catch (error) {
      console.error("OpenAI Error:", error);
      setPrediction("Technical error in inference. Please try again.");
    }
    setLoad(false);
  };

  return (
    <div className="font-sans">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-emerald-500/10"
          >
            <Zap className="w-3.5 h-3.5" />
            Soil & Nutrient Guide
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-[#05150E] uppercase tracking-tight mb-4">
            Fertilizer <span className="text-emerald-600">Calculator</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl leading-relaxed">
            Tell us about your soil and what you are planting. We will calculate the best fertilizer for you to grow big crops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 md:gap-12 items-start px-4 md:px-0">
          {/* ── Parameters Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-emerald-100 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 shadow-xl space-y-8"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Your Soil Info</h3>
              <div className="flex gap-2">
                {["en", "hi", "nd"].map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-8 h-8 rounded-full text-[8px] font-black uppercase flex items-center justify-center transition-all ${lang === l ? "bg-[#05150E] text-white" : "bg-gray-50 text-gray-400"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40 pl-4">Soil Type</label>
                  <select onChange={(e) => setSoilType(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all appearance-none">
                    <option value="Clay">Clayey (Vhu)</option>
                    <option value="Sandy">Sandy (Jecha)</option>
                    <option value="Loamy">Loamy</option>
                    <option value="Black">Black (Dongo)</option>
                    <option value="Red">Red (Chishava)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40 pl-4">Crop Type</label>
                  <select onChange={(e) => setCropType(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all appearance-none">
                    {["Maize (Chibage)", "Wheat", "Tobacco", "Cotton", "Sugarcane", "Paddy", "Barley"].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40 pl-4">Is the soil wet? (%)</label>
                <div className="relative">
                  <Droplets className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
                  <input type="number" onChange={(e) => setMoisture(e.target.value)} placeholder="0 - 100" className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[{ label: "Nitrogen", setter: setNitrogen }, { label: "Phos", setter: setPhosphorus }, { label: "Potas", setter: setPotassium }].map(item => (
                  <div key={item.label} className="space-y-2 text-center">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40">{item.label}</label>
                    <input type="number" onChange={(e) => item.setter(e.target.value)} placeholder="0" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-2 py-4 text-center text-sm font-bold outline-none focus:border-emerald-500 transition-all" />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40 pl-4">Where is your farm?</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
                  <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="e.g. Bindura" className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all" />
                </div>
              </div>
            </div>

            <button
              onClick={onSearchSubmit}
              disabled={load}
              className="w-full py-6 rounded-[2rem] bg-emerald-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-[#05150E] transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
            >
              {load ? <RefreshCw className="w-5 h-5 animate-spin" /> : <><Search className="w-4 h-4" /> Check My Soil</>}
            </button>
          </motion.div>

          {/* ── Results Panel ── */}
          <div className="space-y-8 h-full">
            {!prediction && !load && (
              <div className="h-full min-h-[400px] border-4 border-dashed border-gray-100 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center justify-center p-10 md:p-20 text-center bg-gray-50/50">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm border border-gray-100">
                  <Info className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#05150E]/20 mb-4">No Calculation Yet</h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium italic max-w-xs">Fill in your farm details on the left to see which fertilizer you need.</p>
              </div>
            )}

            {load && (
              <div className="h-full min-h-[400px] bg-white rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center justify-center p-10 md:p-20 text-center border border-emerald-100 shadow-xl">
                <div className="relative mb-8 md:mb-12">
                  <div className="w-20 h-20 md:w-24 md:h-24 border-8 border-emerald-50/10 rounded-full animate-spin border-t-emerald-500" />
                  <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-emerald-600 animate-pulse" />
                </div>
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] bg-emerald-50 px-8 py-3 rounded-full border border-emerald-100">Calculating...</span>
              </div>
            )}

            <AnimatePresence>
              {prediction && !load && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6 pb-12"
                >
                  <div className="bg-[#05150E] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-emerald-600/20 transition-colors" />
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 shrink-0">
                          <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Best Fertilizer:</h4>
                          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">{prediction}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                      <Sprout className="w-40 h-40" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-emerald-100 rounded-[2.5rem] p-10 shadow-lg">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                          <Info className="w-5 h-5" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">What is it?</h4>
                      </div>
                      <p className="text-base font-medium text-[#05150E]/80 leading-relaxed italic">{information}</p>
                    </div>
                    <div className="bg-white border border-emerald-100 rounded-[2.5rem] p-10 shadow-lg">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100">
                          <Zap className="w-5 h-5" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">How to use it?</h4>
                      </div>
                      <p className="text-base font-medium text-[#05150E]/80 leading-relaxed italic">{application}</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-12">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Technical Details</h4>
                      <button className="text-[10px] font-bold uppercase text-[#05150E]/40 hover:text-emerald-600 transition-colors">Print Guide</button>
                    </div>
                    <p className="text-[#05150E]/60 text-sm leading-relaxed font-medium whitespace-pre-wrap">{specification}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fertilizer;
