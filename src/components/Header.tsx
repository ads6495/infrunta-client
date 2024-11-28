import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="h-[72px] bg-secondary flex items-center justify-between px-4 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Infrunta</h1>
      <ThemeToggle />
    </header>
  );
}
