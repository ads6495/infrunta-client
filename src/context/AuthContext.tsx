import React, { createContext, useContext, useState } from "react";
import { User, AuthState } from "../types";

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = async (email: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      name: "John Doe",
      email: email,
      currentLanguage: { id: "1", name: "Spanish", code: "es", flag: "🇪🇸" },
      streak: 5,
      dailyGoal: 30,
      progress: 65,
    };

    setAuth({
      isAuthenticated: true,
      user: mockUser,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
