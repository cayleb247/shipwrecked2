import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

interface bodyType {
    subject: string,
    subjectEmotion: string,
    subjectArousal: string,
    verb: string,
    verbEmotion: string,
    verbArousal: string,
    object: string,
    objectEmotion: string,
    objectArousal: string,
}

export async function POST(request: Request) {
  const body: bodyType = await request.json();
  const {subject, subjectEmotion, subjectArousal, verb, verbEmotion, verbArousal, object, objectEmotion, objectArousal} = body;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `I want you to explain the following numbers in context by building a sentence that semantically makes sense. 
    Build a sentence that uses these emojis. Subject: ${subject}, subjectEmotion: 
    ${subjectEmotion}/100 on a hapiness scale, subjectArousal: ${subjectArousal}/100 on an arousal 
    scale, verb: ${verb}, verbEmotion: ${verbEmotion}/100 on a hapiness scale, verbArousal: ${verbArousal}/100 on an arousal scale, 
    object: ${object}, objectEmotion: ${objectEmotion}/100 on a hapiness scale, objectArousal: ${objectArousal}/100 on an arousal scale. 
    Only return the generated sentence.`,
  });

  console.log(response.text);

  return new Response(JSON.stringify(response.text), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}