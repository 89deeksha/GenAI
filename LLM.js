import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
        {
            role:'user',
            parts:[{text:"hi, I'm deeksha"}]

        },
        {
            role:'model',
            parts:[{text:"Hi Deeksha! It's nice to meet you. How can I help you today?"}]

        },
         {
            role:'user',
            parts:[{text:"what is my name?"}]

        }
    ]
  });

  console.log(response.text);
}

main();
