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
        en: "You are an expert agricultural assistant helping farmers with their queries.",
        hi: "Iwe uri mubatsiri wezvekurima unopa rubatsiro kune varimi muShona.",
        es: "Ungumeluleki wezolimo osiza abalimi ngeziluleko ngesiNdebele."
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
      } else {
        setChatGPTResponse("No response from ChatGPT.");
      }
    } catch (error) {
      console.error("ChatGPT error:", error);
      setChatGPTResponse("Failed to fetch response. Try again.");
    }

    setLoad(false);
  };

  return (
    <>
      <PreHeader />
      <Header />
      <section className="my-14">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 p-10 mt-14 text-center">
            <p className="text-2xl font-medium text-green-600 my-6">
              Speak Your Query
            </p>

            {/* Language Buttons */}
            <div className="flex flex-row space-x-3 my-8 justify-center">
              <span>Select Language:</span>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded ${
                  lang === "en" ? "bg-blue-700 text-white" : "bg-green-600 text-white"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-4 py-2 rounded ${
                  lang === "hi" ? "bg-blue-700 text-white" : "bg-green-600 text-white"
                }`}
              >
                Shona
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-2 rounded ${
                  lang === "es" ? "bg-blue-700 text-white" : "bg-green-600 text-white"
                }`}
              >
                Ndebele
              </button>
            </div>

            {/* Voice Start Button */}
            <div className="my-6">
              <button
                onClick={startListening}
                disabled={listening}
                className={`px-8 py-3 text-white font-semibold rounded ${
                  listening ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {listening ? "Listening..." : "Start Voice Search"}
              </button>
            </div>

            {/* Transcript */}
            <div className="text-sm text-gray-700 mt-4">
              <strong>Transcript:</strong> {transcript}
            </div>

            {/* Response */}
            <div className="my-10">
              <h3 className="text-xl font-semibold text-green-600">SEARCH RESULT</h3>
              {load ? (
                <p className="text-gray-500 mt-4">Loading...</p>
              ) : (
                <div className="mt-4 p-6 bg-gray-300 bg-opacity-30 border rounded">
                  <p className="text-gray-800 whitespace-pre-line">{chatGPTResponse}</p>
                </div>
              )}
            </div>

            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded">
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
