
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a senior cybersecurity educator specializing in social media security and account protection. 
Your goal is to provide defensive security advice ONLY.

STRICT RULES:
1. NEVER provide code for hacking, phishing, brute-forcing, or bypassing security.
2. If asked "how to hack", explain that it is illegal and unethical, then redirect to how the user can PROTECT themselves from such attacks.
3. Provide practical steps for securing Facebook, Instagram, and other platforms.
4. Explain technical concepts (like salts, hashing, 2FA, OAuth) in simple terms.
5. Be professional, helpful, and highly ethical.
6. If the user asks in Bengali, respond in Bengali or English as appropriate, but prioritize clarity.
`;

export const getSecurityAdvice = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // In a real implementation, we would send the history. 
    // For this simplified version, we just send the message.
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my security knowledge base. Please try again later.";
  }
};
