import React, { useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Crop = () => {
  const [load, setLoad] = useState(false);
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [rain, setRain] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const systemPrompt = {
    en: "You are an expert agricultural assistant. Use soil and climate data to recommend the best crop to plant. Respond briefly and clearly.",
    hi: "Iwe uri nyanzvi yezvekurima. Shandisa ruzivo rwevhu nemamiriro ekunze kupa zano rekudyara chirimwa chakanakisa. Pindura muchiShona.",
    nd: "Ungumeluleki wezolimo. Sebenzisa imininingwane yomhlabathi nesimo sezulu ukunikeza isiphakamiso sokutshala isilimo esifanele. Phendula ngesiNdebele esiqondile."
  };

  const onSearchSubmit = async () => {
    setLoad(true);
    setPrediction("");

    const userInput = `Soil has: 
    - Nitrogen: ${nitrogen}
    - Phosphorus: ${phosphorus}
    - Potassium: ${potassium}
    - pH: ${ph}
    - Rainfall: ${rain}mm
    - Location: ${city}

    Based on these values, recommend the most suitable crop to plant in this region.`;

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
          temperature: 0.5
        })
      });

      const data = await res.json();
      const result = data?.choices?.[0]?.message?.content;
      setPrediction(result || "No recommendation received.");
    } catch (error) {
      console.error("OpenAI error:", error);
      setPrediction("Something went wrong. Try again.");
    }

    setLoad(false);
  };

  return (
    <>
      <PreHeader />
      <Header />
      <section>
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the best crop to plant
            </p>

            {/* Language Selector */}
            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a language:</div>
              {["en", "hi", "nd"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`ml-4 px-6 py-2.5 ${
                    lang === code ? "bg-blue-700" : "bg-green-600"
                  } text-white font-medium text-xs uppercase rounded shadow-md`}
                >
                  {code === "en"
                    ? "English"
                    : code === "hi"
                    ? "Shona"
                    : "Ndebele"}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter the value of Nitrogen"
            />
            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter the value of Phosphorus"
            />
            <input
              onChange={(e) => setPotassium(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter the value of Potassium"
            />
            <input
              onChange={(e) => setPh(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter the soil pH value (0–14)"
            />
            <input
              onChange={(e) => setRain(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter the rainfall (in mm)"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="text"
              placeholder="Enter your city"
            />

            {/* Submit Button */}
            <div className="mt-10">
              <button
                onClick={onSearchSubmit}
                className="px-6 py-2.5 bg-green-600 text-white text-sm rounded shadow-md hover:bg-blue-700 transition"
              >
                Get Crop Recommendation
              </button>
            </div>
          </div>
        </div>

        {/* Loading / Result */}
        <div className="text-center">
          {load && <p className="text-green-600 font-semibold my-6">Loading...</p>}
          {prediction && (
            <div className="my-10 px-8">
              <p className="text-xl font-bold text-green-700">Crop Recommendation:</p>
              <p className="mt-4 text-gray-800 whitespace-pre-line">{prediction}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Crop;
