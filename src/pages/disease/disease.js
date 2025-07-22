import React, { useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Disease = () => {
  const [photo, setPhoto] = useState(null);
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const languagePromptMap = {
    en: "Describe this plant disease and how to treat it in English.",
    hi: "Tsanangura chirwere chechirimwa ichi uye maitiro ekuchirapa muShona.",
    es: "Chaza lesi sifo sesitshalo lokuthi singelashwa njani ngesiNdebele."
  };

  async function onClick() {
    if (!photo) return alert("Please upload an image.");

    setLoad(true);
    setPrediction("");

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1]; // remove the data:image/...;base64, prefix
      const prompt = languagePromptMap[lang] || languagePromptMap["en"];

      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4-vision-preview",
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: prompt },
                  {
                    type: "image_url",
                    image_url: {
                      url: `data:image/jpeg;base64,${base64Image}`
                    }
                  }
                ]
              }
            ],
            max_tokens: 1000
          })
        });

        const data = await response.json();
        setPrediction(data.choices[0]?.message?.content || "No prediction returned.");
      } catch (error) {
        console.error("OpenAI Error:", error);
        setPrediction("Error getting prediction.");
      } finally {
        setLoad(false);
      }
    };

    reader.readAsDataURL(photo);
  }

  return (
    <>
      <PreHeader />
      <Header />
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
            </p>

            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language</div>
              <div className="ml-16">
                <button onClick={() => setLang("en")} className="lang-button">English</button>
              </div>
              <div className="ml-16">
                <button onClick={() => setLang("hi")} className="lang-button">Shona</button>
              </div>
              <div className="ml-16">
                <button onClick={() => setLang("es")} className="lang-button">Ndebele</button>
              </div>
            </div>

            <p className="title">Select Image:</p>
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} className="m-6" />

            <button onClick={onClick} className="action-button">
              Get Disease Prediction
            </button>

            <p className="title mt-10">Uploaded Image:</p>
            {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded preview"
                className="mt-4 max-w-xs rounded shadow"
              />
            )}
          </div>
        </div>

        <div className="grid place-items-center my-14 text-center">
          {load ? (
            <p className="text-green-600">Loading prediction...</p>
          ) : prediction ? (
            <>
              <p className="font-bold my-3 text-xl text-green-700">Predicted Result:</p>
              <p>{prediction}</p>
            </>
          ) : null}
        </div>
      </section>
      <Footer />

      {/* Tailwind Custom Buttons */}
      <style jsx>{`
        .lang-button,
        .action-button {
          padding: 0.6rem 1.2rem;
          background-color: #16a34a;
          color: white;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 0.375rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .lang-button:hover,
        .action-button:hover {
          background-color: #15803d;
        }
      `}</style>
    </>
  );
};

export default Disease;
