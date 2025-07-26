
import { GoogleGenAI } from "@google/genai";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node
const api="AIzaSyAAocg4g2SHnB-nRonWWhvK-Tbc5Cx0A_4";
async function run(prompt) {
  const ai = new GoogleGenAI({
    apiKey: api,
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  let fullResponse = '';

for await (const chunk of response) {
    fullResponse += chunk.text; // or chunk.text() if it's a function
    console.log(chunk.text);
}

return fullResponse;
}



export default run;
