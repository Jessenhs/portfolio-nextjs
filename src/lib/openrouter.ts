import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function Grok(prompt: string) {
  const completion = await openai.chat.completions.create({
    model: "x-ai/grok-4.1-fast",  // Or latest Grok model
    messages: [{ role: "user", content: prompt }],
  });
  return completion.choices[0].message.content;
}

export default Grok;