export interface LessonCard {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number; // in minutes
  wordsCount: number;
}

export interface User {
  name: string;
  email: string;
  currentLanguage: Language;
  streak: number;
  dailyGoal: number;
  progress: number;
}

export interface Language {
  id: string;
  name: string;
  code: string;
  flag: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}