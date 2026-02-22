import React from "react";
import { Database, BarChart3, Code2, Languages } from "lucide-react";

// Layout
import PreHeader from "../components/preheader/preheader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

// Home Sections
import { HeroSection } from "../components/HomeSections/HeroSection";
import { BulletinStrip } from "../components/HomeSections/BulletinStrip";
import { ResultModal } from "../components/HomeSections/ResultModal";
import { EcosystemSection } from "../components/HomeSections/EcosystemSection";
import { TechBentoSection } from "../components/HomeSections/TechBentoSection";
import { HowItWorksSection } from "../components/HomeSections/HowItWorksSection";
import { TestimonialsSection } from "../components/HomeSections/TestimonialsSection";
import { PartnersSection } from "../components/HomeSections/PartnersSection";
import { RecognitionSection } from "../components/HomeSections/RecognitionSection";
import { NewsSection } from "../components/HomeSections/NewsSection";
import { CtaSection } from "../components/HomeSections/CtaSection";
import { HighlightStrip } from "../components/HomeSections/HighlightStrip";

// ─── Static data ─────────────────────────────────────────────────────────────
const ScienceDetailImg = "/Leaf-rust-detection-in-precision-agriculture.png";

const features = [
  {
    icon: Languages,
    title: "Multilingual Assistant Engine",
    description:
      "Specialized assistant engine trained on african agricultural knowledge and practices that can answer questions in local african languages.",
    color: "bg-emerald-500",
  },
  {
    icon: Database,
    title: "The African Knowledge Graph",
    description:
      "Hurudzai AI is building the largest proprietary database of soil types, crop types, and agricultural practices in africa. This makes us the most knowledgeable AI agent in african agriculture.",
    color: "bg-blue-500",
  },
  {
    icon: BarChart3,
    title: "Real time market clearing house",
    description:
      "Hurudzai AI layer connects thousands of farmers directly to high value markets in africa automating the logistics and pricing that middlemen usually steal",
    color: "bg-amber-500",
    detailImg: ScienceDetailImg,
  },
  {
    icon: Code2,
    title: "Agritech API",
    description:
      "Full agronomy support in Shona, Ndebele, and English. No tech-savviness required.",
    color: "bg-purple-500",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
const Home = () => {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [heroView, setHeroView] = React.useState("platform"); // "platform" | "mobile"

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setIsModalOpen(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are Hurudzai AI, a helpful agricultural assistant for African farmers. Keep answers concise and actionable.",
            },
            { role: "user", content: query },
          ],
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      setResult(
        data?.choices?.[0]?.message?.content ||
        "Please contact support for a demo account."
      );
    } catch {
      setResult(
        "Demo mode: Please request a full demo account to unlock real-time agricultural insights."
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">
      <PreHeader />
      <Header />

      <HeroSection
        heroView={heroView}
        setHeroView={setHeroView}
        features={features}
      />

      <BulletinStrip />

      <ResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loading={loading}
        result={result}
      />

      <EcosystemSection />
      <TechBentoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PartnersSection />
      <RecognitionSection />
      <NewsSection />
      <CtaSection />

      <Footer />
      <HighlightStrip />
    </div>
  );
};

export default Home;