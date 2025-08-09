"use client"

import styles from "./page.module.css";
import * as React from 'react';
import EmojiPicker from '@/components/EmojiPicker';

export default function Home() {  

  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];


  return (
    <div className={styles.page}>
      <div className="h-32 flex flex-row gap-4 text-lg">
        <div onClick={() => {}}>
          <div>
            <EmojiPicker emojis={object_emojis} />
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <p className="text-3xl">+</p>
        </div> 

        <div>
          <div>
            <EmojiPicker emojis={action_emojis} />
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <p className="text-3xl">+</p>
        </div>
      
        <div>
          <div>
            🟩
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
