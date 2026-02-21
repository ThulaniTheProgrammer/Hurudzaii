import { useState } from "react";

export const useOpenAIChat = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            { role: "system", content: "You are Hurudzai AI, a helpful agricultural assistant for African farmers. Keep answers concise and actionable." },
            { role: "user", content: query },
          ],
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      setResult(data?.choices?.[0]?.message?.content || "Please contact support for a demo account.");
    } catch (e) {
      setResult("Demo mode: Please request a full demo account to unlock real-time agricultural insights.");
    }
    setLoading(false);
  };

  return {
    query,
    setQuery,
    result,
    setResult,
    loading,
    setLoading,
    isModalOpen,
    setIsModalOpen,
    handleSearch,
  };
};