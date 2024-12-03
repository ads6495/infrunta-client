import { ChoiceCardProps } from "../types";

/**
 * A card component that displays a quiz choice with an image and text.
 * Handles audio playback and selection events.
 * 
 * @component
 * @param {Object} props
 * @param {ChoiceCardType} props.choice - The choice data containing text, image, and audio URLs
 * @param {Function} props.onSelect - Callback function triggered when the card is selected
 * @returns {JSX.Element} A clickable card displaying the choice
 */
export function ChoiceCard({ choice, onSelect }: ChoiceCardProps) {
  /**
   * Plays the audio associated with the choice
   */
  const playAudio = () => {
    const audio = new Audio(choice.audioUrl);
    audio.play();
  };

  /**
   * Handles the click event on the card
   * Plays audio and triggers the selection callback
   */
  const handleClick = () => {
    playAudio();
    onSelect(choice);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
    >
      <div className="flex flex-col items-center gap-3">
        <img
          src={choice.imageUrl}
          alt={choice.text}
          className="w-32 h-32 object-cover rounded-lg bg-gray-100"
        />
        <p className="text-lg font-medium text-gray-900">{choice.text}</p>
      </div>
    </div>
  );
}
