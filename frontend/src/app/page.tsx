"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    "Home",
    "About The Band",
    "Media",
    "Merch",
    "Tour Dates",
    "Fan Zone",
    "Support",
  ];

  return (
    <div>
      {/* Header with centered content and spacing between images */}
      <header className="my-header flex justify-center items-center gap-6 shadow-md p-3 bg-custom-black">
        <a href="#">
        <Image
          src="/header_logo.png"
          alt="Header Logo"
          width={100}
          height={100}
          priority
        />
        </a>
      </header>

      {/* Navigation bar centered below header */}
      <nav className="nav-bar p-2 bg-custom-black">
        <ul className="flex justify-center space-x-6 text-white font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`nav-link ${activeLink === item ? "active" : ""}`}
                onClick={() => setActiveLink(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
