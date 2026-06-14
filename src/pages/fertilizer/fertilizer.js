import React, { useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
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
    en: `You are an agricultural assistant. Based on soil type, crop type, moisture, nitrogen, phosphorus, potassium and city, provide:
1. Recommended fertilizer.
2. Information about it.
3. How to apply it.
4. Its specifications.
Respond clearly and in English.`,
    hi: `Iwe uri mubatsiri wezvekurima. Zvichienderana nerudzi rwevhu, chirimwa, hunyoro, nitrogen, phosphorus, potassium nemaguta, ipa:
1. Fetereza inokurudzirwa.
2. Ruzivo nezvayo.
3. Maitiro ekuiisa.
4. Zvakakosha zvefetereza yacho.
Pindura muchiShona zvakajeka.`,
    nd: `Ungumeluleki wezolimo. Ngokohlobo lomhlabathi, uhlobo lwesilimo, umswakamo, i-nitrogen, i-phosphorus, i-potassium kanye ledolobho, nikeza:
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

    const userInput = `Soil type: ${soilType}
Crop type: ${cropType}
Moisture: ${moisture}
Nitrogen: ${nitrogen}
Phosphorus: ${phosphorus}
Potassium: ${potassium}
City: ${city}
Give a full fertilizer recommendation.`

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

      // Attempt to split sections by keywords
      setPrediction(content.match(/(?:Fertilizer|Recommendation):?\s*(.*)/i)?.[1] || "—");
      setInformation(content.match(/Information:?\s*([\s\S]*?)Application:/i)?.[1] || "—");
      setApplication(content.match(/Application:?\s*([\s\S]*?)Specification:/i)?.[1] || "—");
      setSpecification(content.match(/Specification:?\s*([\s\S]*)/i)?.[1] || "—");
    } catch (error) {
      console.error("OpenAI Error:", error);
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
              Predict the Fertilizer for your crop
            </p>

            {/* Language selection */}
            <div className="flex flex-row space-x-3 my-10">
              <div>Select a Language:</div>
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

            {/* Dropdowns */}
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Soil Type</div>
              <div className="ml-16">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Clay">Clayey</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Crop Type</div>
              <div className="ml-16">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Millets">Millets</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Barley">Barley</option>
                  <option value="Paddy">Paddy</option>
                </select>
              </div>
            </div>

            {/* Text Inputs */}
            <input
              onChange={(e) => setMoisture(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter moisture value"
            />
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter nitrogen value"
            />
            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter phosphorus value"
            />
            <input
              onChange={(e) => setPotassium(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="number"
              placeholder="Enter potassium value"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              className="w-3/5 my-2 p-2 border rounded"
              type="text"
              placeholder="Enter city"
            />

            {/* Submit */}
            <div className="mt-10">
              <button
                onClick={onSearchSubmit}
                className="px-6 py-2.5 bg-green-600 text-white text-sm rounded shadow-md hover:bg-blue-700 transition"
              >
                Get Fertilizer Recommendation
              </button>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="text-center">
          {load && <p className="text-green-600 font-semibold my-6">Loading...</p>}
          {prediction && (
            <div className="my-10 px-8 text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-green-700 mb-2">Fertilizer Recommended:</h3>
              <p>{prediction}</p>
              <h3 className="text-xl font-bold text-green-700 mt-6">Information:</h3>
              <p>{information}</p>
              <h3 className="text-xl font-bold text-green-700 mt-6">Application:</h3>
              <p>{application}</p>
              <h3 className="text-xl font-bold text-green-700 mt-6">Specification:</h3>
              <p>{specification}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fertilizer;
