import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="h-[72px] bg-secondary flex items-center justify-between px-4">
      <h1 className="text-foreground">Header</h1>
      <ThemeToggle />
    </header>
  );
}
