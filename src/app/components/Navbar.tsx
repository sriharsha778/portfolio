"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const availableThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "dracula",
  "cmyk",
  "autumn",
  "night",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [theme, setTheme] = useState("night");

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  // Handle theme change
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setShowThemeModal(false);
  };

  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold text-primary">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base-content hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowThemeModal(true)}
            className="btn btn-sm btn-outline"
            aria-label="Change Theme"
          >
            Theme
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-2 items-center">
          <button
            onClick={() => setShowThemeModal(true)}
            className="btn btn-ghost btn-square"
            aria-label="Change Theme"
          >
            <Sun className="hidden dark:inline-block" size={20} />
            <Moon className="inline-block dark:hidden" size={20} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-square text-base-content"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-300 transition-all duration-200 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-base-content hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowThemeModal(true)}
            className="btn btn-sm btn-outline mt-2"
          >
            Change Theme
          </button>
        </div>
      )}

      {/* Modal */}
      {showThemeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">Choose a Theme</h3>
            <div className="grid grid-cols-2 gap-3">
              {availableThemes.map((t) => (
                <button
                  key={t}
                  onClick={() => changeTheme(t)}
                  className="btn btn-sm btn-outline"
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowThemeModal(false)}
              className="btn btn-sm mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
