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
    <div className="min-h-screen flex flex-col">
      {/* Header + Navbar wrapper */}
      <div className="bg-custom-black">
        {/* Header */}
        <header className="my-header flex justify-center items-center gap-6 shadow-md p-3">
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
  
        {/* Navigation bar */}
        <nav className="nav-bar p-2">
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
  
      {/* Main content */}
      <main className="flex-grow p-4 text-white">
        {/* Content goes here */}
      </main>
  
      {/* Footer */}
      <footer className="bg-custom-black text-white p-4 mt-auto">
        <div className="flex flex-col items-center space-y-2">
          <p className="font-semibold">Follow Us:</p><br></br>
          <div className="flex space-x-6 p-2">
            <a
              href="https://www.youtube.com/channel/UCZ5lTuGq1EhF7Yk87gN4mNQ" // Replace with official or relevant channel
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-500"
            >
              YouTube
            </a>
            <a
              href="https://twitter.com/bocchi_anime" // Replace with real or fan page
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400"
            >
              Twitter / X
            </a>
            <a
              href="https://www.instagram.com/bocchi_the_rock" // Replace with actual if available
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-pink-400"
            >
              Instagram
            </a>
            <a
              href="https://myanimelist.net/anime/52958/Bocchi_the_Rock" // Better Wiki-style link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-yellow-400"
            >
              MyAnimeList
            </a>
            <a
              href="https://open.spotify.com/artist/3s6Xo0G3uFCm5bJ2z1yYp7" // Example Spotify artist link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-green-400"
            >
              Spotify
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
  
}
