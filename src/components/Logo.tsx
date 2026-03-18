import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(() => {
    return localStorage.getItem('tech-driven-logo');
  });
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (logoUrl) return;

    const generateLogo = async () => {
      setIsGenerating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A unique, modern, minimalist logo for AfriNex. It should feel professional and tech-forward, combining subtle conference or cloud motifs with a clean vector style, using modern neutral and amber accent colors. White background, high quality, professional.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
            }
          },
        });

        const parts = response.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.inlineData) {
            const base64 = `data:image/png;base64,${part.inlineData.data}`;
            setLogoUrl(base64);
            localStorage.setItem('tech-driven-logo', base64);
            break;
          }
        }
      } catch (error) {
        console.error('Failed to generate logo:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateLogo();
  }, [logoUrl]);

  if (logoUrl) {
    return (
      <img 
          src={logoUrl} 
          alt="AfriNex Logo" 
          className={cn("object-cover rounded-full", className)} 
        />
    );
  }

  return (
    <div className={cn("rounded-full bg-amber-600 flex items-center justify-center text-white", className)}>
      {isGenerating ? (
        <div className="w-1/2 h-1/2 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <Globe className="w-3/5 h-3/5" />
      )}
    </div>
  );
}
