import { useState } from "react";
import "./styles.css";

export function SentenceExercise({words, targetSentence}: {words: string[], targetSentence: string}) {
  const [userSentence, setUserSentence] = useState([]);



  const handleDrop = (word) => {
    console.log("Word dropped:", word);
    if (!userSentence.includes(word)) {
      setUserSentence([...userSentence, word]);
    }
  };

  const checkAnswer = () => {
    const isCorrect = userSentence.join(" ") === targetSentence;
    if (isCorrect) {
      alert("Correct!");
    } else {
      alert("Try again!");
    }
    setUserSentence([]); // Clear the user's sentence on incorrect answer
  };

  return (
    <div className="exercise-container">
      <h2>Arrange the words to form the correct sentence:</h2>
      <div 
        className="target-sentence" 
        onDrop={(e) => {
          e.preventDefault();
          const word = e.dataTransfer.getData("text/plain");
          handleDrop(word);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        {userSentence.length > 0
          ? userSentence.join(" ")
          : "____ ____ ____ ____"}
      </div>
      <div className="word-bank">
        {words.map((word) => (
          <div
            key={word}
            className="word"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", word)}
          >
            {word}
          </div>
        ))}
      </div>
      <button onClick={checkAnswer}>Check Answer</button>
    </div>
  );
}
