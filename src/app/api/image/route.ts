import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.CHATGPT_API_KEY });


export async function POST(request: Request) {

  const {prompt} = await request.json();
  console.log("Received prompt:", prompt);

  const result = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1024x1024",
  });
  console.log(result.data![0].url);

  return new Response(JSON.stringify(result.data![0].url), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
