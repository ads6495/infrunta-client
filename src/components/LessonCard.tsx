import { Clock, BookOpen } from "lucide-react";
import { LessonCard as LessonCardType } from "../types/index.ts";

interface LessonCardProps {
  lesson: LessonCardType;
  onClick: (lesson: LessonCardType) => void;
}

/**
 * Card component that displays lesson information.
 * Shows title, difficulty level, description, duration, and word count.
 * 
 * @component
 * @param {Object} props
 * @param {LessonCardType} props.lesson - The lesson data to display
 * @param {Function} props.onClick - Callback function triggered when the card is clicked
 * @returns {JSX.Element} A card displaying lesson information
 */
export function LessonCard({ lesson, onClick }: LessonCardProps) {
  /**
   * Object mapping difficulty levels to their respective color classes
   */
  const levelColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  return (
    <div
      onClick={() => onClick(lesson)}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            levelColors[lesson.level]
          }`}
        >
          {lesson.level}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{lesson.description}</p>

      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{lesson.duration} min</span>
        </div>
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1" />
          <span>{lesson.wordsCount} words</span>
        </div>
      </div>
    </div>
  );
}
