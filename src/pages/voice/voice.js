import React, { useState, useEffect } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Voice = () => {
  const [load, setLoad] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");
  const [lang, setLang] = useState("en");
  const [listening, setListening] = useState(false);
  const [textQuery, setTextQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationError, setValidationError] = useState("");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  // Language Map
  const langMap = {
    en: "en-US",
    hi: "sn-ZW", // Shona
    es: "nd-ZW", // Ndebele
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = langMap[lang] || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setTranscript("");
    setChatGPTResponse("");
    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      setListening(false);
      sendToChatGPT(speechToText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setListening(false);
      setTranscript("Error recognizing voice. Try again.");
    };
  };

  const sendToChatGPT = async (userPrompt) => {
    setLoad(true);

    try {
      const systemPrompt = {
        en: "You are a helpful, knowledgeable assistant. Provide clear, accurate, concise answers for any topic. Prefer structured, step-by-step guidance when useful.",
        hi: "Uri mubatsiri anobatsira ane ruzivo. Ipa mhinduro dzakapfupi, dzakajeka uye dzakarurama pamisoro yose. Shandisa nhanho-nenhanho kana zvichibatsira.",
        es: "Ungumsizi onolwazi futhi oluncedo. Nikeza izimpendulo ezicacile, ezifushane nezilungile kunoma yisiphi isihloko. Sebenzisa izinyathelo ezihlelelekile lapho kusiza."
      };

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt[lang] || systemPrompt["en"] },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();

      if (data?.choices?.[0]?.message?.content) {
        setChatGPTResponse(data.choices[0].message.content);
        setIsModalOpen(true);
      } else {
        setChatGPTResponse("No response from Hurudzai AI please subscribe or contact us for free demo.");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("ChatGPT error:", error);
      setChatGPTResponse("Register to use Hurudzai AI or contact us for free demo at fmakeba@cut.ac.zw");
      setIsModalOpen(true);
    }

    setLoad(false);
  };

  const handleTextSearch = async () => {
    setValidationError("");
    if (!textQuery.trim()) {
      setValidationError("Enter a query to search.");
      return;
    }
    setTranscript(textQuery);
    await sendToChatGPT(textQuery);
  };

  return (
    <>
      <PreHeader />
      <Header />
      <section className="relative my-14 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent"></div>
        <div className="grid place-items-center">
          <div className="container max-w-5xl bg-white/80 backdrop-blur p-10 mt-14 text-center rounded-2xl shadow-xl border border-emerald-100">
            <p className="text-3xl md:text-4xl font-semibold text-emerald-700 tracking-tight">
              Ask Anything
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-2">Type a question or use your voice. Get clear, concise answers fast.</p>

            {/* Text Search */}
            <div className="flex flex-col items-center space-y-3 my-6">
              <div className="w-full max-w-3xl flex flex-row space-x-2">
                <input
                  type="text"
                  value={textQuery}
                  onChange={(e) => setTextQuery(e.target.value)}
                  placeholder="Search anything (e.g., best irrigation methods for maize, or 'explain quantum computing')"
                  className="flex-1 px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  onClick={handleTextSearch}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition-transform active:scale-95"
                >
                  🔎 Search
                </button>
              </div>
              {validationError && (
                <span className="text-red-600 text-sm">{validationError}</span>
              )}
              {transcript && (
                <span className="text-xs text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">Last query: {transcript}</span>
              )}
            </div>

            {/* Language Buttons */}
            <div className="flex flex-row flex-wrap gap-2 my-6 justify-center items-center">
              <span className="text-gray-600">Select Language:</span>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-full shadow-sm transition ${lang === "en" ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-4 py-2 rounded-full shadow-sm transition ${lang === "hi" ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
              >
                Shona
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-2 rounded-full shadow-sm transition ${lang === "es" ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
              >
                Ndebele
              </button>
            </div>

            {/* Voice Start Button */}
            <div className="my-4">
              <button
                onClick={startListening}
                disabled={listening}
                className={`px-8 py-3 text-white font-semibold rounded-full shadow ${listening ? "bg-gray-400" : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
              >
                {listening ? "🎙️ Listening..." : "🎤 Start Voice Search"}
              </button>
            </div>

            {/* Modal for Results */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)}></div>
                <div className="relative bg-white w-11/12 max-w-3xl mx-auto rounded-2xl shadow-2xl p-6 border border-emerald-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-emerald-700">Search Result</h3>
                    <button className="text-gray-600 hover:text-gray-900" onClick={() => setIsModalOpen(false)}>×</button>
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    <strong>Query:</strong> {transcript}
                  </div>
                  {load ? (
                    <p className="text-gray-500">Loading...</p>
                  ) : (
                    <div className="p-4 bg-gray-50 border rounded max-h-[60vh] overflow-auto">
                      <p className="text-gray-800 whitespace-pre-line leading-relaxed">{chatGPTResponse}</p>
                    </div>
                  )}
                  <div className="mt-4 text-right">
                    <button
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            <button className="mt-8 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow">
              Not Satisfied? Raise a ticket
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Voice;
