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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  // Handle theme change

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
        </div>
      </div>

      {/* Mobile Nav Links */}
    </nav>
  );
}
