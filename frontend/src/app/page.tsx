"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home");

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
      <main className="flex-grow bg-custom-black text-white">

        {/* About Preview */}
        <section className="py-12 px-4 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet the Band</h2>
          <p className="text-lg max-w-2xl mx-auto">Kessoku Band is more than just a group — it's a journey of friendship, anxiety, and explosive music. Join Hitori Gotoh and the gang as they turn social awkwardness into stage power.</p>
        </section>

        {/* Featured Media */}
        <section id="Media" className="py-12 bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Media</h2>
          <div className="flex justify-center">
            <iframe
              className="w-full max-w-xl aspect-video rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/GIu_mHpJ2zQ"
              title="Kessoku Band Live Performance"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Tour Dates Preview */}
        <section className="py-12 px-4 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Upcoming Tours</h2>
          <p className="mb-6">Don't miss out — Kessoku Band is coming to a city near you!</p>
          <a href="#Tour Dates" className="px-5 py-3 bg-yellow-500 rounded-md text-black font-semibold hover:bg-yellow-600 transition">View Tour Dates</a>
        </section>
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
              className="nav-link hover:text-blue-400"
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
