"use client"

import styles from "./page.module.css";
import * as React from 'react';
import EmojiPicker from '@/components/EmojiPicker';

export default function Home() {
  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];

  return (
    <div className={styles.page}>
      <div className={styles.emojiDiv}>
        <div className={styles.emojiContainer} onClick={() => { }}>
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
        <p>+</p>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiBox}>
            🟩
          </div>
        </div>

      </div>

    </div>
  );
}
