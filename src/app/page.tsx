"use client"

import styles from "./page.module.css";
import { useState } from "react";
import EmojiPicker from '@/components/EmojiPicker';
import React from "react";

export default function Home() {

  const [loading, setLoading] = React.useState(false);
  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    const response = await fetch('/api/image', {
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
        objectArousal: emoji3Arousal
      })
    });

    console.log(response);
    const url = await response.json();
    console.log(url);
    setImageUrl(url);
  }

  const [emoji1, setEmoji1] = useState<string>(object_emojis[0]);
  const [emoji1Emotion, setEmoji1Emotion] = useState(50);
  const [emoji1Arousal, setEmoji1Arousal] = useState(50);
  const [emoji2, setEmoji2] = useState<string>(action_emojis[0]);
  const [emoji2Emotion, setEmoji2Emotion] = useState(50);
  const [emoji2Arousal, setEmoji2Arousal] = useState(50);
  const [emoji3, setEmoji3] = useState<string>(object_emojis[1]);
  const [emoji3Emotion, setEmoji3Emotion] = useState(50);
  const [emoji3Arousal, setEmoji3Arousal] = useState(50);

  return (
    <div className={styles.page}>
      <div className="h-32 flex flex-row gap-10 text-lg">
        <div onClick={() => { }}>
          <div>
            <EmojiPicker selectedEmoji={emoji1} emojiList={object_emojis} setEmoji={setEmoji1} />
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <p className="text-3xl">+</p>
        </div>

        <div>
          <div>
            <EmojiPicker selectedEmoji={emoji2} emojiList={action_emojis} setEmoji={setEmoji2} />
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <p className="text-3xl">+</p>
        </div>

        <div className="mr">
          <div>
            <EmojiPicker selectedEmoji={emoji3} emojiList={action_emojis} setEmoji={setEmoji3} />
          </div>
        </div>

        <div className="flex items-center" onClick={() => { setLoading(true); handleGenerate(); }}>
            <button className="bg-green-200 rounded-full text-white w-16 h-16 hover:bg-green-400 transition-all duration-300 hover:w-20 hover:h-20">
              <span className="text-black"> = </span>
            </button>
          </div>
      </div>

      <div className="flex flex-col items-center">
        <div> 
          {
            loading &&
            <div className="spinner">
              <div className="spinnerin"></div>
            </div>
          }
          {loading && imageUrl && 
            <div className="w-64 h-64 rounded-lg">
              <img src={imageUrl} onLoad={() => setLoading(false)}/>
            </div>
          }
        </div>

        <div>
          {/* Webcam */}
        </div>
      </div>

    </div>
  );
}
