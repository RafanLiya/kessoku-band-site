"use client";

import Image from "next/image";
import { useState } from "react";

export default function Media() {
    const [activeLink, setActiveLink] = useState("Media");
    
      const navItems = [
        { label: "Home", href: "/" },
        { label: "About The Band", href: "/about" },
        { label: "Media", href: "/media" },
        { label: "Merch", href: "/merch" },
        { label: "Tour Dates", href: "/tours" },
        { label: "Fan Zone", href: "/fan-zone" },
        { label: "Support", href: "/support" },
      ];
      
    
      return (
        <div className="min-h-screen flex flex-col">
          {/* Header + Navbar wrapper */}
          <div className="bg-custom-black">
            {/* Header */}
            <header className="my-header flex justify-center items-center gap-6 shadow-md p-3">
              <a href="/">
                <Image
                  src="/header_logo.png"
                  alt="Header Logo"
                  width={100}
                  height={100}
                  priority
                />
              </a>
            </header>
      
            {/* Navigation bar */}
            <nav className="nav-bar p-2">
              <ul className="flex justify-center space-x-6 text-white font-medium">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`nav-link ${activeLink === label ? "active" : ""}`}
                    onClick={() => setActiveLink(label)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              </ul>
            </nav>
          </div>
      
          {/* Main content */}
          <main className="flex-grow text-white">
    
          </main>
    
      
          {/* Footer */}
          <footer className="bg-custom-black text-white p-4 mt-auto">
            <div className="flex flex-col items-center space-y-2">
              <p className="font-semibold">Follow Us On:</p>
              <div className="flex space-x-6 p-2">
                <a
                  href="https://www.youtube.com/channel/UC6IhDHJbJUoRJGUPnlh5GRQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-red-500"
                >
                  YouTube
                </a>
                <a
                  href="https://twitter.com/daily_bocchi?lang=da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  X
                </a>
                <a
                  href="https://www.instagram.com/bocchi.daily/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-pink-400"
                >
                  Instagram
                </a>
                <a
                  href="https://open.spotify.com/artist/2nvl0N9GwyX69RRBMEZ4OD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-green-400"
                >
                  Spotify
                </a>
                <a
                  href="https://soundcloud.com/kessokuband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-orange-400"
                >
                  SoundCloud
                </a>
              </div>
            </div>
          </footer>
    
        </div>
      );
}