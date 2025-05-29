"use client";

import { useState } from "react";

export default function FanZone() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handlePost = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, newMessage.trim()]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-pink-100 via-white to-pink-50 flex flex-col gap-10">
      

      {/* Fan Art Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Fan Art Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Placeholder images */}
          {["art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg"].map((src, i) => (
            <img
              key={i}
              src={`/images/fanart/${src}`}
              alt={`Fan Art ${i + 1}`}
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          ))}
        </div>
      </section>

      
      
    </div>
  );
}
