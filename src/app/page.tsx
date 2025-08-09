"use client"

import styles from "./page.module.css";
import * as React from 'react';
import EmojiPicker from '@/components/EmojiPicker';

export default function Home() {  

  const [loading, setLoading] = React.useState(false);

  const object_emojis = ["🚃", "👨", "🐕", "✈️", "🌮", "📕"];
  const action_emojis = ["🏃‍➡️", "🏊", "🚶‍♂️", "🤣"];

  // React.useEffect(async () => {
  //   const response = await fetch('/api/image', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({})
  //   })
  // }, [loading==true]);

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

        {loading ? (
          <div className="flex items-center">
            <div className="spinner">
              <div className="spinnerin"></div>
            </div>
          </div>
        ) : (
          <div className="flex items-center" onClick={() => setLoading(true)}>
            <button className="bg-green-200 rounded-full text-white w-16 h-16 hover:bg-green-400 transition-colors duration-300">
            <span className="text-black"> = </span>
            </button>
          </div>
        )}

      </div>

      <div className="flex flex-col items-center">
        <div> 
          {/* Open AI image */}
        </div>

        <div>
          {/* Webcam */}
        </div>
      </div>

    </div>
  );
}
