import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Gemini features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const summarizeContent = async (text: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Please provide a concise, 2-sentence summary of the following blog post. Capture the main argument and conclusion.\n\n${text}`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Fast response needed
      }
    });
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini summary error:", error);
    return "Error generating summary.";
  }
};

export const askResearchAssistant = async (query: string, context?: string) => {
  const ai = getAiClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = context 
    ? `Context: The user is reading a blog post about: "${context}".\nUser Question: ${query}\n\nAnswer the user's question. If the answer requires external knowledge not in the context, use Google Search.`
    : `User Question: ${query}\n\nAnswer the user's question thoroughly using Google Search if needed for current or factual information.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I couldn't find an answer.";
    
    // Extract grounding chunks for sources
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web?.uri && chunk.web?.title)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri
      }));

    return { text, sources };

  } catch (error) {
    console.error("Gemini research error:", error);
    throw error;
  }
};
