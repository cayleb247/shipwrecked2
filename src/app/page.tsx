"use client"

import styles from "./page.module.css";
import * as React from 'react';
import ShowObjects from "./components/showObjects";

export default function Home() {
  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = React.useState(0);
  const [actionEmojiIndex, setActionEmojiIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prev) => (prev + 1) % object_emojis.length);
    }, 500);

    return () => clearInterval(interval);
  }, [object_emojis.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActionEmojiIndex((prev) => (prev + 1) % action_emojis.length);
    }, 500);

    return () => clearInterval(interval);
  }, [action_emojis.length]);

  return (
    <div className={styles.page}>
      <div className="emoji-div">
        <div className="emoji-container" onClick={() => {ShowObjects}}>
          <div className="emoji-box">
            {object_emojis[currentEmojiIndex]}
          </div>
        </div>

        <div className="emoji-container">
          <div className="emoji-box">
            {action_emojis[actionEmojiIndex]}
          </div>
        </div>

        <div className="emoji-container">
          <div className="emoji-box">
            🟩
          </div>
        </div>

      </div>
      
    </div>
  );
}
