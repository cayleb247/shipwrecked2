import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.CHATGPT_API_KEY });

interface bodyType {
    subject: string,
    subjectEmotion: string,
    subjectArousal: string,
    verb: string,
    verbEmotion: string,
    verbArousal: string,
    object?: string,
    objectEmotion?: string,
    objectArousal?: string,
}

export async function POST(request: Request) {
  // Parse the request body
  const body:bodyType = await request.json();
  const { subject, verb, object, subjectEmotion, subjectArousal, verbEmotion, verbArousal, objectEmotion, objectArousal } = body;

  console.log("body:", subject, verb, object, subjectEmotion, subjectArousal, verbEmotion, verbArousal, objectEmotion, objectArousal);

  const result = await openai.images.generate({
    model: "dall-e-3",
    prompt: `You are generating an image to communicate the sentiment expressed by a sentence written with emojis 
    instead of text. The emojis are subject: ${subject}, verb: ${verb}, object: ${object}. Here is the emotion that is 
    trying to be conveyed with each of those emojis: subjectEmotion: ${subjectEmotion}, subjectArousal: ${subjectArousal}, 
    verbEmotion: ${verbEmotion}, verbArousal: ${verbArousal}, objectEmotion: ${objectEmotion}, objectArousal: ${objectArousal}.
    Emotion is on a scale of 0-100 from unhappy to happy (50 is neutral). Arousal is 0-100 (deactivated to activated).`,
    size: "1024x1024",
  });
  console.log(result.data![0].url);

  return new Response(JSON.stringify(result.data![0].url), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
