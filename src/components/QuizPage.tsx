import { MultipleChoice } from './ChoiceCardContainer';

export function QuizPage() {
  const mockChoices = [
    {
      id: '1',
      text: 'Apple',
      imageUrl: '/images/apple.jpg', // Empty for now
      audioUrl: '/audio/apple.mp3', // Empty for now
      isCorrect: true,
    },
    {
      id: '2',
      text: 'Banana',
      imageUrl: '/images/banana.jpg',
      audioUrl: '/audio/banana.mp3',
      isCorrect: false,
    },
    {
      id: '3',
      text: 'Orange',
      imageUrl: '/images/orange.jpg',
      audioUrl: '/audio/orange.mp3',
      isCorrect: false,
    },
  ];

  const handleAnswer = (isCorrect: boolean) => {
    console.log('Answer is:', isCorrect ? 'correct' : 'incorrect');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Select the correct answer
      </h1>
      <MultipleChoice choices={mockChoices} onAnswer={handleAnswer} />
    </div>
  );
}