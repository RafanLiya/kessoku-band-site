// components/Header.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About The Band", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Merch", href: "/merch" },
  { label: "Tours", href: "/tours" },
  { label: "Fan Zone", href: "/fan-zone" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="bg-custom-black">
      <header className="my-header flex justify-center items-center gap-6 shadow-md p-3">
        <Link href="/">
          <Image
            src="/header_logo.png"
            alt="Header Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </header>

      <nav className="nav-bar p-2">
        <ul className="flex justify-center space-x-6 text-white font-medium">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link ${activeLink === label ? "active" : ""}`}
                onClick={() => setActiveLink(label)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
