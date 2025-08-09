"use client";

import styles from "./page.module.css";
import { useState } from "react";
import EmojiPicker from "@/components/EmojiPicker";
import React from "react";
import EmotionSlider from "@/components/EmotionSlider";
import ArouselSlider from "@/components/ArouselSlider";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const action_emojis = ["🤣", "😉", "😘", "🤫", "🫡", "😮‍💨", "🫨", "😴", "🤮", "🤧", "🥳", "🤬", "💬", "👋", "🖖", "👌", "🤞", "👈", "👉", "👆", "👇", "🫵", "👍", "👎", "✊", "🤝", "✍", "💅", "🤳", "💪", "👂", "👃"];
  const subject_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🥷", "👷‍♀️", "🫅", "🤴", "👸", "🎅", "🦸", "🦸‍♂️", "🧙", "🧛", "🧜‍♂️", "🧟", "🐵", "🐒", "🦍", "🦧", "🐶", "🐕", "🦊", "🐱", "🐮", "🐷", "🐔", "🐧", "💐", "🌸", "🥀"];
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const createPrompt = async () => {
    const response = await fetch('/api/text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: emoji1,
        subjectEmotion: emoji1Emotion,
        subjectArousal: emoji1Arousal,
        verb: emoji2,
        verbEmotion: emoji2Emotion,
        verbArousal: emoji2Arousal,
        object: emoji3,
        objectEmotion: emoji3Emotion,
        objectArousal: emoji3Arousal,
      }),
    });

    const data = await response.json();
    console.log(data);

    return data;
  };

  const handleGenerate = async () => {
    const promptData = await createPrompt();
    const promptText = promptData.text || promptData; 
    if(promptText) {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText })
      });
      console.log(response);
      const url = await response.json();
      console.log(url);
      setImageUrl(url);
    } 
  }

  const [emoji1, setEmoji1] = useState<string>(subject_emojis[0]);
  const [emoji1Emotion, setEmoji1Emotion] = useState([50]);
  const [emoji1Arousal, setEmoji1Arousal] = useState([50]);
  const [emoji2, setEmoji2] = useState<string>(action_emojis[0]);
  const [emoji2Emotion, setEmoji2Emotion] = useState([50]);
  const [emoji2Arousal, setEmoji2Arousal] = useState([50]);
  const [emoji3, setEmoji3] = useState<string>(subject_emojis[1]);
  const [emoji3Emotion, setEmoji3Emotion] = useState([50]);
  const [emoji3Arousal, setEmoji3Arousal] = useState([50]);

  return (
    <div className={styles.page}>
      <div className="h-full flex flex-col content-center justify-center col-start-1 col-end-1 row-start-1 row-end-2 gap-3">
        <div className="flex gap-3 w-full justify-center">
          <h1 className="text-[3rem]">😀</h1>
          <h1 className="text-[3rem]">➡️</h1>
          <h1 className="text-[3rem]">🖼️</h1>
        </div>

        <div className="h-32 flex flex-row gap-4 text-lg w-screen justify-center">
          <div className="flex flex-row w-1/4 gap-2">
            <EmojiPicker
              selectedEmoji={emoji1}
              emojiList={subject_emojis}
              setEmoji={setEmoji1}
              setEmojiEmotion={setEmoji1Emotion}
              setEmojiArousal={setEmoji1Arousal}
            />
            <div className="flex flex-col w-2/3 justify-center">
              <EmotionSlider
                value={emoji1Emotion}
                defaultValue={[50]}
                onValueChange={setEmoji1Emotion}
              />
              <ArouselSlider
                value={emoji1Arousal}
                defaultValue={[50]}
                onValueChange={setEmoji1Arousal}
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <p className="text-3xl">+</p>
          </div>

          <div className="flex flex-row w-1/4 gap-2">
            <EmojiPicker
              selectedEmoji={emoji2}
              emojiList={action_emojis}
              setEmoji={setEmoji2}
              setEmojiEmotion={setEmoji2Emotion}
              setEmojiArousal={setEmoji2Arousal}
            />
            <div className="flex flex-col w-2/3 justify-center">
              <EmotionSlider
                value={emoji2Emotion}
                defaultValue={[50]}
                onValueChange={setEmoji2Emotion}
              />
              <ArouselSlider
                value={emoji2Arousal}
                defaultValue={[50]}
                onValueChange={setEmoji2Arousal}
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <p className="text-3xl">+</p>
          </div>

          <div className="flex flex-row w-1/4 gap-2">
            <EmojiPicker
              selectedEmoji={emoji3}
              emojiList={subject_emojis}
              setEmoji={setEmoji3}
              setEmojiEmotion={setEmoji3Emotion}
              setEmojiArousal={setEmoji3Arousal}
            />
            <div className="flex flex-col w-2/3 justify-center">
              <EmotionSlider
                value={emoji3Emotion}
                defaultValue={[50]}
                onValueChange={setEmoji3Emotion}
              />
              <ArouselSlider
                value={emoji3Arousal}
                defaultValue={[50]}
                onValueChange={setEmoji3Arousal}
              />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center content-center"
          onClick={() => {
            setLoading(true);
            handleGenerate();
          }}
        >
          <button className="bg-green-200 rounded-full text-white w-16 h-16 hover:bg-green-400 transition-all duration-300 hover:w-20 hover:h-20">
            <span className="text-black"> = </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          {loading && (
            <div className="spinner">
              <div className="spinnerin"></div>
            </div>
          )}
          {imageUrl && (
            <div className="w-64 h-64 rounded-lg">
              <img src={imageUrl} onLoad={() => setLoading(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
