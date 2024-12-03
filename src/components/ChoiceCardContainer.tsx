import { useState } from 'react';
import { ChoiceCard } from './ChoiceCard';
import { ChoiceCard as ChoiceCardType } from '../types';

interface MultipleChoiceProps {
  choices: ChoiceCardType[];
  onAnswer: (isCorrect: boolean) => void;
}

/**
 * Container component for multiple choice questions.
 * Manages the selection state and displays multiple choice cards.
 * 
 * @component
 * @param {Object} props
 * @param {ChoiceCardType[]} props.choices - Array of choice options to display
 * @param {Function} props.onAnswer - Callback function triggered when an answer is selected
 * @returns {JSX.Element} A grid of choice cards
 */
export function MultipleChoice({ choices, onAnswer }: MultipleChoiceProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedChoice, setSelectedChoice] = useState<ChoiceCardType | null>(null);

  const handleSelect = (choice: ChoiceCardType) => {
    setSelectedChoice(choice);
    onAnswer(choice.isCorrect);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {choices.map((choice) => (
          <ChoiceCard
            key={choice.id}
            choice={choice}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}