import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.CHATGPT_API_KEY });

interface bodyType {
    subject: string,
    verb: string,
    object?: string,
    emotion?: string
}

export async function POST(request: Request) {
  // Parse the request body
  const body:bodyType = await request.json();
  const { subject, verb, object, emotion } = body;

  console.log("body:", subject, verb, object, emotion);

  const result = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Using the following subject, verb, and/or object and emotion, create an image that depicts what is going on. The subject, verb, and/or object and emotion are: ${subject}, ${verb}, ${object}, ${emotion}`,
    size: "1024x1024",
  });
  console.log(result.data![0].url);

  return new Response(JSON.stringify(result.data![0].url), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
