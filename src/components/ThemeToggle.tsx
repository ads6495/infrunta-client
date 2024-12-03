import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Theme toggle component that switches between light and dark modes.
 * Persists theme preference in localStorage.
 * 
 * @component
 * @returns {JSX.Element} A button that toggles between light and dark themes
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  /**
   * Toggles the theme between light and dark modes
   * Updates localStorage and document attributes
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}
