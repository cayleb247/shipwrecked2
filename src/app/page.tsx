"use client"

import styles from "./page.module.css";
import * as React from 'react';
import EmojiPicker from '@/components/EmojiPicker';

export default function Home() {  

  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];


  return (
    <div className={styles.page}>
      <div className="flex flex-row gap-4 text-lg">
        <div className={styles.emojiContainer} onClick={() => {}}>
          <div className={styles.emojiBox}>
            <EmojiPicker emojis={object_emojis} />
          </div>
        </div>
        <p>+</p>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiBox}>
            <EmojiPicker emojis={action_emojis} />
          </div>
        </div>
        <div className="items-center h-full">
          <p className="text-3xl">+</p>
        </div>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiBox}>
            🟩
          </div>
        </div>

        <div>
          <button className="bg-green-200 rounded-full text-white w-16 h-16 hover:">
            <span className="text-black"> = </span>
          </button>
        </div>
      </div>

      
    </div>
  );
}
