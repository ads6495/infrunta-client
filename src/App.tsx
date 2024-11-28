// import LeftNavBar from "./components/LeftNav";
import Header from "./components/Header";
import { LessonCard } from "./components/LessonCard";
import { LessonCard as LessonCardType } from "./types";

function App() {
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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Nav */}
        {/* <LeftNavBar /> */}

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="grid gap-6">
            {mockLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={handleLessonClick}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
