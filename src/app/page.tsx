"use client"

import styles from "./page.module.css";
import { useState } from "react";
import EmojiPicker from '@/components/EmojiPicker';

export default function Home() {
  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];

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
      <div className="h-32 flex flex-row gap-4 text-lg">
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

        <div>
          <div>
            <EmojiPicker selectedEmoji={emoji3} emojiList={action_emojis} setEmoji={setEmoji3} />
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-green-200 rounded-full text-white w-16 h-16 hover:bg-green-400 transition-colors duration-300">
            <span className="text-black"> = </span>
          </button>
        </div>
      </div>

    </div>
  );
}
