import { useState } from "react";

export const useOpenAIChat = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleSearch = async () => {
    const q = query.trim();
    if (!q || loading) return;

    setLoading(true);
    setIsModalOpen(true);

    // If the key is missing, fail gracefully
    if (!openaiApiKey) {
      setResult("Demo mode: API key not configured. Please request a full demo account.");
      setLoading(false);
      return;
    }

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
            { role: "user", content: q },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show a useful message without leaking internals
        setResult("Demo mode: Service is temporarily unavailable. Please request a full demo account.");
        return;
      }

      const text = data?.choices?.[0]?.message?.content;
      setResult(text || "Please contact support for a demo account.");
    } catch (e) {
      setResult("Demo mode: Please request a full demo account to unlock real-time agricultural insights.");
    } finally {
      setLoading(false);
    }
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