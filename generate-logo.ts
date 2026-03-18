import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateLogo() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set.");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A unique, modern, minimalist logo for AfriNex. It should feel professional and tech-forward, combining subtle conference or cloud motifs with a clean vector style and modern neutral + amber accents. White background, high quality, professional.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      },
    });
    const candidate = response?.candidates?.[0];
    if (!candidate) {
      console.error('No candidates returned from the model response.');
      return;
    }

    const parts = candidate.content?.parts;
    if (!Array.isArray(parts) || parts.length === 0) {
      console.error('No content parts found in candidate.');
      return;
    }

    for (const part of parts) {
      const base64EncodeString = part?.inlineData?.data;
      if (!base64EncodeString || typeof base64EncodeString !== 'string') continue;

      const buffer = Buffer.from(base64EncodeString, 'base64');
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
      }
      fs.writeFileSync(path.join(publicDir, 'logo.png'), buffer);
      console.log('Logo generated successfully!');
      break;
    }
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();
