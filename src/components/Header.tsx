import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router";

/**
 * Header component that displays the application navigation and theme toggle.
 * Contains the app title, navigation links, and theme toggle button.
 * 
 * @component
 * @returns {JSX.Element} The header bar with navigation elements
 */
export default function Header() {
  return (
    <header className="h-[72px] bg-secondary flex items-center justify-between px-4 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Infrunta</h1>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/course" end>
        Course
      </NavLink>
      <ThemeToggle />
    </header>
  );
}
