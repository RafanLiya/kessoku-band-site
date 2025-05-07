"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "Gallery", "Shop", "User Profile", "Feedback", "Sitemap", "Team"];

  return (
    <div>
      {/* Header with centered logo */}
      <header className="my-header flex justify-center shadow-md p-4 bg-custom-black">
        <Image
          src="/header_logo.png"
          alt="Header Logo"
          width={100}
          height={100}
          priority
        />
      </header>

      {/* Navigation bar centered below header */}
      <nav className="nav-bar p-4 bg-custom-black">
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
