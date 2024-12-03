import AudioGrid from "../components/AudioGrid";
import { LessonCard } from "../components/LessonCard";
import { QuizPage } from "../components/QuizPage";
import { LessonCard as LessonCardType } from "../types";

export function CourseOverview() {
  const mockLessons: LessonCardType[] = [
    {
      id: "1",
      title: "Basic Greetings",
      description: "Learn essential greetings and introductions",
      level: "beginner",
      duration: 15,
      wordsCount: 20,
    },
    {
      id: "2",
      title: "Numbers & Counting",
      description: "Master numbers from 1-100",
      level: "beginner",
      duration: 20,
      wordsCount: 30,
    },
    {
      id: "3",
      title: "Daily Conversations",
      description: "Practice common phrases used in everyday situations",
      level: "intermediate",
      duration: 25,
      wordsCount: 40,
    },
  ];
  const handleLessonClick = (lesson: LessonCardType) => {
    console.log("Starting lesson:", lesson.title);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Course Overview</h1>
      <div className="grid grid-cols-1 gap-4">
        {mockLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onClick={handleLessonClick}
          />
        ))}
      </div>
      <QuizPage />
      <AudioGrid />
    </div>
  );
}
