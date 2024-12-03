import { AudioPlayer } from "./AudioPlayer"; // Adjust the import path as necessary

const AudioGrid = () => {
  const audioData = [
    {
      text: "Good Morning!",
      targetText: "Bună dimineața",
      audioSrc: "path/to/audio1.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Good Afternoon",
      targetText: "Bună Ziua",
      audioSrc: "path/to/audio2.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Good Evening",
      targetText: "Bună Seara",
      audioSrc: "path/to/audio3.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Good Night",
      targetText: "Noapte Bună",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Bună!",
      targetText: "Hi!",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: " Salut!",
      targetText: "Hi!",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Pa!",
      targetText: "Bye",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: " O zi bună!",
      targetText: "Have a good day!",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Pe curând!",
      targetText: "See you soon!",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    {
      text: "Pe mâine!",
      targetText: "See you tomorrow!",
      audioSrc: "path/to/audio4.mp3",
      targetAudioSrc: "path/to/audio1.mp3",
    },
    // Add more items as needed
  ];

  return (
    <div>
      {audioData.map((item, index) => (
        <AudioPlayer
          key={index}
          text={item.text}
          audioSrc={item.audioSrc}
          targetText={item.targetText}
          targetAudioSrc={item.targetAudioSrc}
        />
      ))}
    </div>
  );
};

export default AudioGrid;
