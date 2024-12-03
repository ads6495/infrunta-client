import React from "react";
import { Play } from "lucide-react"; // Import the Play icon from lucide-react

export const AudioPlayer = ({
  text,
  targetText,
  audioSrc,
  targetAudioSrc,
}: {
  text: string;
  audioSrc: string;
  targetAudioSrc: string;
  targetText: string;
}) => {
  const targetAudioRef = React.useRef(new Audio(targetAudioSrc));
  const audioSrcRef = React.useRef(new Audio(audioSrc));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{text}</p>
        <button
          onClick={() => {
            audioSrcRef.current.play();
          }}
        >
          <Play />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{targetText}</p>
        {/* wrap the Play icon in a button that plays the targetAudioSrc */}
        <button
          onClick={() => {
            targetAudioRef.current.play();
          }}
        >
          <Play />
        </button>
      </div>
    </div>
  );
};
