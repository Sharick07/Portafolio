import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePortfolioImages() {
  const prompts = [
    {
      id: "barranquilla_code",
      prompt: "A photorealistic, high-resolution wide shot of the modern skyline of Barranquilla, Colombia, at dusk. The Magdalena River is visible with soft reflections. Subtle, sharp digital code overlays in white and light purple, integrated naturally into the atmosphere. Cinematic lighting, professional photography style."
    },
    {
      id: "data_dev_security",
      prompt: "A clean, professional high-tech workspace with a high-end laptop showing complex data visualizations and code. In the background, a subtle holographic shield icon represents security. Realistic textures, soft natural lighting from a window, shallow depth of field. Minimalist and elegant."
    },
    {
      id: "finpredict_ai",
      prompt: "A realistic close-up of a tablet screen displaying a sophisticated financial prediction dashboard with real-time stock market graphs and AI-driven risk analysis indicators. Professional financial tech aesthetic, sharp focus, realistic glass reflections."
    },
    {
      id: "cyberfine_mockup",
      prompt: "A high-quality 3D mockup of a modern iPhone showing a sleek mobile app interface for traffic fine management. The UI features violet and pink accents, clean typography, and a secure blockchain-inspired design. Floating in a minimalist space."
    },
    {
      id: "safecloud_shield",
      prompt: "A professional 3D digital illustration of a glowing, translucent shield protecting a stream of data particles flowing into a cloud icon. Cyber-security theme, AWS inspired colors but with a soft pastel purple and blue palette. High-tech and secure feel."
    },
    {
      id: "ecodata_dashboard",
      prompt: "A beautiful, minimalist UI dashboard showing energy consumption analytics. Features pastel-colored circular charts and bar graphs. Clean, modern design with a focus on sustainability and data visualization. Soft glassmorphism effects."
    }
  ];

  const results: Record<string, string> = {};

  for (const item of prompts) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: item.prompt }],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          results[item.id] = `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    } catch (error) {
      console.error(`Error generating image for ${item.id}:`, error);
    }
  }

  return results;
}
