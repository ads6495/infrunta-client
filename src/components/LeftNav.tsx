"use client";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function LeftNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <nav
      className={`bg-background border-r border-secondary transition-all ${isNavOpen ? "w-64" : "w-16"}`}
    >
      <button
        className="w-full p-2 text-foreground hover:bg-secondary"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <CiMenuFries size={24} /> : <CiMenuBurger size={24} />}
      </button>
      {isNavOpen && (
        <ul className="p-4 text-foreground">
          <li className="mb-2 hover:text-primary">Nav Item 1</li>
          <li className="mb-2 hover:text-primary">Nav Item 2</li>
          <li className="mb-2 hover:text-primary">Nav Item 3</li>
        </ul>
      )}
    </nav>
  );
}